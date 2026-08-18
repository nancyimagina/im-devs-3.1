import { lazy, Suspense, useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

const ParticleGlobe = lazy(() => import("./ParticleGlobe"));

const SLIDES = [
  { label: "Salesforce Experts", to: "/expertise", cta: "Talk to our experts →" },
  { label: "Staff Augmentation", to: "/contact", cta: "Build your team →" },
];

export function Hero() {
  const [index, setIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const id = window.setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), 6000);
    return () => window.clearInterval(id);
  }, []);

  const active = SLIDES[index] ?? SLIDES[0]!;

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
            {SLIDES.map((s, i) => (
              <span
                key={s.label}
                className={`block transition-colors duration-700 ${
                  i === index ? "text-foreground" : "text-foreground/25"
                }`}
              >
                {s.label}
              </span>
            ))}
          </h1>

          <p
            key={active.label}
            className="animate-rise mt-8 max-w-xl text-lg text-foreground/70 sm:text-xl"
          >
            {index === 0
              ? "Specialized Salesforce engineering to extend your platform capabilities."
              : "Experienced engineers who work directly with your team and scale with your needs."}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to={active.to}
              className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-transform duration-300 hover:-translate-y-0.5"
            >
              {active.cta}
            </Link>
            <Link
              to="/case-studies"
              className="rounded-full border border-border px-6 py-3 text-sm text-foreground/80 transition-colors hover:border-accent hover:text-accent"
            >
              See our work →
            </Link>
          </div>

          <div className="mt-12 flex items-center gap-3">
            {SLIDES.map((s, i) => (
              <button
                key={s.label}
                type="button"
                aria-label={`Show ${s.label}`}
                onClick={() => setIndex(i)}
                className={`h-0.5 w-10 transition-colors ${i === index ? "bg-accent" : "bg-border"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
