"use client";

import ColumnCard from '@/components/ColumnCard';
import useMediaQuery from '@/hooks/useMediaQuery'; 

import { useTranslations } from 'next-intl';
import { Slider } from '@/components/slider/Slider';
import React, { useEffect, useState } from 'react';
import { PURPOSEFUL_CARDS } from '@/utilities/constants';

const Commitment = () => {
  const t = useTranslations("Sustainability.Commitment");
  const isMobile = useMediaQuery("(max-width: 480px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");
  const [slidesToShow, setSlidesToShow] = useState<number>(3);

  useEffect(() => {
    if (isTablet) {
      setSlidesToShow(2);
    }
    if (isMobile) {
      setSlidesToShow(1);
    }
  }, [isTablet, isMobile]);

  return (
    <section className="mt-12 flex flex-col w-full items-center px-[5%] bg-white">
      <h5 >{t("title")}</h5>
      <p className="md:w-[50%] text-sm md:text-md text-(--spg-text) leading-normal text-center">{t("description")}</p>
      <Slider items={PURPOSEFUL_CARDS} showArrows>
        <Slider.Continuous slidesToShow={slidesToShow} noGap>
          {/* @ts-ignore */}
          <ColumnCard hasTranslate={false}/>
        </Slider.Continuous>
      </Slider>
    </section>
  )
}

export default Commitment