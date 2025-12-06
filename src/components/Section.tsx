"use client";

import { ReactNode } from "react";
import { useEffect, useState } from "react";

interface SectionProps {
  id: string;
  type?: number;
  children: ReactNode | ReactNode[];
}

const Section = ({ id, type = 0, children }: SectionProps) => {
  const [className, setClassName] = useState<string>("");

  useEffect(() => {
    switch (type) {
      case 1:
        setClassName("p-4");
        break;
      case 2:
        setClassName("px-4");
        break;
      case 3:
        setClassName("py-4");
        break;
      case 4:
        setClassName("p-8");
        break;
      case 5:
        setClassName("px-8");
        break;
      case 6:
        setClassName("py-8");
        break;
      case 7:
        setClassName("p-16");
        break;
      case 8:
        setClassName("px-16");
        break;
      case 9:
        setClassName("py-16");
        break;
      default:
        setClassName("p-4");
    }
  }, [type]);

  return (
    <section id={id} className={`w-full ${className}`}>
      {children}
    </section>
  );
};

export default Section;
