"use client"
import React from 'react'
import WriteUs from './WriteUs'
import { useTranslations } from 'next-intl';
import useMediaQuery from '@/hooks/useMediaQuery';
import clsx from 'clsx';

export type ContactFormProps = {
  formType: 'home' | 'contact';
};

const ContactForm = ({ formType }: ContactFormProps) => {
  const t = useTranslations("Contact");
  const isMobile = useMediaQuery("(max-width: 900px)");
  return (
    <section id="write-us" className={clsx("container mx-auto flex pb-4",
      isMobile ? "flex-col" : "flex-row"
    )}>
      <p className="dalamoa-title flex-1 lg:pt-15">{t("hereTohelp")}</p>
      <WriteUs formType={formType} />
    </section>
  )
}

export default ContactForm