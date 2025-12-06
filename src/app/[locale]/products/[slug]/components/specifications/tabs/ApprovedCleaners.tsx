import React from 'react'
import { PatternNode } from '@/graphql/generated/types'

const ApprovedCleaners = ({ product }: { product: PatternNode}) => {

  return (
    <div className="p-4 pl-0 rounded-lg">
      {
        product.specsSheetData.approved_cleaners[0].value.map((item: any, index: number) => (
          <div key={index} className='grid grid-cols-1 md:grid-cols-12'>
            <span className='border border-(--gray-30) md:col-span-9 py-3 px-2 flex items-center'>
              <p className='text-base mb-0 text-(--gray-70)'>{item.cleaner}</p>
            </span>
            <span className='border border-(--gray-30) bg-(--gray-20) md:col-span-3 py-3 px-2 flex items-center'>
              <p className='text-base mb-0 text-(--gray-70)'>{item.cleaners_manufacturer}</p>
            </span>
          </div>
        ))
      }
    </div>
  )
}

export default ApprovedCleaners