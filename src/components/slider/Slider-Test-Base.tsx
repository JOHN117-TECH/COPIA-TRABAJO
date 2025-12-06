'use client';

import { useState, useEffect, useRef } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

interface SlideItem {
  type: 'image' | 'video';
  src: string | StaticImageData;
  title?: string;
  description?: string;
  poster?: string | StaticImageData;
}

interface SliderSimpleProps {
  items: SlideItem[];
  timePerImage?: number; // ms
  rounded?: string;
  customHeight?: string;
}

export function SliderSimpleBase({
  items,
  timePerImage = 8000,
  rounded = 'rounded-xl',
  customHeight = 'h-[70vh]',
}: SliderSimpleProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [slideTime, setSlideTime] = useState(timePerImage);

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const swiperRef = useRef<any>(null);
  // cargar duración real del video
  const handleVideoMetadata = (index: number) => {
    const video = videoRefs.current[index];
    if (video && video.duration) {
      const durationMs = video.duration * 1000;
      setSlideTime(durationMs);
    }
  };

  const SLIDE_TIME = 8000;

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Limpia timeout siempre
  const clearSlideTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  // Cambio de slide
  const handleSlideChange = (swiper: any) => {
    const index = swiper.realIndex;
    setActiveIndex(index);
    setProgress(0);

    clearSlideTimeout();

    const current = items[index];

    // IMAGEN → avanzar automático
    if (current.type === 'image') {
      timeoutRef.current = setTimeout(() => {
        swiper.slideNext();
      }, SLIDE_TIME);
    }

    // VIDEO → Vimeo llama onProgress/onEnded
  };
  // reiniciar barra de progreso
  useEffect(() => {
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 1));
    }, slideTime / 100);

    return () => clearInterval(interval);
  }, [activeIndex, slideTime]);

  return (
    <div className="relative w-full">
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: slideTime,
          disableOnInteraction: false,
        }}
        onSwiper={(sw) => (swiperRef.current = sw)}
        loop={true}
        onSlideChange={(swiper) => {
          const index = swiper.realIndex;
          setActiveIndex(index);

          const slide = items[index];

          if (slide.type === 'video') {
            const video = videoRefs.current[index];
            if (video) {
              const duration = video.duration * 1000;
              setSlideTime(duration || timePerImage);
              video.play();
            }
          } else {
            setSlideTime(timePerImage);
          }
        }}
        className="w-full"
      >
        {items.map((item, i) => {
          // ---------------------------------------------
          // 🔥 AQUÍ VA srcValue y posterValue — DENTRO DEL MAP
          // ---------------------------------------------
          const srcValue =
            typeof item.src === 'string' ? item.src : item.src.src;

          const posterValue =
            typeof item.poster === 'string' ? item.poster : item.poster?.src;

          return (
            <SwiperSlide key={i}>
              <div
                className={`w-full overflow-hidden ${rounded} ${customHeight}`}
              >
                {item.type === 'image' ? (
                  // Imagen (Next.js la acepta sin conversion)
                  <Image
                    src={item.src}
                    className="w-full h-full object-cover"
                    alt={item.title || ''}
                  />
                ) : (
                  // Video (HTML necesita string → usamos srcValue)
                  <video
                    ref={(el) => {
                      videoRefs.current[i] = el;
                    }}
                    src={srcValue}
                    poster={posterValue}
                    muted
                    playsInline
                    preload="metadata"
                    onLoadedMetadata={() => handleVideoMetadata(i)}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Progress bar */}
      <div className="flex justify-center gap-3 mt-3">
        {items.map((_, i) => (
          <div
            key={i}
            onClick={() => swiperRef.current?.slideToLoop(i)}
            className="w-12 h-[4px] bg-gray-300 rounded-full overflow-hidden cursor-pointer"
          >
            <div
              className="h-full bg-teal-500 transition-all duration-75"
              style={{
                width: i === activeIndex ? `${progress}%` : '0%',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
