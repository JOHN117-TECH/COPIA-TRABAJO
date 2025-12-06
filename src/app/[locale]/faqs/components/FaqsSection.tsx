import React, { useState } from 'react'
import { useTranslations } from 'next-intl';
import Dropdown from '@/components/dropdown/Dropdown'
import SearchComponent from './SearchComponent';

const FaqsSection = ({ data, filterData}: {data: any, filterData: any}) => {
  const t = useTranslations("FAQs");
  const [isOpen, setIsOpen] = useState<number[]>([]);

  const handleToggle = (page: number) => {
    const exists = isOpen.find(index => index === page)
    if(!exists) return setIsOpen([...isOpen, page])
    return setIsOpen(isOpen.filter(index => index !== page))
  };
  return (
    <section className='px-12 py-8'>
      <SearchComponent filterData={filterData}/>
      <hr className='my-6'/>
      <span className='font-semibold text-(--spg-text)'>{data.length} {t("results")}</span>
      {
        data.map((item: any, index: number) => (
          <Dropdown className="pt-2 pr-6" key={index}>
            <Dropdown.Toggle onClick={() => handleToggle(index+1)} className='py-4 border-b border-b-(--gray-10)'>
              <div className='flex items-center justify-between pb-2'>
                <p className='text-(--spg-text) text-lg'>{item.node.question}</p>
                {
                  isOpen.find(idx => idx == index + 1) ? <i className="icon-minus text-md ml-2 relative inline-block text-(--spg-link)"/>
                  : <i className="icon-plus text-md ml-2 relative inline-block text-(--spg-link)"/>
                }
              </div>
            </Dropdown.Toggle>
            <Dropdown.Menu className='px-4 py-2'>
              <Dropdown.Item>
                <p className='text-(--spg-text)'>{item.node.answer}</p>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ))
      }
    </section>
  )
}

export default FaqsSection