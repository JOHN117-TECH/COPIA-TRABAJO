'use client';

import { useRef, useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperClass } from 'swiper';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import VimeoSlide from './VimeoSlide';

type SlideItem = {
  src?: string | StaticImageData;
  title?: string;
  description?: string;
  type?: string; // 'image' | 'video'
  videoUrl?: string;
  vimeoId?: string;
};

interface HomeSliderProps {
  items: SlideItem[];
  timePerSlide?: number; // ms
}

// helper para saber si un item es video
const isVideoSlide = (item: SlideItem): boolean => {
  return (
    item.type === 'video' ||
    (typeof item.videoUrl === 'string' &&
      item.videoUrl.includes('player.vimeo.com')) ||
    (typeof item.src === 'string' && item.src.includes('player.vimeo.com'))
  );
};

const HomeSlider = ({ items, timePerSlide = 8000 }: HomeSliderProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [videoProgress, setVideoProgress] = useState(0); // 0–100

  const swiperRef = useRef<SwiperClass | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  if (!items || !items.length) return null;

  // 🔹 helpers para el temporizador de las imágenes
  const clearImageTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const startImageTimer = (index: number) => {
    clearImageTimer();
    const slide = items[index];
    if (!slide || isVideoSlide(slide)) return; // sólo imágenes

    timerRef.current = setTimeout(() => {
      swiperRef.current?.slideNext();
    }, timePerSlide);
  };

  // al montar, programamos el timer del primer slide
  useEffect(() => {
    startImageTimer(0);
    return clearImageTimer;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="relative w-full text-white">
      {/* SLIDER PRINCIPAL */}
      <Swiper
        modules={[Navigation]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          const idx = swiper.realIndex ?? swiper.activeIndex ?? 0;
          setActiveIndex(idx);
          setVideoProgress(0);

          const currentItem = items[idx];
          if (currentItem && isVideoSlide(currentItem)) {
            // 🎥 vídeo → no timer, el avance lo hace onEnded
            clearImageTimer();
          } else {
            // 🖼 imagen → programamos timer
            startImageTimer(idx);
          }
        }}
        slidesPerView={1}
        loop
        allowTouchMove
        className="w-full"
      >
        {items.map((item, index) => {
          const isVideo = isVideoSlide(item);
          const isActive = index === activeIndex;

          // ID o URL de Vimeo
          const videoId =
            (typeof item.src === 'string' ? item.src : undefined) ??
            item.vimeoId ??
            item.videoUrl ??
            '';

          return (
            <SwiperSlide key={index}>
              <div className="relative w-full h-[420px] md:h-[520px] lg:h-[620px] overflow-hidden">
                {isVideo && videoId ? (
                  <VimeoSlide
                    className="h-full w-full"
                    vimeoId={videoId}
                    active={isActive}
                    onVideoProgress={(percent) => {
                      if (!isActive) return;
                      setVideoProgress(percent);
                    }}
                    onPlay={() => {
                      // nada especial aquí, el timer ya está parado
                    }}
                    onEnded={() => {
                      setVideoProgress(100);
                      swiperRef.current?.slideNext();
                    }}
                  />
                ) : (
                  item.src && (
                    <Image
                      src={item.src}
                      alt={item.title ?? `Slide ${index + 1}`}
                      fill
                      priority={index === 0}
                      className="object-cover"
                    />
                  )
                )}

                {/* Degradado y contenido */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/10" />
                <div className="relative z-10 flex h-full items-center px-6 md:px-16 lg:px-24">
                  <div className="max-w-xl space-y-4">
                    {item.title && (
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
                        {item.title}
                      </h2>
                    )}
                    {item.description && (
                      <p className="text-sm md:text-base text-white/80">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* FLECHAS */}
      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute left-6 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black shadow-md hover:scale-105 transition"
      >
        ‹
      </button>

      <button
        type="button"
        aria-label="Next slide"
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute right-6 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black shadow-md hover:scale-105 transition"
      >
        ›
      </button>

      {/* TABS CON BARRA DE PROGRESO */}
      <div className="pointer-events-none absolute bottom-8 left-1/2 z-20 flex w-full max-w-xl -translate-x-1/2 gap-3 px-6">
        {items.map((item, index) => {
          const isActive = index === activeIndex;
          const videoTab = isVideoSlide(item);
          const isActiveVideo = isActive && videoTab;

          return (
            <button
              key={index}
              type="button"
              onClick={() => swiperRef.current?.slideToLoop(index)}
              className="pointer-events-auto flex-1"
            >
              <div className="progress-tab">
                <span
                  className={
                    'progress-tab-fill ' +
                    (isActive && !isActiveVideo
                      ? 'progress-bar-animate '
                      : '') +
                    (isActive ? 'bg-emerald-400' : 'bg-white/30')
                  }
                  style={
                    isActive
                      ? isActiveVideo
                        ? {
                            // 🎥 vídeo: barra por progreso real
                            animation: 'none',
                            transform: `scaleX(${videoProgress / 100})`,
                          }
                        : {
                            // 🖼 imagen: animación CSS usando timePerSlide
                            animationDuration: `${timePerSlide}ms`,
                          }
                      : {
                          animation: 'none',
                          transform: 'scaleX(0)',
                        }
                  }
                />
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default HomeSlider;
