import { useTranslations } from 'next-intl';
import React from 'react'
import PurposeTab from './PurposeTab';

const PurposeSection = () => {
  const t = useTranslations('AboutUs.OurProductionUnits');
  
  return (
    <div className='bg-white'>
      <div className='md:max-w-[50%] mx-auto text-center py-8 px-8'>
        <h2 className='leading-tight mb-6'>{t("purposeTitle")}</h2>
        <p>{t("purposeDesc")}</p>
      </div>
      <PurposeTab />
    </div>
  )
}

export default PurposeSection