import type { Metadata } from "next";
import { PageShell } from "../components/PageShell";
import { ApplicationForm } from "./ApplicationForm";
export const metadata: Metadata = { title: "Apply for Restaurant Catering Growth Support", description: "Restaurant owners can apply for CaterEngine's catering technology, B2B demand generation, and operating support partnership." };
export default function Apply(){return <PageShell><main><section className="apply-page"><div className="container apply-layout"><div><p className="overline light">Restaurant partnership application</p><h1>Let’s see what catering could become.</h1><p>Complete the form and tell us about your restaurant. We review qualified restaurant operators across the United States.</p><ul><li>10-minute application</li><li>No upfront commitment</li><li>Reviewed by the CaterEngine team</li></ul></div><ApplicationForm/></div></section></main></PageShell>}
