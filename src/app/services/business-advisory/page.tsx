import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/site/page-placeholder";

export const metadata: Metadata = { title: "Business Advisory" };

export default function Page() {
  return <PagePlaceholder kicker="Service" title="Business Advisory" phase="Phase 2" />;
}
