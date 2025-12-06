import React from 'react'
import { useTranslations } from 'next-intl';
import { WCS_WHY_CHOOSE_US } from '@/utilities/constants';
import InfoHighlightCard from '@/components/InfoHighlightCard';

const WhyChooseUsSection = () => {
  const t = useTranslations('AboutUs.WhyChooseSpradling');
  
  return (
    <div>
      <div className='md:max-w-[60%] mx-auto text-center py-8 px-8'>
        <h2 className='leading-20'>{t("whyChooseUs")}</h2>
        <p>{t("whyChooseUsDesc")}</p>
      </div>
      <div className="flex flex-col md:flex-row w-full mt-8">
        {WCS_WHY_CHOOSE_US.slice(0, 2).map((slide, idx) => (
          <InfoHighlightCard
            key={idx}
            imageSrc={slide.src}
            imageAlt={slide.title}
            title={t(slide.title)}
            description={t(slide.description)}
            ctaText={t(slide.buttonText)}
            ctaLink={slide.buttonLink}
          />
        ))}
      </div>
    </div>
  )
}

export default WhyChooseUsSection