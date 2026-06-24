import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/site/page-placeholder";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function Page() {
  return <PagePlaceholder kicker="Legal" title="Privacy Policy" phase="Phase 4" />;
}
