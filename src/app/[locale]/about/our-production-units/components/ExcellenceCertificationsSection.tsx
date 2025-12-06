"use client";

import clsx from "clsx";
import Image from "next/image";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { useGetCertificatesQuery } from "@/graphql/certifications/queries/getCertificates.generated";
import Skeleton from "react-loading-skeleton";

const ExcellenceCertificationsSection = () => {
  const fallBackSrc = '/errorImg.webp';
  const t = useTranslations("AboutUs.OurProductionUnits");
  const [imageError, setImageError] = useState(false);
  const [activeFilter, setActiveFilter] = useState<"all" | "colombia" | "costarica">("all");
  const { data: allCertifications, loading, error } = useGetCertificatesQuery();
  const { data: colombia, loading: colombiaLoading, error: colombiaError } = useGetCertificatesQuery({
    variables: {slug: "proquinal-colombia"}
  });
  const { data: costaRica, loading: costaRicaLoading, error: costaRicaError } = useGetCertificatesQuery({
    variables: {slug: "proquinal-costa-rica"}
  });

  if (loading || colombiaLoading || costaRicaLoading) {
    return <Skeleton count={3} />
  }

  const icons =
    activeFilter === "all"
      ? allCertifications
      : activeFilter === "colombia"
      ? colombia
      : costaRica;

  return (
    <section className="px-4 py-10 md:text-center justify-center items-center flex flex-col gap-4 md:mx-[10%]">
      <h2 className="max-w-[60%] mx-auto">{t("certificationsOfExcellence")}</h2>
      <p className="max-w-[70%] mx-auto">{t("certificationsOfExcellenceDesc")}</p>

      <div className="flex flex-wrap justify-center mb-6 w-fit border border-(--spg-link) rounded">
        <button
          className={clsx('px-3 text-(--spg-text) py-2 text-sm rounded-l', {
            "bg-(--spg-link) text-(--spg-link)!": activeFilter === "all" 
          })}
          onClick={() => setActiveFilter("all")}
        >
          {t("bothPlants")}
        </button>
        <button
          className={clsx('px-3 text-(--spg-text) py-2 border-x border-(--spg-link) text-sm', {
            "bg-(--spg-link) text-(--spg-link)!": activeFilter === "colombia"
          })}
          onClick={() => setActiveFilter("colombia")}
        >
          {t("colombiaPlant")}
        </button>
        <button
          className={clsx('px-3 text-(--spg-text) py-2 text-sm rounded-r', {
            "bg-(--spg-link) text-(--spg-link)!": activeFilter === "costarica"
          })}
          onClick={() => setActiveFilter("costarica")}
        >
          {t("costaRicaPlant")}
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
        {icons?.certificates?.edges.map((icon, index) => (
          <div key={index} className="w-full md:w-auto flex justify-center">
            <Image
              src={imageError ? fallBackSrc : (icon?.node?.imageThumb as string)}
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

export default ExcellenceCertificationsSection;
