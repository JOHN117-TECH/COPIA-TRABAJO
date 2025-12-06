import clsx from 'clsx';
import React from 'react';
import Dropdown from '@/components/dropdown/Dropdown';
import { useFilter } from '@/hooks/useFilter';
import { DropdownColorsProps, FilterItem } from '@/models/filters.model';

/**
 * DropdownColors component displays a grid of color options as dropdown items.
 * Each color is represented as a button with a colored circle and a title.
 * Clicking a color toggles its selection state.
 * 
 * @param {DropdownColorsProps} props - Component props
 * @param {FilterItem[]} props.filterItems - Array of color filter items
 * @param {"marketTypes" | "textures" | "colors" | "composition"} props.filterKey - Key to identify filter type
 * @param {number} props.index - Index to uniquely identify each dropdown item
 * @returns {React.ReactElement} A React component that renders a grid of color dropdown items.
 */
const DropdownColors: React.FC<DropdownColorsProps> = ({filterItems, filterKey, index}) => {
  const { toggleColor, state } = useFilter(); 

  return (
    <div className="space-y-2 space-x-4">
      {filterItems.map((item: any, itemIndex: number) => (
        <Dropdown.Item key={`${index}-${filterKey}-${itemIndex}`}>
          <button
            key={index}
            className={"flex items-center gap-2"}
            onClick={() => toggleColor(item)}
          >
            <div
              className={
                clsx(
                  "w-[20px] h-[20px] rounded-[30px] flex items-center justify-center",
                  {"border border-(--gray-40)":  item.value === "WHITE"}
                )}
              style={{ background: item.value == "BURGUNDY" ? "#800020" : item.value }}
            >
              {
                state.selectedFilters.predominantColor?.some((color: FilterItem) => color.value === item.value) && 
                  <i className="icon-check text-white text-[8px]" />
              }
            </div>
            <p className="text-(--spg-text) mb-0">{item.title}</p>
            <p className="text-(--gray-40) mb-0">(123)</p> {/* TODO: Cambiar segun la cantidad */}
          </button>
        </Dropdown.Item>
      ))}
    </div>
  )
}

export default DropdownColors