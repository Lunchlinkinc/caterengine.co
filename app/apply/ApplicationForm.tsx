"use client";
import { FormEvent, useState } from "react";

export function ApplicationForm(){
 const [state,setState]=useState<"idle"|"sending"|"success"|"error">("idle");
 async function submit(e:FormEvent<HTMLFormElement>){e.preventDefault();setState("sending");const form=new FormData(e.currentTarget);const payload=Object.fromEntries(form.entries());try{const response=await fetch("/api/applications",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(payload)});if(!response.ok)throw new Error();setState("success");e.currentTarget.reset();}catch{setState("error");}}
 if(state==="success")return <div className="form-success"><span>✓</span><h2>Application received.</h2><p>Thank you. We’ll review your restaurant and follow up if there is a potential fit.</p><button onClick={()=>setState("idle")}>Submit another application</button></div>;
 return <form className="real-form" onSubmit={submit}>
   <div className="form-row"><label>Your name<input required name="name" autoComplete="name" /></label><label>Business email<input required type="email" name="email" autoComplete="email" /></label></div>
   <div className="form-row"><label>Phone number<input required type="tel" name="phone" autoComplete="tel" /></label><label>Restaurant name<input required name="restaurant" /></label></div>
   <div className="form-row"><label>City<input required name="city" autoComplete="address-level2" placeholder="Your city" /></label><label>State<input required name="state" autoComplete="address-level1" placeholder="State" /></label></div>
   <label>Restaurant website or ordering link<input type="url" name="website" placeholder="https://" /></label>
   <div className="form-row"><label>Current monthly catering revenue<select required name="revenue" defaultValue=""><option value="" disabled>Select range</option><option>Not offering catering yet</option><option>Under $5,000</option><option>$5,000–$15,000</option><option>$15,000–$30,000</option><option>$30,000–$75,000</option><option>$75,000+</option></select></label><label>Number of locations<select required name="locations" defaultValue=""><option value="" disabled>Select</option><option>1</option><option>2–4</option><option>5–10</option><option>11+</option></select></label></div>
   <label>What would make this partnership successful for you?<textarea required name="goals" rows={4} /></label>
   <label className="consent"><input required type="checkbox" name="consent" value="yes"/><span>I agree that CaterEngine may contact me about this application and accept the <a href="/privacy">privacy policy</a>.</span></label>
   <button className="primary-btn form-submit" disabled={state==="sending"}>{state==="sending"?"Submitting…":"Submit application →"}</button>
   {state==="error"&&<p className="form-error">We couldn’t send your application. Please try again or email getcaterengine@gmail.com.</p>}
 </form>
}
