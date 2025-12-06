'use client';

import { useTranslations } from "next-intl";
import Breadcrumbs from "@/components/Breadcrumbs";
import React from "react";
import CartMain from "./components/CartMain";
import DiscoverSlider from "./components/DiscoverSlider";


const Cart = () => {
  const t = useTranslations("Cart");  


  return (
    <>
      <div className="bg-[#FAFAFA]">
        <section className=" px-[10%] py-8 flex gap-4 flex-col w-full z-25 text-center">
          <div className="hidden md:block">
            <Breadcrumbs />
          </div>
          <h1 className="text-(--spg-text)">{t("title")}</h1>
          <p>{t("description")}</p>
        </section>
        <CartMain />
      </div>
      <div className="bg-white px-[10%]">
        <h1 className="text-gray-600 mb-6 w-full text-2xl">{t("discover")}</h1>
        <DiscoverSlider/>
      </div>
    </>
  );
};

export default Cart;



