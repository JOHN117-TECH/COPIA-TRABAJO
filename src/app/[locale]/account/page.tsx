"use client";

import { useTranslations } from "next-intl";
import { getCookie } from "@/hooks/getCookie";
import AccountTabs from "./components/AccountTabs";

const Account = () => {
  const t = useTranslations("Account");
  const userName = getCookie("userFullName");

  return (
    <div className="container mx-auto py-8 px-6 md:px-8">
      <div className="flex items-center justify-center md:justify-between">
        <h1 className="text-[24px] text-(--spg-text) md:text-4xl mt-10 md:mt-2 mb-6 text-center md:text-left">
          {t("hello")}, {userName}
        </h1>
      </div>
      <AccountTabs />
    </div>
  );
};

export default Account;
