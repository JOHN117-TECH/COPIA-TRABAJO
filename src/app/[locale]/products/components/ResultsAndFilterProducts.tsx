import React from 'react';
import ButtonType from '@/models/buttonType';
import capitalizeFirstLetter from '@/hooks/useCapitalizeText';

import { useTranslations } from 'next-intl';
import { useFilter } from '@/hooks/useFilter';
import { TagLabel, TagRemoveButton, Tags } from '@/components/Tags';
import { Button, ButtonIcon, ButtonText } from '@/components/Button';

/**
 * Component to render the number of results and the selected filters.
 *
 * @returns {React.ReactElement} A React component that renders the number of results and the selected filters.
 */
const ResultsAndFilterProducts = () => {
  const t = useTranslations('Products');
  const { state, resetFilters, toggleColor } = useFilter();
  const { after, ...activeFilters } = state.selectedFilters;

  return (
    <div className='flex flex-col gap-8'>
      {
        Object.values(activeFilters).flat().length > 0 && 
          <section className='gap-2 flex overflow-x-auto whitespace-nowrap'>
            {Object.values(activeFilters).flat().map((itemFilter, index) => {
              return itemFilter && 
              <Tags 
                size="md" 
                rounded='full'
                key={index}
                variant="filled" 
                color="var(--gray-20)" 
                textColor="var(--gray-70)"
              >
                <TagLabel label={capitalizeFirstLetter(itemFilter.title || itemFilter)}/>
                <TagRemoveButton onRemove={()=>toggleColor(itemFilter)} iconClassName='icon-close'/>
              </Tags>
            })}
          </section>
      }
    
      <div className='flex justify-between items-center'>
        <p className='mb-0 text-(--aqua-100) text-sm'>{state.totalProducts || '00000'} {t("results")}</p>
        {
          Object.values(activeFilters).flat().length > 0 && 
            Object.values(activeFilters).flat()[0] !== "" &&
            <Button
              onClick={resetFilters}
              design={ButtonType.LINK_GREEN_SMALL}
            >
              <ButtonIcon className="icon-delete" />
              <ButtonText text={t("Filters.clearFilters")} />
            </Button>
        }
      </div>
    </div>
  )
}

export default ResultsAndFilterProducts