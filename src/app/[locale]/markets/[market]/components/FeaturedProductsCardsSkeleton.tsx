import React from 'react'
import Skeleton from 'react-loading-skeleton'

const FeaturedProductsCardsSkeleton = () => {
  return (
    <section className="overflow-x-auto flex flex-nowrap gap-4 mt-8 pb-2 px-4">
      {[1, 2, 3].map((_, idx) => (
        <div
          key={idx}
          className={"min-w-[65vw] md:min-w-[280px] lg:min-w-[300px] h-[350px] p-4 rounded-lg shadow-sm border border-gray-200 shrink-0 bg-white"}
        >
          <Skeleton height={180} className="mb-4 rounded-md" />
          <Skeleton height={20} width="80%" className="mb-2" />
          <Skeleton height={16} width="60%" className="mb-1" />
          <Skeleton height={16} width="50%" className="mb-4" />
          <Skeleton height={30} width="40%" />
        </div>
      ))}
    </section>
  )
}

export default FeaturedProductsCardsSkeleton