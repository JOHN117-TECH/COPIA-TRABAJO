"use client";

import GetCurrentInstance from "@/hooks/useGetCurrentInstance";
import FeaturedProductsCardsSkeleton from "./FeaturedProductsCardsSkeleton";

import { useEffect, useState } from "react";
import { ProductsCard } from "@/components/product/ProductCard";
import { usePatternsQueryQuery } from "@/graphql/patterns/allPaterns/queries/getAllPatterns.generated";

const FeaturedProductsCards = ({ market }: { market: string }) => {
  const [collections, setCollections] = useState<any[]>([]);
  const { data, loading, error } = usePatternsQueryQuery({
    variables: {
      first: 3,
      // sectorIds: market, // TODO: Descomentar cuando se tenga la funcionalidad
      orderBy: "new_first",
      instanceIds: GetCurrentInstance(),
      saleable: true,
    },
  });

  useEffect(() => {
    if (data) {
      const products = data.patterns?.edges || [];
      const productsImages = products?.map((item: any) => ({node:{ ...item.node, images: item.node.products.edges.map((product: any) => product.node.imageThumbSmall)}}));
      setCollections(productsImages);
    }
  },[data])
  
  if (loading) return <FeaturedProductsCardsSkeleton />;
  if (error) return <div>Error: {error.message}</div>;
  if (!data?.patterns) return <div>No products available</div>;

  return (
    <section className="overflow-x-auto gap-5 md:gap-10 mt-8 pb-2 flex align-center md:justify-center">
      {collections.map((item, index) => (
        <ProductsCard
          key={index}
          item={item}
          isSelectable={false}
          isReference={item?.node.products?.edges.length > 0}
        >
          <ProductsCard.Button text="goToDetail" />
        </ProductsCard>
      ))}
    </section>
  );
};

export default FeaturedProductsCards;
