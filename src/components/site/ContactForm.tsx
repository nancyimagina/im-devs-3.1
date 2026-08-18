import { useState } from "react";
import { toast } from "sonner";

const CHIPS = ["Staff Augmentation", "Salesforce", "Custom Software", "Other"];

export function ContactForm() {
  const [chips, setChips] = useState<string[]>([]);

  const toggle = (chip: string) =>
    setChips((prev) => (prev.includes(chip) ? prev.filter((c) => c !== chip) : [...prev, chip]));

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        toast.success("Thanks — we'll get back to you shortly.");
        (e.target as HTMLFormElement).reset();
        setChips([]);
      }}
      className="rounded-2xl border border-border bg-surface/60 p-7 backdrop-blur-md sm:p-9"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" />
        <Field label="Work Email" name="email" type="email" />
        <div className="sm:col-span-2">
          <Field label="Company" name="company" />
        </div>
      </div>

      <div className="mt-7">
        <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          What can we help with?
        </span>
        <div className="mt-4 flex flex-wrap gap-2">
          {CHIPS.map((chip) => {
            const active = chips.includes(chip);
            return (
              <button
                key={chip}
                type="button"
                onClick={() => toggle(chip)}
                className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                  active
                    ? "border-accent bg-accent text-accent-foreground"
                    : "border-border text-foreground/70 hover:border-accent hover:text-accent"
                }`}
              >
                {chip}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-7">
        <label htmlFor="message" className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Tell us more
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="mt-3 w-full rounded-xl border border-input bg-deep/40 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent"
          placeholder="What are you building?"
        />
      </div>

      <button
        type="submit"
        className="mt-8 w-full rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-transform duration-300 hover:-translate-y-0.5 sm:w-auto"
      >
        Start a conversation →
      </button>
    </form>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        className="mt-3 w-full rounded-xl border border-input bg-deep/40 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent"
      />
    </div>
  );
}
