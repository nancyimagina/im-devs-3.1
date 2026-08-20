import { useState, useEffect, useCallback } from "react";
import { Quote, ArrowLeft, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";

const TESTIMONIALS = [
  {
    quote:
      "They work like part of our own engineering organization. Same standards, same ownership, same accountability — just more capacity when we need it.",
    name: "VP of Engineering",
    role: "Home services company, U.S.",
  },
  {
    quote:
      "The Salesforce work went from firefighting to predictable delivery. Code reviews, tests and releases finally follow a process we trust.",
    name: "Director of Technology",
    role: "Enterprise platform team",
  },
  {
    quote:
      "Time-zone alignment changed everything. Decisions happen in the same day instead of waiting a full cycle for answers.",
    name: "Head of Product",
    role: "Logistics operations",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = TESTIMONIALS.length;

  const prev = useCallback(() => setIndex((i) => (i - 1 + total) % total), [total]);
  const next = useCallback(() => setIndex((i) => (i + 1) % total), [total]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="testimonials" className="bg-light py-28 text-light-foreground">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <Reveal>
          <p className="text-center text-xs uppercase tracking-[0.28em] text-green-ink">Testimonials</p>
          <h2 className="mx-auto mt-6 max-w-2xl text-center font-display text-3xl leading-tight text-balance-tight sm:text-5xl">
            What partners say about working with us
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative mt-16">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${index * 100}%)` }}
              >
                {TESTIMONIALS.map((t) => (
                  <figure
                    key={t.quote}
                    className="w-full shrink-0 px-2 sm:px-12"
                  >
                    <div className="flex h-full flex-col items-center rounded-2xl border border-light-foreground/10 bg-white/50 p-8 text-center sm:p-12">
                      <Quote className="size-8 text-green-ink" strokeWidth={1.5} />
                      <blockquote className="mt-8 text-lg leading-relaxed text-light-foreground/80 sm:text-xl">
                        “{t.quote}”
                      </blockquote>
                      <figcaption className="mt-8 border-t border-light-foreground/10 pt-6">
                        <p className="font-display text-lg">{t.name}</p>
                        <p className="mt-1 text-sm text-light-foreground/60">{t.role}</p>
                      </figcaption>
                    </div>
                  </figure>
                ))}
              </div>
            </div>

            <div className="mt-8 flex items-center justify-center gap-3">
              <button
                type="button"
                aria-label="Previous testimonial"
                onClick={prev}
                className="inline-flex size-10 items-center justify-center rounded-full border border-light-foreground/20 transition-colors hover:border-green-ink hover:text-green-ink"
              >
                <ArrowLeft className="size-4" />
              </button>
              <div className="flex gap-2">
                {TESTIMONIALS.map((t, i) => (
                  <button
                    key={t.quote}
                    type="button"
                    aria-label={`Go to testimonial ${i + 1}`}
                    onClick={() => setIndex(i)}
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-300",
                      i === index ? "w-8 bg-green-ink" : "w-3 bg-light-foreground/25",
                    )}
                  />
                ))}
              </div>
              <button
                type="button"
                aria-label="Next testimonial"
                onClick={next}
                className="inline-flex size-10 items-center justify-center rounded-full border border-light-foreground/20 transition-colors hover:border-green-ink hover:text-green-ink"
              >
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
