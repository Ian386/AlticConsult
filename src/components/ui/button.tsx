import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-[var(--radius-sm)] font-semibold transition-[transform,background-color,box-shadow,color] duration-[var(--duration-fast)] ease-[var(--ease-brand)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-accent text-accent-ink hover:bg-accent-press hover:-translate-y-px hover:shadow-md active:translate-y-0",
        secondary:
          "bg-primary text-surface hover:bg-primary-soft hover:-translate-y-px active:translate-y-0",
        outline:
          "border border-line bg-surface text-ink hover:border-accent hover:text-primary",
        ghost: "text-ink hover:bg-surface-soft",
        "ghost-light": "border border-white/30 text-white hover:bg-white/10",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-5 text-[0.95rem]",
        lg: "h-12 px-6 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  ),
);
Button.displayName = "Button";

export { Button, buttonVariants };
