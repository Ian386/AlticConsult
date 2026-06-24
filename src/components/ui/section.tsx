import * as React from "react";
import { cn } from "@/lib/utils";
import { Container } from "./container";

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  /** Use the soft alt background. */
  muted?: boolean;
  /** Render without the inner Container (caller handles width). */
  bleed?: boolean;
};

/** Vertical-rhythm section wrapper. */
export function Section({ className, muted, bleed, children, ...props }: SectionProps) {
  return (
    <section
      className={cn("py-16 sm:py-20 lg:py-24", muted && "bg-surface-soft", className)}
      {...props}
    >
      {bleed ? children : <Container>{children}</Container>}
    </section>
  );
}

/** Eyebrow + heading + lead block for section intros. */
export function SectionHeader({
  kicker,
  title,
  lead,
  className,
}: {
  kicker?: string;
  title: string;
  lead?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {kicker && (
        <span className="text-accent-strong text-sm font-bold tracking-[0.1em] uppercase">
          {kicker}
        </span>
      )}
      <h2 className="mt-3 text-3xl sm:text-4xl">{title}</h2>
      {lead && <p className="text-muted mt-4 text-lg">{lead}</p>}
    </div>
  );
}
