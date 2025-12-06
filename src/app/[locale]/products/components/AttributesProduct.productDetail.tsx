import React from 'react'
import { useTranslations } from 'next-intl';
import { Attributes, AttributesProductsProps } from '@/models/products.model';

/**
 * AttributesProduct component
 * 
 * This component displays a list of product attributes.
 * 
 * @param {AttributesProductsProps} props - The component props
 * @param {Attributes[]} props.attributes - Array of attributes to display
 * @returns {React.ReactElement} - Rendered component
 */
const AttributesProduct: React.FC<AttributesProductsProps> = ({ attributes }) => {
  const t = useTranslations("");

  return (
    <div>
      <h5 className="text-base text-(--gray-110) font-medium mt-6 mb-4">
        {t("ProductDetail.featuredAttributes")}
      </h5>
      <div className="flex flex-wrap gap-y-[10px] gap-x-[12px]">
        {attributes.map((atr:Attributes, index: number) =>
          <div key={index} className="flex flex-row items-center w-[117px] h-[48px]">
            <i className="icon-water-voc text-(--btn-outlined-border) text-5xl" />
            <p className="text-xs text-[--btn-outlined-border] m-0 break-words line-clamp-3">
              {atr.message}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default AttributesProduct