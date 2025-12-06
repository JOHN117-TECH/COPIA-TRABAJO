'use client';

import React from 'react'
import Image from 'next/image';
import ButtonType from '@/models/buttonType';
import SugestedLink from './[...notFound]/components/SugestedLink';

import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { LINKS_NOT_FOUND } from '@/utilities/constants';
import { Button, ButtonIcon, ButtonText } from '@/components/Button';

const NotFound = () => {
  const t = useTranslations("NotFound"); 
  const router = useRouter();

  const goBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push('/');
    }
  };

  return (
    <div className="mt-32 flex flex-col items-center md:mx-[10%] py-8 px-8">
      <span className='self-start md:mx-46'>
        <Button
          onClick={goBack}
          design={ButtonType.LINK_GREEN_SMALL}
        >
          <ButtonIcon className="icon-arrow-left text-(--black)"/>
          <ButtonText text={t("back")} className='text-(--gray-60)'/>
        </Button>
      </span>
      <h5 className='text-3xl'>{t("title")}</h5>
      <p className="mt-2 text-xl text-center md:max-w-[30%]">{t("description")}</p>
      <Image
        src="/404.svg"
        alt="404"
        width={600}
        height={600}
        className='relative md:top-[-130px] top-[-20px] md:left-[-50px]'
      />
      <h5 className='leading-tight'>{t("subtitle")}</h5>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-4'>
        {
          LINKS_NOT_FOUND.map((item, index) => (
            <SugestedLink key={index} item={item} />
          ))
        }
      </div>
    </div>
  );
}

export default NotFound