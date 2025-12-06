import React from 'react'
import SPGLink from '@/components/Link'
import { useTranslations } from 'next-intl'
import { Button, ButtonText } from '@/components/Button'

const CreateFirstListSection = ({ text, buttonText, onClick, path }: { text: string, buttonText: string, onClick?: () => void, path?: string}) => {
  const t = useTranslations('Lists')
  
  return (
    <section className="border border-(--gray-40) p-4 md:p-8 rounded-lg md:w-[70%] mx-auto md:px-20 space-y-10 flex flex-col items-center">
      <h3 className='text-(--gray-40) font-semibold'>{t('createFirstList')}</h3>
      <p className='text-lg'>{text}</p>
      <SPGLink path={path || "#"} className="w-full">
        <Button className="w-full" onClick={onClick}>
          <ButtonText text={buttonText} />
        </Button>
      </SPGLink>
    </section>
  )
}

export default CreateFirstListSection