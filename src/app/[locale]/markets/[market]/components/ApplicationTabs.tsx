"use client";


import ApplicationTabsMobile from "./ApplicationTabsMobile";
import ApplicationTabsDesktop from "./ApplicationTabsDesktop";

import { useState } from "react";
import { categories } from "@/utilities/constants";

export interface Category {
  name: string;
  subcategories: string[];
  [key: string]: any;
}

export interface Content {
    title: string;
    description: string;
    image: string;
    buttonText: string;
    [key: string]: any;
}

const ApplicationTabs = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [selectedSubcategory, setSelectedSubcategory] = useState(categories[0].subcategories[0]);

  const content = selectedCategory.content?.[selectedSubcategory as keyof typeof selectedCategory.content] || {
    title: '',
    description: '',
    image: '',
    buttonText: '',
  };

  return (
    <>
      {/* DESKTOP VERSION */}
      <ApplicationTabsDesktop 
        content={content}
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedSubcategory={selectedSubcategory}
        setSelectedSubcategory={setSelectedSubcategory}
      />

      {/* MOBILE VERSION */}
      <ApplicationTabsMobile
        content={content}
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedSubcategory={selectedSubcategory}
        setSelectedSubcategory={setSelectedSubcategory}
      />
    </>
  );
};

export default ApplicationTabs;
