import React from 'react'
import SPGLink from '@/components/Link';
import { useTranslations } from 'next-intl';
import ButtonType from '@/models/buttonType';
import { Button, ButtonIcon, ButtonText } from '@/components/Button';

const SugestedLink = ({item}: any) => {
  const t = useTranslations("NotFound"); 
  
  return (
    <div className='space-y-4 p-6 bg-(--gray-10) rounded-lg'>
      <p>{t(item.label)}</p>
      <div className='flex justify-end'>
        <SPGLink path={item.ButtonLink}>
          <Button
            design={ButtonType.OUTLINED_WHITE_BIG}
          >
            <ButtonText text={t(item.ButtonText)} />
            <ButtonIcon className="icon-arrow-outward" />
          </Button>
        </SPGLink>
      </div>
    </div>
  )
}

export default SugestedLink