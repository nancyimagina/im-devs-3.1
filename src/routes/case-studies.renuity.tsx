import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal, CountUp } from "@/components/site/Reveal";
import hero from "@/assets/case-renuity.jpg";
import logo from "@/assets/logos/logo-renuity.png.asset.json";

export const Route = createFileRoute("/case-studies/renuity")({
  head: () => ({
    meta: [
      { title: "Renuity — Optimizing Field Operations | Imagina Devs" },
      {
        name: "description",
        content:
          "8+ years of collaboration: route optimization, mobile technology and real-time schedule visibility for Renuity field teams.",
      },
      { property: "og:title", content: "Renuity — Optimizing Field Operations" },
      {
        property: "og:description",
        content: "~20% productivity increase and 95%+ on-time project completion.",
      },
    ],
  }),
  component: RenuityPage,
});

function RenuityPage() {
  return (
    <>
      <section className="surface-noise bg-deep-gradient px-6 pb-16 pt-40 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Link
            to="/case-studies"
            className="text-sm text-foreground/60 transition-colors hover:text-accent"
          >
            ← Case studies
          </Link>
          <p className="mt-8 text-xs uppercase tracking-[0.28em] text-accent">
            Home Services & Field Operations
          </p>
          <h1 className="mt-6 max-w-3xl font-display text-4xl leading-[1.08] sm:text-6xl">
            Renuity — optimizing field operations
          </h1>
          <div className="mt-8 flex items-center gap-5">
            <img src={logo.url} alt="Renuity" className="h-8 w-auto opacity-80" />
            <span className="text-sm text-foreground/60">8+ years of collaboration</span>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 pt-6 lg:px-10">
        <Carousel images={[hero, hero2, hero3]} alt="Renuity field operations" />
      </div>

      <section className="bg-deep py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:px-10">
          <Reveal>
            <h2 className="font-display text-2xl">Challenge</h2>
            <p className="mt-4 text-foreground/70">
              Legacy systems and an outdated mobile experience were making scheduling, time
              tracking and field operations harder to manage.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-2xl">Solution</h2>
            <p className="mt-4 text-foreground/70">
              Imagina worked as an extension of Renuity&apos;s team to develop technology for route
              optimization and field installation operations, including a custom mobile
              application.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-8 max-w-7xl px-6 lg:px-10">
          <Reveal>
            <h2 className="font-display text-2xl">Key outcomes</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Real-time schedule visibility",
                "More efficient field operations",
                "Improved time tracking",
                "Better customer information at the point of service",
                "Scalable technology for continued growth",
              ].map((o) => (
                <li key={o} className="flex items-center gap-3 text-sm text-foreground/70">
                  <span className="size-1.5 rounded-full bg-accent" />
                  {o}
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {[
              {
                value: <CountUp to={20} prefix="~" suffix="%" />,
                label: "Productivity increase in the first quarter after launch",
              },
              {
                value: <CountUp to={95} suffix="%+" />,
                label: "On-time project completion, up from around 85%",
              },
            ].map((s, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="rounded-2xl border border-border bg-surface/40 p-8">
                  <p className="font-display text-5xl text-accent">{s.value}</p>
                  <p className="mt-4 text-sm text-foreground/65">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Link
            to="/contact"
            className="mt-16 inline-flex rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-transform duration-300 hover:-translate-y-0.5"
          >
            Talk to us →
          </Link>
        </div>
      </section>
    </>
  );
}
