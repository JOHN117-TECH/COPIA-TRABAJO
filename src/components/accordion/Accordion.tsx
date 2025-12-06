import { Children, isValidElement, ReactElement } from "react";
import { useAccordionGroup } from "./AccordionGroup";
import {
  AccordionDetailProps,
  AccordionHeaderProps,
  AccordionProps,
} from "@/models/accordion.model";
import clsx from "clsx";

export const Accordion = ({
  index = 0,
  isFirst = false,
  isLast = false,
  children,
  className,
}: AccordionProps) => {
  const { openItems, toggleItem, getMargins } = useAccordionGroup();
  const isOpen = openItems.includes(index);
  const marginClass = getMargins(index, !!isFirst, !!isLast);

  let header: ReactElement | null = null;
  let detail: ReactElement | null = null;

  Children.forEach(children, (child) => {
    if (!isValidElement(child)) return;

    if (child.type === AccordionHeader) {
      header = child;
    } else if (child.type === AccordionDetail) {
      detail = child;
    }
  });

  return (
    <div className={marginClass}>
      <button
        onClick={() => toggleItem(index)}
        className={`flex justify-between items-center px-4 py-3 bg-(--white) border-b border-(--gray-30) ${className}`}
      >
        {header}
        <i
          className={`text-(--gray-70) text-lg transition-transform duration-300 ${
            isOpen ? "rotate-180 icon-chevron-up" : "icon-chevron-down"
          }`}
        />
      </button>
      <div
        className={`transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {detail}
      </div>
    </div>
  );
};

export const AccordionHeader = ({ title, className }: AccordionHeaderProps) => {
  return (
    <span
      className={
        className
          ? `${className}`
          : "text-left font-medium text-lg text-(--gray-70)"
      }
    >
      {title}
    </span>
  );
};

export const AccordionDetail = ({ children, classname }: AccordionDetailProps) => {
  return (
    <div className={clsx("p-4 text-gray-700 bg-(--gray-10) border-b border-(--gray-30)", classname)}>{children}</div>
  );
};
