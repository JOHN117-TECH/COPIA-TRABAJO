import OrderDetailPage from "./components/OrderDetailPage";

type Props = {
  params: {
    orderId: string;
  };
};

const OrderDetail = async ({ params }: Props) => {
  const decoded = decodeURIComponent(params.orderId);

  return <OrderDetailPage id={decoded} />;
}

export default OrderDetail
