import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useI18n } from "@/i18n/LanguageProvider";

export function Carousel({ images, alt }: { images: string[]; alt: string }) {
  const [index, setIndex] = useState(0);
  const total = images.length;
  const { t } = useI18n();

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-2xl border border-border">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`${alt} ${i + 1}`}
              loading={i === 0 ? "eager" : "lazy"}
              width={1280}
              height={860}
              className="h-[320px] w-full shrink-0 object-cover sm:h-[460px]"
            />
          ))}
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <div className="flex gap-2">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              aria-label={`${t("Go to image")} ${i + 1}`}
              onClick={() => setIndex(i)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                i === index ? "w-8 bg-accent" : "w-3 bg-foreground/25",
              )}
            />
          ))}
        </div>
        <div className="flex gap-3">
          <button
            type="button"
            aria-label={t("Previous image")}
            onClick={prev}
            className="inline-flex size-10 items-center justify-center rounded-full border border-border transition-colors hover:border-accent hover:text-accent"
          >
            <ArrowLeft className="size-4" />
          </button>
          <button
            type="button"
            aria-label={t("Next image")}
            onClick={next}
            className="inline-flex size-10 items-center justify-center rounded-full border border-border transition-colors hover:border-accent hover:text-accent"
          >
            <ArrowRight className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
