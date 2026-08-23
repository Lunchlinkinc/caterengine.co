"use client";
import { FormEvent, MouseEvent, useState } from "react";
import { readAttribution } from "../components/AttributionTracker";

const phoneDigits = (value: string) => value.replace(/\D/g, "").replace(/^1(?=\d{10}$)/, "").slice(0, 10);
const plausiblePhone = (value: string) => {
  const digits = phoneDigits(value);
  return /^[2-9]\d{2}[2-9]\d{6}$/.test(digits) && !/(\d)\1{6,}/.test(digits) && !["1234567890", "9876543210"].includes(digits) && digits.slice(3, 6) !== "555";
};
const formatPhone = (value: string) => {
  const digits = phoneDigits(value);
  if (digits.length < 4) return digits;
  if (digits.length < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
};

export function ApplicationForm() {
  const [step, setStep] = useState(1);
  const [state, setState] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [phone, setPhone] = useState("");

  function nextStep(e: MouseEvent<HTMLButtonElement>) {
    const form = e.currentTarget.form;
    if (!form) return;
    const controls = form.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>(`[data-step="${step}"] input, [data-step="${step}"] select, [data-step="${step}"] textarea`);
    for (const control of controls) if (!control.reportValidity()) return;
    setStep((current) => Math.min(3, current + 1));
  }

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const phoneInput = e.currentTarget.elements.namedItem("phone") as HTMLInputElement;
    phoneInput.setCustomValidity(plausiblePhone(phone) ? "" : "Enter a valid US or Canadian phone number.");
    if (!e.currentTarget.reportValidity()) return;
    setState("sending");
    const payload = { ...Object.fromEntries(new FormData(e.currentTarget).entries()), ...readAttribution() };
    try {
      const response = await fetch("/api/applications", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(payload) });
      if (!response.ok) throw new Error();
      setState("success");
      e.currentTarget.reset();
    } catch { setState("error"); }
  }

  if (state === "success") return <div className="form-success"><span>✓</span><h2>Application received.</h2><p>Thank you. We’ll review your restaurant and follow up if there is a potential fit.</p><button onClick={() => { setState("idle"); setStep(1); setPhone(""); }}>Submit another application</button></div>;

  return <form className="real-form" onSubmit={submit} noValidate>
    <div className="form-progress" aria-label={`Step ${step} of 3`}><div><span style={{ width: `${step * 33.333}%` }} /></div><p>Step {step} of 3 · {step === 1 ? "About you" : step === 2 ? "Your restaurant" : "Partnership fit"}</p></div>
    <input className="form-trap" name="companyFax" tabIndex={-1} autoComplete="off" aria-hidden="true" />
    <section className={step === 1 ? "form-step active" : "form-step"} data-step="1" aria-hidden={step !== 1}>
      <h2>Let’s start with you.</h2><p className="form-intro">We use these details only to discuss your application.</p>
      <label>Your name<input required name="name" autoComplete="name" minLength={2} maxLength={80} placeholder="First and last name" /></label>
      <label>Business email<input required type="email" name="email" autoComplete="email" maxLength={120} placeholder="you@restaurant.com" /></label>
      <label>Phone number<input required type="tel" name="phone" autoComplete="tel" inputMode="tel" value={phone} placeholder="(416) 234-5678" onChange={(e) => { setPhone(formatPhone(e.target.value)); e.target.setCustomValidity(""); }} onBlur={(e) => e.target.setCustomValidity(plausiblePhone(phone) ? "" : "Enter a valid US or Canadian phone number.")} /></label>
      <button className="primary-btn form-submit" type="button" onClick={nextStep}>Continue →</button>
    </section>
    <section className={step === 2 ? "form-step active" : "form-step"} data-step="2" aria-hidden={step !== 2}>
      <h2>Tell us about the restaurant.</h2><p className="form-intro">This helps us understand your market and operating model.</p>
      <label>Restaurant name<input required name="restaurant" minLength={2} maxLength={100} placeholder="Restaurant or group name" /></label>
      <div className="form-row"><label>City<input required name="city" autoComplete="address-level2" minLength={2} maxLength={60} placeholder="City" /></label><label>State or province<input required name="state" autoComplete="address-level1" minLength={2} maxLength={40} placeholder="State / province" /></label></div>
      <label>Restaurant website or ordering link<input required type="url" name="website" maxLength={200} placeholder="https://yourrestaurant.com" /></label>
      <div className="form-actions"><button type="button" className="form-back" onClick={() => setStep(1)}>← Back</button><button className="primary-btn" type="button" onClick={nextStep}>Continue →</button></div>
    </section>
    <section className={step === 3 ? "form-step active" : "form-step"} data-step="3" aria-hidden={step !== 3}>
      <h2>What does growth look like?</h2><p className="form-intro">Two quick questions help us evaluate partnership fit.</p>
      <div className="form-row"><label>Monthly catering revenue<select required name="revenue" defaultValue=""><option value="" disabled>Select range</option><option>Not offering catering yet</option><option>Under $5,000</option><option>$5,000–$15,000</option><option>$15,000–$30,000</option><option>$30,000–$75,000</option><option>$75,000+</option></select></label><label>Number of locations<select required name="locations" defaultValue=""><option value="" disabled>Select</option><option>1</option><option>2–4</option><option>5–10</option><option>11+</option></select></label></div>
      <label>What would make this partnership successful?<textarea required name="goals" rows={4} minLength={20} maxLength={1000} placeholder="Tell us what you want to improve or achieve…" /></label>
      <label className="consent"><input required type="checkbox" name="consent" value="yes"/><span>I agree that CaterEngine may contact me about this application and accept the <a href="/privacy">privacy policy</a>.</span></label>
      <div className="form-actions"><button type="button" className="form-back" onClick={() => setStep(2)}>← Back</button><button className="primary-btn" disabled={state === "sending"}>{state === "sending" ? "Submitting…" : "Submit application →"}</button></div>
      {state === "error" && <p className="form-error" role="alert">We couldn’t send your application. Check your details and try again, or email getcaterengine@gmail.com.</p>}
    </section>
  </form>;
}
