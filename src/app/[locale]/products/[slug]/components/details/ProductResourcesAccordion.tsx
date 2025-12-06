import clsx from 'clsx';
import React from 'react';
import { useTranslations } from 'next-intl';
import { Accordion, AccordionDetail, AccordionHeader } from '@/components/accordion/Accordion'
import { AccordionGroup } from '@/components/accordion/AccordionGroup';

const ProductResourcesAccordion = ({filesData}: {filesData: any}) => {
  const t = useTranslations("ProductDetail");
  
  return (
    <div>
      <AccordionGroup>
        <Accordion>
          <AccordionHeader title={t("productResources")} className='font-semibold text-(--gray-70)'/>
          <AccordionDetail classname='rounded-b-xl'>
            <div className={clsx({'grid grid-cols-1 md:grid-cols-2 md:px-4 gap-3': filesData.length > 1})}>
              {filesData.map(
                (file: any, index: number) =>
                  file.url && (
                    <a
                      key={index}
                      href={file.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-2 py-3 text-(--gray-70) text-base no-underline truncate"
                    >
                      {file.name}
                      <i className="icon-download font-900 inline-block text-xl" />
                    </a>
                  )
              )}
            </div>
          </AccordionDetail>
        </Accordion>
      </AccordionGroup>
    </div>
  )
}

export default ProductResourcesAccordion
