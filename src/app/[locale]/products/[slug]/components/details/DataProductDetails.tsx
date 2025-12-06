import React, { useState } from 'react'
import ColorSample from './ColorSample';
import ButtonType from '@/models/buttonType';
import useMediaQuery from '@/hooks/useMediaQuery';
import Notifications from '@/components/Notifications';
import capitalizeFirstLetter from '@/hooks/useCapitalizeText';
import ProductResourcesAccordion from './ProductResourcesAccordion';
import MarketsProduct from '../../../components/MarketsProduct.productDetail';

import { useTranslations } from 'next-intl';
import { TagLabel, Tags } from '@/components/Tags';
import { ProductMainDetailsProps } from '@/models/products.model';
import { Button, ButtonIcon, ButtonText } from '@/components/Button';

const DataProductDetails: React.FC<ProductMainDetailsProps> = ({ 
  product, 
  filesData,
  setCurrentImage, 
  selectedIndexImage, 
  setSelectedIndexImage 
}) => {
  const MAX_ITEMS = 20;
  const items = product.products.edges;
  const t = useTranslations("ProductDetail");
  const [showAll, setShowAll] = useState(false);
  const isMobile = useMediaQuery("(max-width: 1024px)");
  const visibleItems = showAll ? items : items.slice(0, MAX_ITEMS);
  const listToRender = isMobile ? items : visibleItems;


  const renderTagText = () => {
    if(product.isNew) return t('newProduct')
    else if (product.products.edges[selectedIndexImage].isNew) return t('newColor')
    return ''
  }

  return (
    <>
      <div className="flex justify-between items-center">
        <h3 className='font-(family-name:--font-dalamoa) font-bold'>{product.altName}</h3>
        {(product.isNew || product.products.edges[selectedIndexImage].isNew) && (
          <Tags variant="filled" size="md" className='uppercase'>
            <TagLabel label={renderTagText()}/>
          </Tags>
        )}
      </div>
      <div className="flex justify-between items-center">
        <p className='text-(--gray-60) mb-0 font-medium'>
          {capitalizeFirstLetter(
            product.products.edges[selectedIndexImage].node.color
          )}{" "}
          | {product.products.edges[selectedIndexImage].node.code}
        </p>
        <Button design={ButtonType.LINK_GREEN_SMALL}>
          <ButtonText text={t("share")} />
          <ButtonIcon className="icon-share text-xl" />
        </Button>
      </div>

      <div className={`flex gap-3 mt-2 ${isMobile ? "overflow-x-auto" : "flex-wrap"}`}>
        {listToRender.map((prod:any, index:number) => (
          <ColorSample
            key={index}
            prod={prod}
            index={index}
            product={product}
            setCurrentImage={setCurrentImage}
            selectedIndexImage={selectedIndexImage}
            setSelectedIndexImage={setSelectedIndexImage}
          />
        ))}
      </div>
      
      <div className="hidden md:block">
        {!showAll && items.length > MAX_ITEMS && (
          <Button design={ButtonType.LINK_GREEN_SMALL} onClick={() => setShowAll(true)}>
            <ButtonText text={t("showMore")} className='underline'/>
            <ButtonIcon className="icon-add" />
          </Button>
        )}

        {showAll && items.length > MAX_ITEMS && (
          <Button design={ButtonType.LINK_GREEN_SMALL} onClick={() => setShowAll(false)}>
            <ButtonText text={t("showLess")} className='underline'/>
            <ButtonIcon className="icon-minus" />
          </Button>
        )}
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <Button design={ButtonType.FILLED_MEDIUM} >
          <ButtonIcon className="icon-add-shopping-cart" />
          <ButtonText text={t("addToCart")} />
        </Button>
        <Button design={ButtonType.OUTLINED_MEDIUM}>
          <ButtonIcon className="icon-add" />
          <ButtonText text={t("addCatalogue")} />
        </Button>
      </div>

      <Notifications state='info' message={t("warning")}/>
      
      <Button design={ButtonType.OUTLINED_MEDIUM} className='mt-4'>
        <ButtonIcon className="icon-location" />
        <ButtonText text={t("whereToBuy")} />
      </Button>
      <Button design={ButtonType.OUTLINED_MEDIUM} className='mt-4'>
        <ButtonText text={t("addToList")} />
      </Button>
      <div className="md:hidden mt-4">
        <ProductResourcesAccordion filesData={filesData} />
        <MarketsProduct sectors={product.sectors.edges} />
      </div>
    </>
  )
}

export default DataProductDetails