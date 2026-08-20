import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { ClientLogos } from "@/components/site/ClientLogos";
import capSoftware from "@/assets/cap-software.jpg";
import capSalesforce from "@/assets/cap-salesforce.jpg";
import capArchitecture from "@/assets/cap-architecture.jpg";
import capQuality from "@/assets/cap-quality.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Nearshore Software Development Partner | Imagina Devs" },
      {
        name: "description",
        content:
          "Imagina Devs is a nearshore software partner for U.S. companies. We integrate senior engineering talent into your teams for Salesforce, backend, frontend and enterprise platforms.",
      },
      { property: "og:title", content: "About | Imagina Devs" },
      {
        property: "og:description",
        content: "Nearshore software development partner for U.S. companies.",
      },
    ],
  }),
  component: AboutPage,
});

const CAPABILITIES = [
  {
    title: "Software Engineering",
    image: capSoftware,
    items: [
      "Backend development (Node.js, Python, Java, .NET)",
      "Frontend development (React, Vue, Angular)",
      "API-first and service-oriented architectures",
      "Monolith modernization and system refactoring",
    ],
  },
  {
    title: "Salesforce & Apex Engineering",
    image: capSalesforce,
    items: [
      "Advanced Apex development",
      "Lightning Web Components (LWC)",
      "Custom objects, workflows, triggers, and integrations",
      "Enterprise-grade Salesforce architectures",
    ],
  },
  {
    title: "Architecture & Scalability",
    image: capArchitecture,
    items: [
      "Clean Architecture and Domain-Driven Design (DDD)",
      "High-availability and fault-tolerant systems",
      "Performance optimization and technical debt reduction",
      "Secure authentication and authorization models",
    ],
  },
  {
    title: "Quality & Delivery",
    image: capQuality,
    items: [
      "Code reviews and technical leadership",
      "CI/CD pipelines",
      "Automated testing strategies",
      "Documentation and knowledge transfer",
    ],
  },
];

const DELIVERY = [
  "Staff Augmentation (Jr, Mid, Senior, Tech Leads)",
  "Long-term team extensions",
  "Direct collaboration with internal engineering and product teams",
];

const WHY = [
  "Senior-first mindset",
  "Strong technical leadership",
  "Proven experience with enterprise U.S. clients",
  "Nearshore efficiency without compromising quality",
];

const SERVICES = [
  "Staff Augmentation",
  "Custom Software Development",
  "Enterprise Platform Development",
  "Ongoing Technical Support and Evolution",
];

const INDUSTRIES = [
  "Home Services & Construction",
  "Enterprise Platforms (Salesforce-based systems)",
  "Logistics & Operations",
  "Technology-driven businesses",
];

const HOW_WE_WORK = [
  "Teams aligned to U.S. business hours",
  "Clear communication and accountability",
  "Flexible scaling as your needs grow",
];

function AboutPage() {
  return (
    <>
      <section className="surface-noise bg-deep-gradient px-6 pb-24 pt-40 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.28em] text-accent">About</p>
          <h1 className="mt-6 max-w-4xl font-display text-4xl leading-[1.08] text-balance-tight sm:text-6xl">
            Who We Are
          </h1>
          <div className="mt-10 grid max-w-4xl gap-6 text-foreground/70 sm:grid-cols-2">
            <p>
              Imagina Devs is a nearshore software development partner specialized in building,
              scaling, and operating mission-critical systems for U.S. companies. We integrate
              senior engineering talent directly into your teams, aligned to U.S. time zones and
              enterprise standards.
            </p>
            <p>
              We focus on long-term partnerships, not short-term outsourcing. Our teams work as an
              extension of your engineering and product organization, with clear communication,
              accountability and flexible scaling.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-light py-24 text-light-foreground">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <h2 className="max-w-2xl font-display text-3xl leading-tight text-balance-tight sm:text-5xl">
              Core Technical Capabilities
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CAPABILITIES.map((c, i) => (
              <Reveal key={c.title} delay={i * 90}>
                <div className="h-full overflow-hidden rounded-2xl border border-light-foreground/10 bg-white/50">
                  <img
                    src={c.image}
                    alt={c.title}
                    loading="lazy"
                    width={1280}
                    height={860}
                    className="h-40 w-full object-cover"
                  />
                  <div className="p-8">
                  <h3 className="font-display text-xl">{c.title}</h3>
                  <ul className="mt-5 space-y-3 text-sm text-light-foreground/70">
                    {c.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="text-green-ink">●</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="surface-noise bg-deep-gradient py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-2">
            <Reveal>
              <h2 className="font-display text-3xl leading-tight sm:text-4xl">Delivery Model</h2>
              <ul className="mt-8 space-y-4 text-foreground/70">
                {DELIVERY.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-accent">●</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={100}>
              <h2 className="font-display text-3xl leading-tight sm:text-4xl">Why Imagina Devs</h2>
              <ul className="mt-8 space-y-4 text-foreground/70">
                {WHY.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-accent">●</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-light py-24 text-light-foreground">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <h2 className="max-w-2xl font-display text-3xl leading-tight text-balance-tight sm:text-5xl">
              What We Do
            </h2>
            <p className="mt-5 max-w-2xl text-light-foreground/70">
              Imagina Devs helps U.S. companies design and build reliable software through
              high-quality nearshore development teams.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            <Reveal delay={90}>
              <div className="h-full rounded-2xl border border-light-foreground/10 bg-white/50 p-8">
                <h3 className="font-display text-xl">How We Create Value</h3>
                <ul className="mt-5 space-y-3 text-sm text-light-foreground/70">
                  <li className="flex gap-3">
                    <span className="text-green-ink">●</span>
                    <span>We extend your team with experienced developers</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-ink">●</span>
                    <span>We accelerate delivery without increasing internal overhead</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-ink">●</span>
                    <span>We reduce risk by providing stable, long-term engineering capacity</span>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div className="h-full rounded-2xl border border-light-foreground/10 bg-white/50 p-8">
                <h3 className="font-display text-xl">Our Services</h3>
                <ul className="mt-5 space-y-3 text-sm text-light-foreground/70">
                  {SERVICES.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="text-green-ink">●</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={270}>
              <div className="h-full rounded-2xl border border-light-foreground/10 bg-white/50 p-8">
                <h3 className="font-display text-xl">How We Work</h3>
                <ul className="mt-5 space-y-3 text-sm text-light-foreground/70">
                  {HOW_WE_WORK.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="text-green-ink">●</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="surface-noise bg-deep-gradient py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <h2 className="max-w-2xl font-display text-3xl leading-tight text-balance-tight sm:text-5xl">
              Industries We Support
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {INDUSTRIES.map((item, i) => (
              <Reveal key={item} delay={i * 90}>
                <div className="rounded-2xl border border-border bg-surface/40 p-6">
                  <span className="text-accent">●</span>
                  <p className="mt-3 font-display text-lg">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ClientLogos />

      <section className="surface-noise bg-deep-gradient py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-3xl sm:text-4xl">Let&apos;s build what&apos;s next.</h2>
          <Link
            to="/contact"
            className="mt-8 inline-flex rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-transform duration-300 hover:-translate-y-0.5"
          >
            Talk to us →
          </Link>
        </div>
      </section>
    </>
  );
}
