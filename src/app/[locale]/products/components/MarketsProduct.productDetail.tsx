import clsx from 'clsx';
import React from 'react';
import { useTranslations } from 'next-intl';
import { MarketsProductsProps } from '@/models/products.model';
import { TagIcon, TagLabel, Tags } from '@/components/Tags';

/**
 * MarketsProduct component
 * @param {MarketsProductsProps} props - Component props
 * @param {FilterItem[]} props.sectors - Array of sectors
 * @returns {React.ReactElement} - MarketsProduct component
 */
const MarketsProduct: React.FC<MarketsProductsProps> = ({ sectors }) => {
  const t = useTranslations("");

  const uniqueMarkets = Array.from(
    new Map(
      sectors.map(sector => [sector?.node?.market.name, sector])
    ).values()
  );

  return (
    <div className="my-4 space-y-3">
      <h5 className={"text-xl text-(--gray-70) font-semibold"}>
        {t("ProductDetail.aboutProduct")}
      </h5>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet asperiores doloribus sunt molestiae dignissimos nesciunt iste fugiat, inventore temporibus necessitatibus atque nihil repellendus veniam, recusandae facere, praesentium officiis placeat. Quasi!</p>
      <h5 className={"text-xl text-(--gray-70) font-semibold"}>
        {t("ProductDetail.markets")}
      </h5>
      <div className="flex flex-wrap whitespace-nowrap mt-2 gap-2">
        {uniqueMarkets.map((market, index) => (
          <Tags rounded='full' key={index} color='var(--gray-20)'>
            <TagIcon className='icon-truck mr-2'/>
            <TagLabel label={market?.node?.market.name ?? ''}/>
          </Tags>
        ))}
      </div>
    </div>
  )
}

export default MarketsProduct