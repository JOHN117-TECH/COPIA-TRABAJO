import React from 'react';
import Dropdown from '@/components/dropdown/Dropdown';
import DropdownMarketTypes from './DropdownMarketTypes';
import DropdownSimple from './DropdownSimple.filtersModal';

import { useTranslations } from 'next-intl';
import { iconChevronDown } from '@/utilities/constants';
import { DropdownFiltersModalProps, FilterItem, PropsFilters } from '@/models/filters.model';

/**
 * DropdownFiltersModal component renders a modal with dropdown filters for various categories.
 * It supports filtering by market types, design, composition, and colors.
 *
 * @param {DropdownFiltersModalProps} props - The props for the component.
 * @param {FilterItemObject[]} props.filters - Array of filter items used for rendering dropdowns.
 * @returns {React.ReactElement} The rendered component.
 */
const DropdownFiltersModal: React.FC<DropdownFiltersModalProps> = ({ filters }) => {

  const t = useTranslations("Products.Filters");

  return (
    <div className='flex-1 overflow-y-scroll'>
      {
        filters.map((filter, index) => {
          const filterKey = Object.keys(filter)[0] as PropsFilters;
          let filterItems: FilterItem[] | [] = [];

          if (filterKey in filter) {
            filterItems = (filter as any)[filterKey];
          }

          return (  
            <Dropdown key={index}>
              <Dropdown.Toggle>
                <div className="md:w-[350px] w-[320px] flex space-x-2 items-center py-3">
                  <i className={iconChevronDown}
                  />
                  <span className='text-(--spg-text-dark) font-medium text-base'>{t(Object.keys(filter).toString())}</span>
                </div>
              </Dropdown.Toggle>
              <Dropdown.Menu 
                className={"overflow-hidden pb-2 max-h-[300px] overflow-y-scroll"} 
              >
                {
                  filterItems?.length > 0 && 
                    filterKey === "marketTypes" && 
                      <DropdownMarketTypes filterItems={filterItems} />
                }

                {
                  filterItems?.length > 0 && 
                    (filterKey === "design" || filterKey === "composition" || filterKey === "colors") && 
                      <DropdownSimple filterItems={filterItems} filterKey={filterKey} index={index}/>
                }

              </Dropdown.Menu>
            </Dropdown>
          )
        })
      }
    </div>
  )
}

export default DropdownFiltersModal