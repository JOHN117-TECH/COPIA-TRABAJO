import { useEffect } from "react";
import { useTranslations } from "next-intl";
import Dropdown from "@/components/dropdown/Dropdown";
import { iconChevronDown } from "@/utilities/constants";
import { PeriodsTime, SearchFormProps } from "@/models/orders.model";
import { useGetStatusQuery } from "@/graphql/orders/queries/statuses.generated";
import { Button, ButtonIcon, ButtonText } from "@/components/Button";
import ButtonType from "@/models/buttonType";
import clsx from "clsx";


const SearchForm = ({ currentStatus, setCurrentStatus, periodTime, setPeriodTime, totalOrders }: SearchFormProps) => {
  const t = useTranslations("Account.OrderHistory");
  const { data, loading, error } = useGetStatusQuery({})
  const periodsTime:Array<PeriodsTime> = ['1 week', '1 month', '3 months', '6 months', '1 year']
  const baseButtonStyle = "text-(--spg-text) text-sm font-medium bg-transparent border border-(--black-100) rounded-[30px] md:flex py-[10px] px-6";
  useEffect(() => {
    if (data && data.orderStatuses && data.orderStatuses[0]) {
      setCurrentStatus(data.orderStatuses[0]);
    }
  }, [data]);

  return (
    <div className="w-full flex flex-col xl:flex-row xl:items-center mb-2 gap-4">
      <div className="relative w-full xl:max-w-2xs 2xl:max-w-xs">
        <i className="icon-search text-(--gray-40) top-[10px] left-2 absolute"/>
        <input
          className="appearance-none outline-none border-b border-(--input-default-border) focus:border-(--input-active-border) p-2 pl-8 text-base text-(--gray-70) w-full"
          type="text"
          placeholder={t("searchPlaceholder")}
        />
      </div>
      <div className="w-full flex flex-col sm:flex-row gap-4">
        <div className="hidden lg:flex flex-row justify-between items-center w-full gap-4">
          <div className="flex flex-row items-center gap-5 w-full">
            <div className={clsx(baseButtonStyle)}>
              <Dropdown showAsAPopup>
                <Dropdown.Toggle>
                  <div className="flex justify-center lg:justify-start">
                    <span>{t(periodTime)}</span>
                    <i className={clsx(iconChevronDown, "text-(--black)!")} />
                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {periodsTime.map((period) => (
                    <Dropdown.Item
                      key={period}
                      onClick={() => setPeriodTime(period ?? "1 month")}
                    >
                      {t(period)}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className={clsx(baseButtonStyle)}>
              <Dropdown showAsAPopup>
                <Dropdown.Toggle>
                  <div className="flex justify-center lg:justify-start">
                    <span>{t("currentStatus")}</span>
                    <i className={clsx(iconChevronDown, "text-(--black)!")} />
                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {data?.orderStatuses?.map((status) => (
                    <Dropdown.Item
                      key={status}
                      onClick={() => setCurrentStatus(status ?? "")}
                    >
                      {status}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <Button className="font-medium" design={ButtonType.OUTLINED_SMALL}>
              <ButtonText text={t("sortBy")} />
              <ButtonIcon className="icon-chevron-down text-xl text-(--black)!" />
            </Button>
            <p className="results text-(--aqua) text-sm font-medium uppercase m-0 whitespace-nowrap">
              {totalOrders} {t("results")}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-3 w-full lg:hidden items-start">
          <div className="flex flex-col gap-3">
            <div className={clsx(baseButtonStyle, "w-full")}>
              <Dropdown showAsAPopup>
                <Dropdown.Toggle>
                  <div className="flex justify-center">
                    <span>{t(periodTime)}</span>
                    <i className={clsx(iconChevronDown, "text-(--black)!")} />
                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {periodsTime.map((period) => (
                    <Dropdown.Item
                      key={period}
                      onClick={() => setPeriodTime(period ?? "1 month")}
                    >
                      {t(period)}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <p className="results text-(--aqua) text-sm font-medium uppercase m-0 text-left mt-1">
              {totalOrders} {t("results")}
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <div className={clsx(baseButtonStyle, "w-full")}>
              <Dropdown showAsAPopup>
                <Dropdown.Toggle>
                  <div className="flex justify-center">
                    <span>{t("currentStatus")}</span>
                    <i className={clsx(iconChevronDown, "text-(--black)!")} />
                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {data?.orderStatuses?.map((status) => (
                    <Dropdown.Item
                      key={status}
                      onClick={() => setCurrentStatus(status ?? "")}
                    >
                      {status}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="flex justify-end">
              <Button
                className="font-medium w-auto"
                design={ButtonType.OUTLINED_SMALL}
              >
                <ButtonText text={t("sortBy")} />
                <ButtonIcon className="icon-chevron-down text-xl text-(--black)!" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
