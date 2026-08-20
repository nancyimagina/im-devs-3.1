import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import imgRenuity from "@/assets/case-renuity.jpg";
import imgAgione from "@/assets/case-agione.jpg";
import imgSalesforce from "@/assets/cap-salesforce.jpg";

export const Route = createFileRoute("/expertise")({
  head: () => ({
    meta: [
      { title: "Expertise — Field Operations, Logistics & Salesforce | Imagina Devs" },
      {
        name: "description",
        content:
          "Engineering expertise in field operations, logistics and mission-critical platforms, and enterprise Salesforce development.",
      },
      { property: "og:title", content: "Expertise | Imagina Devs" },
      {
        property: "og:description",
        content:
          "Technology expertise shaped by complex operations and long-term client partnerships.",
      },
    ],
  }),
  component: ExpertisePage,
});

const AREAS = [
  {
    title: "Home Services & Field Operations",
    image: imgRenuity,
    intro:
      "We build and extend software for companies managing distributed field teams and complex operational workflows.",
    focus: [
      "Field operations",
      "Mobile applications",
      "Scheduling and dispatch",
      "Route optimization",
      "Operational workflows",
    ],
    proof: "Renuity — more than 8 years of collaboration.",
    to: "/case-studies/renuity" as const,
  },
  {
    title: "Logistics & Mission-Critical Operations",
    image: imgAgione,
    intro:
      "We build reliable software for complex operations where coordination, visibility and responsiveness matter.",
    focus: [
      "Operational platforms",
      "Real-time information",
      "Legacy modernization",
      "APIs and integrations",
      "Multi-site workflows",
    ],
    proof: "AgiOne — unified web and mobile platform for airport operations.",
    to: "/case-studies/agione" as const,
  },
  {
    title: "Enterprise Salesforce",
    image: imgSalesforce,
    intro:
      "We provide engineering capacity for Salesforce-heavy organizations and teams that need specialized development support.",
    focus: [
      "Apex",
      "Lightning Web Components",
      "Salesforce integrations",
      "Enterprise platform development",
    ],
    proof: null,
    to: null,
  },
];

function ExpertisePage() {
  return (
    <>
      <section className="surface-noise bg-deep-gradient px-6 pb-20 pt-40 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.28em] text-accent">Expertise</p>
          <h1 className="mt-6 max-w-3xl font-display text-4xl leading-[1.08] sm:text-6xl">
            Where we have real experience.
          </h1>
          <p className="mt-6 max-w-xl text-foreground/65">
            Technology expertise shaped by complex operations, real-world challenges and long-term
            partnerships.
          </p>
        </div>
      </section>

      <section className="bg-deep pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          {AREAS.map((area, i) => (
            <Reveal key={area.title} delay={i * 80}>
              <article className="grid gap-10 border-t border-border py-14 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                  <div className="mb-8 overflow-hidden rounded-2xl border border-border">
                    <img
                      src={area.image}
                      alt={area.title}
                      loading="lazy"
                      width={1280}
                      height={860}
                      className="h-56 w-full object-cover"
                    />
                  </div>
                  <h2 className="font-display text-2xl leading-snug sm:text-3xl">{area.title}</h2>
                  {area.proof && (
                    <p className="mt-5 text-sm text-accent">{area.proof}</p>
                  )}
                  {area.to && (
                    <Link
                      to={area.to}
                      className="mt-4 inline-flex text-sm font-medium text-foreground/70 transition-colors hover:text-accent"
                    >
                      See the full story →
                    </Link>
                  )}
                </div>
                <div>
                  <p className="text-foreground/70">{area.intro}</p>
                  <ul className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                    {area.focus.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-sm text-foreground/70">
                        <span className="size-1.5 rounded-full bg-accent" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="surface-noise bg-deep-gradient py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-3xl sm:text-4xl">Need this expertise on your team?</h2>
          <Link
            to="/contact"
            className="mt-8 inline-flex rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-transform duration-300 hover:-translate-y-0.5"
          >
            Build your team →
          </Link>
        </div>
      </section>
    </>
  );
}
