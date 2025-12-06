import React from 'react';
import ProductsCardSkeleton from '@/components/product/ProductsCard.Skeleton';

import { useFilter } from '@/hooks/useFilter';
import { Props } from '@/models/products.model';
import { ProductsCard } from '@/components/product/ProductCard';

const ProductsGrid = ({ isSelectable }: Props) => {
  const { state } = useFilter();

  const isLoading = !state.products || state.products.length === 0;

  return (
    <div className="container w-full grid grid-cols-2 lg:grid-cols-3 gap-5 pb-8 mx-auto">
      {isLoading
        ? Array.from({ length: 12 }).map((_, idx) => (
            <div key={idx} className="aspect-square w-full">
              <ProductsCardSkeleton />
            </div>
          ))
        : state.products.map((item, index) => (
            <div key={index} className="aspect-w-1 aspect-h-1">
              <ProductsCard
                item={item}
                isSelectable={isSelectable}
                isReference={item?.node.products?.edges.length > 0}
              >
                <ProductsCard.Button text="goToDetail" />
              </ProductsCard>
            </div>
          ))}
    </div>
  );
};

export default ProductsGrid;
