import ColorSelected from './ColorSelected.productDetail';
import VisibleColors from './VisibleColors.productDetail';
import ColorUnselected from './ColorUnselected.productDetail';

import React, { useEffect, useState } from 'react';
import { ColorsProductProps } from '@/models/products.model';

/**
 * ColorsProduct component
 * @param {ColorsProductProps} props - Component props
 * @param {PatternResponse} props.product - The product data
 * @param {string | null} props.selectedColor - Currently selected color
 * @param {(color: string | null) => void} props.setSelectedColor - Function to set selected color
 * @param {(image: string) => void} props.setCurrentImage - Function to set current image
 * @param {(index: number) => void} props.setSelectedIndexImage - Function to set selected index image
 * @returns {React.ReactElement} - The ColorsProduct component
 */
const ColorsProduct: React.FC<ColorsProductProps> = ({ product, selectedColor, setSelectedColor, setCurrentImage, setSelectedIndexImage }) => {
  const colors = product?.products?.edges.slice(0, 7) || [];
  const [remainingColorsCount, setRemainingColorsCount] = useState<number>(0);
  
  useEffect(() => {
    if (product.products?.edges && product.products?.edges.length >= 7) setRemainingColorsCount(product.products.edges.length - 7)
  }, [product.products?.edges]);

  return (
    <div className="mt-2 gap-2">
      {selectedColor ? (
        <ColorSelected 
          product={product} 
          selectedColor={selectedColor} 
        />
      ) : (
        <ColorUnselected product={product} />
      )}
      <section
        className="flex items-center gap-1 mt-2 mb-4 relative"
      >
        <VisibleColors 
          selectedColor={selectedColor}
          visibleColors={colors} 
          setCurrentImage={setCurrentImage} 
          setSelectedColor={setSelectedColor} 
          setSelectedIndexImage={setSelectedIndexImage} 
        />
        {remainingColorsCount > 0 && (
          <p className='mb-0 text-(--gray-60) text-sm'>{`+${remainingColorsCount}`}</p>
        )}
      </section>
    </div>
  )
}

export default ColorsProduct