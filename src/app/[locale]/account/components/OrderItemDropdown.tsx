"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { Button, ButtonText } from "@/components/Button";

import ButtonType from "@/models/buttonType";
import useDecodedId from "@/hooks/useDecodedId";
import DateFormatter from "@/hooks/DateFormatter";
import Dropdown from "@/components/dropdown/Dropdown";
import DropdownContext from "@/hooks/DropdownContext";
import ProductCardToOrder from "./ProductCardToOrder";

const OrderItemDropdown = ({ order }: { order: any }) => {
  const router = useRouter();
  const t = useTranslations("Account.OrderHistory");
  
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const openDropdown = () => {
    setDropdownVisible(true);
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  return (
    <DropdownContext.Provider
      value={{
        visible: dropdownVisible,
        toggle: toggleDropdown,
        open: openDropdown,
        close: closeDropdown,
        isPopup: false,
      }}
    >
      <Dropdown customContext={true} className="hidden md:block shadow-sm rounded-3xl border border-(--gray-30)">
        <Dropdown.Toggle>
          <div className="grid grid-cols-12 items-center py-7 px-4 ">
            <div className="text-(--black) text-2xl col-span-1">
              {dropdownVisible ? (
                <i className="icon-minus" />
              ) : (
                <i className="icon-add" />
              )}
            </div>
            <div className="flex flex-col col-span-3">
              <p className="mb-1 text-(--aqua-medium) text-sm">{t("orderId")}</p>
              <p className="text-(--black) text-sm font-medium mb-0">{useDecodedId(order.id)}</p>
            </div>
            <div className="col-span-3 flex flex-col">
              <p className="mb-0 text-(--aqua-medium) text-sm">{t("createdOn")}</p>
              <p className="text-(--black) leading-thin mb-0">{DateFormatter(order.created)}</p>
            </div>
            <div className="col-span-3 col-start-10 justify-self-end">
              <Button 
                design={ButtonType.OUTLINED_SMALL} 
                onClick={(e) => {
                  e.stopPropagation();
                  router.push(`/account/order/${order.id}`);
                }}
              >
                <ButtonText text={t("goToDetail")} />
              </Button>
            </div>
          </div>
        </Dropdown.Toggle>

        <Dropdown.Menu className="p-0 border-t border-(--black) rounded-b-3xl rounded-t-none shadow space-y-2">
          {
            order.items.edges.map((item: any) => {
              const product = item.node.product || item.node.pattern;
              
              return (
                <Dropdown.Item key={item.node.id}>
                  <ProductCardToOrder product={product} item={item} />
                </Dropdown.Item>
              );
            })
          }
        </Dropdown.Menu>
      </Dropdown>
    </DropdownContext.Provider>
  );
};

export default OrderItemDropdown;
