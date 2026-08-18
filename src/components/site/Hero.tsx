import { lazy, Suspense, useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";

const ParticleGlobe = lazy(() => import("./ParticleGlobe"));

const SLIDES = [
  {
    kicker: "Staff Augmentation",
    title: "Scale your engineering team fast.",
    copy: "Add experienced engineers who work directly with your team.",
    cta: "Build your team →",
  },
  {
    kicker: "Salesforce Experts",
    title: "Specialized Salesforce engineering when you need it.",
    copy: "Extend your Salesforce capabilities with experienced engineers.",
    cta: "Talk to our experts →",
  },
];

export function Hero() {
  const [index, setIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const id = window.setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), 8000);
    return () => window.clearInterval(id);
  }, []);

  const slide = SLIDES[index] ?? SLIDES[0]!;

  return (
    <section className="surface-noise relative isolate flex min-h-[100svh] items-center overflow-hidden bg-deep-gradient">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-90">
        {mounted && (
          <Suspense fallback={null}>
            <ParticleGlobe state={index} className="pointer-events-auto size-full" />
          </Suspense>
        )}
      </div>

      <div className="mx-auto grid w-full max-w-7xl gap-16 px-6 pb-20 pt-32 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:px-10">
        <div className="animate-rise">
          <p className="text-xs uppercase tracking-[0.28em] text-accent">
            Nearshore engineering partner
          </p>
          <h1 className="mt-6 max-w-3xl font-display text-4xl leading-[1.05] text-balance-tight sm:text-6xl lg:text-7xl">
            Nearshore engineering teams for U.S. companies.
          </h1>
          <p className="mt-6 max-w-xl text-base text-foreground/70 sm:text-lg">
            Senior engineering talent and software expertise, aligned with your team.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-transform duration-300 hover:-translate-y-0.5"
            >
              Build your team →
            </Link>
            <Link
              to="/case-studies"
              className="rounded-full border border-border px-6 py-3 text-sm text-foreground/80 transition-colors hover:border-accent hover:text-accent"
            >
              See our work →
            </Link>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-surface/50 p-7 backdrop-blur-md">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-[0.22em] text-accent">
              {slide.kicker}
            </span>
            <div className="flex gap-2">
              <button
                type="button"
                aria-label="Previous service"
                onClick={() => setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length)}
                className="inline-flex size-9 items-center justify-center rounded-full border border-border transition-colors hover:border-accent hover:text-accent"
              >
                <ArrowLeft className="size-4" />
              </button>
              <button
                type="button"
                aria-label="Next service"
                onClick={() => setIndex((i) => (i + 1) % SLIDES.length)}
                className="inline-flex size-9 items-center justify-center rounded-full border border-border transition-colors hover:border-accent hover:text-accent"
              >
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>

          <h2 key={slide.title} className="animate-rise mt-6 font-display text-2xl leading-snug">
            {slide.title}
          </h2>
          <p className="mt-3 text-sm text-foreground/65">{slide.copy}</p>
          <Link
            to="/contact"
            className="mt-6 inline-flex text-sm font-medium text-accent transition-transform duration-300 hover:translate-x-1"
          >
            {slide.cta}
          </Link>

          <div className="mt-7 flex gap-2">
            {SLIDES.map((s, i) => (
              <button
                key={s.kicker}
                type="button"
                aria-label={`Show ${s.kicker}`}
                onClick={() => setIndex(i)}
                className={`h-0.5 flex-1 transition-colors ${i === index ? "bg-accent" : "bg-border"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
