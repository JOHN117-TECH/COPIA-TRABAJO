import React from 'react'
import Image from 'next/image'
import { PatternNode } from '@/graphql/generated/types'

const OtherAttributes= ({ product }: { product: PatternNode}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 h-[80%]">
      {
        product.specsSheetData.other_attributes.map((item: any, index: number) => (
          <div key={index}>
            <p className='text-sm text-(--gray-60) font-medium uppercase'>{item.message}</p>
            {item.value == 'Yes' && 
              <i className='icon-check text-(--secondary-green-30) border border-(--secondary-green-30) rounded-full p-[2px]'/>
            }
            {item.value.includes('http') && 
              <Image 
                src={item.value}
                width={100}
                height={100}
                alt={item.message}
              />
            }
            {
              item.value !== 'Yes' && !item.value.includes('http') &&
              <p className='text-(--gray-70)'>{item.value}</p>
            }
          </div>
        ))
      }
    </div>
  )
}

export default OtherAttributes