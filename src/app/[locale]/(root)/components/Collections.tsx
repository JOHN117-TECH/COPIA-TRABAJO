"use client"

import clsx from "clsx";
import SPGLink from "@/components/Link";
import useMediaQuery from "@/hooks/useMediaQuery";
import PatternsSlider from "../../../../components/patternsSlider/PatternsSlider";

import { useTranslations } from "next-intl";
import { Button, ButtonIcon, ButtonText } from "@/components/Button";

const Collections = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const t =  useTranslations("HomePage.collections");

  return (
    <div className="w-full mb-20 space-y-6">
      <div className="container mx-auto space-y-2">
        <h2 className="font-normal text-[32px] md:text-[40px]">
          {t("featuredCollections")}
        </h2>
        <p className="text-(--gray-60) font-semibold md:font-normal text-xl md:text-lg">
          {t("featuredCollectionsDescription")}
        </p>
      </div>
      <div className="flex gap-4 justify-center align-center items-center w-full m-0">
        <PatternsSlider />
      </div>  
      <section className="flex justify-center py-4 md:py-8">
        <SPGLink path={"/products"} className={clsx(isMobile && "w-full")}>
          <Button className={clsx(isMobile && "container w-full mx-auto")}>
            <ButtonText text={t("exploreAllProducts")} />
            <ButtonIcon className="icon-arrow-outward" />
          </Button>
        </SPGLink>
      </section>
    </div>
  );
};

export default Collections;
