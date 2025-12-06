import clsx from "clsx";
import useMediaQuery from "@/hooks/useMediaQuery";
import ButtonsModal from "./ButtonsModal.productDetail";
import ColorsProduct from "./ColorsProduct.productDetail";
import MarketsProduct from "./MarketsProduct.productDetail";
import { DetailSectionProps } from "@/models/products.model";
import AttributesProduct from "./AttributesProduct.productDetail";

/**
 * DetailSection component
 * @param {DetailSectionProps} props - Component props
 * @param {Product} props.product - Product object
 * @param {string | null} props.selectedColor - Selected color
 * @param {(color: string | null) => void} props.setSelectedColor - Function to set selected color
 * @param {(image: string) => void} props.setCurrentImage - Function to set current image
 * @returns {React.ReactElement} - DetailSection component
 */
const DetailSection: React.FC<DetailSectionProps> = ({
  product,
  selectedColor,
  setSelectedColor,
  setCurrentImage,
  setSelectedIndexImage,
}) => {
  const isMobile = useMediaQuery("(max-width: 760px)");

  return (
    <section className="w-full p-3 md:p-5 flex flex-col justify-between md:max-h-[90vh] md:col-span-5 pb-0">
      <div>
        {/* TODO: Agregar colección, cuando aplique */}
        {/* {
          product.products.edges.length > 0 && (
          <p className="text-(--aqua-medium) font-semibold text-xs mb-2 tracking-[1px] uppercase">{product.altName}</p>
        )} */}
        <h3 className="text-(--gray-100) font-medium">
          {product.altName}
        </h3>
        <div className="flex flex-wrap gap-x-1 md:gap-x-2">
          {
            product.sectors.edges.slice(0,2).map((element: any, index: number) => 
              <p key={index} className="text-(--gray-70)">{element.node.name}</p>
            )
          }
        </div>
        <div 
          className={clsx(
            isMobile && "max-h-[18vh] overflow-y-scroll"
          )}
        >
          {product.products && product.products.edges.length > 0 && (
            <ColorsProduct
              product={product}
              selectedColor={selectedColor}
              setSelectedColor={setSelectedColor}
              setCurrentImage={setCurrentImage}
              setSelectedIndexImage={setSelectedIndexImage}
            />
          )}
          <div className={clsx(
              !isMobile && "max-h-[27vh] overflow-y-auto overflow-x-hidden"
            )}
          >
            {product.sectors.edges.length > 0 && (
              <MarketsProduct sectors={product.sectors.edges} />
            )}

            {product.specsSheetData.other_attributes.length > 0 && (
              <AttributesProduct attributes={product.specsSheetData.other_attributes} />
            )}
          </div>
        </div>
      </div>

      <ButtonsModal product={product} selectedColor={selectedColor} />
    </section>
  );
};

export default DetailSection;
