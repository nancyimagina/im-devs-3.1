import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import logoLight from "@/assets/logos/logo-im-devs-light.png.asset.json";

function TikTok({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16.5 3c.3 1.9 1.4 3.4 3.5 3.7v2.5c-1.3.1-2.5-.2-3.6-.9v5.9c0 3.5-2.6 5.8-5.7 5.8A5.7 5.7 0 0 1 5 14.3c0-3.4 3-6.1 6.6-5.6v2.7a3 3 0 0 0-3.9 2.9 3 3 0 0 0 3 3c1.7 0 2.9-1.2 2.9-3V3h2.9Z" />
    </svg>
  );
}

const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/imagina-devs", Icon: Linkedin },
  { label: "Instagram", href: "https://www.instagram.com/imaginadevs", Icon: Instagram },
  { label: "Facebook", href: "https://www.facebook.com/imaginadevs", Icon: Facebook },
  { label: "TikTok", href: "https://www.tiktok.com/@imaginadevs", Icon: TikTok },
];

const LINKS = [
  { label: "Home", to: "/" },
  { label: "Expertise", to: "/expertise" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "Blog", to: "/blog" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border bg-deep">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 py-16 lg:flex-row lg:items-start lg:justify-between lg:px-10">
        <div className="max-w-sm">
          <img src={logoLight.url} alt="Imagina Devs" className="h-8 w-auto" />
          <p className="mt-5 text-sm text-muted-foreground">
            Nearshore engineering for U.S. companies.
          </p>
          <div className="mt-5 grid gap-2 text-sm">
            <a
              href="mailto:info@imaginadevs.com"
              className="text-foreground/70 transition-colors hover:text-accent"
            >
              info@imaginadevs.com
            </a>
            <a
              href="tel:+13212522392"
              className="text-foreground/70 transition-colors hover:text-accent"
            >
              +1 321 252 2392
            </a>
          </div>
          <div className="mt-6 flex gap-3">
            {SOCIALS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={label}
                className="inline-flex size-10 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors hover:border-accent hover:text-accent"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <nav className="grid gap-3">
          {LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm text-foreground/70 transition-colors hover:text-accent"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="max-w-xs">
          <p className="font-display text-lg">Ready to scale your engineering team?</p>
          <Link
            to="/contact"
            className="mt-5 inline-flex rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-transform duration-300 hover:-translate-y-0.5"
          >
            Let&apos;s talk →
          </Link>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <span>© {new Date().getFullYear()} Imagina Devs. All rights reserved.</span>
          <span>Senior engineering talent, aligned with U.S. time zones.</span>
        </div>
      </div>
    </footer>
  );
}
