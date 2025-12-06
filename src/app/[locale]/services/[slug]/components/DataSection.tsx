import { useTranslations } from 'next-intl';
import Image from 'next/image'
import React from 'react'

const DataSection = ({image, title, description}: { image: string, title: string, description: string}) => {
  const t = useTranslations('Services');

  return (
    <div className="relative overflow-hidden shadow-md md:mx-[10%]">
      <Image
        src={image}
        alt={t(title)}
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
      />

      <div className="absolute inset-0 bg-(--spg-link) z-10" />

      <div className="relative z-20 px-6 py-10 flex flex-col justify-end h-full text-left md:py-16 md:px-18">
        <h2 className="text-xl text-white md:max-w-[60%] font-semibold mb-2">{t(title)}</h2>
        <p className="text-sm text-white md:max-w-[60%]">{t(description)}</p>
      </div>
    </div>
  )
}

export default DataSection