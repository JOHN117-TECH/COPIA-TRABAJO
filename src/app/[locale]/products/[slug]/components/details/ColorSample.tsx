import clsx from 'clsx';
import Image from 'next/image';
import React, { useState } from 'react'
import { useTranslations } from 'next-intl';
import { TagLabel, Tags } from '@/components/Tags';

type Props = {
  prod:any;
  product: any;
  index: number;
  selectedIndexImage: number;   
  setCurrentImage: (key: string) => void;
  setSelectedIndexImage: (key: number) => void;
}

const ColorSample = ({ index, selectedIndexImage, setSelectedIndexImage, setCurrentImage, product, prod }: Props) => {
  const t = useTranslations("ProductDetail");
  const fallBackSrc = '/errorImg.webp';
  const [imageError, setImageError] = useState(false);

  return (
    <div 
      className={clsx(
        "h-[70px] w-[70px] flex-shrink-0 flex border rounded-xl items-center justify-center relative", 
        { 
          "border-(--gray-30)": index !== selectedIndexImage,
          "border-(--aqua-light) border-[2px]": index === selectedIndexImage,
        }
      )}
    >
      {
        !product.isNew && prod.node.isNew && 
        <Tags variant="filled" size="sm" className='absolute top-0 left-0 py-[3px]!'>
          <TagLabel label={t('new')}/>
        </Tags>
      }
      <Image
        src={imageError ? fallBackSrc : (prod.node.imageThumbSmall as string)}
        alt="text-img"
        width={150}
        height={150}
        className="h-[58px] w-[58px] rounded-xl"
        onError={() => setImageError(true)}
        onClick={() => {
          setCurrentImage(prod.node.imageThumbSmall);
          setSelectedIndexImage(index);
        }}
      />
    </div>
  )
}

export default ColorSample
