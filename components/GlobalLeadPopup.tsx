"use client";

import dynamic from "next/dynamic";
import { useCallback, useState } from "react";
import { usePathname } from "next/navigation";
import LeadDialog from "./LeadDialog";
import useLeadPrompt from "@/hooks/useLeadPrompt";
import { isLeadThankYouPage } from "@/lib/leadPrompt";

const LeadForm = dynamic(() => import("./landing/LeadForm").then(module => module.LeadForm));

export default function GlobalLeadPopup({ topics }: { topics: Record<string, string> }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const topic = topics[pathname.split("/").filter(Boolean)[0]] || "Hospitality Marketing";
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  useLeadPrompt(open);
  return (
    <LeadDialog open={isOpen && !isLeadThankYouPage(pathname)} onClose={close} maxWidth={520}>
      <LeadForm title="Get a free consultation" button="Request my consultation" waTopic={topic} pageName={`${topic} — popup consultation`} formId="lead-popup-form" insidePopup />
    </LeadDialog>
  );
}
