"use client";

import { useTranslations } from "next-intl";
import { TABS } from "@/utilities/constants";
import CertificationsTabs from "./CertificationsTabs";

export default function Certifications() {
  const t = useTranslations("Sustainability.Certifications");

  return (
    <div className="flex flex-col w-full mt-20 text-left md:text-center gap-10 mb-20 md:mb-60">
      <h1 className="px-[5%] text-(--spg-text)">{t("title")}</h1>
      <p className="px-[5%] md:px-[25%] text-xl">{t("description")}</p>
      <CertificationsTabs tabs={TABS}/>
    </div>
  );
}
