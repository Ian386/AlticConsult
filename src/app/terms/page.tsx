import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/site/page-placeholder";

export const metadata: Metadata = { title: "Terms of Use" };

export default function Page() {
  return <PagePlaceholder kicker="Legal" title="Terms of Use" phase="Phase 4" />;
}
