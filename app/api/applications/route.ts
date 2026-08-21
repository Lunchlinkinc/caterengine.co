export async function POST(request:Request){
 try{
  const body=await request.json() as Record<string,string>;
  const required=["name","email","phone","restaurant","city","state","revenue","locations","goals","consent"];
  if(required.some(k=>!body[k]?.trim()))return Response.json({error:"Please complete all required fields."},{status:400});
  if(!/^\S+@\S+\.\S+$/.test(body.email))return Response.json({error:"Please enter a valid email."},{status:400});
  const form={
   _subject:`New CaterEngine application: ${body.restaurant.trim()}`,_template:"table",_captcha:"false",_replyto:body.email.trim().toLowerCase(),_url:"https://www.caterengine.co/apply",
   Name:body.name.trim(),Email:body.email.trim().toLowerCase(),Phone:body.phone.trim(),Restaurant:body.restaurant.trim(),
   Location:`${body.city.trim()}, ${body.state.trim()}`,Website:body.website?.trim()||"Not provided",Revenue:body.revenue.trim(),Locations:body.locations.trim(),Goals:body.goals.trim()
  };
  const emailResponse=await fetch("https://formsubmit.co/ajax/getcaterengine@gmail.com",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Referer:"https://www.caterengine.co/"},body:JSON.stringify(form)});
  const emailResult=await emailResponse.json().catch(()=>null) as {success?:boolean|string;message?:string}|null;
  if(!emailResponse.ok||emailResult?.success===false||emailResult?.success==="false")throw new Error(`Application email failed (${emailResponse.status}): ${emailResult?.message||"Unknown FormSubmit response"}`);
  return Response.json({ok:true,emailForwarded:true},{status:201});
 }catch(error){console.error("Application submission failed",error);return Response.json({error:"Unable to save application."},{status:500});}
}
