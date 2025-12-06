"use client";

import { Tab, TabPanel, Tabs, TabsBody, TabsHeader } from "@/components/Tabs";
import AccountInformation from "./AccountInformation";
import OrderHistory from "./OrderHistory";
import { useTranslations } from "next-intl";

const AccountTabs = () => {
  const t = useTranslations("Account");
  return (
    <Tabs>
      <TabsHeader>
        <Tab value="order_history">{t("OrderHistory.title")}</Tab>
        <Tab value="account_information">{t("AccountInformation.title")}</Tab>
      </TabsHeader>
      <TabsBody>
        <TabPanel value="order_history">
          <OrderHistory />
        </TabPanel>
        <TabPanel value="account_information">
          <AccountInformation />
        </TabPanel>
      </TabsBody>
    </Tabs>
  );
};

export default AccountTabs;
