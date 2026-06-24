import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/site/page-placeholder";

export const metadata: Metadata = { title: "Our Services" };

export default function Page() {
  return <PagePlaceholder kicker="What we do" title="Our Services" phase="Phase 2" />;
}
