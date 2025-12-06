"use client"

import React, { useState } from 'react'
import { useTranslations } from 'next-intl';
import { useFilter } from '@/hooks/useFilter';
import PaginationCursor from '@/components/PaginationCursor';

/**
 * Footer of the products page.
 * This component renders the results of the products query
 * with the quantity of products, the total of products and the pagination.
 * 
 * @returns {JSX.Element} The footer of the products page.
 */
const FooterProducts = () => {

  const { state, changePageProducts } = useFilter();
  const t = useTranslations('Products');
  const totalPages = state.totalProducts > 0 ? Math.ceil(state.totalProducts / 12) : 1;

  const handlePageChange = (page: any) => {
    changePageProducts(page)
  };
  
  return (
    <section className='flex justify-between items-end mb-4'>
      <PaginationCursor 
        paginationData={state.pagination} 
        totalPages={totalPages}
        onPageChange={handlePageChange}
        itemsPerPage={12}
        totalItems={state.totalProducts}  
      />
    </section>
  )
}

export default FooterProducts