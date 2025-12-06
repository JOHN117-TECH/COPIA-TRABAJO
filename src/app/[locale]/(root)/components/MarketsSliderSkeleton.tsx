import React from 'react'
import Skeleton from 'react-loading-skeleton';

const MarketsSliderSkeleton = ({ slidesToShow }: { slidesToShow: number }) => {
  const SkeletonCard = () => {
    return (
      <div className="flex flex-col bg-white rounded-lg p-6 w-full md:w-[300px]">
        <div className="w-full mb-4">
          <Skeleton height={120} width={"100%"}/>
        </div>
        <Skeleton height={24} width="80%" className="mb-2" />
        <Skeleton count={2} height={16} width="90%" className="mb-2" />
        <Skeleton height={36} width={120} className="mt-auto" />
      </div>
    );
  };
  return (
    <section className="flex overflow-x-auto gap-4 md:justify-center px-4 w-full">
      {Array.from({ length: slidesToShow }).map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </section>
  )
}

export default MarketsSliderSkeleton