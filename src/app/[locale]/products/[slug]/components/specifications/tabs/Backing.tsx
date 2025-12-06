import React from 'react'
import { PatternNode } from '@/graphql/generated/types'

const Backing = ({ product }: { product: PatternNode}) => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[80%]">
      {
        product.specsSheetData.backing.map((item: any, index: number) => (
          <div key={index}>
            <p className='text-sm text-(--gray-60) mb-1 font-medium uppercase'>{item.message}</p>
            <p className='text-(--gray-70)'>{item.value.title || item.value}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Backing