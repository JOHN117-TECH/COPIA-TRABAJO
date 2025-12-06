"use client";

import GetCurrentInstance from '@/hooks/useGetCurrentInstance';
import ImagesSection from './components/ImagesSection.productDetail';
import DetailSection from './components/DetailSection.productDetail';

import { useEffect, useState } from 'react';
import { Pattern } from '@/models/products.model';
import { ProductDetailModalProps } from '@/models/filters.model';
import { useGetPatternPreviewQuery } from '@/graphql/patterns/preview/queries/getPatternPreview.generated';
import { PatternNode } from '@/graphql/generated/types';

const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ slug }) => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [product, setProduct] = useState<PatternNode>();
  const [currentImage, setCurrentImage] = useState<string>("");
  const [selectedIndexImage, setSelectedIndexImage] = useState<number>(0);

  const { data } = useGetPatternPreviewQuery({
    variables: {
      slug,
      instanceIds: GetCurrentInstance(),
    },
  });
  
  useEffect(() => {
    if(data) {
      setProduct(data.pattern as unknown as PatternNode);
      setCurrentImage(data.pattern?.products?.edges[selectedIndexImage]?.node?.imageThumbSmall ?? '');
    }
  },[data])
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-10 max-h-[90vh] bg-white rounded-2xl overflow-hidden md:max-w-[70vw]">
      {
        product && 
        <>
          <ImagesSection
            product={product}
            classNameBigImage="h-[350px]"
            currentImage={currentImage}
            setCurrentImage={setCurrentImage}
            selectedIndexImage={selectedIndexImage}
            setSelectedIndexImage={setSelectedIndexImage}
          />
          <DetailSection
            product={product}
            selectedColor={selectedColor}
            setCurrentImage={setCurrentImage}
            setSelectedColor={setSelectedColor}
            setSelectedIndexImage={setSelectedIndexImage}
          />
        </>
      }
    </div>
  );
};

export default ProductDetailModal;