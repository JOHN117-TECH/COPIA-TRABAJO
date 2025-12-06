"use client";

import GetCurrentInstance from "@/hooks/useGetCurrentInstance";
import DynamicFormWrapper from "@/components/forms/DynamicFormWrapper";
import bgLogin from "../../../../assets/images/bg-login-sign-up-web.jpg";

import { useState } from "react";
import { Toast } from "@/components/Toast";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { Button, ButtonIcon, ButtonText } from "@/components/Button";
import { ResetPasswordDocument } from "@/graphql/auth/forgotPassword/mutations/resetPassword.generated";
import Image from "next/image";

const ResetPassword = ({ uid, token }: { uid: string; token: string }) => {
  const instanceId = GetCurrentInstance();
  const router = useRouter();
  const t = useTranslations("PasswordReset");
  const formId = "Q29udGFjdEZvcm1Ob2RlOjc=";
  const variables = {
    uid,
    token,
    instance_id: instanceId
  };

  const [errors, setErrors] = useState([]);
  const locale = useLocale();

  const handleSubmit = (data: Record<string, unknown>) => {
    setErrors([]);
    if (!data.success){
      Toast.error(t("error"));
    }
    if((data.data as any).resetPassword.validationErrors){
      setErrors((data.data as any).resetPassword.validationErrors);
    }
    if ((data.data as any).resetPassword.passwordChanged){
      Toast.success(t("success"));
      router.push(`/${locale}/login`);
    }
  };

  return (
    <div className="password-reset min-h-screen w-full relative">
       <div className="absolute inset-x-0 -top-20 -bottom-20 z-[-1]">
        <Image
          src={bgLogin}
          alt="reset password"
          fill
          className="object-cover object-[85%_75%] lg:object-bottom"
          priority
        />
      </div>
      <div className="container mx-auto py-15 mt-8 px-2">
        <div className="relative max-w-[480px] px-6 md:px-18 mx-auto py-10 bg-white rounded-xl flex flex-col gap-3">
          <h1 className="text-(--aqua-100) text-[32px] font-semibold leading-tight mt-2">
            {t("title")}
          </h1>
          <DynamicFormWrapper
            formId={formId}
            formQuery={ResetPasswordDocument}
            onSubmit={handleSubmit} 
            extraVariables={variables}
            className="bg-white rounded shadow-none"
          >
            {errors.length > 0 && 
              <ul className="flex flex-col">
                {errors.map((error, index) => (
                  <li key={index} className="text-sm text-red-500">{error}</li>
                ))}
              </ul>
            }
            <div>
              <Button type="submit" className={"w-full"}>
                <ButtonText text={t("button")}/>
                <ButtonIcon className="icon-arrow-right"/>
              </Button>
            </div>
          </DynamicFormWrapper>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword