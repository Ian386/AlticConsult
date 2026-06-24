import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/site/page-placeholder";

export const metadata: Metadata = { title: "About Altic Consult" };

export default function Page() {
  return (
    <PagePlaceholder kicker="Who we are" title="About Altic Consult" phase="Phase 2" />
  );
}
