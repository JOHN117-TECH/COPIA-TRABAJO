import React, { useState } from 'react'
import { useTranslations } from 'next-intl';
import Pagination from '@/components/Pagination';

const PaginationSection = ({data}: {data: any}) => {
  const t = useTranslations("FAQs");
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = data.length > 0 ? Math.ceil(data.length / 12) : 1;
  const resultsQuantityInit = currentPage - 1 > 0 ? (currentPage - 1) * 12 + 1 : 1;
  const resultsQuantityEnd = currentPage * 12 > data.length ? data.length : currentPage * 12;
  
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  
  return (
    <section className='flex justify-between items-end'>
      <span className='font-semibold text-(--spg-text)'>{resultsQuantityInit || 1} - {resultsQuantityEnd} {t("of")} {data.length}</span>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        itemsPerPage={12}
        totalItems={data.length}  
      />
    </section>
  )
}

export default PaginationSection