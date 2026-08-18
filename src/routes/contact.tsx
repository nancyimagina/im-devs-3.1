import { createFileRoute } from "@tanstack/react-router";
import { ContactForm } from "@/components/site/ContactForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Let's Build What's Next | Imagina Devs" },
      {
        name: "description",
        content:
          "Tell us what you're building or where your team needs engineering support. Start a conversation with Imagina Devs.",
      },
      { property: "og:title", content: "Contact | Imagina Devs" },
      {
        property: "og:description",
        content: "Start a conversation about staff augmentation, Salesforce or custom software.",
      },
    ],
  }),
  component: ContactPage,
});

const POINTS = [
  "Senior engineers integrated with your team",
  "U.S. time zone aligned collaboration",
  "Flexible scaling as your needs change",
];

function ContactPage() {
  return (
    <section className="surface-noise min-h-screen bg-deep-gradient px-6 pb-28 pt-40 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-accent">Contact</p>
          <h1 className="mt-6 font-display text-4xl leading-[1.08] sm:text-6xl">
            Let&apos;s build what&apos;s next.
          </h1>
          <p className="mt-6 max-w-md text-foreground/65">
            Tell us what you&apos;re building, what you&apos;re trying to solve, or where your team
            needs support.
          </p>
          <ul className="mt-10 grid gap-4">
            {POINTS.map((p) => (
              <li key={p} className="flex items-center gap-3 text-sm text-foreground/70">
                <span className="size-1.5 rounded-full bg-accent" />
                {p}
              </li>
            ))}
          </ul>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
