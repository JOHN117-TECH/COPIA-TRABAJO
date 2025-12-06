"use client";

import React from 'react'
import Breadcrumbs from '@/components/Breadcrumbs';
import Certifications from '../components/Certifications';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import CoatedFabricsSection from './components/CoatedFabricsSection';
import AroundTheWorldSection from './components/AroundTheWorldSection';
import DesignPerspectiveSection from './components/DesignPerspectiveSection';

import { Slider } from '@/components/slider/Slider'
import { WCS_BANNER } from '@/utilities/constants'

const WhyChooseSpradling = () => {
  
  return (
    <div>
      <section className="hidden md:block bg-white px-[10%] py-8">
        <Breadcrumbs />
      </section>
      <Slider items={WCS_BANNER} >
        <Slider.Simple hasTranslation/>
      </Slider>

      <WhyChooseUsSection />      
      <DesignPerspectiveSection />
      <CoatedFabricsSection />
      <Certifications />
      <AroundTheWorldSection />
    </div>
  )
}

export default WhyChooseSpradling