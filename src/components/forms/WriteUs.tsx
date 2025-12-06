"use client";

import ButtonType from "@/models/buttonType";
import WriteUsSkeleton from "./WriteUs.skeleton";
import GetCurrentInstance from "@/hooks/useGetCurrentInstance";
import DynamicFormWrapper from "@/components/forms/DynamicFormWrapper";

import { Toast } from "../Toast";
import { useTranslations } from "next-intl";
import { ContactFormProps } from "./ContactForm";
import { useInstance } from "@/hooks/useInstance";
import { Button, ButtonIcon, ButtonText } from "@/components/Button";
import { useGetDynamicFormQuery } from "@/graphql/dynamicForms/queries/getDynamicForm.generated";
import { CreateContactHubspotDocument } from "@/graphql/contact/mutations/createContact.generated";
import useMediaQuery from "@/hooks/useMediaQuery";
import clsx from "clsx";
import Recaptcha from "../Recaptcha";
import { useState } from "react";

const WriteUs = ({ formType }: ContactFormProps) => {
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const t = useTranslations("HomePage.contactForm");
  const isMobile = useMediaQuery("(max-width: 900px)");
  const instanceId = GetCurrentInstance();
  const config = useInstance()
  const { data, loading, error } = useGetDynamicFormQuery({
    variables: {
      id: formType === 'home' ? config.config.homeFormId : config.config.contactFormId
    }
  });

  if (loading) return <WriteUsSkeleton />;
  if (error) console.error("Error loading form:", error);
  if (!data?.contactForm) return <></>;

  const handleSubmit = (data: Record<string, unknown>) => {
    if((data?.data as any).createContactHubspot?.contact?.id){
      Toast.success(t("toastText"));
    }
    
  };

  const handleCaptcha = (e: React.FormEvent) => {
    e.preventDefault();
    if (!captchaToken) {
      alert("Por favor completa el reCAPTCHA");
      return;
    }
  };

  const transformVariables = (values: Record<string, any>) => {
    const { termsAndConditions, ...cleanInput } = values.input ?? values;

    return {
      input: cleanInput
    };
  };

  return (
    <div className={clsx("form-wrapper w-full container bg-transparent flex-1", !isMobile && "p-6")}>
      <h2 className="mt-8 text-[40] text-(--black-100) font-normal">{t("title")}</h2>
      <h2 className="mb-3 text-[40] text-(--black-100) font-normal">{t("writeUs")}</h2>
      <p className="text-sm text-(--aqua-medium) font-medium">{t("validation")}</p>
      <DynamicFormWrapper
        formId={data?.contactForm?.id ?? ""}
        formQuery={CreateContactHubspotDocument}
        initialData={{instanceId: instanceId, source: "contact form"}}
        extraVariables={{ instanceId: instanceId, source: "contact form", cityId: "Q2l0eU5vZGU6MzQ2MjY="}}
        transformVariables={transformVariables}
        onSubmit={handleSubmit} 
        className={clsx("bg-white border-0", !isMobile && "min-w-70!")}
      >
        <div className={clsx("flex flex-wrap gap-2", isMobile ? "flex-wrap" : "flex-nowrap")}>
          <Button type="submit" design={ButtonType.FILLED_MEDIUM} className={"flex-1"}>
            <ButtonText text={t("button")} />
            <ButtonIcon className="icon-mail"/>
          </Button>
          <Recaptcha onVerify={setCaptchaToken} className={clsx("flex-1/3", isMobile ? "justify-center" : "justify-end")} />
        </div>
      </DynamicFormWrapper>
    </div>
  );
};

export default WriteUs;
