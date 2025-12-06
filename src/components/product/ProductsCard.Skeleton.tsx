import Skeleton from 'react-loading-skeleton';

const ProductsCardSkeleton = () => {
  return (
    <div className="flex flex-col rounded-lg p-[5px] bg-white">
      <Skeleton height={160} borderRadius={8} className="mb-2" />
      <Skeleton height={16} width="75%" className="mb-1" />
      <Skeleton height={16} width="50%" className="mb-1" />
      <Skeleton height={32} borderRadius={6} className="mt-2" />
    </div>
  );
};

export default ProductsCardSkeleton;
