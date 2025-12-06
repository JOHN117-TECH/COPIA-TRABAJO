"use client";

import { useTranslations } from "next-intl";
import { TESTIMONIAL_CARDS } from "@/utilities/constants";
import InfoHighlightCard from "../../../../../components/InfoHighlightCard";

export default function Testimonial() {
  const t = useTranslations("Sustainability.Testimonial");

  return (
    <div className="flex flex-col w-full text-center items-center gap-6 mt-20">
      <h5 className="w-[70%] text-(--spg-text) hidden md:block leading-tight">{t("title")}</h5>
      <h5 className="px-[5%] text-center text-(--spg-text) md:hidden leading-tight">{t("title")}</h5>
      <p className="px-[5%] md:w-[50%] text-sm md:text-md text-(--spg-text) leading-normal">{t("description")}</p>
      <div className="flex flex-col md:flex-row w-full mt-10">
        {TESTIMONIAL_CARDS.slice(0, 2).map((slide, idx) => (
          <InfoHighlightCard
            key={idx}
            imageSrc={slide.src}
            imageAlt={slide.title}
            title={slide.title}
            description={slide.description}
            className="min-h-[450px]"
          />
        ))}
      </div>
    </div>
  );
}
