// Mock GA4 event dispatch. In production this pushes into the dataLayer
// that the GTM container (see layout.tsx) is already listening on, so a
// GA4 tag configured in GTM picks it up without any extra wiring.
declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function trackEvent(eventName: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    ...params,
  });
  // Visible mock event for local verification without a live GTM container.
  if (process.env.NODE_ENV !== "production") {
    console.log("[GA4 mock event]", eventName, params);
  }
}
