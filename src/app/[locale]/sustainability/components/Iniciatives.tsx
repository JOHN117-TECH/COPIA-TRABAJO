"use client";

import { useTranslations } from "next-intl";
import InfoHighlightCard from "../../../../components/InfoHighlightCard";
import { INFO_CARDS } from "@/utilities/constants";

export default function Iniciatives() {
  const t = useTranslations("Sustainability");

  return (
    <div className="flex flex-col w-full text-left md:text-center gap-10">
      <h1 className="px-[5%] text-(--spg-text)">{t("initiatives")}</h1>
      <div className="flex flex-col md:flex-row w-full mt-10">
        {INFO_CARDS.slice(0, 2).map((slide, idx) => (
          <InfoHighlightCard
            key={idx}
            imageSrc={slide.src}
            imageAlt={slide.title}
            title={slide.title}
            description={slide.description}
            ctaText={slide.buttonText}
            ctaLink={slide.buttonLink}
          />
        ))}
      </div>
    </div>
  );
}
