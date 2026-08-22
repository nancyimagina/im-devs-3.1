import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { BLOG_POSTS, getPost } from "@/data/blog";
import { useI18n } from "@/i18n/LanguageProvider";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Article not found | Imagina Devs" }, { name: "robots", content: "noindex" }],
      };
    }
    const { post } = loaderData;
    return {
      meta: [
        { title: `${post.title} | Imagina Devs` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: PostNotFound,
  component: BlogPostPage,
});

function PostNotFound() {
  const { t } = useI18n();
  return (
    <section className="surface-noise min-h-[70vh] bg-deep-gradient px-6 pt-40 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <h1 className="font-display text-4xl">{t("Article not found")}</h1>
        <Link to="/blog" className="mt-6 inline-flex text-sm text-accent">
          {t("← Back to blog")}
        </Link>
      </div>
    </section>
  );
}

function BlogPostPage() {
  const { post } = Route.useLoaderData();
  const others = BLOG_POSTS.filter((p) => p.slug !== post.slug);
  const { t } = useI18n();

  return (
    <>
      <section className="surface-noise bg-deep-gradient px-6 pb-14 pt-40 lg:px-10">
        <div className="mx-auto max-w-3xl">
          <Link to="/blog" className="text-sm text-foreground/60 transition-colors hover:text-accent">
            {t("← Blog")}
          </Link>
          <p className="mt-8 text-xs uppercase tracking-[0.28em] text-accent">{t(post.category)}</p>
          <h1 className="mt-6 font-display text-3xl leading-[1.12] sm:text-5xl">{t(post.title)}</h1>
          <p className="mt-5 text-sm text-foreground/50">
            {t(post.date)} · {t(post.readTime)}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <img
          src={post.image}
          alt={t(post.title)}
          width={1280}
          height={860}
          className="h-[300px] w-full rounded-2xl border border-border object-cover sm:h-[420px]"
        />
      </div>

      <article className="bg-deep py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <p className="text-lg text-foreground/75">{t(post.excerpt)}</p>
          {post.sections.map((s, i) => (
            <Reveal key={s.heading} delay={i * 60}>
              <h2 className="mt-14 font-display text-2xl">{t(s.heading)}</h2>
              {s.paragraphs.map((p) => (
                <p key={p} className="mt-5 text-foreground/70">
                  {t(p)}
                </p>
              ))}
            </Reveal>
          ))}

          <div className="mt-16 border-t border-border pt-10">
            <h2 className="font-display text-xl">{t("More articles")}</h2>
            <div className="mt-6 grid gap-4">
              {others.map((p) => (
                <Link
                  key={p.slug}
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="text-foreground/70 transition-colors hover:text-accent"
                >
                  {t(p.title)} →
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
