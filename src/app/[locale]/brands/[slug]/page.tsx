import React from 'react'
import { BRANDS } from '@/utilities/constants';
import HowItWorks from './components/HowItWorks';
import Breadcrumbs from '@/components/Breadcrumbs';
import VideoSection from './components/VideoSection';
import ContactForm from '@/components/forms/ContactForm';
import DescriptionSection from './components/DescriptionSection';
import ProductsFeaturingSection from './components/ProductsFeaturingSection';
import { PageProps } from '../../../../../.next/types/app/[locale]/brands/[slug]/page';

const Brand = async ({ params }: PageProps) => {
  const { slug }  = await params;
  const bgImg = "https://s3-us-west-2.amazonaws.com/spradling-misc/images-for-django-fixtures/why-choose-us/design-2.jpg";
  const data = BRANDS[slug as keyof typeof BRANDS];
  
  return (
    <div>
      <section className="bg-white px-[10%] py-8">
        <Breadcrumbs />
      </section>
      <VideoSection data={data} slug={slug}/>
      <DescriptionSection slug={slug}/>
      <HowItWorks 
        slug={slug}
        image={data.howItWorksImage} 
        title={"howItWorks"} 
        description={data.howItWorksDesc} 
      />
      <ProductsFeaturingSection data={data.patternsBrands.edges} />
      <section id="write-us" className="container mx-auto flex px-8 py-18 items-center">
        <div
          className="form-image w-full rounded-l-lg h-[550px]"
          style={{
            backgroundImage: "url(" + bgImg + ")",
            backgroundSize: "cover",
          }}
        ></div>
        <ContactForm formType={'home'}/>
      </section>
    </div>
  )
}

export default Brand