"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ButtonIcon, Button } from "@/components/Button";
import { ProductCartItem, PatternCartItem } from "@/models/cart.model";
import ColorSection from "@/components/product/ColorSection.product";
import { useCart } from "@/utilities/context/CartContext";
/**
 * SampleCards component
 *
 * This component displays a product sample card with an image, product line name,
 * number of colorways, and interactive controls to adjust quantity or remove the item.
 *
 * - Accepts a `PatternNodeEdge` item as a prop, which contains product line data.
 * - Allows users to increment or decrement the quantity of the sample.
 * - Includes a delete button that hides the component when clicked.
 * - Uses `useState` to manage quantity and deletion state.
 * - Designed to be used in a list of sample products within the cart.
 *
 * @param {SampleCardsProps} props - Component props
 * @param {PatternNodeEdge} props.item - Product pattern node with metadata and image
 * @param {number} [props.initialQuantity=1] - Initial quantity of the sample
 * @returns {React.ReactElement | null} - Rendered sample card or null if deleted
 */

type SampleCardsProps = {
  pattern?: PatternCartItem;
  product?: ProductCartItem;
  initialQuantity?: number;
};

export default function SampleCards({
  pattern,
  product,
  initialQuantity = 1,
}: SampleCardsProps) {
  const [quantity, setQuantity] = useState(initialQuantity);
  const [isDeleted, setIsDeleted] = useState(false);
  const {
    updateQuantity,
    removeItem,
    state: { items },
  } = useCart();
  useEffect(() => {
    console.log("Cart state:", items);
  }, [items]);

  // Use either pattern or product, whichever is provided
  const item = pattern ?? product;
  if (!item) return null;

  const productLineName = item.altName;
  const imageSrc = item.imageThumbSmall; // Fallback image

  const handleDelete = () => {
    console.log(`Deleting item: ${productLineName}, ${item.id}`);
    removeItem(item.id);
    setIsDeleted(true);
    return;
  };

  const decrement = () => {
    setQuantity((prev) => {
      if (prev === 1) {
        handleDelete();
        return 1; 
      } else {
        const newQty = prev - 1;
        const objetId = item.id;
        console.log(
          `Decrementing quantity for ${productLineName} from ${prev} to ${newQty}`
        );
        updateQuantity(objetId, newQty);
        return newQty;
      }
    });
  };

  const increment = () => {
    setQuantity((prev) => {
      const newQty = prev + 1;
      updateQuantity(item.id, newQty); 
      console.log(`Incrementing quantity for ${productLineName} - ${item.id} to ${newQty}`);
      return newQty;
    });
  };

  if (isDeleted) return null;

  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-4 w-full max-w-3xl">
      {/* Image + Info */}
      <div className="flex items-center gap-4 bg-white rounded-2xl shadow-md w-full">
        <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center">
          <Image
            src={imageSrc}
            alt={productLineName}
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-700">
            {productLineName}
          </h3>
          {item.products?.edges && item.products.edges.length > 1 ? (
            <ColorSection colors={item.products.edges} />
          ) : (
            <p className="font-500 py-1 truncate">
              {item.color} / {item.code}
            </p>
          )}
        </div>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-baseline gap-4 self-start w-full py-8 md:px-5 md:w-auto">
        <div className="flex border rounded-full overflow-hidden divide-x w-auto">
          <button
            onClick={decrement}
            className="px-3 py-1 text-(--spg-primary)"
          >
            -
          </button>
          <span className="px-4 py-1">{quantity}</span>
          <button
            onClick={increment}
            className="px-3 py-1 text-(--spg-primary)"
          >
            +
          </button>
        </div>
        <Button
          className="border-0 bg-transparent ml-auto px-[18px] py-[10px] "
          onClick={handleDelete}
        >
          <ButtonIcon className="icon-close" />
        </Button>
      </div>
    </div>
  );
}
