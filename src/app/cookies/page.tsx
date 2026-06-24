import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/site/page-placeholder";

export const metadata: Metadata = { title: "Cookie Policy" };

export default function Page() {
  return <PagePlaceholder kicker="Legal" title="Cookie Policy" phase="Phase 4" />;
}
