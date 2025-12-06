import clsx from 'clsx'
import React from 'react'
import { useTranslations } from 'next-intl'
import { SpecificationsProps } from '@/models/products.model'

const SpecificationsDesktop: React.FC<SpecificationsProps> = ({ selectedSpecification, setSelectedSpecification, specifications }) => {
  const t = useTranslations("ProductDetail");
  
  return (
    <div className="grid grid-cols-20 hidden md:grid border border-(--black-10) rounded-3xl">
      <section className="col-span-5 rounded-l-3xl bg-(--gray-10) py-6 flex flex-col max-w-[200px]">
        {
          specifications?.map((key: any, index: number) => key.hasData && (
            <button 
              key={index}
              onClick={() => setSelectedSpecification(index)}
              className={clsx("rounded-none bg-transparent px-4 py-3 text-left", {
                "bg-(--white)! border-l-[4px] border-(--aqua-light)": selectedSpecification === index
              })}
            >
              <p className={clsx("text-(--gray-90) text-sm font-normal mb-0 whitespace-nowrap truncate", {
                "text-(--black)! font-medium!": selectedSpecification === index
              })}>
                {t(key.title)}
              </p>
            </button>
          ))
        }
      </section>
      <section className="col-span-15 rounded-r-3xl bg-(--white) flex items-center">
        {specifications[selectedSpecification].data}
      </section>
    </div>
  )
}

export default SpecificationsDesktop