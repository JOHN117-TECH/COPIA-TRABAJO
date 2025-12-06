import Image from 'next/image'
import React, { useState } from 'react'
import SPGLink from '@/components/Link'
import { useTranslations } from 'next-intl'
import ButtonType from '@/models/buttonType'
import { Button, ButtonIcon, ButtonText } from '@/components/Button'

const ProductCardToOrder = ({ product, item }: any) => {
  const fallBackSrc = '/errorImg.webp';
  const t = useTranslations("Account.OrderHistory");
  const [imageError, setImageError] = useState(false);
  const host = "https://static.spradling.group/thumbs/"

  return (
    <div className="flex rounded-2xl text-(--spg-primary) relative border border-(--gray-30)">
      <div className="rounded-l-2xl bg-(--aqua-10) flex items-center justify-center h-[80px] w-[80px]!">
        {item.node.product ? (
          <Image
            src={imageError ? fallBackSrc : (host + product.image)}
            alt={product.pattern.name}
            width={100}
            height={100}
            className="object-cover h-full w-full rounded-l-2xl h-[80px] w-[80px]!"
            onError={() => setImageError(true)}
          />
        ) : (
          <i className="icon-catalog text-3xl" />
        )}
      </div>

      <div className="flex items-center px-4 py-4 gap-4 flex-1 min-w-0 overflow-hidden">
        <div className="flex flex-col w-full min-w-0 ">
          <p className="font-semibold md:text-xl mb-0 truncate! block">
            {product.pattern?.name || item.node.product?.pattern?.name}
          </p>
          {item.node.product ? (
            <p className="text-sm mb-0 truncate! text-(--gray-60) block">
              {product.pattern?.code || product?.code} / {product?.color}
            </p>
          ) : (
            <p className="text-sm mb-0 truncate! text-(--gray-60) block">
              {t("sampleCard")}
            </p>
          )}
        </div>

        <div className="shrink-0 gap-2 hidden md:flex">
          <SPGLink path={"#"} className="text-sm">
            <Button design={ButtonType.OUTLINED_SMALL}>
              <ButtonText text={t("orderAgain")} />
            </Button>
          </SPGLink>
          <SPGLink path={"/products/" + item.node.id} className="text-sm">
            <Button design={ButtonType.LINK_GREEN_SMALL} className="pr-0">
              <ButtonText text={t("goToProductDetail")} className="underline" />
              <ButtonIcon className="icon-arrow-right" />
            </Button>
          </SPGLink>
        </div>
        <div className="shrink-0 gap-3 flex md:hidden items-center">
          <SPGLink path={"#"} className="text-sm">
            <Button design={ButtonType.FILLED_AQUA_BIG_SQUARE}>
              <ButtonIcon className="icon-cart" />
            </Button>
          </SPGLink>
          <SPGLink path={"/products/" + item.node.id}>
            <i className="icon-arrow-right text-(--black) text-xl" />
          </SPGLink>
        </div>
      </div>
    </div>
  )
}

export default ProductCardToOrder