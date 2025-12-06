"use client";

import { useLocale, useTranslations } from "next-intl";
import { Button, ButtonIcon, ButtonText } from "@/components/Button";
import ButtonType from "@/models/buttonType";

const Engaged =  () => {
  const locale = useLocale();
  const t =  useTranslations("Sustainability.Engaged");

  return (
    <section className="bg-(--spg-primary) py-10 px-8 lg:px-0 flex flex-col md:flex-row gap-4 justify-evenly md:items-center">
      <div className="flex flex-col justify-center w-full md:w-1/2 content-center text-center lg:text-left">
        <h3 className="text-white leading-tight">{t("title")}</h3>
        <p className="text-white mt-4 px-4 lg:px-0 font-medium">
          {t("description")}
        </p>
      </div>
      <Button 
        design={ButtonType.FILLED_WHITE_MEDIUM} 
        onClick={() => window.open(`https://vacantes.spradling.group/${locale}`, '_blank')}
      >
        <ButtonText text={t("button")} />
        <ButtonIcon className="icon-arrow-right" />
      </Button>
    </section>
  );
};

export default Engaged;
