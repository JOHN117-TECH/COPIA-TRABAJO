import React from 'react'
import { useTranslations } from 'next-intl';

const TermsAndConditions = () => {
  const t = useTranslations("ProductDetail");
  
  return (
    <div className='h-[80%]'>
      <p className='text-(--gray-70)'>{t('Specifications.productTerms')}</p>
    </div>
  )
}

export default TermsAndConditions