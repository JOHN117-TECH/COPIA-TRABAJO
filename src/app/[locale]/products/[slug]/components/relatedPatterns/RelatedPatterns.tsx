import React from 'react';
import { useTranslations } from 'next-intl';
import { PatternNode } from '@/graphql/generated/types';
import PatternsSlider from '@/components/patternsSlider/PatternsSlider';

const RelatedPatterns = ({ product }: { product: PatternNode}) => {
  const t = useTranslations("ProductDetail");
  
  return (
    <section className="mt-8 space-y-8">
      <h2>{t('relatedPatterns')}</h2>
      <PatternsSlider product={product} />
    </section>
  )
}

export default RelatedPatterns