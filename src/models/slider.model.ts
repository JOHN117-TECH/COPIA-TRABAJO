import { ReactElement, ReactNode } from "react";

export interface SliderItem {
  [key: string]: any;
}

export interface SliderProps {
  items: SliderItem[];
  children: ReactNode;
  rounded?: boolean;
  showDots?: boolean;
  whiteDots?: boolean;
  showArrows?: boolean;
  whiteArrows?: boolean;
  fullWidthDots?: boolean;
  hasExternalDots?: boolean;
  allowOverflow?: boolean;
  mobileBreakpoint?: number;
  onIndexChange?: (index: number) => void;
}

export interface SimpleSliderProps {
  [key: string]: any;
}

export interface ContinuousSliderProps {
  [key: string]: any;
}

export interface ColumnsSliderProps {
  [key: string]: any;
}

export interface OnlyImageSliderProps {
  [key: string]: any;
}

export interface CustomSliderProps {
  children: ReactNode;
  isGroup?: boolean;
  [key: string]: any;
}

export interface SliderChildProps {
  items: SliderItem[];
  rounded: boolean;
  nextSlide: () => void;
  prevSlide: () => void;
  currentIndex: number;
  setSlides: (items: number) => void;
  setIsGroup: (type: boolean) => void;
  handleDotClick: (index: number) => void;
}

export interface CombinedSlide {
  src: string;
  srcMobile?: string;
  type: "image" | "video";
  title: string;
  description: string;
  buttonText: string;
  path: string;
  onClick: () => void;
}

export interface SimpleMultimediaSliderProps {
  slides: CombinedSlide[];
  rounded: boolean;
  currentIndex: number;
  nextSlide: () => void;
  onlyImage?: boolean;
  hasTranslation?: boolean;
  customHeight?: string;
}

export interface TextComponentSlide {
  title: string;
  description: string;
  buttonText: string;
  buttonIcon?: string;
  onClick: () => void;
  path: string;
}

export interface TextComponentProps {
  slide: TextComponentSlide;
  hasTranslation: boolean;
}

export type SliderChild = ReactElement<SliderChildProps>;