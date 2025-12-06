import React from 'react'
import CoatedFabricsCard from './CoatedFabricsCard';

import { useTranslations } from 'next-intl';
import { Slider } from '@/components/slider/Slider';
import { WCS_CARDS_COATED_FABRICS } from '@/utilities/constants';
import CertificationCard from '@/components/CertificationCard';

const CoatedFabricsSection = () => {
  const t = useTranslations('AboutUs.WhyChooseSpradling');
  
  return (
    <section className='mb-16'>
      <div className='md:max-w-[50%] mx-auto text-center mb-2 md:mb-8 px-4 md:px-8'>
        <h2 className='leading-tight mb-6'>{t("coatedFabrics")}</h2>
        <p>{t("coatedFabricsDesc")}</p>
      </div>
      <section className='hidden md:grid md:grid-cols-3 gap-4 gap-y-6 px-[10%]'>
        {
          WCS_CARDS_COATED_FABRICS.map((item, index) => (
            <>
            {/* <CoatedFabricsCard key={index} item={item} /> */}
            <CertificationCard
              key={index}
              item={item}
              translateKey="AboutUs.WhyChooseSpradling"
              orientation='horizontal'
            />
            </>
          ))
        }
      </section>
      <section className='md:hidden px-4'>
        <Slider items={WCS_CARDS_COATED_FABRICS} showArrows>
          <Slider.Continuous slidesToShow={2}>
            {/* @ts-ignore */}
            <CertificationCard 
              translateKey="AboutUs.WhyChooseSpradling"
            />
            {/* <CoatedFabricsCard /> */}
          </Slider.Continuous>
        </Slider>
      </section>
    </section>
  )
}

export default CoatedFabricsSection