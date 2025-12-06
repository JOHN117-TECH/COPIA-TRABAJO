'use client';

import { useRef, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperClass } from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import VimeoSlide from './VimeoSlide';

type SlideItem = {
  src?: string | StaticImageData; // para imágenes
  title?: string;
  description?: string;
  type?: string; // 👈 ahora es cualquier string y opcional
  videoUrl?: string;
  vimeoId?: string;
};

interface HomeSliderProps {
  items: SlideItem[];
  timePerSlide?: number; // ms, por defecto 8000
}

const HomeSlider = ({ items, timePerSlide = 8000 }: HomeSliderProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperClass | null>(null);
  const [videoProgress, setVideoProgress] = useState(0);
  if (!items || !items.length) return null;

  return (
    <section className=" w-full text-white">
      {/* SLIDER PRINCIPAL */}
      <Swiper
        modules={[Navigation, Autoplay]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex ?? swiper.activeIndex);
        }}
        slidesPerView={1}
        loop
        autoplay={{
          delay: timePerSlide,
          disableOnInteraction: false,
        }}
        allowTouchMove
        className="w-full"
      >
        {items.map((item, index) => {
          // 👉 Detectamos si este slide es un vídeo (Vimeo)
          const isVideo =
            item.type === 'video' ||
            (typeof item.videoUrl === 'string' &&
              item.videoUrl.includes('player.vimeo.com')) ||
            (typeof item.src === 'string' &&
              item.src.includes('player.vimeo.com'));

          const videoUrl = item.videoUrl ?? (item.src as string | undefined);

          return (
            <SwiperSlide key={index}>
              <div className="relative w-full h-[420px] md:h-[520px] lg:h-[620px]">
                {isVideo && videoUrl ? (
                  // 🎥 VÍDEO (Vimeo) → NUNCA usar <Image> aquí

                  <VimeoSlide
                    className="h-full w-full"
                    vimeoId={item.vimeoId!}
                    onProgress={(percent) => {
                      // solo nos importa el slide activo
                      setVideoProgress(percent);
                    }}
                    onPlay={() => {
                      // por si acaso, paramos autoplay
                      if (swiperRef.current?.autoplay) {
                        swiperRef.current.autoplay.stop();
                      }
                    }}
                    onPause={() => {
                      // aquí podrías pausar animaciones si tuvieras
                    }}
                    onEnded={() => {
                      // barra al 100% y pasamos al siguiente
                      setVideoProgress(100);
                      swiperRef.current?.slideNext();
                    }}
                  />
                ) : (
                  // 🖼 IMAGEN NORMAL
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

                {/* Degradado y contenido (igual que antes) */}
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

      {/* TABS CON BARRA DE PROGRESO (ya las tenías configuradas) */}
      <div className="pointer-events-none absolute bottom-8 left-1/2 z-20 flex w-full max-w-xl -translate-x-1/2 gap-3 px-6">
        {items.map((item, index) => {
          const isActive = index === activeIndex;

          // si tienes videoProgress, puedes seguir usándolo aquí
          const isVideoTab =
            item.type === 'video' ||
            (typeof item.videoUrl === 'string' &&
              item.videoUrl.includes('player.vimeo.com')) ||
            (typeof item.src === 'string' &&
              item.src.includes('player.vimeo.com'));

          const isActiveVideo = isActive && isVideoTab;

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
                    (isActive ? 'bg-emerald-400' : 'bg-white/30') // 🟢 solo activo
                  }
                  style={
                    isActive
                      ? isActiveVideo
                        ? {
                            // vídeo: barra según porcentaje real
                            animation: 'none',
                            transform: `scaleX(${videoProgress / 100})`,
                          }
                        : {
                            // imagen: animación normal de tiempo
                            animationDuration: `${timePerSlide}ms`,
                          }
                      : {
                          // ❗ cualquier NO activo vuelve a 0
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
