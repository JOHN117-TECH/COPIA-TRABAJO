"use client";

import React from 'react'
import Breadcrumbs from '@/components/Breadcrumbs'
import PurposeSection from './components/PurposeSection';
import Certifications from '../components/Certifications';
import InspirationSection from './components/InspirationSection';
import ExcellenceCertificationsSection from './components/ExcellenceCertificationsSection';

import { Slider } from '@/components/slider/Slider'
import { useTranslations } from 'next-intl';
import { OPU_BANNER } from '@/utilities/constants'

const OurProductionUnits = () => {
  const t = useTranslations('AboutUs.OurProductionUnits');
  
  return (
    <div>
      <section className="hidden md:block bg-white px-[10%] py-8">
        <Breadcrumbs />
      </section>
      <Slider items={OPU_BANNER} >
        <Slider.Simple hasTranslation/>
      </Slider>

      <InspirationSection />
      <PurposeSection />
      <ExcellenceCertificationsSection />
      <Certifications />
    </div>
  )
}

export default OurProductionUnits