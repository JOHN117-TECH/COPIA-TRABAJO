"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";
import { cloneElement, FC, isValidElement } from "react";

interface ContinuousSliderItem {
  src: string;
  title: string;
  description: string;
  onClick?: () => void;
  buttonText: string;
  isReference?: boolean;
  markets: string[];
  images: string[];
  [key: string]: any;
}

interface ContinuousSliderProps {
  data: ContinuousSliderItem[];
  noGap: boolean;
  currentIndex: number;
  slidesToShow?: number;
  children: React.ReactNode;
}

/**
 * A component that renders a continuous slider with a list of items
 * @param {{data: Array, currentIndex: number, slidesToShow: number, columns: boolean}} props - The props of the component
 * @param {Array} props.data - The list of items to be rendered
 * @param {number} props.currentIndex - The current index of the slide to be displayed
 * @param {number} [props.slidesToShow=5] - The number of slides to be displayed at once
 * @param {boolean} [props.columns=false] - Whether to render the items in columns or not
 * @return {ReactElement} The component
 */
const ContinuousSlider: FC<ContinuousSliderProps> = ({
  data,
  noGap,
  children,
  currentIndex,
  slidesToShow = 5,
}) => {
  const [itemWidth, setItemWidth] = useState<number>(0);

  useEffect(() => {
    const updateSizes = () => {
      const container = document.querySelector(".continuous-slider-container") as HTMLElement;
      if (container) {
        setItemWidth((container.offsetWidth / slidesToShow) + 16);
      }
    };

    updateSizes();
    window.addEventListener("resize", updateSizes);
    return () => window.removeEventListener("resize", updateSizes);
  }, [slidesToShow]);
  
  return (
    <div className="relative w-full overflow-hidden py-3 continuous-slider-container">
      <div className="overflow-hidden">
        <div
          className={clsx("flex transition-transform duration-500", {"gap-[16px]": !noGap})}
          style={{
            transform: `translateX(-${currentIndex * (itemWidth-(16 * (slidesToShow-1)))}px)`,
            width: data.length * (itemWidth + 16) + "px",
          }}
        >
          {data?.map((item, index) => (
            <div
              key={index}
              className={clsx("flex-shrink-0 py-3", `w-[calc(100% / ${slidesToShow})]`)}
              style={{ width: `${itemWidth - (16 * slidesToShow)}px` }}
            >
              {isValidElement(children) &&
                cloneElement(children, {
                  //@ts-ignore
                  ...children.props, 
                  item,
                  index
                })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContinuousSlider;
