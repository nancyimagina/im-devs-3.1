import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { BLOG_POSTS } from "@/data/blog";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — Engineering Insights | Imagina Devs" },
      {
        name: "description",
        content:
          "Articles on nearshore engineering teams, enterprise Salesforce development and modernizing mission-critical operations software.",
      },
      { property: "og:title", content: "Blog | Imagina Devs" },
      {
        property: "og:description",
        content: "Engineering insights on nearshore teams, Salesforce and modernization.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <>
      <section className="surface-noise bg-deep-gradient px-6 pb-20 pt-40 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.28em] text-accent">Blog</p>
          <h1 className="mt-6 max-w-3xl font-display text-4xl leading-[1.08] sm:text-6xl">
            Engineering insights.
          </h1>
          <p className="mt-6 max-w-xl text-foreground/65">
            Notes from building and scaling software with nearshore engineering teams.
          </p>
        </div>
      </section>

      <section className="bg-deep pb-28 pt-10">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-3 lg:px-10">
          {BLOG_POSTS.map((p, i) => (
            <Reveal key={p.slug} delay={i * 110}>
              <Link to="/blog/$slug" params={{ slug: p.slug }} className="group block h-full">
                <div className="overflow-hidden rounded-2xl border border-border">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    width={1280}
                    height={860}
                    className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="mt-6 text-xs uppercase tracking-[0.22em] text-accent">{p.category}</p>
                <h2 className="mt-3 font-display text-xl leading-snug">{p.title}</h2>
                <p className="mt-3 text-sm text-foreground/65">{p.excerpt}</p>
                <p className="mt-4 text-xs text-foreground/45">
                  {p.date} · {p.readTime}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
