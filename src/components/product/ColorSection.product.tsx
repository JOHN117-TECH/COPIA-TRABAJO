import Image from "next/image";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState, FC } from "react";
import { ColorSectionProps } from "@/models/products.model";

/**
 * ColorSection component
 * @param {object} props - Component props
 * @param {array} props.colors - Array of colors
 * @returns {ReactElement} - ColorSection component
 */
const ColorSection: FC<ColorSectionProps> = ({ colors }) => {
  const t = useTranslations('Products');
  const fallBackSrc = '/errorImg.webp';
  const containerRef = useRef<HTMLDivElement>(null);
  const [imageError, setImageError] = useState(false);
  const [visibleColors, setVisibleColors] = useState<string[]>([]);
  const [remainingColorsCount, setRemainingColorsCount] = useState<number>(0);

  const colorSize = 16;
  const colorGap = 8;
  const remainingCounterWidthEstimate = 4 + 4 + 10;

  const calculateVisibleColors = () => {
    if (containerRef.current && colors) {
      const availableWidth = containerRef.current.offsetWidth;
      let usedWidth = 0;
      const visible: string[] = [];
      let canShowRemainingCounter = false;

      for (let i = 0; i < colors.length; i++) {
        const colorWidth = colorSize + (i > 0 ? colorGap : 0);

        const spaceNeededForCounter = remainingColorsCount > 0 ? remainingCounterWidthEstimate : 0;
        const potentialUsedWidth = usedWidth + colorWidth + (visible.length === 0 ? 0 : colorGap);

        if (potentialUsedWidth + spaceNeededForCounter <= availableWidth) {
          visible.push(colors[i].node.imageThumbSmall);
          usedWidth = potentialUsedWidth;
        } else {
          setRemainingColorsCount(colors.length - i);
          canShowRemainingCounter = true;
          break;
        }
      }

      if (!canShowRemainingCounter) {
        setRemainingColorsCount(0);
      }

      setVisibleColors(visible);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      calculateVisibleColors();
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [colors, colorSize, colorGap, remainingCounterWidthEstimate]);

  return (
    <section className="flex items-center gap-2" ref={containerRef}>
      <p className="text-14 font-500">{t("colors")}</p>
      <div className="flex items-center gap-2 overflow-hidden">
        {visibleColors.map((color, index) => (
          <div
            key={index}
            className="rounded-full w-4 h-4 flex-shrink-0"
            style={{ width: `${colorSize}px`, height: `${colorSize}px` }}
          >
            <Image
              src={imageError ? fallBackSrc : (color as string)}
              alt="text-img"
              width={150}
              height={150}
              className="w-full h-full rounded-full"
              onError={() => setImageError(true)}
            />
          </div>
        ))}
      </div>
      {remainingColorsCount > 0 && (
        <div className="relative w-4 h-4 rounded-full flex items-center justify-center bg-right-fade-text pl-2">
          <p className="text-xs font-500">
            +{remainingColorsCount}
          </p>
        </div>
      )}
    </section>
  );
};

export default ColorSection;