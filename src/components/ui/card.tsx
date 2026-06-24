import * as React from "react";
import { cn } from "@/lib/utils";

/** Surface card with optional hover lift. */
export function Card({
  className,
  interactive,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { interactive?: boolean }) {
  return (
    <div
      className={cn(
        "border-line bg-surface rounded-[var(--radius-lg)] border p-7 shadow-sm",
        interactive &&
          "transition-[transform,box-shadow] duration-[var(--duration-mid)] ease-[var(--ease-brand)] hover:-translate-y-1 hover:shadow-md",
        className,
      )}
      {...props}
    />
  );
}
