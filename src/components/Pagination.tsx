import { useTranslations } from "next-intl";
import { useMemo } from "react";

interface PaginationProps {
  currentPage: number;
  totalPages?: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (val: number) => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  totalItems,
  itemsPerPage,
  onPageChange,
}: PaginationProps) => {
  const t = useTranslations("Pagination");
  const computedTotalPages = totalPages ?? Math.ceil(totalItems / itemsPerPage);
  const safeCurrentPage = Math.min(currentPage, computedTotalPages);

  const pageNumbers = useMemo(() => {
    const pages: (number | string)[] = [];

    if (computedTotalPages <= 7) {
      for (let i = 1; i <= computedTotalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      if (safeCurrentPage > 4) pages.push("...");
      const start = Math.max(2, safeCurrentPage - 1);
      const end = Math.min(computedTotalPages - 1, safeCurrentPage + 1);
      for (let i = start; i <= end; i++) pages.push(i);
      if (safeCurrentPage < computedTotalPages - 3) pages.push("...");
      pages.push(computedTotalPages);
    }

    return pages;
  }, [safeCurrentPage, computedTotalPages]);

  const start = (safeCurrentPage - 1) * itemsPerPage + 1;
  const end = Math.min(safeCurrentPage * itemsPerPage, totalItems);


  return (
    <div className="mt-6 mb-2 flex flex-col md:flex-row md:items-center md:justify-between md:flex-wrap lg:flex-nowrap">
      <div className="text-xs uppercase font-medium text-(--aqua-dark) whitespace-nowrap">
        {start}–{end} {t("of")} {totalItems}
      </div>
      <div className="hidden md:flex items-center space-x-1 text-(--spg-primary)">
        <button
          className="px-2 py-1 hover:bg-gray-100 disabled:opacity-50 flex items-center"
          onClick={() => onPageChange(1)}
          disabled={safeCurrentPage === 1 || computedTotalPages <= 1}
        >
          <i className="icon-firstpage text-xl" />
          <span className="ml-1 text-(--aqua-dark) text-base">{t("first")}</span>
        </button>
        <button
          className="px-2 py-1 text-base hover:bg-gray-100 disabled:opacity-50 flex items-center"
          onClick={() => onPageChange(safeCurrentPage - 1)}
          disabled={safeCurrentPage === 1 || computedTotalPages <= 1}
        >
          <i className="icon-chevron-left mr-1 text-(--aqua-dark) text-xl" />
          {t("previous")}
        </button>
        {pageNumbers.map((item, index) =>
          item === "..." ? (
            <span key={index} className="px-2">...</span>
          ) : (
            <button
              key={"btn-" + index}
              className={`w-8 h-8 flex items-center justify-center border rounded-full text-base transition ${safeCurrentPage === item
                  ? "bg-(--aqua-10) text-(--aqua-dark)"
                  : "hover:bg-gray-100"
                }`}
              onClick={() => onPageChange(Number(item))}
              disabled={computedTotalPages <= 1}
            >
              {item}
            </button>
          )
        )}
        <button
          className="px-2 py-1 text-base hover:bg-gray-100 disabled:opacity-50 flex items-center"
          onClick={() => onPageChange(safeCurrentPage + 1)}
          disabled={safeCurrentPage === computedTotalPages || computedTotalPages <= 1}
        >
          {t("next")} <i className="icon-chevron-right ml-1 text-(--aqua-dark) text-xl" />
        </button>
        <button
          className="px-2 py-1 hover:bg-gray-100 disabled:opacity-50 flex items-center"
          onClick={() => onPageChange(computedTotalPages)}
          disabled={safeCurrentPage === computedTotalPages || computedTotalPages <= 1}
        >
          <span className="text-(--aqua-dark) text-base hidden md:block mr-1">{t("last")}</span>
          <i className="icon-lastpage text-xl" />
        </button>
      </div>

      <div className="flex md:hidden items-center justify-between space-x-2 text-(--spg-primary) mt-1">
        <span className="text-sm font-medium text-(--aqua-dark)">
          {t("page")}{" "}
          <div className="relative inline-block">
            <select
              value={safeCurrentPage}
              disabled={computedTotalPages <= 1}
              onChange={(e) => onPageChange(Number(e.target.value))}
              className="appearance-none bg-(--aqua-10) border border-(--black-100) rounded-full px-2 py-2 pr-8 text-center focus:outline-none mx-2"
            >
              {Array.from({ length: computedTotalPages }, (_, i) => i + 1).map((page) => (
                <option key={page} value={page}>
                  {page}
                </option>
              ))}
            </select>
            <i className="icon-chevron-down text-base text-(--aqua-dark) absolute top-[10px] right-[18px]" />
          </div>{" "}
          {t("of")} {computedTotalPages}
        </span>
        <div className="flex">
          <button
            className="px-2 py-1 hover:bg-gray-100 disabled:opacity-50 flex items-center"
            onClick={() => onPageChange(1)}
            disabled={safeCurrentPage === 1 || computedTotalPages <= 1}
          >
            <i className="icon-firstpage text-xl" />
          </button>
          <button
            className="px-2 py-1 text-base hover:bg-gray-100 disabled:opacity-50 flex items-center"
            onClick={() => onPageChange(safeCurrentPage - 1)}
            disabled={safeCurrentPage === 1 || computedTotalPages <= 1}
          >
            <i className="icon-chevron-left mr-1 text-(--aqua-dark) text-xl" />
          </button>
          <button
            className="px-2 py-1 text-base hover:bg-gray-100 disabled:opacity-50 flex items-center"
            onClick={() => onPageChange(safeCurrentPage + 1)}
            disabled={safeCurrentPage === computedTotalPages || computedTotalPages <= 1}
          >
            <i className="icon-chevron-right ml-1 text-(--aqua-dark) text-xl" />
          </button>
          <button
            className="px-2 py-1 hover:bg-gray-100 disabled:opacity-50 flex items-center"
            onClick={() => onPageChange(computedTotalPages)}
            disabled={safeCurrentPage === computedTotalPages || computedTotalPages <= 1}
          >
            <i className="icon-lastpage text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
