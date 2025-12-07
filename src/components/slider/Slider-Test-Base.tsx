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
  type?: 'image' | 'video' | string;
  videoUrl?: string;
  vimeoId?: string;
};

interface HomeSliderProps {
  items: SlideItem[];
  timePerSlide?: number; // ms
  slidesPerView?: number; // 👈 prop
}

// ¿es vídeo?
const isVideoSlide = (item: SlideItem): boolean => {
  return (
    item.type === 'video' ||
    (typeof item.videoUrl === 'string' &&
      item.videoUrl.includes('player.vimeo.com')) ||
    (typeof item.src === 'string' && item.src.includes('player.vimeo.com')) ||
    !!item.vimeoId
  );
};

const HomeSlider = ({
  items,
  timePerSlide = 8000,
  slidesPerView = 1,
}: HomeSliderProps) => {
  const [activeIndex, setActiveIndex] = useState(0); // índice del primer slide visible
  const [progress, setProgress] = useState(0); // 0–100 para la PÁGINA activa

  const swiperRef = useRef<SwiperClass | null>(null);
  const imageTimerRef = useRef<NodeJS.Timeout | null>(null);

  if (!items || !items.length) return null;

  const totalPages = Math.ceil(items.length / slidesPerView);
  const lastStartIndex = Math.max(items.length - slidesPerView, 0);

  // --- helpers de paginación ------------------------------------
  const getPageFromIndex = (index: number): number => {
    if (index >= lastStartIndex) return totalPages - 1; // último grupo
    return Math.floor(index / slidesPerView);
  };

  const getFirstIndexOfPage = (pageIndex: number): number => {
    if (pageIndex >= totalPages - 1) return lastStartIndex; // última página
    return pageIndex * slidesPerView;
  };

  const clearImageTimer = () => {
    if (imageTimerRef.current) {
      clearInterval(imageTimerRef.current);
      imageTimerRef.current = null;
    }
  };

  // navegar por página
  const goToPage = (pageIndex: number) => {
    if (!swiperRef.current) return;
    const targetIndex = getFirstIndexOfPage(pageIndex);
    swiperRef.current.slideTo(targetIndex);
  };

  const goToNext = () => {
    if (!swiperRef.current) return;
    const swiper = swiperRef.current;
    const current = swiper.activeIndex ?? 0;
    const currentPage = getPageFromIndex(current);
    const nextPage = (currentPage + 1) % totalPages;
    swiper.slideTo(getFirstIndexOfPage(nextPage));
  };

  const goToPrev = () => {
    if (!swiperRef.current) return;
    const swiper = swiperRef.current;
    const current = swiper.activeIndex ?? 0;
    const currentPage = getPageFromIndex(current);
    const prevPage = (currentPage - 1 + totalPages) % totalPages;
    swiper.slideTo(getFirstIndexOfPage(prevPage));
  };

  // timer de imágenes (por página)
  useEffect(() => {
    clearImageTimer();
    setProgress(0);

    const currentPage = getPageFromIndex(activeIndex);
    const firstIndexOfPage = getFirstIndexOfPage(currentPage);
    const firstItem = items[firstIndexOfPage];

    // si la página empieza con vídeo, el progreso lo maneja Vimeo
    if (!firstItem || isVideoSlide(firstItem)) return;

    const start = Date.now();

    imageTimerRef.current = setInterval(() => {
      const elapsed = Date.now() - start;
      const ratio = Math.min(1, elapsed / timePerSlide);
      setProgress(ratio * 100);

      if (ratio >= 1) {
        clearImageTimer();
        goToNext();
      }
    }, 80);

    return clearImageTimer;
  }, [activeIndex, items, timePerSlide, slidesPerView, totalPages]);

  return (
    <section className="relative w-full text-white">
      <Swiper
        modules={[Navigation]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          const idx = swiper.activeIndex ?? 0; // 👈 sólo activeIndex
          setActiveIndex(idx);
        }}
        slidesPerView={slidesPerView}
        slidesPerGroup={slidesPerView}
        loop={false}
        allowTouchMove
        className="w-full"
      >
        {items.map((item, index) => {
          const currentPage = getPageFromIndex(activeIndex);
          const firstIndexOfPage = getFirstIndexOfPage(currentPage);
          const isPageFirstSlide = index === firstIndexOfPage;
          const isVideo = isVideoSlide(item);

          return (
            <SwiperSlide key={index}>
              <div className="relative w-full h-[420px] overflow-hidden">
                {isVideo ? (
                  <VimeoSlide
                    className="h-full w-full"
                    vimeoId={`${item.src}`}
                    active={isPageFirstSlide}
                    onVideoProgress={(percent) => {
                      setProgress(percent); // progreso de la página
                    }}
                    onEnded={() => {
                      setProgress(100);
                      goToNext();
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

                {/* degradado y contenido */}
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
        onClick={goToPrev}
        className="absolute left-6 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black shadow-md hover:scale-105 transition"
      >
        ‹
      </button>

      <button
        type="button"
        aria-label="Next slide"
        onClick={goToNext}
        className="absolute right-6 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black shadow-md hover:scale-105 transition"
      >
        ›
      </button>

      {/* TABS POR PÁGINA */}
      <div className="pointer-events-none absolute bottom-8 left-1/2 z-20 flex w-full max-w-xl -translate-x-1/2 gap-3 px-6">
        {Array.from({ length: totalPages }).map((_, pageIndex) => {
          const activePage = getPageFromIndex(activeIndex);
          const isActive = pageIndex === activePage;

          return (
            <button
              key={pageIndex}
              type="button"
              onClick={() => goToPage(pageIndex)}
              className="pointer-events-auto flex-1"
            >
              <div className="progress-tab">
                <span
                  className={
                    'progress-tab-fill ' +
                    (isActive ? 'bg-emerald-400' : 'bg-white/30')
                  }
                  style={{ width: `${isActive ? progress : 0}%` }}
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
