import React from 'react'
import { useTranslations } from 'next-intl';
import ButtonType from '@/models/buttonType';
import { Button, ButtonIcon, ButtonText } from '@/components/Button'

const Certifications = () => {
  const t = useTranslations('AboutUs.WhyChooseSpradling');
  
  return (
    <section className="flex flex-col md:flex-row gap-4 items-center justify-between px-[5%] py-10 bg-(--gray-10) mx-[10%] rounded-md">
      <p>{t("moreInfo")}</p>
      <Button design={ButtonType.FILLED_SMALL}>
        <ButtonText text={t("goToCatalog")} />
        <ButtonIcon className="icon-arrow-right" />
      </Button>
    </section>
  )
}

export default Certifications