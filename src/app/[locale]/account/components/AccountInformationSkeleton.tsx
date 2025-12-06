import Skeleton from "react-loading-skeleton";

const AccountInformationSkeleton = () => {
  return (
    <div className="account-form-group flex flex-col w-full lg:w-3/4 m-auto gap-8">
      <div className="flex justify-between items-center w-full mb-2">
        <div className="w-32">
          <Skeleton height={24} />
        </div>
        <div className="w-20">
          <Skeleton height={32} />
        </div>
      </div>

      {/* Profile section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[...Array(3)].map((_, idx) => (
          <section key={`profile-${idx}`}>
            <Skeleton width={80} height={14} className="mb-1" />
            <Skeleton height={18} />
          </section>
        ))}
      </div>

      {/* Company Details */}
      <Skeleton width={150} height={24} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[...Array(3)].map((_, idx) => (
          <section key={`company-${idx}`}>
            <Skeleton width={80} height={14} className="mb-1" />
            <Skeleton height={18} />
          </section>
        ))}
      </div>

      {/* Location */}
      <Skeleton width={150} height={24} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[...Array(3)].map((_, idx) => (
          <section key={`location-${idx}`}>
            <Skeleton width={80} height={14} className="mb-1" />
            <Skeleton height={18} />
          </section>
        ))}
      </div>

      {/* Address */}
      <Skeleton width={150} height={24} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[...Array(2)].map((_, idx) => (
          <section key={`address-${idx}`}>
            <Skeleton width={80} height={14} className="mb-1" />
            <Skeleton height={18} />
          </section>
        ))}
      </div>
    </div>
  );
};

export default AccountInformationSkeleton;
