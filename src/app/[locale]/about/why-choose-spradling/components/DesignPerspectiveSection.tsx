import clsx from 'clsx'
import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { WCS_CARDS_PERSPECTIVE } from '@/utilities/constants'

const DesignPerspectiveSection = () => {
  const t = useTranslations('AboutUs.WhyChooseSpradling');
  
  return (
    <section className='bg-white py-8 my-10 md:px-8 md:py-16'>
      <div className='md:max-w-[50%] mx-auto text-center mb-8 px-4 md:px-8'>
        <h2 className='leading-tight mb-6'>{t("designPerspective")}</h2>
        <p>{t("designPerspectiveDesc")}</p>
      </div>
      <section className='grid grid-cols-1 md:grid-cols-3 md:px-[10%] items-center'>
          {
            WCS_CARDS_PERSPECTIVE.map((item, index) => {
              const isEven = index % 2 === 0
              return (
                <div 
                  key={index} 
                  className={clsx("flex flex-col py-8 md:p-4 gap-4 w-full bg-(--gray-10) px-4 md:h-[480px] justify-center overflow-scroll",
                    {"bg-(--spg-primary) md:h-[550px]": !isEven}
                  )}
                >
                  <Image
                    src={item.image} 
                    alt={item.title} 
                    width={150} height={150} 
                    className="w-full" 
                  />
                  <h5 className={clsx("leading-tight", {"text-white": !isEven})}>{t(item.title)}</h5>
                  <p className={clsx("text-sm leading-tight", {"text-white": !isEven})}>{t(item.description)}</p>
                </div>
              )}
            )
          }
      </section>
    </section>
  )
}

export default DesignPerspectiveSection