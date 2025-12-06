"use client";

import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
import { ProductsCard } from "@/components/product/ProductCard";


interface RenderPatternsSliderProps {
  items: any[];
  gap?: number;
  className?: string;
  currentIndex: number;
  isSelectable?: boolean;
  isReference?: boolean;
}

const RenderPatternsSlider: React.FC<RenderPatternsSliderProps> = ({
  items,
  gap = 16,
  className,
  currentIndex,
  isSelectable,
  isReference,
}) => {
  const isMobile = useMediaQuery("(max-width: 480px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [cardWidthPx, setCardWidthPx] = useState<number>(0);
  const [slidesToShow, setSlidesToShow] = useState<number>(3);

  useEffect(() => {
    if (isMobile) {
      setSlidesToShow(1.2);
    } else if (isTablet) {
      setSlidesToShow(2.2);
    } else {
      setSlidesToShow(4.2);
    }
  }, [isMobile, isTablet]);

  useEffect(() => {
    if (!containerRef.current) return;

    const measure = () => {
      const containerWidth = containerRef.current!.clientWidth;
      const slides = Math.max(1, slidesToShow);
      const totalGaps = gap * (slides - 1);
      const widthPerCard = (containerWidth - totalGaps) / slides;
      const finalWidth = Math.min(355, widthPerCard);
      setCardWidthPx(Math.max(0, Math.floor(finalWidth)));
    };

    measure();
    const ro = new ResizeObserver(() => measure());
    ro.observe(containerRef.current);

    return () => ro.disconnect();
  }, [slidesToShow, gap]);

  const translateX = -(currentIndex * (cardWidthPx + gap));

  return (
    <div
      ref={containerRef}
      className={clsx(
        "relative w-full overflow-visible",
        className
      )}
    >
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          gap: `${gap}px`,
          transform: `translateX(${translateX}px)`,
          width: `${items.length * (cardWidthPx + gap) - gap}px`,
          boxSizing: "border-box",
        }}
      >
        {items.map((item, index) => {
          const isNext =
            index === currentIndex + 1 ||
            (currentIndex === items.length - 1 && index === 0);

          return (
            <div
              key={index}
              style={{
                flex: `0 0 ${cardWidthPx}px`,
                maxWidth: "355px",
                minWidth: "260px",
                boxSizing: "border-box",
              }}
              className={clsx(
                "min-h-full transition-all duration-500 ease-in-out",
                isNext && "opacity-70"
              )}
            >
              <ProductsCard
                item={item}
                isSelectable={isSelectable}
                isReference={isReference}
              >
                <ProductsCard.Button text="goToDetail" />
              </ProductsCard>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RenderPatternsSlider;

