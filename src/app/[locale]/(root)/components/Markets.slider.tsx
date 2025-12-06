import clsx from "clsx";
import MarketCard from "./MarketCard";
import useMediaQuery from "@/hooks/useMediaQuery";
import React, { useEffect, useMemo, useRef, useState } from "react";

const Markets = ({
  items = [],
  currentIndex = 0,
  slidesToShow = 3,
}: {
  items: any[];
  currentIndex: number;
  slidesToShow: number;
}) => {
  const width = (currentIndex / items.length) * 100;
  const isMobile = useMediaQuery("(max-width: 1024px)");

  const [activeIndex, setActiveIndex] = useState<number|null>(null);
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const groupStart = useMemo(() => {
    const slides = Math.max(1, slidesToShow);
    return Math.min(Math.floor(currentIndex / slides) * slides, Math.max(0, items.length - 1));
  }, [currentIndex, slidesToShow, items.length]);

  useEffect(() => {
    setActiveIndex(null);
    setIsHovering(false);
  }, [groupStart]);

  const handleMouseEnter = (index: number) => {
    if (!isMobile) {
      setIsHovering(true);
      setActiveIndex(index);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsHovering(false);
      setActiveIndex(null);
    }
  };

  const handleClick = (index: number) => {
    if (isMobile) {
      setActiveIndex(prev => (prev === index ? null : index));
    }
  };

  return (
    <div className="relative w-full overflow-hidden py-3 z-20">
      <div
        className={clsx("flex transition-transform duration-500 gap-4")}
        style={{
          transform: `translateX(-${width > 0 ? width : 0}%)`,
          width: `${(items.length / slidesToShow) * 100}%`,
          boxSizing: "border-box",
        }}
        onMouseLeave={handleMouseLeave}
      >
        {items?.map((slide, index) => {
          const isActive = activeIndex === index;

          const isPaddingRight = (index + 1) % 3 === 0;
          const isPaddingLeft = (index + 1 - 1) % 3 === 0 && index !== 0;

          let paddingStyle: React.CSSProperties = {};

          const groupStart = currentIndex;
          const groupEnd = currentIndex + slidesToShow - 1;

          const isInCurrentGroup = index >= groupStart && index <= groupEnd;

          if (isInCurrentGroup) {
            if (currentIndex === 0) {
              if (isPaddingRight && items.length > 3) paddingStyle = { paddingRight: "7.7%" };
            } else {
              const groupNumber = Math.floor(currentIndex / slidesToShow);
              const basePadding = -0.5;
              const dynamicPaddingLeft = basePadding + groupNumber * ( 2 * (index === 6 ? 1.5 : index === 9 ? 4.2 : 1));
              if (isPaddingRight) {
                paddingStyle = { paddingRight: "0%" };
              } else if (isPaddingLeft) {
                paddingStyle = { paddingLeft: `${dynamicPaddingLeft}%` };
              }
            }
          }
          return (
            <div
              key={index}
              onClick={() => handleClick(index)}
              onMouseEnter={() => handleMouseEnter(index)}
              className={clsx(
                "flex-shrink-0 flex transition-all duration-300 basis-0",
                {
                  "flex-[1.3]": isActive,
                  "flex-[0.9]": !isActive,
                }
              )}
              style={paddingStyle}
            >
              <MarketCard
                item={slide}
                index={index} 
                isActive={isActive}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Markets;
