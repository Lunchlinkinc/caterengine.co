import { env } from "cloudflare:workers";

const schemaSql = `CREATE TABLE IF NOT EXISTS applications (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  restaurant TEXT NOT NULL,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  website TEXT,
  revenue TEXT NOT NULL,
  locations TEXT NOT NULL,
  goals TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'new',
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
)`;

export async function POST(request:Request){
 try{
  const body=await request.json() as Record<string,string>;
  const required=["name","email","phone","restaurant","city","state","revenue","locations","goals","consent"];
  if(required.some(k=>!body[k]?.trim()))return Response.json({error:"Please complete all required fields."},{status:400});
  if(!/^\S+@\S+\.\S+$/.test(body.email))return Response.json({error:"Please enter a valid email."},{status:400});
  await env.DB.prepare(schemaSql).run();
  await env.DB.prepare("CREATE INDEX IF NOT EXISTS applications_created_at_idx ON applications(created_at)").run();
  const result=await env.DB.prepare(`INSERT INTO applications (name,email,phone,restaurant,city,state,website,revenue,locations,goals) VALUES (?,?,?,?,?,?,?,?,?,?)`).bind(body.name.trim(),body.email.trim().toLowerCase(),body.phone.trim(),body.restaurant.trim(),body.city.trim(),body.state.trim(),body.website?.trim()||null,body.revenue.trim(),body.locations.trim(),body.goals.trim()).run();
  let emailForwarded=false;
  try{
   const form=new FormData();
   form.set("_subject",`New CaterEngine application: ${body.restaurant.trim()}`); form.set("_template","table"); form.set("_captcha","false");
   form.set("Name",body.name.trim()); form.set("Email",body.email.trim().toLowerCase()); form.set("Phone",body.phone.trim());
   form.set("Restaurant",body.restaurant.trim()); form.set("Location",`${body.city.trim()}, ${body.state.trim()}`); form.set("Website",body.website?.trim()||"Not provided");
   form.set("Revenue",body.revenue.trim()); form.set("Locations",body.locations.trim()); form.set("Goals",body.goals.trim());
   const emailResponse=await fetch("https://formsubmit.co/getcaterengine@gmail.com",{method:"POST",headers:{Accept:"application/json"},body:form});
   emailForwarded=emailResponse.ok;
  }catch(error){console.error("Application email forwarding failed",error);}
  return Response.json({ok:true,id:result.meta.last_row_id,emailForwarded},{status:201});
 }catch(error){console.error("Application submission failed",error);return Response.json({error:"Unable to save application."},{status:500});}
}
