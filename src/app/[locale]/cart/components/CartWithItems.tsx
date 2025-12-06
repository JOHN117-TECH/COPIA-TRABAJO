import React from "react";
import SearchCart from "./SearchCart";
import SampleCards from "./SampleCards";
import { useTranslations } from "next-intl";
import ButtonType from "@/models/buttonType";
import AddressSection from "./AddressSection";
import { useCart } from "@/utilities/context/CartContext";
import { Button, ButtonIcon, ButtonText } from "@/components/Button";


/**
 * CartWithItems component
 *
 * This component renders the main cart view when items are present.
 * It includes a search bar, buttons for adding items, and displays two
 * sections of sample products using the `SampleCards` component.
 * It also integrates the `AddressSection` for managing delivery details.
 *
 * 
 * - Displays two product sample sections: general samples and 5x5 samples.
 * - Uses mock data from `ProductsGrid` to simulate product listings.
 * - Integrates `SearchCart` for product lookup and `AddressSection` for address input.
 *
 * @returns {React.ReactElement} - Rendered cart view with items and address section
 */


export default function CartWithItems() {
  const t = useTranslations("Cart");

  const {
      state: { items },
    } = useCart();
  const patterns = items.filter((item) => item.__typename === "PatternNode");
  const products = items.filter((item) => item.__typename === "ProductNode");
  
  return (
    <div className="flex flex-col items-center text-center py-20">
      <section className="flex flex-row">
        <div className="w-10/12">
          <SearchCart />
        </div>
        <Button design={ButtonType.OUTLINED_MEDIUM}>
          <ButtonIcon className="icon-add" />
          <ButtonText text={t("add")} />
        </Button>
      </section>
      <section className="flex flex-col md:flex-row items-start  mt-10">
        <div className="w-full md:w-1/2 text-left">
          <h1 className="text-gray-600 2xl w-full">{t("SampleCards")}</h1>
          {patterns.map((product) => (
            <SampleCards key={product.id} pattern={product} initialQuantity={1} />
          ))}
          <h1 className="text-gray-600 2xl w-full">{t("5x5Samples")}</h1>
          {products.map((product) => (
            <SampleCards key={product.id} product={product} initialQuantity={1} />
          ))}
        </div>
          <AddressSection />
      </section>
    </div>
  );
}
