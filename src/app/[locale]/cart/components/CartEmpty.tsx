
import React from "react";
import SearchCart from "./SearchCart";
import DeliveryInfo from "./DeliveryInfo";
import { useTranslations } from "next-intl";
import ButtonType from "@/models/buttonType";
import { Button, ButtonIcon, ButtonText } from "@/components/Button";

/**
 * CartWithItems component
 *
 * This component renders the cart view when there are no items added yet.
 * It provides options for the user to search for products, add new items,
 * or explore the catalog. It also displays delivery information.
 *
 * 
 * - Includes `SearchCart` for product lookup.
 * - Provides navigation options via buttons to encourage user interaction.
 *
 * @returns {React.ReactElement} - Rendered empty cart view with interaction options
 */

export default function CartWithItems() {
  const t = useTranslations("Cart");
  return (
    <div className="flex flex-col items-center py-20">
      <p className="text-gray-600 mb-6 w-full">{t("noItems")}</p>
      <section className="flex flex-row">
        <div className="w-10/12">
          <SearchCart />
        </div>
        <Button design={ButtonType.OUTLINED_MEDIUM}>
          <ButtonIcon className="icon-add" />
          <ButtonText text={t("add")} />
        </Button>
      </section>
      <p>{t("or")}</p>
      <Button design={ButtonType.FILLED_MEDIUM}>
        <ButtonText text={t("exploreCatalog")} />
        <ButtonIcon className="icon-arrow-outward" />
      </Button>
      <DeliveryInfo isHorizontal/>
    </div>
  );
}


