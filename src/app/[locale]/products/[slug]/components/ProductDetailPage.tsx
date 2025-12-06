"use client";

import Breadcrumbs from '@/components/Breadcrumbs';
import ProductMainDetails from "./ProductMainDetails";
import GetCurrentInstance from "@/hooks/useGetCurrentInstance";
import RelatedPatterns from "./relatedPatterns/RelatedPatterns";
import ProductResourcesAccordion from './details/ProductResourcesAccordion';
import ProductDetailPageSkeleton from './ProductDetailPage.Skeleton';
import ProductSpecifications from "./specifications/ProductSpecifications";

import { useTranslations } from "next-intl";
import { useEffect, useState } from 'react';
import { PatternNode } from '@/graphql/generated/types';
import { usePdfPatternQueryQuery } from "@/graphql/patterns/pdfs/queries/getPdfByPattern.generated";
import { useSinglePatternQueryQuery } from "@/graphql/patterns/singlePattern/queries/getSinglePattern.generated";

const ProductDetailPage = ({ slug }: { slug: string}) => {
  const t = useTranslations("ProductDetail");
  const breadcrumbs = { '/products': 'Products', [`/products/${slug}`]: 'ProductDetail' }
  
  const variables = {
    slug,
    instanceId: GetCurrentInstance(),
    unitSystem: 1,
  }
  
  const [product, setProduct] = useState<PatternNode>();
  const [filesData, setFilesData] = useState<any[]>([]);
  const [currentImage, setCurrentImage] = useState<string>("");
  const [selectedIndexImage, setSelectedIndexImage] = useState<number>(0);

  const { data: pattern, loading, error } = useSinglePatternQueryQuery({ variables: variables });
  const { data: pdf, loading: pdfLoading, error: pdfError } = usePdfPatternQueryQuery({ variables: variables });
  
  useEffect(() => {
    if (pattern && pdf) {
      setProduct((pattern.pattern as PatternNode));
      setCurrentImage((pattern?.pattern?.products?.edges[selectedIndexImage]?.node?.imageThumbSmall) || '');
      const files = [
        { name: t('collectionImages'), url: pattern?.pattern?.zippedImagesUrl },
        { name: t('productDetails'), url: pdf?.pattern?.pdfUrl },
        { name: t('guides'), url: pattern?.pattern?.maintenanceGuide },
        { name: t('approvedCleaners'), url: pattern?.pattern?.approvedCleanersPdfUrl },
      ];
      setFilesData(files)
    }
  },[pattern, pdf])
    
  return (
    <div className="container mx-auto py-4 md:py-8 px-2 md:px-0 mt-6">
      {
        loading || !product ? (
          <ProductDetailPageSkeleton />
        ) : product && (
          <div className='flex flex-col md:px-0 gap-6'>
            <Breadcrumbs pathLabelMap={breadcrumbs} />
            <ProductMainDetails 
              product={product}
              filesData={filesData}
              currentImage={currentImage} 
              setCurrentImage={setCurrentImage} 
              selectedIndexImage={selectedIndexImage} 
              setSelectedIndexImage={setSelectedIndexImage} 
            />
            <div className='hidden md:block'>
              <ProductResourcesAccordion filesData={filesData} />
            </div>
            <ProductSpecifications product={product} />
            <RelatedPatterns product={product} />
          </div>
        )
      }
    </div>
  );

}

export default ProductDetailPage
