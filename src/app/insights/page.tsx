import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/site/page-placeholder";

export const metadata: Metadata = { title: "Insights & Knowledge" };

export default function Page() {
  return (
    <PagePlaceholder kicker="Insights" title="Insights & Knowledge" phase="Phase 3" />
  );
}
