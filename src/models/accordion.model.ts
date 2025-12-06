import { ReactNode } from "react";

export interface AccordionGroupProps {
  children: ReactNode;
  defaultOpen?: number[];
  gapClass?: string;
  width?: string;
};

export interface AccordionGroupContextType {
  openItems: number[];
  toggleItem: (index: number) => void;
  getMargins: (index: number, isFirst: boolean, isLast: boolean) => string;
  width?: string;
};

export interface AccordionProps {
  index?: number;
  isFirst?: boolean;
  isLast?: boolean;
  children: ReactNode;
  className?: string;
};

export interface AccordionHeaderProps {
  title: string;
  className?: string;
}

export interface AccordionDetailProps {
  children: ReactNode;
  classname?: string;
}