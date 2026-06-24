import { Section, SectionHeader } from "@/components/ui/section";

/**
 * Lightweight placeholder for routes whose real content lands in a later phase.
 * Keeps navigation functional and avoids 404s while clearly signalling status.
 */
export function PagePlaceholder({
  kicker,
  title,
  phase,
}: {
  kicker: string;
  title: string;
  phase: string;
}) {
  return (
    <Section>
      <SectionHeader kicker={kicker} title={title} />
      <p className="border-line bg-surface-soft text-muted mt-6 max-w-2xl rounded-[var(--radius)] border border-dashed p-5 text-sm">
        [PLACEHOLDER] This page is scaffolded. Content and final design arrive in{" "}
        <strong className="text-body">{phase}</strong>.
      </p>
    </Section>
  );
}
