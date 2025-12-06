import React from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactForm from '@/components/forms/ContactForm';
import ApplicationTabs from './components/ApplicationTabs';
import RelatedProjects from './components/RelatedProjects';
import FeaturedProducts from './components/FeaturedProducts';
import capitalizeFirstLetter from '@/hooks/useCapitalizeText';
import { PageProps } from '../../../../../.next/types/app/[locale]/markets/[market]/page';

const Market = async ({ params }: PageProps) => {
  const paramsValue = await params;
  const { market } = paramsValue;

  return (
    <div>
      <section className="hidden md:block bg-white px-[10%] py-8">
        <Breadcrumbs />
      </section>
      <div className="relative bg-cover bg-center bg-no-repeat h-[500px] bg-[url(/banner1.png)]">
        <div className="absolute inset-0 opacity-50 bg-black"/>
        <div className="relative z-10 text-white p-8 h-full flex flex-col justify-center items-center">
          <h1 className="text-white">{capitalizeFirstLetter(market)}</h1>
          <p className="mt-2 max-w-[90%] md:max-w-[50%] text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta officia tempore nisi magni amet, sunt enim quos obcaecati consequuntur ducimus dolor quo vitae! Recusandae unde optio expedita consectetur consequatur dolores?</p>
        </div>
      </div>
      <ApplicationTabs />
      <section id="featured-collections" className="w-full py-16">
        <FeaturedProducts market={market} />
      </section>
      <RelatedProjects />
      <ContactForm formType={'home'}/>
    </div>
  )
}

export default Market