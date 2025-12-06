"use client";

import clsx from "clsx";
import Arrows from "./Arrows.slider.tsx";
import ContinuousSlider from "./ContinuousSlider.slider.tsx";
import SimpleMultimediaSlider from "./SimpleMultimedia.slider.tsx";

import { Button } from "../Button.tsx";
import { useState, useCallback, Children, cloneElement, FC, useEffect, isValidElement } from "react";
import { ContinuousSliderProps, CustomSliderProps, OnlyImageSliderProps, SimpleSliderProps, SliderChild, SliderProps } from "@/models/slider.model";
import useMediaQuery from "@/hooks/useMediaQuery.ts";

/**
 * Slider component that displays a list of items with optional navigation arrows and dots.
 * @param {Object[]} items - Array of items to display in the slider.
 * @param {ReactNode} children - Children components to render inside the slider.
 * @param {boolean} [rounded=false] - Add padding and border radius to the slider.
 * @param {boolean} [showDots=true] - Show the dots.
 * @param {boolean} [whiteDots=true] - Show white dots.
 * @param {boolean} [showArrows=true] - Show the arrows.
 * @param {boolean} [whiteArrows=true] - Show white arrows.
 * @param {boolean} [fullWidthDots=true] - Make the dots full width.
 * @returns {ReactElement} The rendered slider component.
 */

export const Slider: FC<SliderProps> & {
  Simple: FC<SimpleSliderProps>;
  Custom: FC<CustomSliderProps>;
  OnlyImage: FC<OnlyImageSliderProps>;
  Continuous: FC<ContinuousSliderProps>;
} = ({ 
  items, 
  children, 
  rounded = false,
  showDots = true, 
  whiteDots = false, 
  showArrows = true, 
  whiteArrows = false, 
  fullWidthDots = false, 
  hasExternalDots = false, 
  allowOverflow = false,
  mobileBreakpoint = 768, 
  onIndexChange,
}) => {
  const [dots, setDots] = useState<number>(0);
  const [slides, setSlides] = useState<number>(0);
  const [isGroup, setIsGroup] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const isMobile = useMediaQuery(`(max-width: ${mobileBreakpoint}px)`);

  useEffect(() => {
    if (isGroup && slides) {
      setDots(Math.ceil(items.length / slides));
    } else {
      setDots(items.length)
    }
  }, [slides, isGroup]);

  useEffect(() => {
    onIndexChange?.(currentIndex);
  }, [currentIndex]);

  const nextSlide = useCallback(() => {
    if (isGroup) {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + slides;
        return nextIndex >= items.length ? prevIndex : nextIndex;
      });
    } else {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }
  }, [isGroup, slides, items.length]);

  const prevSlide = () => {
    if (isGroup) {
      setCurrentIndex((prevIndex) => (prevIndex - slides >= 0 ? prevIndex - slides : 0));
    } else {
      setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
    }
  };

  const handleDotClick = (index: number) => {
    if (isGroup) {
      setCurrentIndex(index * slides);
    } else {
      setCurrentIndex(index);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEndX(null);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;

    const distance = touchStartX - touchEndX;
    const isSwipe = Math.abs(distance) > 50;

    if (!isSwipe) return;

    if (distance > 0) {
      nextSlide();
    } else {
      prevSlide();
    }
  };

  return (
    <div  className={clsx(
      "w-full h-full relative",
      allowOverflow ? "overflow-visible" : "overflow-hidden"
    )}>
      {showArrows && dots > 1 && (
        <div
          className={clsx(
            "absolute inset-0 flex items-center justify-between z-[20] pointer-events-none"
          )}
        >
          <Arrows
            nextSlide={nextSlide} 
            prevSlide={prevSlide}
            totalSlides={items.length}
            currentIndex={currentIndex}
            isGroup={isGroup}
            slidesToShow={slides}
            whiteArrows={whiteArrows}
            rounded={rounded}
          />
        </div>
      )}
      <div 
        onTouchStart={isMobile ? handleTouchStart : undefined}
        onTouchMove={isMobile ? handleTouchMove : undefined}
        onTouchEnd={isMobile ? handleTouchEnd : undefined}
        className={clsx({"container mx-auto": rounded})}
      >
        {Children.map(children, (child) =>
          cloneElement(child as SliderChild, {
            items,
            rounded,
            nextSlide,
            prevSlide,
            setSlides,
            setIsGroup,
            currentIndex,
            handleDotClick,
          }),
        )}
        {showDots && dots > 1 && (
          <div 
            className={clsx(
              "absolute left-1/2 transform -translate-x-1/2 flex space-x-2 z-20 transition-all",
              allowOverflow ? "bottom-[-40px]" : "bottom-12",
              { "w-full px-8 md:px-32": fullWidthDots }
            )}
          >
            {[...Array(dots)].map((_, index) => (
              <Button
                key={index}
                className={clsx(
                  "w-14 h-1 rounded-lg pt-0 pb-0 pl-0 pr-0 bg-(--aqua-medium)",
                  {
                    "bg-white": whiteDots,
                    "flex-1": fullWidthDots,
                    "bg-(--gray-30)/60!": index !== (isGroup ? Math.floor(currentIndex / slides) : currentIndex)
                  },
                )}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

Slider.Simple = ({ hasTranslation = false, customHeight = "md:h-[80vh]", ...props }) => {
  return (
    <SimpleMultimediaSlider
      rounded={props.rounded}
      slides={props.items}
      nextSlide={props.nextSlide}
      hasTranslation={hasTranslation}
      currentIndex={props.currentIndex}
      customHeight={customHeight}
    />
  );
};

Slider.Continuous = ({ children, slidesToShow, noGap = false, ...props }) => {
  props.setIsGroup(true);
  props.setSlides(slidesToShow)
  return (
    <ContinuousSlider
      noGap={noGap}
      data={props.items}
      children={children}
      slidesToShow={slidesToShow}
      currentIndex={props.currentIndex}
    />
  );
};

Slider.OnlyImage = ({ ...props }) => {
  return (
    <SimpleMultimediaSlider
      rounded={props.rounded}
      onlyImage={true}
      slides={props.items}
      nextSlide={props.nextSlide}
      currentIndex={props.currentIndex}
    />
  );
};

Slider.Custom = ({ children, isGroup=false, slidesToShow=0, ...props }) => {
  if (isGroup) {
    props.setIsGroup(true)
    props.setSlides(slidesToShow)
  }
  return (
    <>
      {isValidElement(children) &&
        cloneElement(children, {
          //@ts-ignore
          ...children.props, 
          ...props,
        })}
    </>
  );
};
