"use client";

import SPGLink from "@/components/Link";
import GetCurrentInstance from "@/hooks/useGetCurrentInstance";
import FormSectionDivider from "@/components/forms/FormSectionDivider";
import DynamicFormWrapper from "@/components/forms/DynamicFormWrapper";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { Button, ButtonIcon, ButtonText } from "@/components/Button";
import { Create_UserDocument } from "@/graphql/auth/signup/mutations/createUserForNewWeb.generated";
import { CheckEmailAvailabilityDocument } from "@/graphql/auth/signup/queries/checkEmailAvailability.generated";
import { Toast } from "@/components/Toast";
import Image from "next/image";
import bgLogin from "../assets/images/bg-login-sign-up-web.jpg"
import Notifications from "@/components/Notifications";
import { useCreateUserAddressMutation } from "@/graphql/user/mutations/createUserAddress.generated";
import { useInstance } from "@/hooks/useInstance";

const Signup = () => {
  
  const router = useRouter();
  const locale = useLocale();
  const config = useInstance()
  const t = useTranslations("Signup");
  const instanceId = GetCurrentInstance();
  const formIdStep1 = "Q29udGFjdEZvcm1Ob2RlOjU=";
  const formIdStep2 = config.config.signupFormId;
  const [createUserAddressMutation] = useCreateUserAddressMutation();
  const [currentStep, setCurrentStep] = useState(1);
  const [firstStepData, setFirstStepData] = useState({});
  const [showPasswordGuidelines, setShowPasswordGuidelines] = useState(false);
  const [selectedPlaces, setSelectedPlaces] = useState({
    main: null,
    shipping: null,
  });
  
  const handleSubmitStep1 = (response: any, formData: Record<string, unknown>) => {
    if(response?.data.isEmailAvailable?.status) {
      setCurrentStep(2);
      setFirstStepData({...formData, instanceId: formData.geographicInstanceId});
    } else {;
      Toast.error(t("emailTaken"));
    }
  };

  const handleSubmitStep2 = async (response: any) => {
    try {
      const userId = response?.data?.createUserForNewWeb?.userId;
      if (!userId) {
        Toast.error("Error creando el usuario");
        return;
      };
      if (selectedPlaces.main) {
        await createUserAddressMutation({
          variables: {
            userId,
            placeId: selectedPlaces.main,
            instanceId,
            isPrimary: true,
            addressInfo: ""
          }
        });
      }
      if (selectedPlaces.shipping) {
        await createUserAddressMutation({
          variables: {
            userId,
            placeId: selectedPlaces.shipping,
            instanceId,
            isPrimary: true,
            addressInfo: ""
          }
        });
      }

    } catch (err) {
      console.error(err);
    }
    Toast.success(t("signupSuccess"));
    router.push(`/${locale}/signup/accounts`);
  };

  const handlePasswordFocus = () => {
    setShowPasswordGuidelines(true);
  };

  const sectionDividers = {
    firstName: { component: <FormSectionDivider title={t("titlePersonalSection")} showLine={false} /> },
    company: { component: <FormSectionDivider title={t("titleCompanySection")} /> },
    address: { component: <FormSectionDivider title={t("titleAddressSection")} /> },
    sameAddress: { component: <FormSectionDivider title={t("titleAddressShipping")} /> }
  };

  const passwordGuidelines = showPasswordGuidelines ? {
    password: {
      component: (<Notifications state="neutral" message={t("mustContainPassword")}/>),
    },
  } : {};

  return (
    <div
      className="signup-wrapper relative w-full min-h-screen"
    >
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
        <div className="mx-auto relative max-w-[680px] px-6 md:px-18 mx-5 py-10 bg-white rounded-2xl shadow flex flex-col gap-2 " >
          {currentStep == 1 ? (
            <div>
              <h1 className="text-(--aqua-100) text-[32px] font-bold leading-tight">
                {t("step1Title")}
              </h1>
            </div>
          ) : (
            <div>
              <div className="text-(--black-100) text-base mb-4 flex items-center gap-1">
                <button
                  onClick={() => setCurrentStep(1)}
                  className="hover:underline"
                >
                  <i className="icon-arrow-left text-lg"/>
                  {t("back")}
                </button>
              </div>
              <h1 className="text-(--aqua-100) text-[32px] font-bold leading-tight">
                {t("step2Title")}
              </h1>
            </div>
          )}
          <div className="className text-sm text-(--gray-60) mb-6">
            {t("fieldsRequired")}
          </div>
          {currentStep == 1 ? (
            <DynamicFormWrapper
              key="form-step-1"
              formId={formIdStep1}
              formQuery={CheckEmailAvailabilityDocument}
              onSubmit={handleSubmitStep1} 
              sectionDividers={passwordGuidelines}
              extraVariables={{ geographicInstanceId: instanceId }}
              onPasswordFocus={handlePasswordFocus}
              className="shadow-none"
            >
              <div className="flex justify-center items-center">
                <Button type="submit" className={"w-full"}>
                  <ButtonText text={t("button")} />
                </Button>
              </div>
              <hr className="my-0" />
              <div className="flex text-sm text-(--spg-primary) justify-center items-center">
                <span className="mr-3 font-medium text-lg text-(--aqua-medium)">{t("alreadyRegistered")}</span>{" "}
                <SPGLink className="text-base underline font-medium text-(--aqua-100)" path={"/login"}>
                  {t("login")}
                </SPGLink>
              </div>
            </DynamicFormWrapper>
          ) : (
            <DynamicFormWrapper
              key="form-step-2"
              formId={formIdStep2}
              formQuery={Create_UserDocument}
              onSubmit={handleSubmitStep2} 
              extraVariables={firstStepData}
              sectionDividers={sectionDividers}
              className="shadow-none"
               //@ts-ignore
              selectedPlaces={setSelectedPlaces}
              customWidths={{
                sameAddress: "w-full md:w-[60%]",
                useNewAddress: "w-full md:w-[40%]",
              }}
            >
              <div className="flex justify-center items-center">
                <Button type="submit" className={"w-full"}>
                  <ButtonText text={t("signup")} />
                  <ButtonIcon className="icon-arrow-right text-xl" />
                </Button>
              </div>
            </DynamicFormWrapper>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signup;
