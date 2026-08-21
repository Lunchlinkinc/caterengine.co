export async function POST(request:Request){
 try{
  const body=await request.json() as Record<string,string>;
  const required=["name","email","phone","restaurant","city","state","revenue","locations","goals","consent"];
  if(required.some(k=>!body[k]?.trim()))return Response.json({error:"Please complete all required fields."},{status:400});
  if(!/^\S+@\S+\.\S+$/.test(body.email))return Response.json({error:"Please enter a valid email."},{status:400});
  const form=new FormData();
  form.set("_subject",`New CaterEngine application: ${body.restaurant.trim()}`); form.set("_template","table"); form.set("_captcha","false");
  form.set("Name",body.name.trim()); form.set("Email",body.email.trim().toLowerCase()); form.set("Phone",body.phone.trim());
  form.set("Restaurant",body.restaurant.trim()); form.set("Location",`${body.city.trim()}, ${body.state.trim()}`); form.set("Website",body.website?.trim()||"Not provided");
  form.set("Revenue",body.revenue.trim()); form.set("Locations",body.locations.trim()); form.set("Goals",body.goals.trim());
  const emailResponse=await fetch("https://formsubmit.co/getcaterengine@gmail.com",{method:"POST",headers:{Accept:"application/json"},body:form});
  if(!emailResponse.ok)throw new Error(`Application email failed with status ${emailResponse.status}`);
  return Response.json({ok:true,emailForwarded:true},{status:201});
 }catch(error){console.error("Application submission failed",error);return Response.json({error:"Unable to save application."},{status:500});}
}
