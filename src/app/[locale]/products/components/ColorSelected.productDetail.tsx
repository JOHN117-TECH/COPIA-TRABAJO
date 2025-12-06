import React from 'react';
import { ColorSelectedProps } from '@/models/products.model';
import capitalizeFirstLetter from '@/hooks/useCapitalizeText';

/**
 * ColorSelected component displays the selected color and code of the product.
 * @param {ColorSelectedProps} props - Component props
 * @param {PatternResponse} props.product - Product object
 * @param {string} props.selectedColor - Selected color
 * @returns {React.ReactElement} - ColorSelected component
 */
const ColorSelected: React.FC<ColorSelectedProps> = ({product, selectedColor }) => {
  
  return (
    <section className="flex justify-between">
      <div className="flex gap-1">
        <p className="text-(--gray-60) font-normal m-0">
          {capitalizeFirstLetter(selectedColor)}
        </p>
        <span className="border-l border-(--gray-50) h-5 mx-2"/>
        {product.products?.edges && 
        <p className="text-(--gray-60) font-normal m-0">{product.products?.edges.find((color) => color?.node?.color === selectedColor)?.node?.code}</p>
        }
      </div>
      <div className="flex gap-4">
        <i className="icon-share text-(--btn-outlined-border) text-3xl pr-1" />
      </div>
    </section>
  )
}

export default ColorSelected