"use client";

import React, { useState } from "react";
import FiltersSection from "./components/FiltersSection";
import ProductsRender from "./components/ProductsRender";

const page = () => {
  const [isSelectable, setIsSelectable] = useState<boolean>(false);

  return (
    <>
      <FiltersSection />
      <ProductsRender isSelectable={isSelectable} />
    </>
  )
}

export default page
