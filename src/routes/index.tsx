import { createFileRoute, Link } from "@tanstack/react-router";
import { Boxes, Cloud, Code2, Layers, Radar, Users } from "lucide-react";
import { Hero } from "@/components/site/Hero";
import { ClientLogos } from "@/components/site/ClientLogos";
import { Reveal, CountUp } from "@/components/site/Reveal";
import caseRenuity from "@/assets/case-renuity.jpg";
import caseAgione from "@/assets/case-agione.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Imagina Devs — Nearshore Engineering Teams for U.S. Companies" },
      {
        name: "description",
        content:
          "Senior nearshore engineering talent for U.S. companies: staff augmentation, Salesforce experts and custom software development.",
      },
      { property: "og:title", content: "Imagina Devs — Nearshore Engineering Teams" },
      {
        property: "og:description",
        content: "Senior engineering talent and software expertise, aligned with your team.",
      },
    ],
  }),
  component: Home,
});

const SERVICES = [
  {
    icon: Users,
    title: "Staff Augmentation",
    copy: "Extend your engineering team with experienced developers.",
  },
  {
    icon: Cloud,
    title: "Salesforce Experts",
    copy: "Add specialized Salesforce engineering capacity.",
  },
  {
    icon: Code2,
    title: "Custom Software Development",
    copy: "Build software tailored to your business and operational needs.",
  },
];

const INDUSTRIES = [
  {
    icon: Radar,
    title: "Home Services & Field Operations",
    copy: "Software for field teams, scheduling, mobile operations and workflow optimization.",
  },
  {
    icon: Layers,
    title: "Logistics & Mission-Critical Operations",
    copy: "Reliable software for complex, real-time and multi-site operations.",
  },
  {
    icon: Boxes,
    title: "Enterprise Salesforce",
    copy: "Engineering expertise for Salesforce-based platforms, extensions and integrations.",
  },
];

const WHY = [
  { title: "Senior talent", copy: "Experienced engineers integrated directly into your team." },
  { title: "U.S. time zone aligned", copy: "Real-time collaboration with your team." },
  {
    title: "Long-term partnership",
    copy: "Stable engineering capacity built for ongoing collaboration.",
  },
  {
    title: "Flexible scaling",
    copy: "Increase or evolve your engineering capacity as needs change.",
  },
];

function Home() {
  return (
    <>
      <Hero />

      <section className="bg-deep py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:grid-cols-3 lg:px-10">
          {[
            { value: <CountUp to={8} suffix="+" />, label: "Years — long-term client partnership" },
            { value: "Senior", label: "Engineering — experienced technical teams" },
            { value: "U.S.", label: "Aligned — direct collaboration with U.S. teams" },
          ].map((item, i) => (
            <Reveal key={i} delay={i * 90}>
              <p className="font-display text-4xl text-accent">{item.value}</p>
              <p className="mt-3 text-sm text-foreground/65">{item.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <ClientLogos />

      {/* What we do — light */}
      <section id="what-we-do" className="bg-light-gradient py-28 text-light-foreground">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <h2 className="max-w-2xl font-display text-3xl leading-tight text-balance-tight sm:text-5xl">
              Built for teams that need to move fast
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-light-foreground/10 bg-light-foreground/10 sm:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={i * 110} className="bg-light">
                <div className="h-full p-8">
                  <s.icon className="size-6 text-green-ink" strokeWidth={1.5} />
                  <h3 className="mt-6 font-display text-xl">{s.title}</h3>
                  <p className="mt-3 text-sm text-light-foreground/70">{s.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <Link
              to="/expertise"
              className="mt-12 inline-flex text-sm font-medium text-green-ink transition-transform duration-300 hover:translate-x-1"
            >
              Explore our expertise →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Industries — dark */}
      <section id="expertise" className="surface-noise bg-deep-gradient py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <h2 className="max-w-2xl font-display text-3xl leading-tight sm:text-5xl">
              Industries & Expertise
            </h2>
            <p className="mt-5 max-w-xl text-foreground/65">
              Technology expertise shaped by complex operations, real-world challenges and
              long-term partnerships.
            </p>
          </Reveal>
          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {INDUSTRIES.map((s, i) => (
              <Reveal key={s.title} delay={i * 110}>
                <div className="h-full rounded-2xl border border-border bg-surface/40 p-8 transition duration-500 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[var(--shadow-accent)]">
                  <s.icon className="size-6 text-accent" strokeWidth={1.5} />
                  <h3 className="mt-6 font-display text-xl">{s.title}</h3>
                  <p className="mt-3 text-sm text-foreground/65">{s.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <Link
              to="/expertise"
              className="mt-12 inline-flex text-sm font-medium text-accent transition-transform duration-300 hover:translate-x-1"
            >
              Explore our expertise →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Case studies — light */}
      <section id="case-studies" className="bg-light py-28 text-light-foreground">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <h2 className="max-w-2xl font-display text-3xl leading-tight sm:text-5xl">
              Real impact for real clients
            </h2>
            <p className="mt-5 max-w-xl text-light-foreground/70">
              A few examples of how Imagina helps teams improve operations, modernize software and
              scale technology.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            {[
              {
                to: "/case-studies/renuity" as const,
                img: caseRenuity,
                name: "Renuity",
                cat: "Home Services & Field Operations",
                copy: "Route optimization and mobile technology for field teams.",
              },
              {
                to: "/case-studies/agione" as const,
                img: caseAgione,
                name: "AgiOne",
                cat: "Logistics & Airport Operations",
                copy: "A unified platform for complex airport operations.",
              },
            ].map((c, i) => (
              <Reveal key={c.name} delay={i * 120}>
                <Link to={c.to} className="group block">
                  <div className="overflow-hidden rounded-2xl">
                    <img
                      src={c.img}
                      alt={`${c.name} case study`}
                      loading="lazy"
                      width={1280}
                      height={860}
                      className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <p className="mt-6 text-xs uppercase tracking-[0.22em] text-green-ink">{c.cat}</p>
                  <h3 className="mt-3 font-display text-2xl">{c.name}</h3>
                  <p className="mt-2 text-sm text-light-foreground/70">{c.copy}</p>
                  <span className="mt-4 inline-flex text-sm font-medium text-green-ink transition-transform duration-300 group-hover:translate-x-1">
                    See the full story →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why / About — dark */}
      <section id="about" className="bg-deep py-28">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <Reveal>
            <h2 className="font-display text-3xl leading-tight sm:text-5xl">
              Your engineering team, extended.
            </h2>
            <p className="mt-6 max-w-md text-foreground/65">
              Imagina Devs is a nearshore software development partner for U.S. companies,
              providing senior engineering talent through staff augmentation and custom
              development.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex text-sm font-medium text-accent transition-transform duration-300 hover:translate-x-1"
            >
              More about Imagina →
            </Link>
          </Reveal>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
            {WHY.map((w, i) => (
              <Reveal key={w.title} delay={i * 90} className="bg-deep">
                <div className="h-full p-8">
                  <h3 className="font-display text-lg">{w.title}</h3>
                  <p className="mt-3 text-sm text-foreground/65">{w.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="surface-noise bg-deep-gradient py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
          <Reveal>
            <h2 className="font-display text-3xl leading-tight sm:text-5xl">
              Ready to scale your engineering team?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-foreground/65">
              Tell us what you&apos;re building, what you&apos;re trying to solve, or where your
              team needs support.
            </p>
            <Link
              to="/contact"
              className="mt-9 inline-flex rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-transform duration-300 hover:-translate-y-0.5"
            >
              Let&apos;s talk →
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
