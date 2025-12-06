"use client";

import Skeleton from "react-loading-skeleton";
import GetCurrentInstance from "@/hooks/useGetCurrentInstance";
import transformHomeSliders from "@/utilities/adapters/transformHomeSliders";

import { Slider } from "@/components/slider/Slider";
import { useHomeSlidersQuery } from "@/graphql/banners/queries/getHomeSliders.generated";

export default function HeroBanner() {
  const instanceId = GetCurrentInstance();
  const { data, loading, error } = useHomeSlidersQuery({
    variables: {
      instanceIds: [instanceId],
      tag: "SUSTAINABILITY_REPORTS", 
    },
  });
  if (loading) return <Skeleton width="100%" height={500} />;
  if (error) return <div>Error: {error.message}</div>;
  if (!data?.homeSliders)  return <div>No products available</div>;
  
  const BANNERS = transformHomeSliders(data);
  return (
    <Slider items={BANNERS}>
      <Slider.Simple />
    </Slider>
  );
}
