import Image from 'next/image'
import React, { useState } from 'react'
import { useTranslations } from 'next-intl'
import ButtonType from '@/models/buttonType'
import Pagination from '@/components/Pagination'
import { Button, ButtonIcon, ButtonText } from '@/components/Button'

const ListsSection = ({data}: {data: any}) => {
  const t = useTranslations('Lists')
  const fallBackSrc = '/errorImg.webp';
  const [imageError, setImageError] = useState(false);
  return (
    <div className='space-y-6 px-[10%]'>
      <h1 className='text-(--spg-text) text-center mx-auto'>{t('title')}</h1>
      <div className='flex justify-end'>
        <Button design={ButtonType.FILLED_MEDIUM}>
          <ButtonText text={t('newList')} />
          <ButtonIcon className="icon-add" />
        </Button>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-6 py-4'>
        {
          data.edges.map((item: any, index: number) => (
            <div key={index} className='bg-white rounded-lg shadow p-4'>
              <Image 
                src={
                  imageError ? fallBackSrc : item.node.products.edges[0].node.imageThumbSmall || item.node.patterns.edges[0].node.imageThumbSmall
                } 
                onError={() => setImageError(true)}
                alt={item.node.name} 
                width={300} 
                height={300} 
                className='w-[300px] h-[150px] object-cover rounded mb-8'
              />
              <h2>{item.node.name}</h2>
              <p>{item.node.totalCount} {t("items")}</p>
            </div>
          ))
        }
      </div>
      <hr />
      <Pagination
        currentPage={1}
        totalPages={1}
        onPageChange={() => {}}
        itemsPerPage={12}
        totalItems={data.edges.length}
      />
    </div>
  )
}

export default ListsSection