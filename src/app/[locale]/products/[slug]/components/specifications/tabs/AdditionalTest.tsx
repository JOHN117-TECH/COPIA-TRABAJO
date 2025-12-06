import React from 'react'
import { PatternNode } from '@/graphql/generated/types'

const AdditionalTest= ({ product }: { product: PatternNode}) => {

  return (
    <div className='space-y-6'>
      {
        product.specsSheetData.additional_tests.map((test: any, idx: number) => (
          <div className='space-y-2' key={idx}>
            <h5>{test.data[0]}</h5>
            <p className='text-sm text-(--gray-60) font-medium uppercase mb-1'>{test.data[1][0]}</p>
            <p className='text-(--gray-70) mb-0'>{test.data[1][1]}</p>
          </div>
        ))
      }
    </div>
  )
}

export default AdditionalTest