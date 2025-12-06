import React from 'react';
import ButtonType from '@/models/buttonType';
import Dropdown from '@/components/dropdown/Dropdown';
import DropdownMarketTypes from './DropdownMarketTypes';

import { useTranslations } from 'next-intl';
import { useFilter } from '@/hooks/useFilter';
import { iconChevronDown } from '@/utilities/constants';
import { DropdownFiltersProps } from '@/models/filters.model';
import { Button, ButtonIcon, ButtonText } from '@/components/Button';

/**
 * A dropdown menu component for filtering products by sectors or products.
 * It takes the filters data, title of the dropdown and the children name.
 * @param {{ filters: any; title: string; }} props
 * @returns {React.ReactElement}
 */
const DropdownFilters = ({ marketTypes, title }: DropdownFiltersProps) => {
  const t = useTranslations();
  const { state } = useFilter();
  
  return (
    <div className="hidden md:flex">
      <Dropdown showAsAPopup>
        <Dropdown.Toggle>
          <Button design={ButtonType.OUTLINED_SMALL}>
            <ButtonText text={t(title)} />
            {state.selectedFilters.sectorIds?.length > 0 && 
              <ButtonText 
                text={`(${state.selectedFilters.sectorIds.length.toString()})`} 
              />
            }
            <ButtonIcon className={iconChevronDown} />
          </Button>
        </Dropdown.Toggle>
        <Dropdown.Menu className='top-11!'>
          {
            marketTypes && marketTypes?.length > 0 &&
            <DropdownMarketTypes filterItems={marketTypes} />
          }
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}

export default DropdownFilters
