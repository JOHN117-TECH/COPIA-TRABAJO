import React from 'react'
import Skeleton from 'react-loading-skeleton';

const NewsListSkeleton = () => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='bg-white rounded-lg shadow grid grid-cols-1 md:grid-cols-2 items-center'>
        <section className='p-10 py-16 space-y-6'>
          <Skeleton height={24} width={`80%`} />
          <Skeleton count={3} />
          <Skeleton height={1} />
          <div className='flex justify-between'>
            <Skeleton width={100} height={24} />
            <Skeleton width={80} height={24} />
          </div>
          <Skeleton width={120} height={30} />
        </section>
        <Skeleton height={250} />
      </div>

      <section className='grid grid-cols-1 md:grid-cols-3 gap-4 gap-y-8'>
        {Array(6).fill(0).map((_, i) => (
          <div key={i} className='bg-white rounded-lg shadow'>
            <Skeleton height={200} />
            <section className='p-6 space-y-4'>
              <Skeleton height={20} width={`70%`} />
              <Skeleton count={2} />
              <Skeleton height={1} />
              <div className='flex justify-between'>
                <Skeleton width={80} height={24} />
                <Skeleton width={60} height={24} />
              </div>
              <Skeleton width={100} height={30} />
            </section>
          </div>
        ))}
      </section>
    </div>
  );
}

export default NewsListSkeleton