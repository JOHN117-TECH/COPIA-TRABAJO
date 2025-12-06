"use client";

import { useTranslations } from "next-intl";
import { Button, ButtonIcon, ButtonText } from "@/components/Button";
import SPGLink from "@/components/Link";

const CheckEmail = () => {
  const bgImg = "https://s3-us-west-2.amazonaws.com/spradling-misc/images-for-django-fixtures/why-choose-us/design-3.jpg";
  const t = useTranslations("CheckEmail");
  const email = "example@email.com";

  return (
    <div
      className="password-reset min-h-screen"
      style={{ backgroundImage: "url(" + bgImg + ")", backgroundSize: "cover" }}
    >
      <div className="container mx-auto py-15 mt-8 px-2">
        <div className="md:mx-auto relative rounded-lg max-w-[480px] px-6 md:px-18 mx-5 bg-white py-10">
          <SPGLink path={"/login"}>
            <i className="text-sm ic-arrow-left"></i> {t("back")}
          </SPGLink>
          <h1 className="text-(--spg-text) text-2xl leading-tight mt-4 mb-4">
            {t("title")}
          </h1>
          <p className="text-sm mb-0">{t("description")}</p>
          <p className="font-bold">{email}</p>
          <hr className="my-6" />
          <div className="flex items-center">
            <span className="mr-5 text-(--spg-text) text-sm">
              {t("resendDesc")}
            </span>
            <SPGLink className="text-sm" path={"/password-recovery"}>
              {t("resendLink")}
            </SPGLink>
          </div>
          <SPGLink path={"/signin"}>
            <Button className={"mt-5"}>
              <ButtonText text={t("button")} />
              <ButtonIcon className="icon-arrow-right" />
            </Button>
          </SPGLink>
        </div>
      </div>
    </div>
  );
};

export default CheckEmail;
