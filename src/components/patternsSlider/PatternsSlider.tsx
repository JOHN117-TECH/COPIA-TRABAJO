"use client";

import clsx from "clsx";
import useMediaQuery from "@/hooks/useMediaQuery";
import RenderPatternsSlider from "./RenderPatternsSlider";
import GetCurrentInstance from "@/hooks/useGetCurrentInstance";
import ProductsCardSkeleton from "@/components/product/ProductsCard.Skeleton";

import { useEffect, useState } from "react";
import { Slider } from "@/components/slider/Slider";
import { PatternNode } from "@/graphql/generated/types";
import { usePatternsQueryQuery } from "@/graphql/patterns/allPaterns/queries/getAllPatterns.generated";
import { useGetRelatedPatternsQuery } from "@/graphql/patterns/singlePattern/queries/getRelatedPatterns.generated";

const PatternsSlider = ({ product }: {product?: PatternNode}) => {
  const slidesToShow = 3;
  const instanceId = GetCurrentInstance();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const overlayLeft = "left-0 bg-gradient-to-r from-white/90 to-transparent";
  const overlayRight = "right-0 pr-1 bg-gradient-to-l from-white to-transparent";
  const overlayBase = "absolute top-0 h-[87%] w-60 pointer-events-none z-10 hidden md:block";

  const [collections, setCollections] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const { data: pattern } = useGetRelatedPatternsQuery({ 
    variables: {
      slug: product?.slug,
      instanceIds: [instanceId],
    },
    skip: !product,
  });
  
  const { data, loading } = usePatternsQueryQuery({
    variables: {
      first: 6,
      saleable: true,
      orderBy: "new_first",
      instanceIds: instanceId,
    },
    skip: !!product,
  });

  useEffect(() => {
    let products;

    if (pattern) products = pattern.pattern?.relatedPatterns?.edges || []
    else if (data) products = data.patterns?.edges || []

    const productsImages = products?.map((item: any) => (
      { node:
        { 
          ...item.node, 
          images: item.node.products.edges.map((product: any) => product.node.imageThumbSmall)
        }
      }));
    setCollections(productsImages || []);
  },[data, pattern])

  return (
    <div className="relative w-full overflow-hidden pb-16">
      {loading
        ? Array.from({ length: 3 }).map((_, idx) => (
            <div key={idx} className="aspect-square w-full">
              <ProductsCardSkeleton />
            </div>
          ))
        :
          <div>
          <Slider
            items={collections}
            showArrows={!isMobile}
            showDots
            rounded
            hasExternalDots 
            allowOverflow
            onIndexChange={setCurrentIndex}
          >
            <Slider.Custom isGroup slidesToShow={slidesToShow}>
              {/* @ts-ignore */}
              <RenderPatternsSlider />
            </Slider.Custom>
          </Slider>
          {currentIndex > 0 && (
            <div className={clsx(overlayBase, overlayLeft)} />
          )}

          {currentIndex + slidesToShow < collections.length && (
            <div className={clsx(overlayBase, overlayRight)} />
          )}
        </div>
      }
    </div>
  );
};

export default PatternsSlider;
