"use client"

import { formatTextWithLineBreaks } from "@/utilities/helpers/formatTextWithLineBreaks"
import { useTranslations } from "next-intl"

const Accounts = () => {
  const t = useTranslations("verifyAccount")
  return (
    <div className="container mx-auto px-2 pt-38 pb-24 flex flex-col items-start justify-start">
      <h1 className="text-black text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mt-4 mb-4">
        {formatTextWithLineBreaks(t("title"), { showBreaks: true })}
      </h1>
      <p className="font-medium text-lg lg:text-2xl mb-0">{t("description")}</p>
    </div>
  )
}

export default Accounts;