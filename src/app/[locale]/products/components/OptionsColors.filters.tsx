import clsx from 'clsx';
import React from 'react';
import { useFilter } from '@/hooks/useFilter';
import { FilterItem } from '@/models/filters.model';

/**
 * OptionsColors component displays a list of color options as buttons.
 * Each color is represented by a colored circle and a title.
 * Clicking a color toggles its selection state.
 * 
 * @returns {React.ReactElement} A React component that renders color options.
 */
const OptionsColors = () => {
  const { state, toggleColor } = useFilter();

  return (
    <div className="flex items-center justify-between w-full gap-1 mt-4 hidden md:flex">
      {
        state.filters?.colors && state.filters?.colors.length > 0 &&
        state.filters?.colors.map((item: FilterItem, index: number) => {
          const isSelected = state.selectedFilters.predominantColor?.some(
            (color: FilterItem) => color.value === item.value
          );

          return (
            <button
              key={index}
              className="flex flex-col items-center"
              onClick={() => toggleColor(item)}
            >
              <div
                className={clsx(
                  "w-[40px] h-[40px] rounded-full mb-2 border-2",
                  {
                    "border-(--gray-40)": item.value === "WHITE" && !isSelected,
                    "ring-2 ring-(--aqua-light) ring-offset-2": isSelected,
                  }
                )}
                style={{ background: item.value === "BURGUNDY" ? "#800020" : item.value }}
              />
              <p className="text-(--black-100) text-xs mb-1">{item.title}</p>
              <p className="text-(--gray-60) text-xs">(123)</p>
            </button>
          );
        })}
    </div>
  )
}

export default OptionsColors
