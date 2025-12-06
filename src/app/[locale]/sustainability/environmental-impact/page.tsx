"use client";

import React from "react";
import Purpose from "./components/Purpose";
import HeroBanner from "./components/HeroBanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import Perspective from "./components/Perspective";
import Iniciatives from "./components/Iniciatives";

const EnvironmentalImpact = () => {
  
  return (
    <div className="bg-[#FAFAFA]">
      <section className="px-[10%] py-8 flex gap-4 flex-col w-full z-25 text-center hidden md:block">
        <Breadcrumbs />
      </section>
      <section className="w-full">
        <HeroBanner />
      </section>
      <Perspective />
      <section className="py-8 flex gap-4 flex-col w-full text-center">
        <Iniciatives  />
      </section>
      <Purpose />
    </div>
  );
};

export default EnvironmentalImpact;
