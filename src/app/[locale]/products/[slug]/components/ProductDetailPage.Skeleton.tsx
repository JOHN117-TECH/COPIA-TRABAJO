import Skeleton from "react-loading-skeleton";

const ProductDetailPageSkeleton = () => {
  return (
    <div className="flex flex-col gap-8 px-4 md:px-8">
      <Skeleton width={200} height={20} className="hidden md:block" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-4">
          <Skeleton height={30} width="60%" />
          <Skeleton count={5} height={16} />
          <Skeleton height={40} width="50%" />
        </div>
        <div>
          <Skeleton className="h-[350px] w-full" />
          <div className="mt-4 grid grid-cols-4 gap-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} height={60} />
            ))}
          </div>
        </div>
      </div>

      <div className="hidden md:grid grid-cols-5">
        <div className="col-span-2 px-16 py-8 flex flex-col gap-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} height={32} />
          ))}
        </div>
        <div className="col-span-3 p-16">
          <Skeleton count={6} height={20} />
        </div>
      </div>

      <div>
        <Skeleton width={200} height={24} />
        <Skeleton height={240} className="w-full" />
      </div>
    </div>
  );
};

export default ProductDetailPageSkeleton;
