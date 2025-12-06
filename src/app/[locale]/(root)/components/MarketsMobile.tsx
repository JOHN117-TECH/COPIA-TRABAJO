import React, { useState } from "react";
import clsx from "clsx";
import MarketCard from "./MarketCard";

interface MarketsMobileProps {
  items: any[];
}

const MarketsMobile: React.FC<MarketsMobileProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number|null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <div className="flex flex-col gap-4 py-3">
      {items.map((item, index) => {
        const isActive = activeIndex === index;
        return (
          <div
            key={index}
            onClick={() => handleToggle(index)}
            className={clsx(
              "relative overflow-hidden rounded-2xl transition-all duration-500 cursor-pointer"
            )}
          >
            <MarketCard item={item} index={index} isActive={isActive} />
          </div>
        );
      })}
    </div>
  );
};

export default MarketsMobile;
