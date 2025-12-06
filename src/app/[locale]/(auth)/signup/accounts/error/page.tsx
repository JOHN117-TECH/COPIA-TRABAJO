"use client";

import { useTranslations } from "next-intl";
import error from "../../../assets/images/error.png"; 
import Image from "next/image";
import SPGLink from "@/components/Link";
import { Button, ButtonIcon, ButtonText } from "@/components/Button";
import ButtonType from "@/models/buttonType";

export default function ErrorPage() {
  const t = useTranslations("verifyAccount");

  return (
    <div className="container mx-auto px-2 pt-38 pb-24 flex flex-col items-start justify-start">
      <Image
        src={error}
        alt="error"
        width={80}
        height={80}
        unoptimized
      />
      <h1 className="text-black text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mt-5 mb-4">
        {t("errorTitle")}
      </h1>
      <p className="font-medium text-lg lg:text-2xl mb-8">{t("errorMessage")}</p>
      <SPGLink path="/login" className= "mb-2">
        <Button design={ButtonType.FILLED_MEDIUM}>
          <ButtonText className="font-medium pl-4" text={t("signIn")}/>
          <ButtonIcon className="icon-arrow-right pr-4 text-xl"/>
        </Button>
      </SPGLink>
    </div>
  );
}
