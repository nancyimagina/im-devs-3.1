import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import caseRenuity from "@/assets/case-renuity.jpg";
import caseAgione from "@/assets/case-agione.jpg";

export const Route = createFileRoute("/case-studies/")({
  head: () => ({
    meta: [
      { title: "Case Studies — Renuity & AgiOne | Imagina Devs" },
      {
        name: "description",
        content:
          "How Imagina Devs helped Renuity optimize field operations and AgiOne modernize airport operations.",
      },
      { property: "og:title", content: "Case Studies | Imagina Devs" },
      {
        property: "og:description",
        content: "Real impact for real clients across field operations and logistics.",
      },
    ],
  }),
  component: CaseStudiesPage,
});

const CASES = [
  {
    to: "/case-studies/renuity" as const,
    img: caseRenuity,
    name: "Renuity — Optimizing field operations",
    cat: "Home Services & Field Operations",
    copy: "Route optimization and mobile technology for field teams, built over 8+ years of collaboration.",
  },
  {
    to: "/case-studies/agione" as const,
    img: caseAgione,
    name: "AgiOne — Modernizing airport operations",
    cat: "Logistics & Mission-Critical Operations",
    copy: "A unified web and mobile platform for flight organization, ramp services and security workflows.",
  },
];

function CaseStudiesPage() {
  return (
    <>
      <section className="surface-noise bg-deep-gradient px-6 pb-20 pt-40 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.28em] text-accent">Case Studies</p>
          <h1 className="mt-6 max-w-3xl font-display text-4xl leading-[1.08] sm:text-6xl">
            Real impact for real clients.
          </h1>
        </div>
      </section>

      <section className="bg-deep pb-28 pt-12">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:px-10">
          {CASES.map((c, i) => (
            <Reveal key={c.name} delay={i * 110}>
              <Link to={c.to} className="group block">
                <div className="overflow-hidden rounded-2xl border border-border">
                  <img
                    src={c.img}
                    alt={c.name}
                    loading="lazy"
                    width={1280}
                    height={860}
                    className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="mt-6 text-xs uppercase tracking-[0.22em] text-accent">{c.cat}</p>
                <h2 className="mt-3 font-display text-2xl">{c.name}</h2>
                <p className="mt-3 text-sm text-foreground/65">{c.copy}</p>
                <span className="mt-4 inline-flex text-sm font-medium text-accent transition-transform duration-300 group-hover:translate-x-1">
                  See the full story →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
