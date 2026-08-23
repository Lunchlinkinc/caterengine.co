export async function POST(request:Request){
 try{
  const body=await request.json() as Record<string,string>;
  if(body.companyFax)return Response.json({ok:true},{status:201});
  const required=["name","email","phone","restaurant","city","state","website","revenue","locations","goals","consent"];
  if(required.some(k=>!body[k]?.trim()))return Response.json({error:"Please complete all required fields."},{status:400});
  if(body.name.trim().length<2||body.name.length>80||body.restaurant.trim().length<2||body.restaurant.length>100||body.city.trim().length<2||body.state.trim().length<2||body.goals.trim().length<20||body.goals.length>1000)return Response.json({error:"Please check the length of your answers."},{status:400});
  if(!/^\S+@\S+\.\S+$/.test(body.email))return Response.json({error:"Please enter a valid email."},{status:400});
  const phone=body.phone.replace(/\D/g,"").replace(/^1(?=\d{10}$)/,"");
  if(!/^[2-9]\d{2}[2-9]\d{6}$/.test(phone)||/(\d)\1{6,}/.test(phone)||["1234567890","9876543210"].includes(phone)||phone.slice(3,6)==="555")return Response.json({error:"Please enter a valid US or Canadian phone number."},{status:400});
  try{const website=new URL(body.website);if(!["http:","https:"].includes(website.protocol)||!website.hostname.includes("."))throw new Error();}catch{return Response.json({error:"Please enter a valid restaurant website."},{status:400});}
  if(body.consent!=="yes")return Response.json({error:"Consent is required."},{status:400});
  const apiKey=process.env.RESEND_API_KEY;
  if(!apiKey)throw new Error("RESEND_API_KEY is not configured");
  const clean=(value:string|undefined)=>String(value||"").replace(/[&<>"']/g,char=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]!));
  const rows=[
   ["Name",body.name],["Email",body.email.toLowerCase()],["Phone",body.phone],["Restaurant",body.restaurant],
   ["Location",`${body.city}, ${body.state}`],["Website",body.website||"Not provided"],["Monthly catering revenue",body.revenue],
   ["Number of locations",body.locations],["Partnership goals",body.goals]
  ];
  const html=`<div style="font-family:Arial,sans-serif;max-width:680px;margin:auto"><h1 style="color:#075985">New CaterEngine restaurant application</h1><table style="border-collapse:collapse;width:100%">${rows.map(([label,value])=>`<tr><th style="text-align:left;padding:12px;border:1px solid #dbeafe;background:#eff6ff;width:34%">${clean(label)}</th><td style="padding:12px;border:1px solid #dbeafe">${clean(value).replace(/\n/g,"<br>")}</td></tr>`).join("")}</table><p style="color:#64748b;font-size:12px">Submitted from caterengine.co</p></div>`;
  const emailResponse=await fetch("https://api.resend.com/emails",{method:"POST",headers:{Authorization:`Bearer ${apiKey}`,"Content-Type":"application/json","User-Agent":"CaterEngine-Website/1.0"},body:JSON.stringify({from:"CaterEngine Website <forms@caterengine.co>",to:["getcaterengine@gmail.com"],reply_to:body.email.trim().toLowerCase(),subject:`New CaterEngine application: ${body.restaurant.trim()}`,html})});
  const emailResult=await emailResponse.json().catch(()=>null) as {id?:string;message?:string}|null;
  if(!emailResponse.ok||!emailResult?.id)throw new Error(`Resend delivery failed (${emailResponse.status}): ${emailResult?.message||"Unknown response"}`);
  return Response.json({ok:true,emailForwarded:true},{status:201});
 }catch(error){console.error("Application submission failed",error);return Response.json({error:"Unable to save application."},{status:500});}
}
