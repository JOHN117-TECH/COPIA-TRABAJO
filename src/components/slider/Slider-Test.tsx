'use client';

import { useEffect, useRef, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

interface SlideItem {
  type: 'image' | 'video';
  src: string | StaticImageData;
  vimeoId?: string;
}

interface Props {
  items: SlideItem[];
  defaultTime?: number;
}

export default function MixedCarousel({ items, defaultTime = 8000 }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const swiperRef = useRef<any>(null);
  const intervalRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);
  const durationRef = useRef<number>(defaultTime);

  /** Reset timer */
  const resetTimer = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  /** Start progress bar */
  const startProgress = () => {
    resetTimer();
    setProgress(0);
    startTimeRef.current = Date.now();

    intervalRef.current = window.setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      const pct = (elapsed / durationRef.current) * 100;

      if (pct >= 100) {
        setProgress(100);
        resetTimer();
        swiperRef.current?.slideNext(); /// ← AVANZA AUTOSLIDE
      } else {
        setProgress(pct);
      }
    }, 40);
  };

  /** Fetch duration from Vimeo */
  const fetchVimeoDuration = async (id: string) => {
    try {
      const res = await fetch(`https://vimeo.com/api/v2/video/${id}.json`);
      const data = await res.json();
      return data[0].duration * 1000;
    } catch {
      return defaultTime;
    }
  };

  /** On slide change */
  useEffect(() => {
    const current = items[activeIndex];

    const updateTiming = async () => {
      if (current.type === 'video' && current.vimeoId) {
        durationRef.current = await fetchVimeoDuration(current.vimeoId);
      } else {
        durationRef.current = defaultTime;
      }

      startProgress();
    };

    updateTiming();
    return resetTimer;
  }, [activeIndex]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <Swiper
        modules={[Navigation]}
        navigation
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="w-full h-full"
      >
        {items.map((slide, i) => (
          <SwiperSlide key={i}>
            {slide.type === 'image' ? (
              <Image
                src={slide.src}
                alt="slide"
                className="w-full h-[90vh] object-cover"
              />
            ) : (
              <iframe
                src={`https://player.vimeo.com/video/${slide.vimeoId}?autoplay=1&muted=1&controls=0`}
                className="w-full h-[90vh]"
                allow="autoplay; fullscreen"
              ></iframe>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* PROGRESS BAR STYLE FIGMA */}
      <div className="absolute bottom-10 w-full flex justify-center">
        <div className="progress-container">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
