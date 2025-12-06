import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl';

const CoatedFabricsCard = ({ item }: { item: any }) => {
  const t = useTranslations('AboutUs.WhyChooseSpradling');
  
  return (
    <div className='p-4 md:p-0 flex flex-col md:flex-row gap-4'>
      <Image 
        src={item.image} 
        alt={item.title} 
        width={80} height={80}
        className='w-[80px] h-[80px] rounded' />
        <div>
          <h5 className='leading-tight text-(--black) text-lg'>{t(item.title)}</h5>
          <p className='text-xs leading-tight'>{t(item.description)}</p>
        </div>
    </div>
  )
}

export default CoatedFabricsCard