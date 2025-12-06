import SPGLink from "@/components/Link";
import FeaturedProductsCards from "./FeaturedProductsCards";

import { useTranslations } from "next-intl";
import { Button, ButtonIcon, ButtonText } from "@/components/Button";

const FeaturedProducts = ({ market }: { market: string }) => {
  const t = useTranslations("Markets");

  return (
    <div className="container mx-auto py-4 px-8 lg:py-8 sm:py-4 ">
      <h2 className="font-semibold text-3xl">
        {t("featuredProducts")}
      </h2>
      <FeaturedProductsCards market={market} />
      <SPGLink path={"/products"}>
        <Button>
          <ButtonText text={t("exploreAllProducts")} />
          <ButtonIcon className="icon-arrow-outward" />
        </Button>
      </SPGLink>
    </div>
  );
};

export default FeaturedProducts;
