import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useI18n } from "@/i18n/LanguageProvider";
import logoLight from "@/assets/logos/logo-im-devs-light.png.asset.json";

const NAV = [
  { label: "Home", to: "/" },
  { label: "Expertise", to: "/expertise" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "Blog", to: "/blog" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;

function LangSwitch({ className }: { className?: string }) {
  const { lang, setLang } = useI18n();
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-border px-3 py-1.5 text-xs",
        className,
      )}
    >
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-label="English"
        className={cn(
          "transition-colors",
          lang === "en" ? "text-accent" : "text-foreground/50 hover:text-foreground",
        )}
      >
        EN
      </button>
      <span className="text-foreground/25">|</span>
      <button
        type="button"
        onClick={() => setLang("es")}
        aria-label="Español"
        className={cn(
          "transition-colors",
          lang === "es" ? "text-accent" : "text-foreground/50 hover:text-foreground",
        )}
      >
        ES
      </button>
    </div>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { t } = useI18n();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled ? "border-b border-border bg-deep/85 backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link to="/" className="flex items-center" aria-label={t("Imagina Devs home")}>
          <img src={logoLight.url} alt="Imagina Devs" className="h-8 w-auto" />
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {NAV.map((item) => {
            const active = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "relative py-1 text-sm text-foreground/70 transition-colors hover:text-foreground",
                  active && "text-foreground",
                )}
              >
                {t(item.label)}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-px bg-accent transition-all duration-300",
                    active ? "w-full" : "w-0",
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <LangSwitch className="hidden sm:inline-flex" />
          <Link
            to="/contact"
            className="hidden rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-transform duration-300 hover:-translate-y-0.5 md:inline-flex"
          >
            {t("Talk to us →")}
          </Link>
          <button
            type="button"
            aria-label={t("Toggle menu")}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-10 items-center justify-center rounded-full border border-border text-foreground md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-deep/95 px-6 pb-6 pt-2 backdrop-blur-xl md:hidden">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="block border-b border-border/60 py-4 text-base text-foreground/80"
            >
              {t(item.label)}
            </Link>
          ))}
          <div className="mt-5 flex items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground"
            >
              {t("Talk to us →")}
            </Link>
            <LangSwitch />
          </div>
        </div>
      )}
    </header>
  );
}
