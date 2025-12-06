import React from 'react';
import { useTranslations } from 'next-intl';
import { AccordionGroup } from '@/components/accordion/AccordionGroup';
import { Accordion, AccordionDetail, AccordionHeader } from '@/components/accordion/Accordion';

const SpecificationsMobile = ({ specifications }: { specifications: any }) => {
  const t = useTranslations("ProductDetail");

  return (
    <div className="md:hidden">
      {
        specifications.map((key: any, index: number) =>
          key.hasData &&
          <AccordionGroup key={index}>
            <Accordion>
              <AccordionHeader title={t(key.title)} className='font-medium text-(--gray-70)' />
              <AccordionDetail classname='bg-(--white)'>
                {key.data}
              </AccordionDetail>
            </Accordion>
          </AccordionGroup>
        )
      }
    </div>
  )
}

export default SpecificationsMobile