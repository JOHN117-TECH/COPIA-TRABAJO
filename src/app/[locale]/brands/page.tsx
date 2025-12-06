"use client";

import React from 'react'
import Breadcrumbs from '@/components/Breadcrumbs'
import GetCurrentInstance from '@/hooks/useGetCurrentInstance';
import InfoHighlightCard from '@/components/InfoHighlightCard';

import { useTranslations } from 'next-intl';
import { useGetBrandsQuery } from '@/graphql/brands/queries/getBrands.generated';


const Brands = () => {
  const t = useTranslations('Brands');
  const { data, loading, error } = useGetBrandsQuery({
    variables: {
       instanceIds: GetCurrentInstance(),
       isVisible: true
    },
  });

  return (
    <div>
      <section className="bg-white px-[10%] py-8">
        <Breadcrumbs />
      </section>
      <div className='bg-(--gray-10) h-[300px] flex flex-col items-center justify-center space-y-4 px-[10%]'>
        <h2>{t('title')}</h2>
        <p>{t('description')}</p>
      </div>
      <section className="bg-white grid grid-cols-1 md:grid-cols-2">
        {data?.brands?.edges.map((item, index) => (
          <InfoHighlightCard
            key={index}
            title={item?.node?.title || ''}
            description={item?.node?.description || ''}
            subtitle={item?.node?.brandType || ''}
            imageSrc={item?.node?.imageThumbMedium || ''}
            imageAlt={item?.node?.title || ''}
            ctaText={t('knowMore')}
            ctaLink={`/brands/${item?.node?.slug}`}
            className="rounded-none"
          />
        ))}
      </section>
    </div>
  )
}

export default Brands