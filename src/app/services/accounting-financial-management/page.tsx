import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/site/page-placeholder";

export const metadata: Metadata = { title: "Accounting & Financial Management" };

export default function Page() {
  return (
    <PagePlaceholder
      kicker="Service"
      title="Accounting & Financial Management"
      phase="Phase 2"
    />
  );
}
