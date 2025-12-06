"use client";

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import Modal from '@/components/modal/Modal';
import ButtonType from '@/models/buttonType';
import { Button, ButtonText } from '@/components/Button';

const CookiesModal = () => {
  const t = useTranslations("CookiesModal");
  const [isOpen, setIsOpen] = useState(true);

  // TODO: Implementar Logica decookies
  const acceptCookies = () => {
    setIsOpen(false);
  }
  const rejectCookies = () => {
    setIsOpen(false);
  }
  const customizeCookies = () => {
    setIsOpen(false);
  }

  return (
    <Modal 
      desktopPosition="bottom" 
      isOpen={isOpen} 
      onClose={() => setIsOpen(false)}
      isFullWidth
      hideOnCloseIcon
      disableBackdropClose
    >
      <div className='grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 p-6 pb-8 md:py-8 md:px-32'>
        <p className='text-(--gray-70) text-base md:col-span-7'>{t("acceptCookies")}</p>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-4 md:col-span-5 items-center'>
          <Button 
            onClick={customizeCookies}
            design={ButtonType.OUTLINED_MEDIUM} 
            className={'col-span-1 md:col-span-1'}
          >
            <ButtonText text={t("customize")}  />
          </Button>
          <Button 
            onClick={rejectCookies}
            design={ButtonType.OUTLINED_MEDIUM} 
            className={'col-span-1 md:col-span-1'}
          >
            <ButtonText text={t("rejectAll")} />
          </Button>
          <Button onClick={acceptCookies} className={'col-span-2 md:col-span-1'}>
            <ButtonText text={t("acceptAll")} />
          </Button>
        </div>
      </div>
    </Modal>
  )
}

export default CookiesModal