import clsx from "clsx";
import { FC } from 'react';
import { Button, ButtonIcon } from '../Button';
import ButtonType from "@/models/buttonType";

interface ArrowsProps {
  nextSlide: () => void;
  prevSlide: () => void;
  currentIndex: number;
  totalSlides: number;
  isGroup?: boolean;
  rounded?: boolean
  slidesToShow?: number;
  whiteArrows?: boolean;
  className?: string;
}

/**
 * A component that renders the arrows of a slider
 * @param {{nextSlide: Function, prevSlide: Function, currentIndex: number, totalSlides: number}} props - The props of the component
 * @param {Function} props.nextSlide - The function to be called when the next arrow is clicked
 * @param {Function} props.prevSlide - The function to be called when the previous arrow is clicked
 * @param {number} props.currentIndex - The current index of the slide
 * @param {number} props.totalSlides - The total number of slides
 * @return {ReactElement} The component
 */
  const Arrows: FC<ArrowsProps> = ({ nextSlide, prevSlide, currentIndex, totalSlides, isGroup,
  slidesToShow, whiteArrows, rounded, className }) => {
    const isFirst =
    isGroup && slidesToShow
      ? currentIndex < slidesToShow
      : currentIndex === 0;

    const isLast =
      isGroup && slidesToShow
        ? currentIndex + slidesToShow >= totalSlides
        : currentIndex >= totalSlides - 1;

    return (
      <div
        className={clsx(
          className ?? "absolute w-full px-[5%]! z-[10] flex items-center top-[45%]",
          rounded && "justify-between",
          !isGroup
            ? "justify-between"
            : !isFirst && !isLast
              ? "justify-between"
              : isFirst
                ? "justify-end"
                : "justify-start"
        )}
      >
        {(!isFirst || !isGroup) && (
          <Button
            design={whiteArrows ? ButtonType.FILLED_WHITE_BIG_ROUNDED : ButtonType.FILLED_BIG_ROUNDED}
            onClick={prevSlide}
            className="pointer-events-auto"
          >
            <ButtonIcon className="icon-chevron-left" />
          </Button>
        )}

        {(!isLast || !isGroup) && (
          <Button
            design={whiteArrows ? ButtonType.FILLED_WHITE_BIG_ROUNDED : ButtonType.FILLED_BIG_ROUNDED}
            onClick={nextSlide}
            className="pointer-events-auto"
          >
            <ButtonIcon className="icon-chevron-right" />
          </Button>
        )}
      </div>

    );
  };

export default Arrows;
