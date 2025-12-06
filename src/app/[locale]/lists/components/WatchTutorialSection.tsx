import React from 'react'
import { useTranslations } from 'next-intl'
import ButtonType from '@/models/buttonType'
import { Button, ButtonIcon, ButtonText } from '@/components/Button'

const WatchTutorialSection = () => {
  const t = useTranslations('Lists')
  
  return (
    <section className='bg-(--spg-link) p-8 py-12 rounded-lg md:w-[70%] mx-auto md:px-20 flex justify-between items-center mt-10 flex-col md:flex-row space-y-4'>
      <p className='text-white'>{t("howToUse")}</p>
      <Button design={ButtonType.FILLED_WHITE_MEDIUM}>
        <ButtonText text={t('watchTutorial')} />
        <ButtonIcon className="icon-play" />
      </Button>
    </section>
  )
}

export default WatchTutorialSection