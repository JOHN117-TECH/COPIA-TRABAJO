import SpecificationsMobile from './SpecificationsMobile';
import SpecificationsDesktop from './SpecificationsDesktop';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { buildSpecifications } from './constants';
import { PatternNode } from '@/graphql/generated/types';

const ProductSpecifications= ({ product }: { product: PatternNode }) => {
  const t = useTranslations("ProductDetail");
  const specifications = buildSpecifications(product);
  const [selectedSpecification, setSelectedSpecification] = useState<number>(0);
  
  return (
    <>
      <h2 className='mx-auto mt-8 mb-4'>{t("productSpecifications")}</h2>
      <SpecificationsDesktop 
        specifications={specifications} 
        selectedSpecification={selectedSpecification} 
        setSelectedSpecification={setSelectedSpecification} 
      />
      <SpecificationsMobile specifications={specifications} />
    </>
  )
}

export default ProductSpecifications