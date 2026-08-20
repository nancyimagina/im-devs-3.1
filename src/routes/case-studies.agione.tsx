import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal, CountUp } from "@/components/site/Reveal";
import { Carousel } from "@/components/site/Carousel";
import hero from "@/assets/case-agione.jpg";
import hero2 from "@/assets/case-agione-2.jpg";
import hero3 from "@/assets/case-agione-3.jpg";
import logo from "@/assets/logos/logo-agione.png.asset.json";

export const Route = createFileRoute("/case-studies/agione")({
  head: () => ({
    meta: [
      { title: "AgiOne — Modernizing Airport Operations | Imagina Devs" },
      {
        name: "description",
        content:
          "A unified web and mobile platform for flight organization, ramp services and security workflows across multiple airport locations.",
      },
      { property: "og:title", content: "AgiOne — Modernizing Airport Operations" },
      {
        property: "og:description",
        content: "40% fewer manual errors and 30% faster response times.",
      },
    ],
  }),
  component: AgiOnePage,
});

function AgiOnePage() {
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
            Logistics & Mission-Critical Operations
          </p>
          <h1 className="mt-6 max-w-3xl font-display text-4xl leading-[1.08] sm:text-6xl">
            AgiOne — modernizing airport operations
          </h1>
          <div className="mt-8 flex items-center gap-5">
            <img src={logo.url} alt="AgiOne" className="h-8 w-auto opacity-80" />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 pt-6 lg:px-10">
        <Carousel images={[hero, hero2, hero3]} alt="AgiOne airport operations" />
      </div>

      <section className="bg-deep py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:px-10">
          <Reveal>
            <h2 className="font-display text-2xl">Challenge</h2>
            <p className="mt-4 text-foreground/70">
              Legacy software and fragmented processes made it difficult to manage continuously
              changing airport operations across multiple locations.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-2xl">Solution</h2>
            <p className="mt-4 text-foreground/70">
              Imagina developed a unified web and mobile operational platform covering flight
              organization, ramp services and security-related workflows.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-8 max-w-7xl px-6 lg:px-10">
          <Reveal>
            <h2 className="font-display text-2xl">Key outcomes</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Fewer manual errors",
                "Faster response times",
                "Better operational coordination",
                "Improved safety and visibility",
                "Platform designed to scale with additional airports and volume",
              ].map((o) => (
                <li key={o} className="flex items-center gap-3 text-sm text-foreground/70">
                  <span className="size-1.5 rounded-full bg-accent" />
                  {o}
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            {[
              { value: <CountUp to={40} suffix="%" />, label: "Estimated reduction in manual errors" },
              { value: <CountUp to={30} suffix="%" />, label: "Estimated reduction in response times" },
              { value: <CountUp to={20} suffix="%" />, label: "Faster completion of key processes" },
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
