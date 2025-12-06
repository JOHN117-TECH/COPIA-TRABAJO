"use client";

import Image from "next/image";
import Dropdown from "@/components/dropdown/Dropdown";

import { useTranslations } from "next-intl";
import { EnvironmentalImpact } from "@/utilities/constants";

export default function Perspective() {
  const urlImg = "/sustainability/environmentalImpact.svg";
  const t = useTranslations("Sustainability.EnvironmetalImpact");

  const sustainabilityList = Object.entries(EnvironmentalImpact).map(
    ([category, items]) => ({
      category,
      items,
    })
  );

  return (
    <div className="flex flex-col w-full mt-20 text-left md:text-center md:items-center gap-10 mb-20 md:mb-30">
      <h1 className="px-[5%] md:w-[60%] text-(--spg-text)">{t("title")}</h1>
      <div className="flex flex-col items-center md:flex-row w-full gap-6 px-[10%] mt-10">
        <div className="w-full md:w-1/2 relative">
          <Image
            src={urlImg}
            alt="Perspective"
            width={800} 
            height={500}
            layout="responsive"
            className="object-contain rounded-md"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col">
          {sustainabilityList.map((item) => (
            <Dropdown className="relative border-b-1 border-gray-300" key={item.category}>
              <Dropdown.Toggle className="flex items-center justify-between w-full my-5">
                <div className="flex items-center gap-2">
                  <div className="bg-(--spg-link) h-[13px] w-[13px] rounded-full" />
                  <p>{item.category}</p>
                </div>
                <i className="text-[var(--spg-link)] ic-chevron-down text-xl group-[.is-opened]:rotate-180" />
              </Dropdown.Toggle>

              <Dropdown.Menu
                customClasses={true}
                className="transition-all duration-300 overflow-hidden max-h-[1000px] opacity-100 px-[2%] mb-5 gap-2 flex flex-col"
              >
                {item.items.map((subItem) => (
                  <Dropdown.Item className="text-sm text-left text-(--spg-text)">{subItem}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          ))}
        </div>
      </div>
    </div>
  );
}
