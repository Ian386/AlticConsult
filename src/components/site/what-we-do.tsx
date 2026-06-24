"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { services } from "@/lib/site";

/**
 * "Service ledger" — an interactive index↔detail panel for the four pillars.
 * Selecting a pillar glides the active marker to it and cross-fades the detail.
 * Implemented as an accessible tablist (roving tabindex, arrow-key nav) with a
 * reduced-motion fallback.
 */
export function WhatWeDo() {
  const [active, setActive] = React.useState(0);
  const reduce = useReducedMotion();
  const tabRefs = React.useRef<(HTMLButtonElement | null)[]>([]);
  const last = services.length - 1;

  function onKeyDown(e: React.KeyboardEvent) {
    let next: number | null = null;
    if (e.key === "ArrowDown" || e.key === "ArrowRight")
      next = active === last ? 0 : active + 1;
    else if (e.key === "ArrowUp" || e.key === "ArrowLeft")
      next = active === 0 ? last : active - 1;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = last;
    if (next !== null) {
      e.preventDefault();
      setActive(next);
      tabRefs.current[next]?.focus();
    }
  }

  const current = services[active];
  const spring = reduce
    ? { duration: 0 }
    : ({ type: "spring", stiffness: 420, damping: 34 } as const);

  return (
    <div className="mt-12 grid gap-4 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-8">
      {/* Index / tablist */}
      <div
        role="tablist"
        aria-label="Our core services"
        aria-orientation="vertical"
        onKeyDown={onKeyDown}
        className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0"
      >
        {services.map((s, i) => {
          const selected = i === active;
          return (
            <button
              key={s.href}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              role="tab"
              id={`pillar-tab-${i}`}
              aria-selected={selected}
              aria-controls="pillar-panel"
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(i)}
              className={cn(
                "relative shrink-0 rounded-[var(--radius-lg)] px-4 py-3 text-left transition-colors lg:px-5 lg:py-4",
                "focus-visible:outline-accent outline-none focus-visible:outline-2 focus-visible:outline-offset-2",
                selected ? "text-white" : "text-ink hover:bg-surface-soft",
              )}
            >
              {selected && (
                <motion.span
                  layoutId="wwd-marker"
                  transition={spring}
                  aria-hidden
                  className="bg-primary absolute inset-0 -z-0 rounded-[var(--radius-lg)] shadow-md"
                />
              )}
              <span className="relative z-10 flex items-center gap-2 lg:justify-between">
                <span className="font-display hidden text-base font-semibold lg:block">
                  {s.label}
                </span>
                <span className="font-display text-sm font-semibold whitespace-nowrap lg:hidden">
                  {s.tag}
                </span>
                <ArrowRight
                  aria-hidden
                  className={cn(
                    "hidden size-4 shrink-0 transition-opacity lg:block",
                    selected ? "opacity-90" : "opacity-0",
                  )}
                />
              </span>
            </button>
          );
        })}
      </div>

      {/* Detail panel */}
      <div
        id="pillar-panel"
        role="tabpanel"
        aria-labelledby={`pillar-tab-${active}`}
        className="border-line bg-surface relative rounded-[var(--radius-xl)] border p-7 shadow-sm sm:p-9"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={active}
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: reduce ? 0.15 : 0.35, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <p className="text-accent-strong text-xs font-bold tracking-[0.12em] uppercase">
              {current.tag}
            </p>
            <h3 className="mt-2 text-2xl sm:text-[1.6rem]">{current.label}</h3>
            <p className="text-muted mt-3 max-w-prose">{current.blurb}</p>

            <ul className="mt-7 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
              {current.items.map((item) => (
                <li
                  key={item}
                  className="text-body flex items-start gap-2.5 text-[0.95rem]"
                >
                  <Check
                    aria-hidden
                    className="text-accent-strong mt-0.5 size-4 shrink-0"
                  />
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href={current.href}
              className="text-primary mt-8 inline-flex items-center gap-1.5 font-semibold transition-[gap] hover:gap-2.5"
            >
              Explore {current.label}
              <ArrowRight aria-hidden className="size-4" />
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
