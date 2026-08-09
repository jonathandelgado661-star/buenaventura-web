"use client";

/**
 * Lightweight analytics/event tracking layer.
 *
 * No Meta Pixel / GA4 / GTM IDs are configured yet — this file only
 * defines the event names and a single `trackEvent` function so the
 * rest of the app can fire events consistently. Once real IDs are
 * available, wire them up inside `trackEvent` (gtag, fbq, dataLayer.push)
 * without touching any component that calls it.
 *
 * Env vars expected when ready to connect:
 *  - NEXT_PUBLIC_GA_ID
 *  - NEXT_PUBLIC_GTM_ID
 *  - NEXT_PUBLIC_META_PIXEL_ID
 */

export type AnalyticsEvent =
  | "whatsapp_click"
  | "project_view"
  | "location_view"
  | "financing_cta_click"
  | "maps_click";

export interface AnalyticsPayload {
  [key: string]: string | number | boolean | undefined;
}

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackEvent(event: AnalyticsEvent, payload: AnalyticsPayload = {}) {
  if (typeof window === "undefined") return;

  // GTM / dataLayer
  if (window.dataLayer) {
    window.dataLayer.push({ event, ...payload });
  }

  // GA4 direct (only fires once NEXT_PUBLIC_GA_ID is configured and gtag.js is loaded)
  if (typeof window.gtag === "function") {
    window.gtag("event", event, payload);
  }

  // Meta Pixel (only fires once the pixel snippet is installed)
  if (typeof window.fbq === "function") {
    window.fbq("trackCustom", event, payload);
  }

  if (process.env.NODE_ENV === "development") {
    console.debug("[analytics]", event, payload);
  }
}
