import React from 'react'
import { useTranslations } from 'next-intl';
import DataProductDetails from './details/DataProductDetails';
import { ProductMainDetailsProps } from '@/models/products.model';
import ImagesSection from '../../components/ImagesSection.productDetail';
import MarketsProduct from '../../components/MarketsProduct.productDetail';

const ProductMainDetails: React.FC<ProductMainDetailsProps> = ({ 
  product, 
  filesData,
  currentImage,  
  setCurrentImage, 
  selectedIndexImage, 
  setSelectedIndexImage 
}) => {
  const t = useTranslations()
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <section className="gap-1 flex flex-col order-2 md:order-1">
        <DataProductDetails 
          product={product} 
          filesData={filesData}
          currentImage={currentImage}
          setCurrentImage={setCurrentImage} 
          selectedIndexImage={selectedIndexImage} 
          setSelectedIndexImage={setSelectedIndexImage}
        />
      </section>
      <section className="order-1 md:order-2">
        <ImagesSection
          product={product}
          classNameBigImage="h-[400px]"
          currentImage={currentImage}
          setCurrentImage={setCurrentImage}
          selectedIndexImage={selectedIndexImage}
          setSelectedIndexImage={setSelectedIndexImage}
        />
        <div className="hidden md:block">
          <MarketsProduct sectors={product.sectors.edges} />
        </div>
      </section>
    </div>
  )
}

export default ProductMainDetails