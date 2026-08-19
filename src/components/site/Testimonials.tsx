import { Quote } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

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
  return (
    <section id="testimonials" className="bg-light py-28 text-light-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.28em] text-green-ink">Testimonials</p>
          <h2 className="mt-6 max-w-2xl font-display text-3xl leading-tight text-balance-tight sm:text-5xl">
            What partners say about working with us
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.quote} delay={i * 110}>
              <figure className="flex h-full flex-col rounded-2xl border border-light-foreground/10 bg-white/50 p-8">
                <Quote className="size-6 text-green-ink" strokeWidth={1.5} />
                <blockquote className="mt-6 flex-1 text-light-foreground/80">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-8 border-t border-light-foreground/10 pt-5">
                  <p className="font-display text-lg">{t.name}</p>
                  <p className="mt-1 text-sm text-light-foreground/60">{t.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
