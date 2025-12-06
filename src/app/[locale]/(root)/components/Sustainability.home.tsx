"use client";

import Skeleton from "react-loading-skeleton";
import { Slider } from "@/components/slider/Slider";
import GetCurrentInstance from "@/hooks/useGetCurrentInstance";
import { SLIDES_SUSTAINABILITY } from "../assets/constants/constants";
import transformHomeSliders from "@/utilities/adapters/transformHomeSliders";
import { useHomeSlidersQuery } from "@/graphql/banners/queries/getHomeSliders.generated";
import useMediaQuery from "@/hooks/useMediaQuery";
import BannerSlide from "./BannerSlide";

const Sustainability = () => {
  const isMobile = useMediaQuery("(max-width: 900px)");
  const instanceId = GetCurrentInstance();
  const { data, loading, error } = useHomeSlidersQuery({
    variables: {
      instanceIds: [instanceId],
      tag: "SUSTAINABILITY_REPORTS", 
    },
  });
  if (loading) return <Skeleton width="50%" height={500} />;
  if (error) return <div>Error: {error.message}</div>;
  if (!data?.homeSliders)  return <div>No products available</div>;
  
  const BANNERS = transformHomeSliders(data).filter((banner) => banner?.type === "image");

  return (
    <Slider items={SLIDES_SUSTAINABILITY} rounded whiteDots showArrows={!isMobile} mobileBreakpoint={900}>
      <Slider.Custom>
        {/*@ts-ignore */}
        <BannerSlide />
      </Slider.Custom>
    </Slider>
  );
};

export default Sustainability;
