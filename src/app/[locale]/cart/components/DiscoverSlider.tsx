"use client";

import { Slider } from "@/components/slider/Slider";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useEffect, useState } from "react";
import { useFormattedProducts } from "@/hooks/useFormattedProducts";
import { usePatterns_IsNewQuery } from "@/graphql/patternsAndProducts/queries/getNewProducts.generated";
import { ProductsCard } from "@/components/product/ProductCard";

/**
 * DiscoverSlider component
 *
 * This component renders a responsive product slider showcasing a selection
 * of products from the mock `ProductsGrid`. It adjusts the number of visible
 * slides based on the screen size using media queries.
 *
 * - Uses `useMediaQuery` to detect screen size (mobile and tablet).
 * - Dynamically sets `slidesToShow` based on device width.
 * - Renders a `Slider` component with navigation arrows and dots.
 * - Displays up to 8 products from the mock data.
 *
 * @returns {React.ReactElement} - Rendered responsive product slider
 */

export default function DiscoverSlider() {
  const [slidesToShow, setSlidesToShow] = useState<number>(4);

  const isMobile = useMediaQuery("(max-width: 480px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");

  useEffect(() => {
    if (isTablet) {
      setSlidesToShow(4);
    }
    if (isMobile) {
      setSlidesToShow(1);
    }
  }, [isTablet, isMobile]);
  const { data, loading, error } = usePatterns_IsNewQuery({});

  const ProductsSlide = useFormattedProducts(data?.patterns?.edges);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (
    !data ||
    !data.patterns ||
    !data.patterns.edges ||
    data.patterns.edges.length === 0
  )
    return <div>No products available</div>;

  return (
    <section className="overflow-x-auto relative gap-5 md:gap-10 mt-8 pb-2 flex align-center md:justify-center">
      <Slider items={ProductsSlide.slice(0, 8)} showArrows>
        <Slider.Continuous slidesToShow={slidesToShow}>
          {/* @ts-expect-error: ProductsCard expects props that are not provided here due to custom rendering */}
          <ProductsCard isReference>
            <ProductsCard.Button text="goToDetail" />
          </ProductsCard>
        </Slider.Continuous>
      </Slider>
    </section>
  );
}
