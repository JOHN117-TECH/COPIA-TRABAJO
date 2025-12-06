"use client";

import SPGLink from "@/components/Link";
import Breadcrumbs from "@/components/Breadcrumbs";
import GetCurrentInstance from "@/hooks/useGetCurrentInstance";
import DynamicFormWrapper from "@/components/forms/DynamicFormWrapper";

import { client } from "@/lib/apolloClient";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { Button, ButtonIcon, ButtonText } from "@/components/Button";
import { TokenAuthV2Document } from "@/graphql/auth/login/mutations/tokenAuth.generated";
import Image from "next/image";
import bgLogin from "../assets/images/bg-login-sign-up-web.jpg"

const Login = () => {
  const instanceId = GetCurrentInstance();
  const t = useTranslations("Login");
  const router = useRouter();
  const formId = "Q29udGFjdEZvcm1Ob2RlOjM=";

  const handleSubmit = (data: Record<string, unknown>, response: any) => {
    client.clearStore()
    const token = (data.data as any).tokenAuthV2?.token;
    const fullName = (data.data as any).tokenAuthV2?.fullName;

    const nameParts = fullName?.split(" ").filter(Boolean);
    const userInitials =
      nameParts && nameParts.length >= 2
        ? nameParts[0][0].toUpperCase() + nameParts[1][0].toUpperCase()
        : fullName?.slice(0, 2).toUpperCase();

    if (token && userInitials) {
      const cookieOptions = "path=/; max-age=" + 60 * 60 * 24 * 7;
      document.cookie = `userToken=${encodeURIComponent(token)}; ${cookieOptions}`;
      document.cookie = `userFullName=${encodeURIComponent(fullName)}; ${cookieOptions}`;
      document.cookie = `userInitials=${encodeURIComponent(userInitials)}; ${cookieOptions}`;
      window.dispatchEvent(new CustomEvent("authChange", { detail: { logged: true } }));
      router.push("/products");
    }
  };


  return (
    <div className="login-wrapper relative w-full min-h-screen">
      <div className="absolute inset-x-0 -top-20 -bottom-20 z-[-1]">
        <Image
          src={bgLogin}
          alt=""
          fill
          className="object-cover object-[80%_75%] lg:object-bottom"
          priority
        />
      </div>
      <div className="container mx-auto px-2 py-24 flex items-center justify-center">
        <div className="max-w-[520px] px-6 md:px-18 mx-auto py-10 bg-white rounded-4xl flex flex-col gap-5">
          <h1 className="text-(--aqua-100) text-[32px] md:text-[40px] font-semibold">{t("title")}</h1>
          <DynamicFormWrapper
            formId={formId}
            formQuery={TokenAuthV2Document}
            onSubmit={handleSubmit} 
            extraVariables={{ instanceId: instanceId }}
            className="bg-white rounded shadow-none"
          >
            <SPGLink className="text-sm font-medium text-right text-(--aqua-100) underline -mt-5 mr-3 mb-7" path={"/password-recovery"}>
              {t("forgotPassword")}
            </SPGLink>
            <Button type="submit">
              <ButtonText text={t("button")} />
              <ButtonIcon className="icon-arrow-right" />
            </Button>
          </DynamicFormWrapper>
          <div className="flex justify-center items-center text-sm my-4">
            <span className="mr-2 font-medium text-(--aqua-medium) text-lg">{t("noAccount")}</span>
            <SPGLink className="text-base text-(--aqua-100) font-medium underline" path={"/signup"}>
              {t("signup")}
            </SPGLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
