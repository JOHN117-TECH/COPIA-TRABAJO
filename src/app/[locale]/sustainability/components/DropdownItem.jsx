"use client";

import { useState } from "react";
import Dropdown from "@/components/Dropdown";
import CertificationCard from "./CertificationCard"; 
import clsx from 'clsx'

export default function DropdownItem({ item }) {
  
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dropdown
      className="relative border-b-1 border-gray-300"
      onToggle={(nextShow) => setIsOpen(nextShow)}
    >
      <Dropdown.Toggle
        className="flex w-full my-5 justify-between items-center" 
      >
        <div className="flex gap-2">
          <p>{item.title}</p>
        </div>
        <i
          className={clsx(
            "text-[var(--spg-link)]",
            "text-xl",
            "pr-5",
            {
              "icon-minus": isOpen, // 'icon-minus' si está abierto
              "icon-plus": !isOpen,  // 'icon-plus' si está cerrado
            }
          )}
        />
      </Dropdown.Toggle>
      <Dropdown.Menu
        customClasses={true}
        className="transition-all duration-300 overflow-hidden max-h-[1000px] opacity-100 px-[2%] mb-5"
      >
        {item.content.map((subItem, idx) => (
          <CertificationCard
            key={idx}
            title={subItem.title}
            description={subItem.description}
            src={subItem.src}
            urls={subItem.urls}
          />
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}