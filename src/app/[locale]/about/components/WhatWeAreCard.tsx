import clsx from 'clsx';
import React from 'react';
import { useTranslations } from 'next-intl';

const WhatWeAreCard = ({ item, index }: {item:any, index: number}) => {
  const t = useTranslations('AboutUs.WeAreSpradling');
  const isEven = index % 2 === 0;
  return (
    <div>
      <div
        key={index}
        className={'relative h-[300px] flex items-end px-8 pb-8'}
        style={{
          backgroundImage: `url(${item.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          className={`absolute inset-0 w-full h-full ${
            isEven ? 'bg-(--gray-10)' : 'bg-(--spg-link)'
          }`}
        ></div>

        <h2 className={clsx('relative z-10 leading-tight text-lg font-semibold',
          {'text-white': !isEven})}>
          {t(item.description)}
        </h2>
      </div>
    </div>
  )
}

export default WhatWeAreCard