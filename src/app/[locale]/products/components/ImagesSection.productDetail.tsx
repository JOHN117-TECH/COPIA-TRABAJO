import clsx from "clsx";
import Image from "next/image";
import ButtonType from "@/models/buttonType";

import { useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Pattern } from "@/models/products.model";
import { TagLabel, Tags } from "@/components/Tags";
import { Button, ButtonIcon } from "@/components/Button";
import { PatternNode } from "@/graphql/generated/types";

interface ImagesSectionProps {
  product: PatternNode;
  classNameBigImage?: string;
  currentImage: string;
  setCurrentImage: (image: string) => void;
  selectedIndexImage: number;
  setSelectedIndexImage: (index: number) => void;
}

/**
 * A component that renders the images section of the product detail page.
 * @param {ImagesSectionProps} props - The props of the component
 * @param {Object} props.product - The object containing the product information
 * @param {string} props.currentImage - The current image being displayed
 * @param {Function} props.setCurrentImage - The function to set the current image
 * @param {number} props.selectedIndexImage - The index of the currently selected image
 * @param {Function} props.setSelectedIndexImage - The function to set the index of the currently selected image
 * @return {ReactElement} The component
 */
const ImagesSection: React.FC<ImagesSectionProps> = ({
  product,
  currentImage,
  setCurrentImage,
  classNameBigImage,
  selectedIndexImage,
  setSelectedIndexImage,
}) => {
  const t = useTranslations("Products")
  const fallBackSrc = "/errorImg.webp";
  const imgWrapperRef = useRef<HTMLDivElement>(null);
  const [imageError, setImageError] = useState(false);
  const [zoomActive, setZoomActive] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });


  return (
    product.products && product.products?.edges.length > 0 &&
    <section className={clsx("w-full flex flex-col md:col-span-5")}>
      <div className="relative w-full overflow-hidden rounded-lg">
        {
          product.isNew &&
          <Tags className="absolute top-3 left-3" color="var(--aqua)" textColor="white">
            <TagLabel label={t('new').toUpperCase()}/>
          </Tags>
        }
        <div
          ref={imgWrapperRef}
          className="relative w-full overflow-hidden rounded-lg"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            setZoomPosition({ x, y });
          }}
          onMouseLeave={() => setZoomActive(false)}
        >

          <Image
            src={imageError ? fallBackSrc : currentImage}
            alt="text-img"
            width={100}
            height={100}
            unoptimized
            className={clsx(
              "object-cover rounded-lg w-[100%]",
              classNameBigImage
            )}
            onError={() => setImageError(true)}
          />

          {/* --- 🔍 LUPA CIRCULAR --- */}
          {zoomActive && imgWrapperRef.current && (
            <div
              className="pointer-events-none absolute w-40 h-40 rounded-full border-2 border-white shadow-lg overflow-hidden"
              style={{
                top: zoomPosition.y - 80,
                left: zoomPosition.x - 80,
              }}
            >
              <div
                className="absolute w-full h-full bg-no-repeat"
                style={{
                  backgroundImage: `url(${currentImage})`,
                  backgroundSize: `
                    ${imgWrapperRef.current.offsetWidth * 2}px
                    ${imgWrapperRef.current.offsetHeight * 2}px
                  `,

                  backgroundPosition: `
                    ${-(zoomPosition.x * 2 - 80)}px
                    ${-(zoomPosition.y * 2 - 80)}px
                  `,
                }}
              />
            </div>
          )}
        </div>

        {selectedIndexImage > 0 && (
          <Button
            design={ButtonType.FILLED_BIG_ROUNDED}
            className="absolute top-1/2 -translate-y-1/2 left-3"
            onClick={() => {
              setCurrentImage(product.products?.edges[selectedIndexImage - 1]?.node?.imageThumbSmall || '');
              setSelectedIndexImage(selectedIndexImage - 1);
            }}
          >
            <ButtonIcon className="icon-chevron-left" />
          </Button>
        )}
        {selectedIndexImage < product.products.edges.length - 1 && (
          <Button
            design={ButtonType.FILLED_BIG_ROUNDED}
            className="absolute top-1/2 -translate-y-1/2 right-3"
            onClick={() => {
              setCurrentImage(product.products?.edges[selectedIndexImage + 1]?.node?.imageThumbSmall ?? '');
              setSelectedIndexImage(selectedIndexImage + 1);
            }}
          >
            <ButtonIcon className="icon-chevron-right" />
          </Button>
        )}
        <div className="flex md:flex-col gap-2 absolute right-3 bottom-3">
          <Button design={ButtonType.FILLED_WHITE_BIG_ROUNDED}>
            <ButtonIcon className="icon-add-shopping-cart text-2xl" />
          </Button>
          <Button design={ButtonType.FILLED_WHITE_BIG_ROUNDED}>
            <ButtonIcon className="icon-bookmark text-2xl" />
          </Button>
          <Button design={ButtonType.FILLED_WHITE_BIG_ROUNDED}  onClick={() => setZoomActive(!zoomActive)}>
            <ButtonIcon className="icon-search text-2xl" />
          </Button>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <div className="flex space-x-3 py-1 px-2 overflow-x-auto flex-shrink-0 max-w-full scrollbar-hide">
          {product.products.edges.map((image, index) => {
            const isSelected = selectedIndexImage === index;
            return (
              <Image
                key={index}
                src={imageError ? fallBackSrc : (image?.node?.imageThumbSmall as string)}
                alt="product thumbnail"
                width={76}
                height={76}
                className={clsx(
                  "w-[64px] h-[64px] md:w-[76px] md:h-[76px] object-cover rounded-md cursor-pointer transition-all duration-200",
                  isSelected
                    ? "outline outline-[2px] outline-white ring-[2px] ring-[var(--aqua-medium)] ring-offset-[2px] ring-offset-white"
                    : "outline-none ring-0"
                )}
                onError={() => setImageError(true)}
                onClick={() => {
                  setCurrentImage(image?.node?.imageThumbSmall || '');
                  setSelectedIndexImage(index);
                }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ImagesSection;
