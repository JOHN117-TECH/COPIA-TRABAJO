"use client";
import { Button, ButtonIcon, ButtonText } from "@/components/Button";
import SPGLink from "@/components/Link";
import {
  useGetOrderQuery,
  GetOrderQuery,
} from "@/graphql/orders/queries/getOrder.generated";
import ButtonType from "@/models/buttonType";
import { useTranslations } from "next-intl";
import DateFormatter from "@/hooks/DateFormatter";
import useDecodedId from "@/hooks/useDecodedId";
import ProductCardToOrder from "../../../components/ProductCardToOrder";

type Props = {
  id: string;
};

const OrderDetailPage = ({ id }: Props) => {
  const t = useTranslations("Account.OrderDetail");
  const { data, loading, error } = useGetOrderQuery({
    variables: {
      id: id,
    },
  });

  const order: GetOrderQuery["order"] | undefined = data?.order;
  const decodedOrderId = useDecodedId(order?.id);


  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  if (!order) return <div>Order not found</div>;

  return (
    <div className="container mx-auto mt-10 py-10">
      <SPGLink path="/account" className="flex items-center gap-2">
        <i className="text-sm ic-arrow-left"></i>
        {t("back")}
      </SPGLink>
      <div className="flex flex-col md:flex-row justify-between content-center">
        <h1 className="text-(--spg-primary) mt-6">
          {t("title", { id: decodedOrderId ?? "" })}
        </h1>
        <div className="actions flex items-center mt-3">
          <a href="#">
            <i className="ic-download mr-5"></i>
          </a>
          <Button className="text-(--spg-link)" design={ButtonType.OUTLINED_MEDIUM}>
            <ButtonText text={t("orderAllAgain")}/>
            <ButtonIcon className="ml-1 ic-shopping-cart"/>
          </Button>
        </div>
      </div>
      <div className="flex justify-between w-full md:w-3/4 mt-8">
        <div className="flex flex-col md:flex-row md:justify-between w-full gap-25">
          <div className="order flex flex-col">
            <div className="mb-1 title text-xs text-(--spg-primary)">
              {t("orderId")}
            </div>
            <div className="number font-bold">{decodedOrderId}</div>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between w-full">
            <div className="date flex flex-col mt-5 md:mt-0">
              <div className="mb-1 title text-xs text-(--spg-primary)">
                {t("createdOn")}
              </div>
              <div className="number">{DateFormatter(order.created)}</div>
            </div>
            <div className="date flex flex-col">
              <div className="mb-1 title text-xs text-(--spg-primary)">
                {t("completedOn")}
              </div>
              <div className="number">{DateFormatter(order.updated)}</div>
            </div>
            <div className="date flex flex-col mt-5 md:mt-0 w-2/4">
              <div className="mb-1 title text-xs text-(--spg-primary)">
                {t("shippedTo")}
              </div>
              <div className="number">
                {`${order.shippingAddress?.address ?? ""}, 
                    ${order.shippingAddress?.city?.name ?? ""}, 
                    ${order.shippingAddress?.city?.country?.name ?? ""}`}
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="md:my-8" />
      <h2 className="mt-10">
        {t("items", { count: order.items?.edges.length || 0 })}
      </h2>
      <div className="space-y-5 mt-8">
        {order.items?.edges.map((edge, index: number) => {
          const product = edge?.node?.product || edge?.node?.pattern;
          const node = edge?.node;
          if (!node || (!node.product && !node.pattern)) return null;
          return <ProductCardToOrder product={product} item={edge} key={index} />;
        })}
      </div>
    </div>
  );
};

export default OrderDetailPage;
