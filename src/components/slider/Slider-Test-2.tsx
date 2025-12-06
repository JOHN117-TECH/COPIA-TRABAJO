'use client';

import { useEffect, useRef, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { object } from 'zod';
import { SLIDES_BANNER_HOME } from '@/app/[locale]/(root)/assets/constants/constants';

export interface SlideItem {
  type: 'image' | 'video';
  src: string | StaticImageData;
  srcMobile?: string;
  vimeoId?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  path?: string;
}

export interface Props {
  items: SlideItem[];
  duration?: number; // ← Ahora opcional
}

export default function HomeSlider({ items, duration = 8000 }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const swiperRef = useRef<any>(null);

  console.log('ITEMS: ' + JSON.stringify(items));

  /*  items.map((slide, i) => {
    if (slide.src as StaticImageData) {
      console.log(slide.src);
    }
  }); */

  function resolveImageSrc(input: string | StaticImageData): string {
    if (typeof input === 'string') return input;
    return input.src; // StaticImageData
  }
  const intervalRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);

  const startProgress = () => {
    if (!swiperRef.current) return;

    setProgress(0);
    startTimeRef.current = Date.now();

    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = window.setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      const pct = Math.min(elapsed / duration, 1);
      setProgress(pct * 100);
      if (pct === 1) swiperRef.current.slideNext();
    }, 50);
  };

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.activeIndex);
    startProgress();
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current !== null) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="relative w-full h-[90vh]">
      <Swiper
        modules={[Navigation]}
        navigation
        onSwiper={(s) => (swiperRef.current = s)}
        onSlideChange={handleSlideChange}
        onInit={startProgress}
        className="w-full h-full"
      >
        {items.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-[90vh]">
              {slide.type === 'image' && (
                <Image
                  src={slide.src}
                  alt={slide.title ?? ''}
                  fill
                  priority={i === 0}
                  className="object-cover"
                />
              )}

              {slide.type === 'video' && (
                <iframe
                  src={slide.src as string}
                  className="absolute inset-0 w-full h-full object-cover"
                  allow="autoplay; fullscreen"
                />
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
