"use client";

import { Button, ButtonIcon, ButtonText } from "@/components/Button";
import SPGLink from "@/components/Link";
import ButtonType from "@/models/buttonType";
import { formatTextWithLineBreaks } from "@/utilities/helpers/formatTextWithLineBreaks";
import { useTranslations } from "next-intl";
import Image from "next/image";
import success from "../../../assets/images/success.png"; 

export default function SuccessPage() {
  const t = useTranslations("verifyAccount");

  return (
    <div className="container mx-auto px-2 pt-38 pb-24 flex flex-col items-start justify-start">
      <Image
        src={success}
        alt="success"
        width={80}
        height={80}
        unoptimized
      />
      <h1 className="text-black text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mt-4 mb-4">
        {formatTextWithLineBreaks(t("successTitle"), { showBreaks: true })}
      </h1>
      <p className="font-medium text-lg lg:text-2xl mb-8">{t("successMessage")}</p>
      <SPGLink path="/login" className= "mb-2">
        <Button design={ButtonType.FILLED_MEDIUM}>
          <ButtonText className="font-medium pl-4" text={t("goToLogin")}/>
          <ButtonIcon className="icon-arrow-right pr-4 text-xl"/>
        </Button>
      </SPGLink>
    </div>
  );
}
