import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { mainNav, services, site } from "@/lib/site";
import { Logo } from "./logo";

export function SiteFooter() {
  const year = 2026; // build-time constant; update via CI or generateMetadata if needed

  return (
    <footer className="border-line bg-primary border-t text-white/85">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr] lg:gap-16">
          {/* Brand + NAP */}
          <div>
            <Logo light />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              {site.description}
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="text-accent mt-0.5 size-4 shrink-0" aria-hidden />
                {/* [PLACEHOLDER: physical address] */}
                <span className="text-white/70">{site.contact.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="text-accent size-4 shrink-0" aria-hidden />
                <a
                  href={`tel:${site.contact.phonePrimary.replace(/\s/g, "")}`}
                  className="hover:text-white"
                >
                  {site.contact.phonePrimary}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="text-accent size-4 shrink-0" aria-hidden />
                <a href={`mailto:${site.contact.email}`} className="hover:text-white">
                  {site.contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Navigate */}
          <nav aria-label="Footer">
            <h2 className="font-display text-sm font-semibold text-white">Navigate</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/70 hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Services">
            <h2 className="font-display text-sm font-semibold text-white">Services</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-white/70 hover:text-white">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/15 pt-6 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. Registered KRA Tax Agent.
          </p>
          <div className="flex gap-5">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/cookies" className="hover:text-white">
              Cookies
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
