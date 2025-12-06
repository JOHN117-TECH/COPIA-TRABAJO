"use client";

import React from 'react'
import { useTranslations } from 'next-intl';
import PatternOrProductCard from '@/components/product/PatternOrProductCard';
import { Button, ButtonIcon, ButtonText } from '@/components/Button';
import SPGLink from '@/components/Link';

const ProductsFeaturingSection = ({ data }: { data: any }) => {
  const t = useTranslations('Brands');
  return (
    <div className='py-10 px-8 flex flex-col gap-16 items-center'>
      <h3 className='leading-tight'>{t('productsFeaturing')}</h3>
      <section className='flex flex-wrap gap-4 w-full justify-center'>
        {
          data.map((item: any, index: number) => (
            <div key={index} className='md:w-1/3 w-full'>
              <PatternOrProductCard
                disabled
                className='bg-white'
                name={item.node.name}
                description={item.node.products.edges.length + " " + t("colorways")}
                image={item.node.imageThumbSmall}
                checked={false}
              />
            </div>
          ))
        }
      </section>
    </div>
  )
}

export default ProductsFeaturingSection