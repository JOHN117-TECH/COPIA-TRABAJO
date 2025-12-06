import Skeleton from "react-loading-skeleton";

const PostCardSkeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(3)].map((_, i) => (
        <div className="rounded-xl overflow-hidden shadow-md bg-white" key={i}>
          <div className="relative h-48 w-full">
            <Skeleton height="100%" width="100%" />

            <div className="absolute top-2 right-2">
              <Skeleton height={24} width={60} borderRadius={12} />
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <Skeleton circle height={40} width={40} />
            </div>
          </div>

          <div className="p-4 space-y-2">
            <Skeleton height={16} width="80%" /> 
            <Skeleton count={3} height={12} /> 
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostCardSkeleton;
