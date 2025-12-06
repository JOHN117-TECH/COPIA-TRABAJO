import React from 'react'
import { SERVICES } from '@/utilities/constants';
import Breadcrumbs from '@/components/Breadcrumbs';
import DataSection from './components/DataSection';
import ContactForm from '@/components/forms/ContactForm';
import BenefitsSection from './components/BenefitsSection';
import DownloadLibrary from './components/DownloadLibrary';
import DataVideoSection from './components/DataVideoSection';
import { PageProps } from '../../../../../.next/types/app/[locale]/services/[slug]/page';

const Services = async({ params }: PageProps) => {
  const paramsValue = await params;
  const { slug } = paramsValue;
  const data = SERVICES[slug as keyof typeof SERVICES];

  return (
    <div>
      <section className='mx-[10%] py-8'>
        <Breadcrumbs />
      </section>
      <DataSection 
        image={data.image}
        title={data.title}
        description={data.description}
      />
      <DataVideoSection src={data.src} paragraph={data.description2} />
      <DataSection 
        image={data.howIsMadeImage}
        title={'howIsMade'}
        description={data.howIsMadeDesc}
      />
      <BenefitsSection data={data.benefits} />
      {data.patternLibrary && <DownloadLibrary data={data.patternLibrary} slug={slug} />}
      <ContactForm formType={'home'}/>
    </div>
  )
}

export default Services