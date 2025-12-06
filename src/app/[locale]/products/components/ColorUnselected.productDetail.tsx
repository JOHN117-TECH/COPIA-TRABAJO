import React from 'react'
import { useTranslations } from 'next-intl';
import { ColorUnselectedProps } from '@/models/products.model';

/**
 * ColorUnselected component
 * @param {ColorUnselectedProps} props - Component props
 * @param {PatternResponse} props.product - Product object
 * @returns {React.ReactElement} - ColorUnselected component
 */
const ColorUnselected: React.FC<ColorUnselectedProps> = ({ product }) => {
  const t = useTranslations();
  
  return (
    <section className="flex justify-between">
      <p className="text-(--gray-60) font-normal lowercase m-0">
        {product.products?.edges.length + " "}
        {t("ProductDetail.colorways")}
      </p>
      <div className="flex gap-4">
        <i className="icon-share text-(--btn-outlined-border) text-3xl pr-1" />
      </div>
    </section>
  )
}

export default ColorUnselected