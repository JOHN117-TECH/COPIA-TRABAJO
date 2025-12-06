"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { sustainability } from "@/utilities/constants";
import Dropdown from "@/components/dropdown/Dropdown";
import { FaCircle } from "react-icons/fa";

export default function Perspective() {
  const urlImg = "/sustainability/perspective.png";
  const t = useTranslations("Sustainability");

  const sustainabilityList = Object.entries(sustainability).map(
    ([category, items]) => ({
      category,
      items,
    })
  );

  return (
    <div className="flex flex-col w-full mt-20 text-left md:text-center gap-10 mb-20 md:mb-60">
      <h1 className="px-[5%] text-(--spg-text)">{t("title")}</h1>
      <p className="px-[5%] md:px-[25%] text-xl">{t("description")}</p>
      <div className="flex flex-col md:flex-row w-full gap-6 px-[10%] mt-10">
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
                  <FaCircle className="text-[var(--spg-link)] text-sm" />
                  <p>{item.category}</p>
                </div>
                <i className="text-[var(--spg-link)] ic-chevron-down text-xl group-[.is-opened]:rotate-180" />
              </Dropdown.Toggle>

              <Dropdown.Menu
                customClasses={true}
                className="transition-all duration-300 overflow-hidden max-h-[1000px] opacity-100 px-[2%] mb-5"
              >
                {item.items.map((subItem) => (
                  <div key={subItem} className="flex items-center gap-1">
                    <FaCircle className="text-[gray-lighter] text-[5px]" />
                    <Dropdown.Item className="text-sm">{subItem}</Dropdown.Item>
                  </div>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          ))}
        </div>
      </div>
    </div>
  );
}
