import { useTranslations } from 'next-intl';
import { useFilter } from '@/hooks/useFilter';
import { FilterItem } from '@/models/filters.model';
import { iconChevronDown } from '@/utilities/constants';
import { Button, ButtonIcon, ButtonText } from '@/components/Button';

import React from 'react';
import ButtonType from '@/models/buttonType';
import Checkbox from '@/components/forms/Checkbox';
import Dropdown from '@/components/dropdown/Dropdown';
import capitalizeFirstLetter from '@/hooks/useCapitalizeText';

/**
 * DropdownFiltersDesign component renders a dropdown menu for filtering products by design.
 * It displays the number of selected design filters and allows toggling of design filters.
 * 
 * @returns {JSX.Element} The rendered component.
 */
const DropdownFiltersDesign = () => {
  const t = useTranslations('Products');
  const { state, toggleDesign } = useFilter();

  return (
    <div className="hidden md:flex">
      <Dropdown showAsAPopup>
        <Dropdown.Toggle>
          <Button design={ButtonType.OUTLINED_SMALL} className='whitespace-nowrap'>
            <ButtonText text={t("designFilter")} />
            {state.selectedFilters?.design?.length > 0 && 
              <ButtonText text={Array.isArray(state.selectedFilters.design) ? `(${state.selectedFilters.design.length.toString()})` : "(1)"} />
            }
            <ButtonIcon className={iconChevronDown} />
          </Button>
        </Dropdown.Toggle>
        <Dropdown.Menu className='top-12!'>
          {
            state.filters?.design && state.filters?.design.length > 0 ?
              state.filters?.design.map((item: any, index: number) => 
              <Dropdown.Item key={index}>
                <Checkbox
                  className="font-semibold text-(--select-item-default-text) w-[200px] py-2 px-1"
                  name={capitalizeFirstLetter(item.title)}
                  checked={state.selectedFilters.design?.some((filter: FilterItem) => filter.value === item.value)}
                  quantity={1} //TODO: Cambiar segun la cantidad de items, traer del backend
                  onClick={() => toggleDesign(item)}
                />
              </Dropdown.Item>
              )
            :
              <></>
          }
        </Dropdown.Menu>
      </Dropdown>
    </div> 
  )
}

export default DropdownFiltersDesign
