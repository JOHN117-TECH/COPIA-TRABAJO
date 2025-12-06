import clsx from "clsx";
import { useTranslations } from "next-intl";

/**
 * DeliveryInfo component
 *
 * This component displays delivery-related information such as shipping fees,
 * estimated delivery times, and general delivery policies. 
 *
 * 
 * - Displays multiple text sections including title, descriptions, fees, and timing.
 * - Designed to be used as a supplementary informational block in the cart view.
 *
 * @returns {React.ReactElement} - Rendered delivery information section
 */


export default function DeliveryInfo({isHorizontal}: {isHorizontal?: boolean}) {
  const t = useTranslations("Cart");

  return (
    <div className={clsx("content-aqua-section container p-10",
      {
        "grid grid-cols-12 items-center": isHorizontal === true,
      }
    )}>
      <h2 className="col-span-5">{t("Delivery.title")}</h2>
      <div className="col-span-7">
        <p>{t("Delivery.description")}</p>
        <p>{t("Delivery.description2")}</p>
        <div className="flex flex-row">
          <div className="w-1/2 flex flex-col">
              <p>{t("Delivery.fee")}</p>
              <p>{t("Delivery.free")}</p>
          </div>
          <div className="w-1/2 flex flex-col">
              <p>{t("Delivery.time")}</p>
              <p>{t("Delivery.days")}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
