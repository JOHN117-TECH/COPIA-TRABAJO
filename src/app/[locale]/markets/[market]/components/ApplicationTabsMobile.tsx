import clsx from 'clsx';
import Dropdown from '@/components/dropdown/Dropdown';

import { Category, Content } from './ApplicationTabs';
import React, { useEffect, useRef, useState } from 'react'
import { Button, ButtonIcon, ButtonText } from '@/components/Button';
import Image from 'next/image';

interface ApplicationTabsDesktopProps {
  categories: Category[];
  selectedCategory: Category;
  selectedSubcategory: string;
  setSelectedCategory: any;
  setSelectedSubcategory: any;
  content: Content;
}

const ApplicationTabsMobile = ({ selectedCategory, setSelectedCategory, selectedSubcategory, setSelectedSubcategory, content, categories }: ApplicationTabsDesktopProps) => {
  const fallBackSrc = '/errorImg.webp';
  const scrollRef = useRef<HTMLDivElement>(null);
  const [imageError, setImageError] = useState(false);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -100, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 100, behavior: "smooth" });
  };

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    setShowLeftArrow(el.scrollLeft > 0);
    setShowRightArrow(el.scrollLeft + el.clientWidth < el.scrollWidth);
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (!el) return;

    el.addEventListener("scroll", checkScroll);
    return () => el.removeEventListener("scroll", checkScroll);
  }, [selectedCategory]);

  return (
    <div className="md:hidden flex flex-col py-4 space-y-1">
      <Dropdown>
        <Dropdown.Toggle className="px-4 py-3 border-b border-(--spg-link) bg-white">
          <div className="flex items-center justify-center">
            <p className="font-semibold text-md">{selectedCategory.name}</p>
            <i className="icon-chevron-down text-[10px] ml-2 relative inline-block group-[.is-opened]:rotate-180 group-[.is-opened]:top-[-4px] text-(--spg-link)"/>
          </div>
        </Dropdown.Toggle>
        <Dropdown.Menu className="rounded-xl shadow border border-(--gray-40) py-4 bg-white" customClasses>
          {categories.map((cat) => (
            <Dropdown.Item
              key={cat.name}
              onClick={() => {
                setSelectedCategory(cat);
                setSelectedSubcategory(cat.subcategories[0]);
              }}
              className={clsx("mx-4 py-2 text-sm cursor-pointer font-semibold border-b border-(--gray-40) text-(--gray-40)", {
                "text-(--spg-primary)": cat.name === selectedCategory.name,
              })}
            >
              {cat.name}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>

      <div className="relative w-full">
        {showLeftArrow && (
          <Button
            customColors
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-1 rounded-full"
          >
            <ButtonIcon className="icon-chevron-left" />
          </Button>
        )}

        {showRightArrow && (
          <Button
            customColors
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-1 rounded-full"
          >
            <ButtonIcon className="icon-chevron-right" />
          </Button>
        )}

        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-2 scrollbar-hide px-6"
        >
          {selectedCategory.subcategories.map((sub) => (
            <Button
              key={sub}
              onClick={() => setSelectedSubcategory(sub)}
              className={clsx("whitespace-nowrap pb-2 border-b-2 pr-12 pl-12 text-(--spg-primary) rounded-none mb-0", {
                "border-(--spg-primary) font-semibold": sub === selectedSubcategory,
                "border-transparent": sub !== selectedSubcategory,
              })}
              customColors
            >
              <ButtonText text={sub} />
            </Button>
          ))}
        </div>
      </div>
      {content && (
        <div className="space-y-4">
          <div className="w-full flex justify-center">
            <Image
              src={imageError ? fallBackSrc : (content.image as string)}
              alt="text-img"
              width={150}
              height={150}
              className="w-full h-auto rounded-md"
              onError={() => setImageError(true)}
            />
          </div>
          <div className="p-6 space-y-4 flex flex-col">
            <h4 className="font-semibold text-(--spg-primary)">{content.title}</h4>
            <p className="text-(--spg-primary)">{content.description}</p>
            <Button>
              <ButtonText text={content.buttonText} />
              <ButtonIcon className="icon-arrow-right" />
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ApplicationTabsMobile