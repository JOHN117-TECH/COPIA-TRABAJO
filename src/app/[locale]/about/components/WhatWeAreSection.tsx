import React from 'react'
import WhatWeAreCard from './WhatWeAreCard';
import { useTranslations } from 'next-intl';
import { Slider } from '@/components/slider/Slider';
import { WAS_WHAT_WE_ARE } from '@/utilities/constants';

const WhatWeAreSection = () => {
  const t = useTranslations('AboutUs.WeAreSpradling');
  
  return (
    <>
      <div className='md:max-w-[50%] mx-auto text-center py-8 px-8'>
        <h2 className='leading-tight'>{t("whatWeAre")}</h2>
        <p>{t("whatWeAreDesc")}</p>
      </div>
      <section className='hidden md:grid md:grid-cols-3'>
        {WAS_WHAT_WE_ARE.map((item, index) => (
          <WhatWeAreCard key={index} item={item} index={index} />
        ))}
      </section>
      <section className='md:hidden'>
        <Slider items={WAS_WHAT_WE_ARE} showArrows>
          <Slider.Continuous slidesToShow={1}>
            {/* @ts-ignore */}
            <WhatWeAreCard />
          </Slider.Continuous>
        </Slider>
      </section>
    </>
  )
}

export default WhatWeAreSection