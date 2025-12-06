import React from 'react';
import ProductsGrid from './ProductsGrid';
import FooterProducts from './FooterProducts';
import { ProductsRenderProps } from '@/models/products.model';
import ResultsAndFilterProducts from './ResultsAndFilterProducts';

/**
 * Component to render the products grid and the pagination.
 * It renders the selected filters on top of the products grid.
 * The component is a wrapper for the products grid and the pagination.
 * 
 * @param {{ isSelectable: boolean }} props - Props for the component. 
 * @param {boolean} props.isSelectable - Whether the products are selectable.
 */
const ProductsRender: React.FC<ProductsRenderProps> = ({ isSelectable }) => {

  return (
    <div className='container mx-auto flex flex-col px-4'>
      <ResultsAndFilterProducts />
      <ProductsGrid isSelectable={isSelectable} />
      <FooterProducts />
    </div>
  )
}

export default ProductsRender