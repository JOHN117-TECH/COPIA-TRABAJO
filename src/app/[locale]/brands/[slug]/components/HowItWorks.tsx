import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const HowItWorks = ({image, title, description, slug}: { image: string, title: string, description: string, slug: string}) => {
  const t = useTranslations('Brands.'+ slug);
  const tt = useTranslations('Brands');
  return (
    <div className="flex flex-col md:flex-row md:mx-[10%] overflow-hidden">
      {/* Text section */}
      <div className="flex-1 px-6 py-10 flex flex-col justify-center md:py-16 md:px-18">
        <h2 className="text-xl md:max-w-[80%] font-semibold mb-2">
          {tt(title)}
        </h2>
        <p className="text-sm md:max-w-[80%]">{t(description)}</p>
      </div>

      {/* Image section */}
      <div className="flex-1 relative h-64 md:h-auto min-h-[200px]">
        <Image
          src={image}
          alt={t(title)}
          fill
          className="object-cover"
        />
      </div>
    </div>
  )
}

export default HowItWorks