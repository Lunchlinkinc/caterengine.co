"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export type Attribution = {
  source: string;
  firstPage: string;
  lastPage: string;
  referrer: string;
  firstSeenAt: string;
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  utmTerm: string;
  utmContent: string;
};

const FIRST_TOUCH_KEY = "caterengine_first_touch";
const CURRENT_PAGE_KEY = "caterengine_current_page";
const PREVIOUS_PAGE_KEY = "caterengine_previous_page";

function sourceLabel(referrer: string, utmSource: string, utmMedium: string) {
  if (utmSource) return [utmSource, utmMedium].filter(Boolean).join(" / ");
  if (!referrer) return "Direct / unknown";
  try {
    const host = new URL(referrer).hostname.replace(/^www\./, "");
    if (/google\./i.test(host)) return "Google organic";
    if (/bing\./i.test(host)) return "Bing organic";
    return `Referral: ${host}`;
  } catch { return "Referral"; }
}

export function readAttribution(): Attribution {
  const empty: Attribution = { source: "Direct / unknown", firstPage: "/", lastPage: "/apply", referrer: "None", firstSeenAt: "", utmSource: "", utmMedium: "", utmCampaign: "", utmTerm: "", utmContent: "" };
  if (typeof window === "undefined") return empty;
  try {
    const first = JSON.parse(localStorage.getItem(FIRST_TOUCH_KEY) || "{}") as Partial<Attribution>;
    return { ...empty, ...first, lastPage: sessionStorage.getItem(PREVIOUS_PAGE_KEY) || first.firstPage || document.referrer || "/apply" };
  } catch { return empty; }
}

export function AttributionTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const query = searchParams.toString();
    const page = `${pathname}${query ? `?${query}` : ""}`;
    const previous = sessionStorage.getItem(CURRENT_PAGE_KEY);
    if (previous && previous !== page) sessionStorage.setItem(PREVIOUS_PAGE_KEY, previous);
    sessionStorage.setItem(CURRENT_PAGE_KEY, page);

    if (!localStorage.getItem(FIRST_TOUCH_KEY)) {
      const utmSource = searchParams.get("utm_source") || "";
      const utmMedium = searchParams.get("utm_medium") || "";
      const referrer = document.referrer || "";
      const first: Attribution = {
        source: sourceLabel(referrer, utmSource, utmMedium), firstPage: page, lastPage: page,
        referrer: referrer || "None", firstSeenAt: new Date().toISOString(), utmSource, utmMedium,
        utmCampaign: searchParams.get("utm_campaign") || "", utmTerm: searchParams.get("utm_term") || "",
        utmContent: searchParams.get("utm_content") || ""
      };
      localStorage.setItem(FIRST_TOUCH_KEY, JSON.stringify(first));
    }
  }, [pathname, searchParams]);

  return null;
}
