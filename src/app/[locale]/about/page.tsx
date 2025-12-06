"use client";

import React from 'react'
import Engaged from '@/components/Engaged';
import Timeline from './components/Timeline';
import Breadcrumbs from '@/components/Breadcrumbs';
import LeadingSection from './components/LeadingSection';
import WhatWeAreSection from './components/WhatWeAreSection';
import InpiredEmployeesSection from './components/InpiredEmployeesSection';

import { useTranslations } from 'next-intl';
import { Slider } from '@/components/slider/Slider';
import { SLIDES_BANNER_ABOUT_US, WAS_LEADING } from '@/utilities/constants'

const About = () => {
  const t = useTranslations('AboutUs.WeAreSpradling');
  return (
    <div>
      <section className="hidden md:block bg-white px-[10%] py-8">
        <Breadcrumbs segmentToLabel={() => "WeAreSpradling"}/>
      </section>
      {/* <Slider items={SLIDES_BANNER_ABOUT_US} >
        <Slider.Simple hasTranslation/>
      </Slider> */}

      <WhatWeAreSection />
      <InpiredEmployeesSection />
      <div className='md:max-w-[50%] mx-auto text-center p-8 mt-8 space-y-4'>
        <h2 className='text-(--aqua)'>{t("makeHistory")}</h2>
        <p className='font-medium'>{t("makeHistoryDesc")}</p>
      </div>
      <Timeline />
      <LeadingSection data={WAS_LEADING} />
      <Engaged />
    </div>
  )
}

export default About