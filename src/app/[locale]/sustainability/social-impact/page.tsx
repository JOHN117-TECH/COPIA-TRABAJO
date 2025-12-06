import React from 'react';
import HeroBanner from './components/HeroBanner';
import Commitment from './components/Commitment';
import Breadcrumbs from '@/components/Breadcrumbs';
import Testimonial from './components/Testimonial';
import Engaged from '../../../../components/Engaged';

const SocialImpact = () => {
  return (
    <div className="bg-[#FAFAFA]">
      <section className="hidden md:block px-[10%] py-8 flex gap-4 flex-col w-full z-25 text-center">
        <Breadcrumbs />
      </section>
      <HeroBanner />
      <Commitment />
      <HeroBanner />
      <Testimonial />
      <Engaged />
    </div>

    )
  }

export default SocialImpact