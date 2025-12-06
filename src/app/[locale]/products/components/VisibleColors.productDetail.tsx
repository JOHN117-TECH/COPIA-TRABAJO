import clsx from 'clsx';
import React, { useState } from 'react';
import { Color, VisibleColorsProps } from '@/models/products.model';
import Image from 'next/image';

/**
 * VisibleColors component displays a list of color options as buttons.
 * Each color is represented by a colored square and a title.
 * Clicking a color toggles its selection state.
 * 
 * @param {VisibleColorsProps} props - Component props
 * @param {Color[]} props.visibleColors - Array of color options
 * @param {string | null} props.selectedColor - Selected color
 * @param {(color: string | null) => void} props.setSelectedColor - Function to set selected color
 * @param {(image: string) => void} props.setCurrentImage - Function to set current image
 * @param {(index: number) => void} props.setSelectedIndexImage - Function to set selected index image
 * @param {number} props.colorSize - Size of the color squares
 * @returns {React.ReactElement} A React component that renders color options.
 */
const VisibleColors: React.FC<VisibleColorsProps> = ({
  visibleColors,
  selectedColor,
  setSelectedColor,
  setCurrentImage,
  setSelectedIndexImage,
}) => {
  const fallBackSrc = '/errorImg.webp';
  const [imageError, setImageError] = useState(false);
  return (
    <div className="flex items-center gap-2 p-1 overflow-hidden">
      {visibleColors?.map((color: Color, index: number) => {
        const isSelected = selectedColor === color.node.color;
        const imagePadding = isSelected ? 2 : 0;
        return (
          <div
            key={index}
            className="flex-shrink-0 cursor-pointer rounded-full"
            style={{
              width: "24px",
              height: "24px",
              boxShadow: isSelected
                ? "0 0 0 0px white, 0 0 0 2px var(--spg-link)"
                : "none",
              padding: `${imagePadding}px`,
              boxSizing: "border-box", 
              backgroundColor: isSelected ? "white" : "transparent",
            }}
            onClick={() => {
              setSelectedColor(color.node.color);
              setCurrentImage(color.node.imageThumbSmall);
              setSelectedIndexImage(index);
            }}
          >
            <Image
              src={imageError ? fallBackSrc : (color.node.imageThumbSmall as string)}
              alt="color-img"
              width={140}
              height={140}
              className="w-full h-full rounded-full"
              onError={() => setImageError(true)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default VisibleColors