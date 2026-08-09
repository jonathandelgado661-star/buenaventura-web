"use client";

import { useEffect } from "react";
import { trackEvent, type AnalyticsEvent, type AnalyticsPayload } from "@/lib/analytics";

export default function ViewTracker({
  event,
  payload,
}: {
  event: AnalyticsEvent;
  payload: AnalyticsPayload;
}) {
  useEffect(() => {
    trackEvent(event, payload);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return null;
}
