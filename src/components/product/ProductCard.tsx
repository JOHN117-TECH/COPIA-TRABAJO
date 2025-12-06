"use client";

import clsx from "clsx";
import DataSection from "./DataSection.product";
import ImageSection from "./ImageSection.product";
import ButtonSection from "./ButtonSection.product";

import { Children, cloneElement } from "react";
import { ProductsCardChild, ProductsCardComponent } from "@/models/products.model";

export const ProductsCard: ProductsCardComponent = ({
  children,
  item,
  isReference = false,
  isSelectable = false,
  isRemovable = false,
}) => {
  return (
    <div
      className={clsx(
        "flex flex-col justify-between rounded-3xl p-[9px] bg-white h-full",
        item?.isSelected && isSelectable && "border-2 border-[var(--spg-link)]"
      )}
      style={{ boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}
    > 
      <div>
        <ImageSection item={item.node} isSelectable={isSelectable} isRemovable={isRemovable} />
        <DataSection item={item.node} isReference={isReference} />
      </div>
      {Children.map(children, (child) =>
        cloneElement(child as ProductsCardChild, {
          item,
          isSelectable,
        }),
      )}
    </div>
  );
};

ProductsCard.Button = ({ item, text }) => {
  return <ButtonSection product={item.node} text={text} />;
};
