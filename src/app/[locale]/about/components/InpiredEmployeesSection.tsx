import React from 'react'
import { useTranslations } from 'next-intl';
import { Slider } from '@/components/slider/Slider';
import { WAS_OUR_ESCENSE } from '@/utilities/constants';

const InpiredEmployeesSection = () => {
  const t = useTranslations('AboutUs.WeAreSpradling');

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 mt-20' >
      <section className='flex flex-col justify-center py-8 pl-[15%] pr-12'>
        <h2 className='leading-tight'>{t("inspiredEmployees")}</h2>
        <p>{t("inspiredEmployeesDesc")}</p>
      </section>
      <section>
        <Slider items={WAS_OUR_ESCENSE} >
          <Slider.OnlyImage/>
        </Slider>
      </section>
    </div>
  )
}

export default InpiredEmployeesSection