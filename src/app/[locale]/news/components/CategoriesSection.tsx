import clsx from 'clsx'
import React from 'react'
import { Button, ButtonText } from '@/components/Button'
import Skeleton from 'react-loading-skeleton'

const CategoriesSection = ({selectedCategory, setSelectedCategory, categories, loading}: any) => {
  return (
    <div className='flex gap-4 flex-wrap justify-end'>
      {
        loading
        ? Array(4).fill(0).map((_, i) => (
            <Skeleton key={i} width={100} height={30} borderRadius={4} />
          ))
        :
        categories?.blogCategories?.edges.map((category: any, index: number) => (
          <div key={index}>
            {
              category?.node?.posts?.totalCount &&
              category?.node?.posts?.totalCount > 0 ?
              <Button 
                customColors 
                className={clsx('pr-2 pl-2 pt-1 pb-1 rounded-sm bg-(--gray-10) border border-(--gray-10)', {
                  'bg-(--spg-primary) text-white':selectedCategory?.id === category?.node?.id,
                })}
                onClick={() => setSelectedCategory(category.node)}
              >
                <ButtonText text={category?.node?.name} />
              </Button>
              : <></>
            }
          </div>
        ))
      }
    </div>
  )
}

export default CategoriesSection