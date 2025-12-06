import clsx from 'clsx';
import Image from 'next/image';
import React, { useState } from 'react'

import { Category, Content } from './ApplicationTabs';
import { Button, ButtonIcon, ButtonText } from '@/components/Button';


interface ApplicationTabsDesktopProps {
  categories: Category[];
  selectedCategory: Category;
  selectedSubcategory: string;
  setSelectedCategory: any;
  setSelectedSubcategory: any;
  content: Content;
}
const ApplicationTabsDesktop = ({ categories, selectedCategory, selectedSubcategory, setSelectedCategory, setSelectedSubcategory, content }: ApplicationTabsDesktopProps) => {
  const [imageError, setImageError] = useState(false);
  const fallBackSrc = '/errorImg.webp';
  return (
    <div className="md:flex hidden pt-4 pb-0 mx-[10%] h-full min-h-[400px]">
      <aside className="w-1/4 pr-4 mt-12">
        <ul className="space-y-2">
          {categories.map((cat) => (
            <li key={cat.name}>
              <Button
                onClick={() => {
                  setSelectedCategory(cat);
                  setSelectedSubcategory(cat.subcategories[0]);
                }}
                className={clsx("w-full font-semibold text-sm px-4 py-3 rounded-full text-(--spg-primary)", {
                  "bg-(--gray-10) text-center": cat.name === selectedCategory.name,
                  "hover:bg-gray-100 text-left": cat.name !== selectedCategory.name,
                })}
                customColors
              >
                <ButtonText text={cat.name} />
              </Button>
            </li>
          ))}
        </ul>
      </aside>

      <div className="w-3/4 pl-4 flex flex-col h-full min-h-[450px]">
        <div className="flex space-x-6">
          {selectedCategory.subcategories.map((sub) => (
            <Button
              key={sub}
              onClick={() => setSelectedSubcategory(sub)}
              className={clsx("pb-2 border-b-2 px-8 text-(--spg-primary) rounded-none", {
                "border-(--spg-primary) font-semibold": sub === selectedSubcategory,
                "border-transparent": sub !== selectedSubcategory,
              })}
              customColors
            >
              <ButtonText text={sub} />
            </Button>
          ))}
        </div>

        {content && (
          <div className="flex-1 overflow-y-auto bg-(--gray-10) p-6 rounded-md flex items-center justify-between gap-6">
            <div className="w-2/3">
              <h4 className="font-semibold text-(--spg-primary) mb-4">{content.title}</h4>
              <p className="text-(--spg-primary) mb-4">{content.description}</p>
              <Button>
                <ButtonText text={content.buttonText} />
                <ButtonIcon className="icon-arrow-right" />
              </Button>
            </div>
            <div className="w-1/3">
            <Image
              src={imageError ? fallBackSrc : (content.image as string)}
              alt="text-img"
              width={150}
              height={150}
              className="w-full h-auto rounded-md"
              onError={() => setImageError(true)}
            />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ApplicationTabsDesktop