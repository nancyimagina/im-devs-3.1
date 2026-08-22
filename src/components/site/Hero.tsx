import { lazy, Suspense, useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useI18n } from "@/i18n/LanguageProvider";

const ParticleGlobe = lazy(() => import("./ParticleGlobe"));

const SLIDES = [
  { label: "Salesforce Experts", to: "/expertise", cta: "Talk to our experts →" },
  { label: "Staff Augmentation", to: "/contact", cta: "Build your team →" },
] as const;

export function Hero() {
  const [index, setIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const { t } = useI18n();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const id = window.setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), 6000);
    return () => window.clearInterval(id);
  }, []);

  const active = SLIDES[index] ?? SLIDES[0]!;

  const prev = () => setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length);
  const next = () => setIndex((i) => (i + 1) % SLIDES.length);

  return (
    <section className="surface-noise relative isolate flex min-h-[100svh] items-center overflow-hidden bg-deep-gradient">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-90">
        {mounted && (
          <Suspense fallback={null}>
            <ParticleGlobe state={index} className="pointer-events-auto size-full" />
          </Suspense>
        )}
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 pb-20 pt-32 lg:px-10">
        <div className="max-w-4xl animate-rise">
          <h1 className="font-display text-5xl leading-[1.02] text-balance-tight sm:text-7xl lg:text-8xl">
            <span key={active.label} className="animate-rise block">
              {t(active.label)}
            </span>
          </h1>

          <p
            key={active.label}
            className="animate-rise mt-8 max-w-xl text-lg text-foreground/70 sm:text-xl"
          >
            {index === 0
              ? t("Specialized Salesforce engineering to extend your platform capabilities.")
              : t(
                  "Experienced engineers who work directly with your team and scale with your needs.",
                )}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to={active.to}
              className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-transform duration-300 hover:-translate-y-0.5"
            >
              {t(active.cta)}
            </Link>
            <Link
              to="/case-studies"
              className="rounded-full border border-border px-6 py-3 text-sm text-foreground/80 transition-colors hover:border-accent hover:text-accent"
            >
              {t("See our work →")}
            </Link>
          </div>

          <div className="mt-12 flex items-center gap-3">
            <button
              type="button"
              aria-label={t("Previous service")}
              onClick={prev}
              className="inline-flex size-10 items-center justify-center rounded-full border border-border transition-colors hover:border-accent hover:text-accent"
            >
              <ArrowLeft className="size-4" />
            </button>
            <button
              type="button"
              aria-label={t("Next service")}
              onClick={next}
              className="inline-flex size-10 items-center justify-center rounded-full border border-border transition-colors hover:border-accent hover:text-accent"
            >
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
