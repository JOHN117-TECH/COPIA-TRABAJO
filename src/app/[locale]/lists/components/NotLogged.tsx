import React from 'react'
import { useTranslations } from 'next-intl'
import WatchTutorialSection from './WatchTutorialSection'
import CreateFirstListSection from './CreateFirstListSection'

const NotLogged = () => {
  const t = useTranslations('Lists')
  return (
    <div className="bg-white px-[10%] py-10 text-center space-y-6">
      <h1 className='text-(--spg-text)'>{t('title')}</h1>
      <CreateFirstListSection 
        text={t('logInToCreateList')} 
        buttonText={t('logIn')} 
        path='/login'
      />
      <WatchTutorialSection />
    </div>
  )
}

export default NotLogged