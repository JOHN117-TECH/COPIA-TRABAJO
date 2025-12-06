"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { PeriodsTime } from "@/models/orders.model";
import { useGetordersQuery } from "@/graphql/orders/queries/getOrders.generated";

import SearchForm from "./SearchForm";
import SPGLink from "@/components/Link";
import Pagination from "@/components/Pagination";
import OrderItemDropdown from "./OrderItemDropdown";
import OrderItemMobileCard from "./OrderItemMobileCard";

const OrderHistory = () => {
  const totalPages = 50;
  const t = useTranslations("Account.OrderHistory");
  const [currentPage, setCurrentPage] = useState(1);
  const [currentStatus, setCurrentStatus] = useState<string>('');
  const [periodTime, setPeriodTime] = useState<PeriodsTime>('1 month');

  const { data, loading, error } = useGetordersQuery({
    variables: {
      page: currentPage,
      size: 5,
      created: periodTime
    },
  });
  
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="container flex flex-col">
      <h2 className="text-2xl mb-5 font-semibold">{t("title")}</h2>
      <SearchForm 
        periodTime={periodTime}
        currentStatus={currentStatus} 
        setPeriodTime={setPeriodTime}
        setCurrentStatus={setCurrentStatus}
        totalOrders={data?.orders?.totalCount || 0}
      />
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div className="col-span-8 px-4">
          <hr />
          <div className="space-y-4">
            {
              data?.orders?.results?.map((order) => (
                <div key={order?.id}>
                  <OrderItemDropdown order={order} />
                  <OrderItemMobileCard order={order} />
                </div>
              ))
            }
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            itemsPerPage={16}
            totalItems={data?.orders?.totalCount || 0}
          />
        </div>
        <div className="content-aqua-section col-span-4">
          <p className="font-semibold my-2">{t("needHelp")}</p>
          <p className="mt-4 text-sm">{t("needHelpDesc1")}
            <SPGLink
              className="text-sm"
              path={"mailto:samples@spradling.group"}
            >
              samples@spradling.group
            </SPGLink>
            {t("needHelpDesc2")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
