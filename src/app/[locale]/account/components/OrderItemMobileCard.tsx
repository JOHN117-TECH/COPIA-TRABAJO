import React, { useState } from 'react'
import Image from 'next/image';
import ButtonType from '@/models/buttonType';
import useDecodedId from '@/hooks/useDecodedId';
import DateFormatter from '@/hooks/DateFormatter';

import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Button, ButtonText } from '@/components/Button';

const OrderItemMobileCard = ({ order }: { order: any }) => {
  const router = useRouter();
  const fallBackSrc = '/errorImg.webp';
  const t = useTranslations("Account.OrderHistory");
  const host = "https://static.spradling.group/thumbs/"
  const [imageError, setImageError] = useState(false);

  return (
    <div className="md:hidden shadow-sm rounded-xl">
      <div className="bg-(--gray-10) relative items-center p-4 space-y-2 rounded-t-xl">
        <div className="flex flex-col">
          <p className="mb-1 text-(--aqua-medium) text-sm">{t("orderId")}</p>
          <p className="text-(--black) text-sm font-medium mb-0">{useDecodedId(order.id)}</p>
        </div>
        <div className="flex flex-col">
          <p className="mb-0 text-(--aqua-medium) text-sm">{t("createdOn")}</p>
          <p className="text-(--black) leading-thin mb-0">{DateFormatter(order.created)}</p>
        </div>
        <div className="absolute top-3 right-3">
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
      <div className='bg-(--white) flex flex-row gap-2 p-4 rounded-b-xl items-center'>
        <p className='text-(--gray-60) text-sm mb-0'>{order.items.edges.length} {t("items")}</p>
        {
            order.items.edges.map((item: any) => {
              const product = item.node.product || item.node.pattern;
              return (
                <div key={item.node.id} className='rounded-full w-[24px] h-[24px]'>
                  <Image 
                    src={imageError ? fallBackSrc : (host + product.image)}
                    alt={product.name} 
                    width={100} 
                    height={100} 
                    className='object-cover rounded-full w-[24px] h-[24px]' 
                    onError={() => setImageError(true)}
                  />
                </div>
              );
            })
          }
      </div>
    </div>
  )
}

export default OrderItemMobileCard