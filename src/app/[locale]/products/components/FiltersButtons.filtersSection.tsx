import { useTranslations } from 'next-intl';
import { useFilter } from '@/hooks/useFilter';
import { iconChevronDown } from '@/utilities/constants';
import { FiltersButtonsProps } from '@/models/filters.model';
import { Button, ButtonIcon, ButtonText } from '@/components/Button';

import clsx from 'clsx';
import React, { useState } from 'react';
import FiltersModal from './FiltersModal';
import Modal from '@/components/modal/Modal';
import ButtonType from '@/models/buttonType';
import DropdownFilters from './DropdownFilters.productsFilters';
import DropdownFiltersDesign from './DropdownFilters.designFilter';

/**
 * Component to render the filters buttons on the products page.
 * 
 * This component renders the color filter, design filter, markets filter and the filter button.
 * 
 * The design filter is a dropdown with options to filter by design.
 * The markets filter is a dropdown with options to filter by markets.
 * The filter button opens a modal with the filters.
 * 
 * @param showOptionsColors - boolean to show or hide the color filter options.
 * @param setShowOptionsColors - function to toggle the showOptionsColors state.
 * @returns React component.
 */
const FiltersButtons: React.FC<FiltersButtonsProps> = ({ showOptionsColors, setShowOptionsColors }) => {
  const t = useTranslations('Products');
  const { state, resetFilters} = useFilter();

  const [openFiltersModal, setOpenFiltersModal] = useState<boolean>(false);

  return (
    <div className="flex items-center gap-1 lg:gap-4">
      <Button 
        design={ButtonType.OUTLINED_SMALL} 
        className={"hidden md:flex flex items-center font-medium whitespace-nowrap"}
        onClick={() => setShowOptionsColors(!showOptionsColors)}
      >
        <ButtonText text={t("color")} />
        {state.selectedFilters.predominantColor?.length > 0 && 
          <ButtonText 
            text={`(${state.selectedFilters.predominantColor.length.toString()})`} 
          />
        }
        <ButtonIcon className={
          clsx(iconChevronDown, "text-(--black)!", {"rotate-180": showOptionsColors})} 
        />
      </Button>
      <DropdownFiltersDesign />
      <DropdownFilters marketTypes={state.filters?.marketTypes} title="Products.markets" />
      <Button 
        customColors
        className="font-medium whitespace-nowrap"
        design={ButtonType.OUTLINED_SMALL} 
        onClick={() => setOpenFiltersModal(!openFiltersModal)}
      >
        <ButtonIcon className="icon-filter text-xl text-(--black)" />
        <ButtonText text={t("filter")} />
      </Button>
      <Modal 
        showFooterOn='both'
        desktopPosition='right' 
        mobilePosition='center'
        hideOnCloseIcon
        isOpen={openFiltersModal} 
        onClose={() => setOpenFiltersModal(false)} 
        footer={
          <section className='grid grid-cols-12 justify-between'>
            <Button 
              customColors
              className="whitespace-nowrap col-span-6"
              design={ButtonType.FILLED_MEDIUM} 
              onClick={() => setOpenFiltersModal(false)}
            >
              <ButtonText text={t("Filters.showResults")} />
            </Button>
            <Button 
              customColors
              className="whitespace-nowrap col-span-6"
              design={ButtonType.LINK_GREEN_BIG} 
              onClick={resetFilters}
            >
              <ButtonIcon className="icon-delete" />
              <ButtonText text={t("Filters.clearFilters")} />
            </Button>
          </section>
        }
      >
        <FiltersModal onClose={() => setOpenFiltersModal(false)}/>
      </Modal>
    </div>
  )
}

export default FiltersButtons
