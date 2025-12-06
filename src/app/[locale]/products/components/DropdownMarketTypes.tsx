import React from 'react'
import Dropdown from '@/components/dropdown/Dropdown';
import { DropdownMarketTypesProps } from '@/models/filters.model';
import DropdownCheckOptionFilters from '@/components/dropdown/DropdownCheckOption.filters';

/**
 * A dropdown menu component for filtering products by sectors or products.
 * It takes the filters data and render a dropdown item for each filter item.
 * @param {{ filters: any; }} props
 * @returns {React.ReactElement}
 */
const DropdownMarketTypes: React.FC<DropdownMarketTypesProps> = ({ filterItems }) => {

  return filterItems.map((item: any, itemIndex: number) => 
    <Dropdown.Item className='px-0! py-0! pl-2!'>
      <DropdownCheckOptionFilters
        key={itemIndex}
        name={item.name}
        item={item}
        children={item.sectors.edges || []}
      />
    </Dropdown.Item>
  )
}

export default DropdownMarketTypes