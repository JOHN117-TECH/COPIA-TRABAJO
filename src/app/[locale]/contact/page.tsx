"use client"

import Modal from "@/components/modal/Modal"
import React, { useState } from 'react'
import ButtonType from "@/models/buttonType"
import Breadcrumbs from '@/components/Breadcrumbs'
import ContactSales from "./components/ContactSales.modal"
import DynamicFormWrapper from '@/components/forms/DynamicFormWrapper'

import { useTranslations } from 'next-intl'
import { Button, ButtonIcon, ButtonText } from '@/components/Button'
import { useGetDynamicFormQuery } from '@/graphql/dynamicForms/queries/getDynamicForm.generated'
import { TokenAuthV2Document } from "@/graphql/auth/login/mutations/tokenAuth.generated"

const Contact = () => {
  const t = useTranslations("Contact");
  const [isOpen, setIsOpen] = useState(false);
  const dataRender: Record<string, { t: string; value: string }> = {
    "ADDRESS": { t: "address", value: '200 Cahaba Valley Parkway'},
    "WHATSAPP": { t: "whatsapp", value: '(205) 985-5207'},
    "PHONE": { t: "phone", value: '1-800-555-5555'},
    "EMAIL": { t: "email", value: 'sales@spradling.group'},
  }
  const { data, loading, error } = useGetDynamicFormQuery({
    variables: {
      id: "Q29udGFjdEZvcm1Ob2RlOjI="
    }
  });

  if (loading) console.log("Loading contact form...");
  if (error) console.error("Error loading form:", error);
  if (!data?.contactForm) console.error("No contact form data found");

  return (
    <div className='container mx-auto py-10 flex gap-4 flex-col'>
      <Breadcrumbs />
      <div className='grid grid-cols-1 md:grid-cols-12 gap-8'>
        <section className="md:px-8 md:col-span-6">
          <h2 className="leading-12">{t("title")}</h2>
          <h2 className="leading-12">{t("writeUs")}</h2>
          <p className="mt-8 mb-5 text-sm">{t("requiredFields")}</p>
          {/* TODO: Cambiar migración  */}
            <DynamicFormWrapper
              formId={data?.contactForm?.id ?? ""}
              formQuery={TokenAuthV2Document}
              // onSubmit={()=>{}} 
              className="shadow-none bg-transparent"
            >
              <Button type="submit">
                <ButtonText text={t("sendMessage")} />
                <ButtonIcon className="icon-mail" />
              </Button>
            </DynamicFormWrapper>
        </section>
        <section className='md:col-span-5 md:col-start-8'>
          {/* TODO: Quitar data quemada */}
          <div className='content-aqua-section py-8 px-8 rounded-3xl flex flex-col'>
            <h3 className="leading-5">{t("callUs")}</h3>
            <p className="text-lg font-semibold">Spradling International, Inc.® Headquarters</p>
            <p className="text-lg font-semibold">Pelham, United States</p>
            {
              Object.keys(dataRender).map((key: keyof typeof dataRender, index) => (
                <p className="text-lg" key={index}>
                  {t(dataRender[key].t) + " "}
                  <a>{dataRender[key].value}</a>
                </p>
                
              ))
            }
            <Button design={ButtonType.OUTLINED_SMALL} onClick={() => setIsOpen(true)}>
              <ButtonText text={t("contactSales")} />
            </Button>
            <Button design={ButtonType.OUTLINED_SMALL}>
              <ButtonText text={t("whereToBuy")} />
            </Button>
          </div>
        </section>
      </div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ContactSales />
      </Modal>
    </div>
  )
}

export default Contact