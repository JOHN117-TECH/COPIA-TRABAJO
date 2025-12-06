import SPGLink from "../Link";
import ButtonType from "@/models/buttonType";

import { FC } from "react";
import { toast } from "sonner";
import { useTranslations } from "next-intl";
import { Button, ButtonIcon, ButtonText } from "../Button";
import { useCart } from "@/utilities/context/CartContext";
import { ButtonSectionProps } from "@/models/products.model";

/**
 * ButtonSection
 * @param {string} text The text to show in the "Go to detail" button
 * @returns A React component with two buttons: "Add to cart" and "Go to detail"
 */
const ButtonSection: FC<ButtonSectionProps> = ({ product, text }) => {
  const t = useTranslations("Products");
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(product);
    toast(t("addedToCart"));
  };

  return (
    <section className="pt-2 pb-2 px-1 pl-1 md:px-4 md:pt-4 flex gap-1 flex-col items-center items-stretch">
      <SPGLink
        path={`/products/${product.slug}`}
        className="order-1 md:order-2 w-full"
      >
        <Button
          design={ButtonType.LINK_GREEN_SMALL}
          className="w-full font-medium underline whitespace-nowrap text-center"
        >
          <ButtonText text={t(text)} />
        </Button>
      </SPGLink>
      <Button
        onClick={handleAddToCart}
        design={ButtonType.OUTLINED_SMALL}
        className="w-full font-medium whitespace-nowrap"
      >
        <ButtonIcon className="icon-arrow-right" />
        <ButtonText text={t("addToCart")} />
      </Button>
    </section>
  );
};

export default ButtonSection;
