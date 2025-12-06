import React from 'react';
import Checkbox from '@/components/forms/Checkbox';
import Dropdown from '@/components/dropdown/Dropdown';
import { useFilter } from '@/hooks/useFilter';
import capitalizeFirstLetter from '@/hooks/useCapitalizeText';
import { DropdownSimpleProps, FilterItem } from '@/models/filters.model';
import clsx from 'clsx';

/**
 * A component that renders a dropdown list of checkboxes.
 * It takes the list of filter items, the key to identify the filter type,
 * and the index to uniquely identify the dropdown item.
 * @param {DropdownSimpleProps} props - Component props
 * @param {FilterItem[]} props.filterItems - Array of filter items
 * @param {"composition" | "design"} props.filterKey - Key to identify filter type
 * @param {number} props.index - Index to uniquely identify the dropdown item
 * @returns {React.ReactElement} A React component that renders a dropdown list of checkboxes.
 */
const DropdownSimple: React.FC<DropdownSimpleProps> = ({filterItems, filterKey, index}) => {
    const {state, toggleComposition, toggleDesign, toggleColor } = useFilter();

    const typesToogle = {
      composition: (item: any) => toggleComposition(item),
      design: (item: any) => toggleDesign(item),
      colors: (item: any) => toggleColor(item)
    }

    const updateFilter = (filterItem: any) => {
      typesToogle[filterKey](filterItem); 
    };

  return (
    <>
      {filterItems.map((item: any, itemIndex: number) => (
        <Dropdown.Item key={`${index}-${filterKey}-${itemIndex}`} className={filterKey === 'colors' ? 'pl-1' : 'pl-2'} >
          <Checkbox
            type={filterKey === 'colors' ? 'colors' : ' '}
            item={item}
            className="text-(--spg-primary) pb-2"
            name={capitalizeFirstLetter(item.title)}
            checked={state.selectedFilters[filterKey]?.some((filter: FilterItem) => filter.value === item.value)}
            quantity={1} //TODO: Cambiar segun la cantidad de items, traer del backend
            onClick={() => updateFilter(item)}
          />
        </Dropdown.Item>
      ))}
    </>
  )
}

export default DropdownSimple