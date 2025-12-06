"use client";

import clsx from "clsx";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useState } from "react";

const Embracing = () => {
  const fallBackSrc = '/errorImg.webp';
  const t = useTranslations("Sustainability");
  const [imageError, setImageError] = useState(false);
  const [activeFilter, setActiveFilter] = useState<"all" | "direct" | "indirect">("all");

  const isEs = false;

  const directSdg = isEs
    ? [
        "/sdg/direct/es/S-WEB-Goal-03.png",
        "/sdg/direct/es/S-WEB-Goal-04.png",
        "/sdg/direct/es/S-WEB-Goal-06.png",
        "/sdg/direct/es/S-WEB-Goal-07.png",
        "/sdg/direct/es/S-WEB-Goal-08.png",
        "/sdg/direct/es/S-WEB-Goal-09.png",
        "/sdg/direct/es/S-WEB-Goal-12.png",
        "/sdg/direct/es/S-WEB-Goal-13.png",
      ]
    : [
        "/sdg/direct/en/a.png",
        "/sdg/direct/en/b.png",
        "/sdg/direct/en/c.png",
        "/sdg/direct/en/d.png",
        "/sdg/direct/en/e.png",
        "/sdg/direct/en/f.png",
        "/sdg/direct/en/g.png",
        "/sdg/direct/en/h.png",
      ];

  const indirectSdg = isEs
    ? [
        "/sdg/indirect/es/S-WEB-Goal-01.png",
        "/sdg/indirect/es/S-WEB-Goal-02.png",
        "/sdg/indirect/es/S-WEB-Goal-15.png",
      ]
    : ["/sdg/indirect/en/i.png", "/sdg/indirect/en/j.png", "/sdg/indirect/en/k.png"];

  const allSdg = [...directSdg, ...indirectSdg];

  const icons =
    activeFilter === "all"
      ? allSdg
      : activeFilter === "direct"
      ? directSdg
      : indirectSdg;

  return (
    <section className="px-4 py-10 md:text-center bg-white items-center flex flex-col gap-4 md:mx-[10%]">
      <h2 className="max-w-[60%] mx-auto">{t("embracingTitle")}</h2>
      <p className="max-w-[60%] mx-auto">{t("embracingDesc")}</p>

      <div className="flex flex-wrap justify-center mb-6 w-fit border border-(--spg-link) rounded">
        <button
          className={clsx('px-3 text-(--spg-text) py-2 text-sm rounded-l', {
            "bg-(--spg-link) text-(--spg-link)!": activeFilter === "all" 
          })}
          onClick={() => setActiveFilter("all")}
        >
          {t("allImpacted")}
        </button>
        <button
          className={clsx('px-3 text-(--spg-text) py-2 border-x border-(--spg-link) text-sm', {
            "bg-(--spg-link) text-(--spg-link)!": activeFilter === "direct"
          })}
          onClick={() => setActiveFilter("direct")}
        >
          {t("directlyImpacted")}
        </button>
        <button
          className={clsx('px-3 text-(--spg-text) py-2 text-sm rounded-r', {
            "bg-(--spg-link) text-(--spg-link)!": activeFilter === "indirect"
          })}
          onClick={() => setActiveFilter("indirect")}
        >
          {t("indirectlyImpacted")}
        </button>
      </div>

      <div
        className={`
          grid gap-3
          grid-cols-3
          md:flex md:flex-wrap md:justify-center
          md:gap-4
          overflow-x-auto md:overflow-visible
        `}
      >
        {icons.map((icon, index) => (
          <div key={index} className="w-full md:w-auto flex justify-center">
            <Image
              src={imageError ? fallBackSrc : (icon as string)}
              alt="text-img"
              width={150}
              height={150}
              className="w-20 h-auto object-contain"
              onError={() => setImageError(true)}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Embracing;
