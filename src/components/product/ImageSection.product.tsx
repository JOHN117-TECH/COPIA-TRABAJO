"use client";

import clsx from "clsx";
import Image from "next/image";
import Modal from "../modal/Modal";
import ButtonType from "@/models/buttonType";
import TagSection from "./TagSection.product";
import useMediaQuery from "@/hooks/useMediaQuery";
import ProductDetailModal from "@/app/[locale]/products/ProductDetailModal";

import { FC, useEffect, useState } from "react";
import { Button, ButtonIcon } from "../Button";
import { ImageSectionProps } from "@/models/products.model";

/**
 * ImageSection
 * @param {Object} item - The item to be rendered. It contains the following properties:
 * - src: The URL of the image.
 * - isNew: A boolean indicating if the item is new.
 * - newColor: A boolean indicating if the item is a new color.
 * @param {boolean} isSelectable - A boolean indicating if the item is selectable.
 * @returns {ReactElement} The rendered component.
 */
const ImageSection: FC<ImageSectionProps> = ({
  item,
  isSelectable = false,
  isRemovable = false,
}) => {
  const fallBackSrc = '/errorImg.webp';
  const [showModal, setShowModal] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliceImages = item.products.edges.slice(0,5)
  const images = sliceImages.map((p) => p.node.imageThumbSmall);
  const isMobileOrTablet = useMediaQuery("(max-width: 1024px)");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative">
      {!isSelectable && !isRemovable && (
        <Button
          design={ButtonType.FILLED_WHITE_BIG_ROUNDED}
          className="absolute left-2 bottom-1"
        >
          <ButtonIcon className="icon-bookmark text-2xl" />
        </Button>
      )}
      {!isRemovable && (
        <Button
          design={ButtonType.FILLED_WHITE_BIG_ROUNDED}
          className="absolute right-2 bottom-1"
          onClick={() => {
            setShowModal(true);
          }}
        >
          <ButtonIcon className="icon-expand text-2xl" />
        </Button>
      )}
      {!isRemovable && (item?.isNew || item?.products.edges.find((p: any) => p.node.isNew)) && (
        <div>
        <TagSection item={item} />
        </div>
      )
      }
      {isSelectable && (
        <div className="absolute right-4 top-4">
          <label htmlFor={`check-${item.id}`} className="flex items-center justify-center">
            <input
              type="checkbox"
              id={`check-${item.id}`}
              checked={item?.selected}
              className="peer sr-only"
            />
              <span
                aria-hidden
                className="absolute w-9 h-9 bg-white rounded-full shadow-sm z-10"
              />
              <span
                className={clsx(
                  "w-4 h-4 flex items-center justify-center border-2 rounded-[3px] transition-colors duration-200",
                  "border-(--aqua-medium) bg-white text-transparent z-20",
                  "peer-checked:bg-(--aqua-medium) peer-checked:border-(--aqua-medium) peer-checked:text-white"
                )}
              >
                <i className="icon-check text-base"></i>
              </span>
          </label>
        </div>
      )}
      {isRemovable && (
        <Button
          design={ButtonType.FILLED_WHITE_MEDIUM_ROUNDED}
          className="absolute right-2 top-2"
        >
          <ButtonIcon className="icon-delete font-medium text-xl text-(--notifications-error-100)" />
        </Button>
      )}
      {!isMobileOrTablet && (
        <div>
          <div className="w-full h-[12em] overflow-hidden rounded-2xl">
            <Image
              src={imageError ? fallBackSrc : images[currentIndex]}
              alt={`image-${currentIndex}`}
              width={150}
              height={150}
              unoptimized
              className="w-full h-[12em] object-cover rounded-2xl"
              onError={() => setImageError(true)}
            />
          </div>
          {images.length > 1 && (
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2 z-1">
              {images.map((_, index) => (
                <span
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={clsx(
                    "h-[4px] w-5 rounded-full transition-opacity duration-300",
                    index === currentIndex ? "bg-black/80" : "bg-black/30"
                  )}
                />
              ))}
            </div>
          )}
        </div>
      )}
      {isMobileOrTablet && (
        <Image
          src={imageError ? fallBackSrc : (item.imageThumbSmall as string)}
          alt="text-img"
          width={150}
          height={150}
          className="w-full h-[9em] object-cover rounded-2xl"
          onError={() => setImageError(true)}
        /> 
      )}
      <Modal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
        showHeaderOn="mobile" 
        showFooterOn= "mobile"
        header={true}
      >
        <ProductDetailModal slug={item.slug} />
      </Modal>
    </div>
  );
};

export default ImageSection;