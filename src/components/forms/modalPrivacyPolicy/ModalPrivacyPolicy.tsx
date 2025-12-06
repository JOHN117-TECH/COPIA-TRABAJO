import React from 'react'
import './modalPrivacyPolicy.css'
import { useTranslations } from 'next-intl'
import { Button, ButtonText } from '@/components/Button'

const ModalPrivacyPolicy = ({modalContent, onAcceptTerms}: {modalContent: string, onAcceptTerms: () => void}) => {
  const t = useTranslations('DynamicFormsFields') 
	return (
		<div className='modal-privacy-policy space-y-8 px-10 md:px-16 py-8'>
			<h3 className='text-[36px]!'>{t('privacyPolicyTitle')}</h3>
			<div
        className="space-y-4 max-h-[70vh] max-w-[60vw] overflow-y-scroll"
        dangerouslySetInnerHTML={{ __html: modalContent }}
      />
			<Button onClick={onAcceptTerms} className='mx-auto'>
				<ButtonText text={t('accept')}/>
			</Button>
		</div>
	)
}

export default ModalPrivacyPolicy
