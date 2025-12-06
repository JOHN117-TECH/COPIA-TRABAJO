import React, { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl';
import Checkbox from '@/components/forms/Checkbox';
import Dropdown from '@/components/dropdown/Dropdown'
import SearchInput from '@/components/forms/SearchInput'

const SearchComponent = ({ filterData }: { filterData: any }) => {
  const t = useTranslations("FAQs");
  const [categories, setCategories] = useState([
    { id: 1, name: "Category 1", checked: true },
    { id: 2, name: "Category 2", checked: true },
    { id: 3, name: "Category 3", checked: true },
    { id: 4, name: "Category 4", checked: true },
    { id: 5, name: "Category 5", checked: true },
  ])

  const updateFilter = (item: any) => {
    setCategories((prevCategories) =>
      prevCategories.map((category) =>
        category.id === item.id ? { ...category, checked: !category.checked } : category
      )
    );
  }

  const updateAllFilter = () => {
    const allChecked = categories.every((item: any) => item.checked);
    setCategories((prevCategories) =>
      prevCategories.map((category) => ({ ...category, checked: !allChecked }))
    );
  }

  useEffect(() => {
    filterData(categories)
  }, [categories])

  return (
    <div className='flex w-[80%] md:w-[60%] mx-auto'>
      <Dropdown className='relative left-1'>
        <Dropdown.Toggle className='w-full py-2 px-4 rounded-lg bg-(--gray-10) flex items-center'>
          <p className='whitespace-nowrap overflow-hidden text-ellipsis'>{t("allCategories")}</p>
          <i className="icon-chevron-down text-(--spg-link) text-[10px] ml-2 relative inline-block top-[1px] group-[.is-opened]:rotate-180 group-[.is-opened]:top-[-4px]"/>
        </Dropdown.Toggle>
        <Dropdown.Menu className='absolute! top-10 left-0 z-50 bg-white shadow-lg rounded-lg mt-1 px-6 py-2'>
            <Checkbox
              className="text-(--spg-primary) pb-2"
              name={t("allCategories")}
              checked={categories.every((item: any) => item.checked)}
              onClick={updateAllFilter}
            />
            <hr className='my-2'/>
          {categories.map((item: any) => (
            <Checkbox
              key={item.id}
              className="text-(--spg-primary) pb-2"
              name={item.name}
              checked={item.checked}
              onClick={() => updateFilter(item)}
            />

          ))}
        </Dropdown.Menu>
      </Dropdown>
      <SearchInput onSearch={filterData}  className='border-l border-l-white rounded-l-none h-[40px]'/>
    </div>
  )
}

export default SearchComponent