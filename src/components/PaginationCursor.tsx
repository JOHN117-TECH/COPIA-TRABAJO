import { useTranslations } from "next-intl";
import { PageCursors, Maybe } from "@/graphql/patterns/allPaterns/queries/getAllPatterns.generated";

interface PaginationProps {
  totalItems: number;
  totalPages: number;
  itemsPerPage: number;
  paginationData: PageCursors | null;
  onPageChange: (val: Maybe<string> | undefined) => void;
}

const PaginationCursor = ({
  totalItems,
  itemsPerPage,
  onPageChange,
  paginationData
}: PaginationProps) => {
  const t = useTranslations("Pagination");
  const first = paginationData?.first
  const last = paginationData?.last
  const next = paginationData?.next
  const previous = paginationData?.previous
  const currentPage = paginationData?.around?.find(page => page?.isCurrent)
  const start = (itemsPerPage * ((currentPage?.page || 1) - 1) + 1);
  const end = itemsPerPage * (currentPage?.page || 1);

  return (
    <div className="mt-6 mb-2 flex flex-col md:flex-row md:items-center md:w-full md:justify-between md:flex-wrap lg:flex-nowrap">
      <div className="text-xs uppercase font-medium text-(--aqua-dark) whitespace-nowrap">
        {start}–{end} {t("of")} {totalItems}
      </div>
      <div className="hidden md:flex items-center space-x-1 text-(--spg-primary)">
        <button
          className="px-2 py-1 hover:bg-gray-100 disabled:opacity-50 flex items-center"
          onClick={() => onPageChange(first?.cursor)}
          disabled={first === null}
        >
          <i className="icon-firstpage text-xl" />
          <span className="ml-1 text-(--aqua-dark) text-base">{t("first")}</span>
        </button>
        <button
          className="px-2 py-1 text-base hover:bg-gray-100 disabled:opacity-50 flex items-center"
          onClick={() => onPageChange(previous?.cursor)}
          disabled={previous === null}
        >
          <i className="icon-chevron-left mr-1 text-(--aqua-dark) text-xl" />
          {t("previous")}
        </button>
        {paginationData?.around?.map((item, index) =>
          (
            <button
              key={"btn-" + index}
              className={`w-8 h-8 flex items-center justify-center border rounded-full text-base transition ${item?.isCurrent
                  ? "bg-(--aqua-10) text-(--aqua-dark)"
                  : "hover:bg-gray-100"
                }`}
              onClick={() => onPageChange(item?.cursor)}
            >
              {item?.page}
            </button>
          )
        )}
        <button
          className="px-2 py-1 text-base hover:bg-gray-100 disabled:opacity-50 flex items-center"
          onClick={() => onPageChange(next?.cursor)}
          disabled={next === null}
        >
          {t("next")} <i className="icon-chevron-right ml-1 text-(--aqua-dark) text-xl" />
        </button>
        <button
          className="px-2 py-1 hover:bg-gray-100 disabled:opacity-50 flex items-center"
          onClick={() => onPageChange(last?.cursor)}
          disabled={last === null}
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
              value={currentPage?.cursor || 1}
              disabled={last?.page ? last?.page <= 1 : false}
              onChange={(e) => onPageChange(e.target.value)}
              className="appearance-none bg-(--aqua-10) border border-(--black-100) rounded-full px-2 py-2 pr-8 text-center focus:outline-none mx-2"
            >
              {paginationData?.around?.map((page, idx) => (
                <option key={idx} value={page?.cursor ? page?.cursor : 1}>
                  {page?.page}
                </option>
              ))}
            </select>
            <i className="icon-chevron-down text-base text-(--aqua-dark) absolute top-[10px] right-[18px]" />
          </div>{" "}
          {t("of")} {last?.page}
        </span>
        <div className="flex">
          <button
            className="px-2 py-1 hover:bg-gray-100 disabled:opacity-50 flex items-center"
            onClick={() => onPageChange(first?.cursor)}
            disabled={first === null}
          >
            <i className="icon-firstpage text-xl" />
          </button>
          <button
            className="px-2 py-1 text-base hover:bg-gray-100 disabled:opacity-50 flex items-center"
            onClick={() => onPageChange(previous?.cursor)}
            disabled={previous === null}
          >
            <i className="icon-chevron-left mr-1 text-(--aqua-dark) text-xl" />
          </button>
          <button
            className="px-2 py-1 text-base hover:bg-gray-100 disabled:opacity-50 flex items-center"
            onClick={() => onPageChange(next?.cursor)}
            disabled={next === null}
          >
            <i className="icon-chevron-right ml-1 text-(--aqua-dark) text-xl" />
          </button>
          <button
            className="px-2 py-1 hover:bg-gray-100 disabled:opacity-50 flex items-center"
            onClick={() => onPageChange(last?.cursor)}
            disabled={last === null}
          >
            <i className="icon-lastpage text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaginationCursor;
