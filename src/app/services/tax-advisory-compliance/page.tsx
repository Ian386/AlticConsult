import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/site/page-placeholder";

export const metadata: Metadata = { title: "Tax Advisory & Compliance" };

export default function Page() {
  return (
    <PagePlaceholder kicker="Service" title="Tax Advisory & Compliance" phase="Phase 2" />
  );
}
