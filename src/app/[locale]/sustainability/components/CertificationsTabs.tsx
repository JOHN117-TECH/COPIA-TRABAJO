// components/CertificationsTabs.jsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CertificationsTabsProps } from "@/models/sustainability.model";
import CertificationCard from "@/components/CertificationCard";
import Image from "next/image";
import useMediaQuery from "@/hooks/useMediaQuery";
import { TABS } from "@/utilities/constants";
import Dropdown from "@/components/dropdown/Dropdown";

export default function CertificationsTabs({ tabs }: CertificationsTabsProps) {
  const [activeTab, setActiveTab] = useState<number>(0);
  const isMobile = useMediaQuery("(max-width: 480px)");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!tabs || tabs.length === 0) {
    return <p className="text-center text-gray-500">No tabs provided.</p>;
  }
  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  if (!isMobile) {
    return (
      <div className="w-full p-4">
        {/* Tabs headers */}
        <div className="flex flex-wrap justify-center ">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-2 rounded-t-md transition-all font-semibold border-b mb-6 hover:scale-105 hover:text-black cursor-pointer hover:border-[var(--spg-link)] w-full md:w-auto ${
                activeTab === index
                  ? "border-[var(--spg-link)] text-[#070b1b]"
                  : " text-[#777777] "
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Animated content */}
        <div className="relative min-h-[200px] px-[14%]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <div className="flex flex-row w-full">
                <div className="w-1/2 flex flex-col bg-[#6D758F] py-[5%] px-[5%] text-left">
                  <h3 className="text-[#eeeff4]">{tabs[activeTab].title}</h3>
                  <p className="text-white">{tabs[activeTab].description}</p>
                </div>
                <div className="w-1/2 flex max-h-60">
                  <Image
                    src={tabs[activeTab].src}
                    alt={tabs[activeTab].title}
                    width={800}
                    height={300}
                    layout="responsive"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {tabs[activeTab]?.content.map((item, idx) => (
                  <CertificationCard
                    key={idx}
                    item={item}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    );
  }
  return (
    <div className="w-full">
      {TABS.map((item, index) => (
        <Dropdown
          className="relative border-b-1 border-gray-300"
          key={item.title}
        >
          <Dropdown.Toggle
            className="flex w-full my-5"
            onClick={() => handleToggle(index)}
          >
            <div className="flex gap-2 justify-center w-full">
              <p>{item.title}</p>
            </div>
            <i
              className={`text-[var(--spg-link)] text-xl pr-5 ${
                openIndex === index ? "icon-minus" : "icon-plus"
              }`}
            />
          </Dropdown.Toggle>

          {openIndex === index && (
            <Dropdown.Menu
              customClasses={true}
              className="transition-all duration-300 overflow-hidden max-h-[1000px] opacity-100 px-[2%] mb-5"
            >
              {item.content.map((subItem, idx) => (
                <CertificationCard
                  key={idx}
                  item={item}
                  orientation="horizontal"
                />
              ))}
            </Dropdown.Menu>
          )}
        </Dropdown>
      ))}
    </div>
  );
}
