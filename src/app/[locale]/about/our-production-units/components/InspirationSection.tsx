import React from 'react'
import { useTranslations } from 'next-intl';
import { OPU_INSPIRATION } from '@/utilities/constants';
import InfoHighlightCard from '@/components/InfoHighlightCard';

const InspirationSection = () => {
  const t = useTranslations('AboutUs.OurProductionUnits');
  
  return (
    <div className='my-8'>
      <div className='md:max-w-[50%] mx-auto text-center py-8 px-8'>
        <h2 className='leading-tight mb-6'>{t("inspiration")}</h2>
        <p>{t("inspirationDesc")}</p>
      </div>
      <div className="flex flex-col md:flex-row w-full mt-8">
        {OPU_INSPIRATION.slice(0, 2).map((slide, idx) => (
          <InfoHighlightCard
            key={idx}
            imageSrc={slide.src}
            imageAlt={slide.title}
            title={t(slide.title)}
            subtitle={t(slide.subtitle)}
            description={t(slide.description)}
            ctaText={t(slide.buttonText)}
            ctaLink={slide.buttonLink}
            className='min-h-[580px]'
          />
        ))}
      </div>
    </div>
  )
}

export default InspirationSection