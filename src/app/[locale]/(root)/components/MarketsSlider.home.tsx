"use client";

import Markets from "./Markets.slider";
import useMediaQuery from "@/hooks/useMediaQuery";
import MarketsSliderSkeleton from "./MarketsSliderSkeleton";
import GetCurrentInstance from "@/hooks/useGetCurrentInstance";

import { useEffect, useState } from "react";
import { Slider } from "@/components/slider/Slider";
import { useGetMarketsQuery } from "@/graphql/markets/queries/getMarkets.generated";
import MarketsMobile from "./MarketsMobile";
import { useTranslations } from "next-intl";
import { SLIDES_MARKETS, SLIDES_MARKETS_MOBILE } from "../assets/constants/constants";

const MarketsSlider = () => {
  const [slidesToShow, setSlidesToShow] = useState<number>(3);

  const isMobile = useMediaQuery("(max-width: 1024px)");

  const t = useTranslations("Markets");
  const translatedSlides = t.raw("sliderHome");

  const slides = SLIDES_MARKETS.map((slide, i) => ({
    ...slide,
    title: translatedSlides?.[i]?.title || "",
    description: translatedSlides?.[i]?.description || "",
    button: translatedSlides?.[i]?.button || "",
  })).filter((s) => s.title);

  const slidesMobile = SLIDES_MARKETS_MOBILE.map((slide, i) => ({
    ...slide,
    title: translatedSlides?.[i]?.title || "",
    description: translatedSlides?.[i]?.description || "",
    button: translatedSlides?.[i]?.button || "",
  })).filter((s) => s.title);

  return (
    <div className="relative w-full overflow-hidden md:pb-16">
      {isMobile ? (
        <div className="container mx-auto">
          <MarketsMobile
            items={slidesMobile}
          />
        </div>
      ) : (
        <Slider
          items={slides}
          showDots
          hasExternalDots
          rounded
          allowOverflow
        >
          <Slider.Custom isGroup slidesToShow={slidesToShow}>
            {/* @ts-ignore */}
            <Markets slidesToShow={slidesToShow}/>
          </Slider.Custom>
        </Slider>
      )}
    </div>
  );
};

export default MarketsSlider;
