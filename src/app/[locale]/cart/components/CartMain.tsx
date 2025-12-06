"use client";

import React from "react";
import CartEmpty from "./CartEmpty";
import CartWithItems from "./CartWithItems";
import { useCart } from "@/utilities/context/CartContext";
import { useEffect } from "react";

/**
 * CartMain component
 *
 * This is the main entry point for the cart view. It currently renders the
 * `CartWithItems` component directly, but includes commented logic for
 * conditionally rendering either `CartWithItems` or `CartEmpty` based on
 * the cart's contents.
 *
 * - Intended to use `useCart` context to determine if the cart has items.
 * - Future implementation may toggle between empty and filled cart views.
 *
 * @returns {React.ReactElement} - Rendered main cart component
 */

export default function CartMain() {
  const {
    state: { items },
  } = useCart();

  const hasItems = items.length > 0;

  useEffect(() => {
    console.log("Cart state:", items);
  }, [items]);

  return hasItems ? <CartWithItems /> : <CartEmpty />;
}
