import { useTranslations } from 'next-intl';
import { useFilter } from '@/hooks/useFilter';
import { Button, ButtonIcon } from '@/components/Button';
import { FilterItemObject } from '@/models/filters.model';

import React, { useState } from 'react';
import ButtonType from '@/models/buttonType';
import SearchInput from '@/components/forms/SearchInput';
import DropdownFiltersModal from './DropdownFiltersModal';

const FiltersModal = ({onClose}: {onClose: () => void}) => {
  const t = useTranslations("Products.Filters");
  const { state } = useFilter();
  
  const initialFilters = [
    {colors: [...state.filters.colors]}, 
    {design:[...state.filters.design]}, 
    {marketTypes: [...state.filters.marketTypes]}, 
    {composition: [...state.filters.compositions]}, 
    {application: []},
    {sustainability: []}, 
    {flammability: []}, 
    {approvedCleaners: []}, 
    {additionalFeatures: []}, 
  ]

  const [filters, setFilters] = useState<FilterItemObject[]>(initialFilters)

  const searchFilters = (param: string) => {
    const filteredResults = initialFilters.filter(filterObj => {
      const key = Object.keys(filterObj)[0];
      const translatedKey = t(key);

      return key.toLowerCase().includes(param.toLowerCase()) ||
            translatedKey.toLowerCase().includes(param.toLowerCase());
    });

    setFilters(filteredResults);
  }

  return (
    <div className='flex flex-col items-center p-4 h-[90vh] md:h-[95vh] space-y-4'>
      <Button
        onClick={onClose}
        design={ButtonType.LINK_GREEN_BIG}
        className="absolute top-4 left-3 z-10"
      >
        <ButtonIcon className="icon-close" />
      </Button>
      <section className='flex w-full justify-between pt-4 px-0 mt-4'>
        <h4 className='text-(--spg-text-dark)'>{t("filter")}</h4>
        <i className="icon-tune rotate-90 text-(--gray-40) relative inline-block right-[30px]" />
      </section>
      <SearchInput 
        onSearch={searchFilters} 
        onClear={() => setFilters(initialFilters)}
        placeholder={t("searchFilters")} 
      />
      <DropdownFiltersModal filters={filters} />
    </div>
  )
}

export default FiltersModal
