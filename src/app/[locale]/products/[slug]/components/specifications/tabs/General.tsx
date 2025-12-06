import React from 'react'
import Image from 'next/image'
import { PatternNode } from '@/graphql/generated/types'

const General = ({ product }: { product: PatternNode}) => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-32">
      {
        product.specsSheetData.general.map((item: any, index: number) => (
          <div key={index}>
            <p className='text-sm text-(--gray-60) mb-1 font-medium uppercase'>{item.message}</p>
            {typeof item.value == 'string' && <p className='text-(--gray-70)'>{item.value}</p>}
            {item.value.title && !item.value.hideOnWebsite &&
              <Image 
                src={item.value.logo}
                width={100}
                height={100}
                alt={item.value.title}
              />
            }
          </div>
        ))
      }
    </div>
  )
}

export default General