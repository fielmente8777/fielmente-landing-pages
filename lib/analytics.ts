declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

/** Push an event to Google Tag Manager's dataLayer. */
export function pushEvent(event: Record<string, unknown>) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(event);
}
