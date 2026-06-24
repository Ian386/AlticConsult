import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { services, site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary relative overflow-hidden text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_300px_at_85%_10%,rgba(22,184,108,0.25),transparent_60%)]"
        />
        <Container className="relative py-20 sm:py-28">
          <div className="max-w-3xl">
            <span className="border-accent/30 bg-accent/10 text-accent inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-semibold tracking-wide uppercase">
              <ShieldCheck className="size-4" aria-hidden />
              Registered KRA Tax Agent
            </span>
            <h1 className="mt-6 text-4xl text-white sm:text-5xl lg:text-[3.5rem]">
              {site.tagline}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/80">{site.description}</p>
            <div className="mt-9 flex flex-wrap gap-3.5">
              <Link href="/contact" className={buttonVariants({ size: "lg" })}>
                Book a Consultation <ArrowRight className="size-4" aria-hidden />
              </Link>
              <Link
                href="/contact"
                className={buttonVariants({ variant: "ghost-light", size: "lg" })}
              >
                Request a Tax Health Check
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Services preview — full content arrives in Phase 2 */}
      <Section>
        <SectionHeader
          kicker="What we do"
          title="Four pillars of practical advisory"
          lead="Deep expertise in tax, accounting and regulatory compliance — built to keep your business compliant and positioned for growth."
        />
        <div className="mt-11 grid gap-5 sm:grid-cols-2">
          {services.map((s) => (
            <Card key={s.href} interactive>
              <h3 className="text-xl">{s.label}</h3>
              <Link
                href={s.href}
                className="text-primary mt-4 inline-flex items-center gap-1.5 text-sm font-semibold hover:gap-2.5"
              >
                Explore <ArrowRight className="size-4" aria-hidden />
              </Link>
            </Card>
          ))}
        </div>
      </Section>

      {/* Foundation note (Phase 1) */}
      <Section muted>
        <div className="border-line bg-surface rounded-[var(--radius-xl)] border p-8 text-center sm:p-12">
          <p className="text-accent-strong text-sm font-bold tracking-[0.1em] uppercase">
            Phase 1 — Foundation
          </p>
          <h2 className="mx-auto mt-3 max-w-xl text-2xl sm:text-3xl">
            Design system, layout and tooling are live
          </h2>
          <p className="text-muted mx-auto mt-4 max-w-lg">
            Tokens (Palette A · Fraunces + Inter), header (Nav 1), footer, component
            library and CI are in place. Core page content lands in Phase 2.
          </p>
        </div>
      </Section>
    </>
  );
}
