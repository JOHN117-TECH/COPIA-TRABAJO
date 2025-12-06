import React from 'react'
import { PatternNode } from '@/graphql/generated/types'

const FlameRetardancy = ({ product }: { product: PatternNode}) => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[80%]">
      {
        product.specsSheetData.flame_retardancies.map((item: any, index: number) => (
          <div key={index}>
            <p className='text-sm text-(--gray-60) font-medium uppercase'>{item.test}</p>
            {item.result == 'Pass' && 
              <i className='icon-check text-(--secondary-green-30) border border-(--secondary-green-30) rounded-full p-[2px]'/>
            }
          </div>
        ))
      }
    </div>
  )
}

export default FlameRetardancy