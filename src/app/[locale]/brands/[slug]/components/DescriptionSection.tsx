import { useTranslations } from 'next-intl';
import React from 'react'

const DescriptionSection = ({ slug }: {slug: string}) => {
  const t = useTranslations('Brands.'+ slug);

  return (
    <div className="bg-white py-20 px-8 space-y-4">
      <p className='md:max-w-[40%] mx-auto font-bold'>{t("subtitle")}</p>
      <p className='md:max-w-[40%] mx-auto'>{t("textSubtitle")}</p>
    </div>
  )
}

export default DescriptionSection