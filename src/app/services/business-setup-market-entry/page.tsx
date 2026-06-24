import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/site/page-placeholder";

export const metadata: Metadata = { title: "Business Setup & Market Entry" };

export default function Page() {
  return (
    <PagePlaceholder
      kicker="Service"
      title="Business Setup & Market Entry"
      phase="Phase 2"
    />
  );
}
