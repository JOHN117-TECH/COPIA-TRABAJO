"use client";

import { useTranslations } from "next-intl";
import ButtonType from "@/models/buttonType";
import { TABS } from "@/utilities/constants";
import CertificationsTabs from "./CertificationsTabs";
import { Button, ButtonIcon, ButtonText } from "@/components/Button";

export default function Certifications() {
  const t = useTranslations("Sustainability.Certifications");

  return (
    <div className="flex flex-col w-full mt-20 text-left md:text-center gap-10 mb-20">
      <h1 className="px-[5%] text-(--spg-text)">{t("title")}</h1>
      <p className="px-[5%] md:px-[25%] text-xl">{t("description")}</p>
      <CertificationsTabs tabs={TABS}/>
      <section className="hidden md:flex flex-row items-center justify-between px-[5%] py-10 bg-(--gray-10) mx-[10%] rounded-md">
        <p>{t("moreInfo")}</p>
        <Button design={ButtonType.FILLED_SMALL}>
          <ButtonText text={t("goToCatalog")} />
          <ButtonIcon className="icon-arrow-right" />
        </Button>
      </section>
    </div>
  );
}
