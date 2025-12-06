"use client";

import React from "react";
import Skeleton from "react-loading-skeleton";
import Embracing from "./components/Embracing";
import Commitment from "./components/Commitment";
import HeroBanner from "./components/HeroBanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import Perspective from "./components/Perspective";
import Iniciatives  from "./components/Iniciatives";
import Certifications from "./components/Certifications";
import GetCurrentInstance from "@/hooks/useGetCurrentInstance";
import { useHomeSlidersQuery } from "@/graphql/banners/queries/getHomeSliders.generated";

const Sustainability = () => {
  const instanceId = GetCurrentInstance();
  // TODO: Validar cual es la data a consumir
  const { data, loading, error } = useHomeSlidersQuery({
    variables: {
      instanceIds: [instanceId],
      tag: "SUSTAINABILITY_REPORTS", 
    },
  });
      
  if (loading) return <Skeleton width="100%" height={500} />;
  return (
    <div className="bg-[#FAFAFA]">
      <section className="hidden md:block px-[10%] py-8 flex gap-4 flex-col w-full z-25 text-center">
        <Breadcrumbs />
      </section>
      <HeroBanner />
      <Perspective />
      <section className="py-8 flex gap-4 flex-col w-full text-center">
        <Iniciatives  />
      </section>
      <section className="py-8 flex gap-4 flex-col w-full text-center">
        <Certifications />
      </section>
      <Commitment data={data}/>
      <Embracing />
    </div>
  );
};

export default Sustainability;
