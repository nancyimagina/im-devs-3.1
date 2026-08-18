import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { ClientLogos } from "@/components/site/ClientLogos";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — A Nearshore Partner Built Around Your Team | Imagina Devs" },
      {
        name: "description",
        content:
          "Imagina Devs provides senior engineering talent and custom software development for U.S. companies, aligned with U.S. time zones.",
      },
      { property: "og:title", content: "About | Imagina Devs" },
      {
        property: "og:description",
        content: "A nearshore partner built around your team.",
      },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
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

function AboutPage() {
  return (
    <>
      <section className="surface-noise bg-deep-gradient px-6 pb-24 pt-40 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.28em] text-accent">About</p>
          <h1 className="mt-6 max-w-3xl font-display text-4xl leading-[1.08] sm:text-6xl">
            A nearshore partner built around your team.
          </h1>
          <div className="mt-10 grid max-w-4xl gap-6 text-foreground/70 sm:grid-cols-2">
            <p>
              Imagina Devs provides senior engineering talent and custom software development for
              U.S. companies.
            </p>
            <p>
              The teams work directly with client engineering and product organizations, aligned
              with U.S. time zones and designed for long-term collaboration.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-light py-24 text-light-foreground">
        <div className="mx-auto grid max-w-7xl gap-px overflow-hidden rounded-2xl border border-light-foreground/10 bg-light-foreground/10 px-0 sm:grid-cols-2 lg:mx-auto lg:max-w-6xl">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 90} className="bg-light">
              <div className="h-full p-9">
                <h2 className="font-display text-xl">{v.title}</h2>
                <p className="mt-3 text-sm text-light-foreground/70">{v.copy}</p>
              </div>
            </Reveal>
          ))}
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
