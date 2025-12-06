import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react'

const BenefitsSection = ({ data }: any) => {
  const t = useTranslations("Services");
  return (
    <div className='flex flex-col gap-4 items-center px-[10%] my-16'>
        <h2 className='leading-tight'>{t("Benefits")}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {
          data.edges.map((item: any) => (
            <div className='flex gap-4 items-center'>
              <Image 
                src={item.node.image} 
                alt={item.node.title} 
                width={100} 
                height={100} 
                className='w-[100px] h-[100px]'
              />
              <div>
                <h5 className='text-lg text-(--background) leading-tight mb-2'>{item.node.title}</h5>
                <p className='text-sm leading-tight'>{item.node.description}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default BenefitsSection