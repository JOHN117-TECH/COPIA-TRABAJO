import '../../rewriteBackground.css'
import ProductDetailPage from "./components/ProductDetailPage";
import { PageProps } from "../../../../../.next/types/app/[locale]/products/[slug]/page";

const ProductDetail = async ({ params }: PageProps) => {
  const paramSlug = await params
  const slug = decodeURIComponent(paramSlug.slug);

  return <ProductDetailPage slug={slug} />;
}

export default ProductDetail