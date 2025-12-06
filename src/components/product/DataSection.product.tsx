import { FC } from "react";
import { DataSectionProps } from "@/models/products.model";

const DataSection: FC<DataSectionProps> = ({ item, isReference = false }) => {
  return (
    <section className="px-4 pt-4 pb-0 flex flex-col text-left">
      {item.collection && <p className="text-xs">{item.collection}</p>}
      <h5 className="font-600 overflow-hidden whitespace-nowrap text-ellipsis text-(--gray-100)">{item.altName}</h5>
      {isReference && item.products.edges.length > 1 ? (
        <p className="font-normal py-1 truncate text-(--gray-60) text-sm my-1">{`${item.products.totalCount} colors`}</p>
      ) : (
        item.products.edges.length > 0 && (
          <div className="flex items-center">
            <p className="font-normal py-1 truncate text-(--gray-60) text-sm my-1">{item.products.edges[0].node.color}</p>
            <span className="border-l border-(--gray-50) h-4 mx-2"></span>
            <p className="font-normal py-1 truncate text-(--gray-60) text-sm my-1">{item.products.edges[0].node.code}</p>
          </div>
        )
      )}
      {
        item.sectors.edges[0] && 
        <p className="my-1 text-(--gray-70) truncate text-base">{item.sectors.edges[0].node.name}</p>
      }
    </section>
  );
};

export default DataSection;
