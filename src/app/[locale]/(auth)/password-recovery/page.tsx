"use client";

import Image from "next/image";
import SPGLink from "@/components/Link";
import ButtonType from "@/models/buttonType";
import GetCurrentInstance from "@/hooks/useGetCurrentInstance";
import bgLogin from "../assets/images/bg-login-sign-up-web.jpg";
import DynamicFormWrapper from "@/components/forms/DynamicFormWrapper";

import { Toast } from "@/components/Toast";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Button, ButtonIcon, ButtonText } from "@/components/Button";
import { ForgotPasswordDocument, useForgotPasswordMutation } from "@/graphql/auth/forgotPassword/mutations/forgotPassword.generated";

const PasswordRecovery =  () => {
  const instanceId = GetCurrentInstance();
  const formId = "Q29udGFjdEZvcm1Ob2RlOjY=";
  const t = useTranslations("PasswordRecovery");
  const bgImg = "https://s3-us-west-2.amazonaws.com/spradling-misc/images-for-django-fixtures/why-choose-us/design-3.jpg";
  const fieldsToSend = {
    url: process.env.NEXT_PUBLIC_FORM_URL ?? '',
    instances: instanceId,
    lang:"en"
  }
  
  const [emailSent, setEmailSent] = useState<boolean>(false);
  const [counter, setCounter] = useState<number>(30);
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);
  const [form, setForm] = useState({
    email: "",
    ...fieldsToSend
  });
  
  const [forgotPasswordMutation, { data, loading, error }] = useForgotPasswordMutation({ variables: form })
  
  useEffect(() => {
    if(data?.forgotPassword?.emailSent) {
      Toast.success(t("emailSent"));
    }
  }, [data]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (counter > 0) {
      timer = setInterval(() => {
        setCounter((prev) => prev - 1);
      }, 1000);
    } else {
      setIsButtonDisabled(false);
    }

    return () => clearInterval(timer);
  }, [counter]);

  const handleSubmit = (response : any, data: Record<string, unknown>) => {
    if (!(response.data as any).forgotPassword.emailSent) {
      Toast.error(t("error"));
      return;
    }
    //@ts-ignore
    setForm(data);
    setEmailSent(true);
  };

  const resendEmail = () => {
    setIsButtonDisabled(true);
    setCounter(30);
    forgotPasswordMutation();
  }

  return (
    <div className="password-reset min-h-screen w-full relative">
      <div className="absolute inset-x-0 -top-20 -bottom-20 z-[-1]">
        <Image
          src={bgLogin}
          alt=""
          fill
          className="object-cover object-[85%_75%] lg:object-bottom"
          priority
        />
      </div>
      <div className="container mx-auto py-15 mt-8 px-2">
        <div className="relative max-w-[520px] px-6 md:px-18 mx-auto py-10 bg-white rounded-2xl flex flex-col gap-3">
          {
            emailSent ?
               <div>
                <Button 
                  onClick={() => setEmailSent(false)}
                  design={ButtonType.LINK_BLACK_MEDIUM}
                  className={"pl-0"}
                >
                  <ButtonIcon className="icon-arrow-left"/>
                  <ButtonText text={t("back")}/>
                </Button>
              <h1 className="text-(--aqua-100) text-[32px] font-semibold leading-tight mt-2">
                {t("title")}
              </h1>
              <p className="text-sm my-3">
                {t.rich("checkEmailDescription", {
                  email: (form as any).email,
                  strong: (chunk) => <span className="font-semibold">{chunk}</span>
                })}
              </p>
              {/* <p className="text-sm mb-5">

              Estoy trabajando con react, typescript, next y next i18, y Necesito identificar que si el texto ejemplo aca <p className="text-sm mb-3">{t("checkEmailDescription")}</p>, el texto que reempleza checkEmailDescription, viene un [EMAIL], reemplace esto por esto <p className="text-sm mb-3 font-semibold">{(form as any).email}</p>
                  {t("dontReceive")}{" "}
                <button
                  onClick={resendEmail}
                  type="button"
                  disabled={isButtonDisabled}
                  className={`underline ${
                    isButtonDisabled ? "text-gray-400 cursor-not-allowed" : "text-(--spg-link)"
                  }`}
                >
                  {isButtonDisabled ? `${t("resend")} (${counter}s)` : t("resend")}
                </button>
              </p>
              <SPGLink path={"/login"}>
                <Button>
                  <ButtonText text={t("backToLogin")}/>
                  <ButtonIcon className="icon-arrow-right"/>
                </Button>
              </SPGLink> */}
            </div>
            :
            <>
              <SPGLink path={"/login"} className="text-(--black-100) text-base">
                <i className="icon-arrow-left text-lg"/> {t("back")}
              </SPGLink>
              <h1 className="text-(--aqua-100) text-[32px] font-bold leading-tight mt-2">
                {t("title")}
              </h1>
              <p className="text-sm mb-3">{t("description")}</p>
              <DynamicFormWrapper
                formId={formId}
                formQuery={ForgotPasswordDocument}
                onSubmit={handleSubmit} 
                extraVariables={fieldsToSend}
                className="bg-white rounded shadow-none"
              >
              <Button type="submit">
                <ButtonText text={t("button")}/>
                <ButtonIcon className="icon-arrow-right"/>
              </Button>
              </DynamicFormWrapper>
            </>
          }
        </div>
      </div>
    </div>
  );
};

export default PasswordRecovery;
