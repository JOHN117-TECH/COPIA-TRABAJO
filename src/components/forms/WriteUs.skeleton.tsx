import React from 'react'
import Skeleton from 'react-loading-skeleton'

const WriteUsSkeleton = () => {
  return (
    <section className="w-full px-8 py-10 flex flex-col lg:flex-row gap-10 bg-white">
      <div className="flex-1 flex flex-col gap-6">
        <Skeleton height={32} width="60%" className="rounded" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex flex-col gap-2">
              <Skeleton width="40%" height={16} />
              <Skeleton height={40} className="rounded-md" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WriteUsSkeleton