import Link from "next/link";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

/** Wordmark logo. Replace the square mark with the real brand asset when supplied. */
export function Logo({ className, light }: { className?: string; light?: boolean }) {
  return (
    <Link
      href="/"
      aria-label={`${site.name} — home`}
      className={cn(
        "font-display inline-flex items-center gap-2.5 text-xl font-bold tracking-tight",
        light ? "text-white" : "text-ink",
        className,
      )}
    >
      {/* [PLACEHOLDER: brand logo mark] */}
      <span aria-hidden className="bg-accent inline-block size-3 rounded-[4px]" />
      {site.name}
    </Link>
  );
}
