import { AccordionGroupContextType, AccordionGroupProps } from "@/models/accordion.model";
import { createContext, useContext, useState, Children, isValidElement, cloneElement } from "react";

const AccordionGroupContext = createContext<AccordionGroupContextType | null>(
  null
);

export const AccordionGroup = ({
  children,
  defaultOpen = [],
  gapClass = "3",
  width = "w-full",
}: AccordionGroupProps) => {
  const childArray = Children.toArray(children);
  const [openItems, setOpenItems] = useState<number[]>(
    () => [...defaultOpen]
  );

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const getMargins = (index: number, isFirst: boolean, isLast: boolean) => {
    if (!openItems.includes(index)) return "";
    const nextOpen = openItems.includes(index + 1);
    const classes: string[] = [];

    if (!isFirst) {
      classes.push(`mt-${gapClass}`);
    }
    if (!isLast && !nextOpen) {
      classes.push(`mb-${gapClass}`);
    }

    return classes.join(" ").trim();
  };

  return (
    <AccordionGroupContext.Provider value={{ openItems, toggleItem, getMargins }}>
      <div className="flex flex-col">
        {childArray.map((child, index) => {
          if (!isValidElement(child)) return child;
          const isFirst = index === 0;
          const isLast = index === childArray.length - 1;

          return cloneElement(child as React.ReactElement<any>, {
            index,
            isFirst,
            isLast,
            className: `${width} ${(child as React.ReactElement<any> & { className?: string }) || ""}`,
            key: (child as React.ReactElement).key ?? index,
          });
        })}
      </div>
    </AccordionGroupContext.Provider>
  );
};

export const useAccordionGroup = () => {
  const ctx = useContext(AccordionGroupContext);
  if (!ctx) throw new Error("Accordion must be used inside AccordionGroup");
  return ctx;
};
