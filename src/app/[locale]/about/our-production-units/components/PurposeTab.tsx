"use client";

import clsx from "clsx";
import Image from "next/image";
import Dropdown from "@/components/dropdown/Dropdown";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { OPU_PURPOSE_TABS } from "@/utilities/constants";

const PurposeTab = () => {
  const t = useTranslations('AboutUs.OurProductionUnits');
  const [selectedCategory, setSelectedCategory] = useState<keyof typeof OPU_PURPOSE_TABS>("environment");

  const categories = Object.keys(OPU_PURPOSE_TABS) as (keyof typeof OPU_PURPOSE_TABS)[];

  return (
    <section className="md:mx-[10%] md:px-4 py-8">
      {/* Tabs (desktop) */}
      <div className="hidden md:flex border-b border-(--gray-10)">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`py-2 px-4 w-1/2 text-sm border-b-2 transition-all ${
              selectedCategory === cat
                ? "border-(--spg-link) font-semibold text-(--spg-text)"
                : "border-transparent text-(--spg-text)"
            }`}
          >
            {t(cat)}
          </button>
        ))}
      </div>

      {/* Dropdown (mobile) */}
      {/* TODO: Cambiar Dropdown por Accordion */}
      <div className="md:hidden mb-4">
        <Dropdown>
          <Dropdown.Toggle className="px-4 py-3 border-b border-(--spg-link) bg-white">
            <div className="flex items-center justify-center">
              <p className="font-semibold text-md">{t(selectedCategory)}</p>
              <i className="icon-chevron-down text-[10px] ml-2 relative inline-block group-[.is-opened]:rotate-180 group-[.is-opened]:top-[-4px] text-(--spg-link)"/>
            </div>
          </Dropdown.Toggle>
          <Dropdown.Menu className="rounded-xl shadow border border-(--gray-40) py-4 bg-white" customClasses>
            {categories.map((cat) => (
              <Dropdown.Item
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={clsx("mx-4 py-2 text-sm cursor-pointer font-semibold border-b border-(--gray-40) text-(--gray-40)", {
                  "text-(--spg-primary)": cat === selectedCategory,
                })}
              >
                {t(cat)}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>

      {/* Content grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {OPU_PURPOSE_TABS[selectedCategory].map((item, index) => (
          <div key={index} className="flex flex-col-reverse md:flex-col justify-between">
            <div className="px-8 md:px-0">
              <h5 className="font-semibold text-lg text-(--background) leading-tight mb-2">
                {t(item.key)}
              </h5>
              <p className="text-sm">
                {t(`${item.key}Desc`)}
              </p>
            </div>
            <div className="mb-4 md:mt-4 h-32 relative md:rounded-md overflow-hidden">
              <Image
                src={item.imageSrc}
                alt={t(item.key)}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PurposeTab;
