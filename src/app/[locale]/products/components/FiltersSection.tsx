import { useTranslations } from 'next-intl';
import { useFilter } from '@/hooks/useFilter';
import { Button, ButtonIcon, ButtonText } from '@/components/Button';

import React, { useState } from 'react';
import ButtonType from '@/models/buttonType';
import Skeleton from 'react-loading-skeleton';
import Breadcrumbs from '@/components/Breadcrumbs';
import OptionsColors from './OptionsColors.filters';
import Dropdown from '@/components/dropdown/Dropdown';
import SearchInput from '@/components/forms/SearchInput';
import useScrollDirection from '@/hooks/useScrollDirection';
import FiltersButtons from './FiltersButtons.filtersSection';

/**
 * Component to render the filters section on the products page.
 * This component renders the search bar, the filters buttons, the "Sort by" button and the "Colors" options.
 * 
 * @returns React component.
 */
const FiltersSection = () => {
  const t = useTranslations('Products');
  const scrollDir = useScrollDirection();
  const isHidden = scrollDir === "down";
  const { searchProducts, filtersLoading } = useFilter();
  const [showOptionsColors, setShowOptionsColors] = useState<boolean>(false);


  return (
    <div
      className={`
        w-full bg-(--background) mt-6 px-[10%] py-8 flex gap-4 flex-col relative z-10
        transition-transform transition-opacity duration-300
        ${isHidden ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"}
      `}
    >
      <Breadcrumbs />
      <div className="flex items-center gap-3 flex-col md:flex-row">
        {filtersLoading ? (
            <Skeleton height={40} width={200} className="rounded-full" />
          ) : (
            <SearchInput 
              onClear={() => searchProducts("")}
              onSearch={searchProducts} 
              placeholder={t("searchProducts")} 
              className="md:max-w-[150px] lg:max-w-[248px]"
            />
          )}
        {filtersLoading ? (
          <div className="flex gap-4 w-full justify-between">
            <div className='gap-4 hidden md:flex'>
              <Skeleton height={40} width={100} className="rounded-full" />
              <Skeleton height={40} width={100} className="rounded-full" />
              <Skeleton height={40} width={100} className="rounded-full" />
            </div>
              <Skeleton height={40} width={100} className="rounded-full" />
              <Skeleton height={40} width={100} className="rounded-full" />
          </div>
        ) : (
          <div className="flex items-center justify-between w-full">
            <FiltersButtons 
              showOptionsColors={showOptionsColors} 
              setShowOptionsColors={setShowOptionsColors}
            />
            <Dropdown showAsAPopup>
              <Dropdown.Toggle>
                <Button
                  className="font-medium whitespace-nowrap"
                  design={ButtonType.OUTLINED_SMALL} 
                >
                  <ButtonText text={t("sortBy")} />
                  <ButtonIcon className="icon-chevron-down text-xl text-(--black)!" />
                </Button>
              </Dropdown.Toggle>
              <Dropdown.Menu className='top-11'>
                <Dropdown.Item>{t('Filters.ascending')}</Dropdown.Item>
                <Dropdown.Item>{t('Filters.descending')}</Dropdown.Item>
                <Dropdown.Item>{t('Filters.newest')}</Dropdown.Item>
                <Dropdown.Item>{t('Filters.oldest')}</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        )}
      </div>
      {showOptionsColors && <OptionsColors />}
    </div>
  )
}

export default FiltersSection
