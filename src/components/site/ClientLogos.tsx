import renuity from "@/assets/logos/logo-renuity.png.asset.json";
import agione from "@/assets/logos/logo-agione.png.asset.json";
import bbva from "@/assets/logos/logo-BBVA.png.asset.json";
import nutresa from "@/assets/logos/logo-Nutresa.png.asset.json";
import bimbo from "@/assets/logos/logo-bimbo.png.asset.json";
import dane from "@/assets/logos/logo-dane.png.asset.json";
import amazonia from "@/assets/logos/logo-amazonia.png.asset.json";

const LOGOS = [
  { src: renuity.url, alt: "Renuity" },
  { src: agione.url, alt: "AgiOne" },
  { src: bbva.url, alt: "BBVA" },
  { src: nutresa.url, alt: "Nutresa" },
  { src: bimbo.url, alt: "Bimbo" },
  { src: dane.url, alt: "DANE" },
  { src: amazonia.url, alt: "Amazonía" },
];

import { useI18n } from "@/i18n/LanguageProvider";

export function ClientLogos() {
  const { t } = useI18n();
  return (
    <section className="border-y border-border bg-deep py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="text-center text-xs uppercase tracking-[0.28em] text-muted-foreground">
          {t("Trusted by teams building complex operations")}
        </p>
        <div className="mt-10 grid grid-cols-2 items-center gap-x-10 gap-y-10 sm:grid-cols-4 lg:grid-cols-7">
          {LOGOS.map((logo) => (
            <img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              loading="lazy"
              className="mx-auto h-9 w-auto max-w-[130px] object-contain opacity-55 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
