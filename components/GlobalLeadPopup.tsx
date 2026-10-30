"use client";
import AuditCapture from "./AuditCapture";
export default function GlobalLeadPopup({ topics }: { topics: Record<string, string> }) {
  return <AuditCapture topics={topics} />;
}
