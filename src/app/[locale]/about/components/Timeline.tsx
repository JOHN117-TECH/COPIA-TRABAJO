'use client';

import { Button, ButtonIcon } from '@/components/Button';
import ButtonType from '@/models/buttonType';
import { TIMELINE } from '@/utilities/constants';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';


export default function Timeline() {
  const t = useTranslations('AboutUs.WeAreSpradling');
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeYear, setActiveYear] = useState(TIMELINE[0].year);

  const uniqueYears = Array.from(new Set(TIMELINE.map((e) => e.year)));

  // Detectar evento más centrado para setear el año activo
  const handleScroll = () => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const center = container.scrollLeft + container.clientWidth / 2;
    let closestIndex = 0;
    let minDistance = Infinity;

    cardRefs.current.forEach((el, index) => {
      if (!el) return;
      const elCenter = el.offsetLeft + el.offsetWidth / 2;
      const distance = Math.abs(center - elCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    setActiveYear(TIMELINE[closestIndex].year);
  };

  // Ir al primer evento de un año específico
  const scrollToYear = (year: number) => {
    const index = TIMELINE.findIndex((e) => e.year === year);
    const el = cardRefs.current[index];
    if (el && containerRef.current) {
      containerRef.current.scrollTo({
        left: el.offsetLeft - containerRef.current.clientWidth / 2 + el.clientWidth / 2,
        behavior: 'smooth',
      });
    }
  };

  // Flechas para navegar entre años
  const scrollToNextYear = () => {
    const currentIdx = uniqueYears.indexOf(activeYear);
    const nextYear = uniqueYears[currentIdx + 1];
    if (nextYear) scrollToYear(nextYear);
  };

  const scrollToPrevYear = () => {
    const currentIdx = uniqueYears.indexOf(activeYear);
    const prevYear = uniqueYears[currentIdx - 1];
    if (prevYear) scrollToYear(prevYear);
  };

  useEffect(() => {
    const scroll = containerRef.current;
    if (!scroll) return;
    scroll.addEventListener('scroll', handleScroll, { passive: true });
    return () => scroll.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="w-full pb-10 space-y-6">

      {/* Flechas + Año activo */}
      <div className="flex items-center justify-center gap-4 text-blue-700 font-semibold text-lg">
        <Button
          onClick={scrollToPrevYear}
          className={"w-[48px] h-[48px] text-[32px]"}
          design={ButtonType.FILLED_AQUA_BIG_ROUNDED}
        >
          <ButtonIcon className="icon-arrow-left" />
        </Button>

        <p className='text-xl font-semibold mb-0 text-(--aqua-130)'>{activeYear}</p>

        <Button
          onClick={scrollToNextYear}
          className={"w-[48px] h-[48px] text-[28px]"}
          design={ButtonType.FILLED_AQUA_BIG_ROUNDED}
        >
          <ButtonIcon className="icon-arrow-right" />
        </Button>
      </div>

      {/* Barra superior de años */}
      <div className="relative w-full px-4 md:px-20">
        <div className="relative w-full">
          {/* Línea base */}
          <div className="absolute top-1/2 left-0 right-0 h-2 bg-(--gray-30) -translate-y-1/2 rounded-full z-0" />

          {/* Línea azul hasta el año activo */}
          <div
            className="absolute top-1/2 left-0 h-2 bg-(--aqua-20) -translate-y-1/2 rounded-full z-10 transition-all duration-100"
            style={{
              width: `${ uniqueYears.length > 1
                ? (uniqueYears.indexOf(activeYear) / (uniqueYears.length - 1)) * 100
                : 0}%`,
            }}
          />
        </div>

        {/* Puntos de año */}
        <div className="relative flex items-center justify-between z-20 top-[-10px]">
          {uniqueYears.map((year) => (
            <div key={year} className="flex flex-col items-center text-xs text-gray-700">
              <button
                onClick={() => scrollToYear(year)}
                className={clsx(
                  'rounded-full',
                  activeYear === year
                    ? 'w-5 h-5 bg-(--aqua-100) top-1/2'
                    : 'w-2 h-2 bg-(--gray-40)',
                  year < activeYear && 'bg-(--aqua-70)!',
                )}
              />
              {/* Mostrar año solo si es el activo o es uno de los extremos */}
              {(activeYear === year || year === uniqueYears[0] || year === uniqueYears[uniqueYears.length - 1]) && (
                <p className="absolute top-[1.5rem] text-(--aqua-100) text-base">{year}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="relative  mx-20 ">
        {/* Scrollable Timeline */}
        <div
          ref={containerRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-4py-2 scrollbar-hide scroll-smooth"
        >
          {TIMELINE.map((event, idx) => (
            <div
              ref={(el) => {cardRefs.current[idx] = el}}
              key={idx}
              className={"snap-center flex-shrink-0 w-[250px] md:w-[351px] p-10 relative transition-transform duration-300"}
            >
              <Image
                src={event.image}
                alt={event.title}
                width={160}
                height={160}
                className="object-contain mx-auto rounded-md"
              />
              <p className="mt-4 mb-1 text-(--aqua) font-medium">{event.year}</p>
              <h5 className="leading-tight text-(--gray-90) mb-4">{t(event.title)}</h5>
              <p className="text-base text-(--gray-90) leading-tight">{t(event.summary)}</p>
            </div>
          ))}
        </div>
        {/* Fades en los extremos */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-(--background) to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-(--background) to-transparent" />
      </div>
    </section>
  );
}
