import { PatternNode, SectorNodeEdge } from "@/graphql/generated/types";
import { Maybe } from "@graphql-tools/utils";
import { FC, ReactElement, ReactNode } from "react";

export interface ProductAttributes {
  waterRepellent?: boolean;
  waterResistance?: boolean;
  easyToClean?: boolean;
}

export interface Product {
  collection?: string;
  title: string;
  colors?: string[];
  code?: string;
  markets: string[];
  products: {
    edges: any[];
  };
  attributes?: ProductAttributes;
}

export interface ColorSelectedProps {
  product: PatternNode; 
  selectedColor: string; 
}

export interface ButtonsModalProps {
  product: PatternNode; 
  selectedColor: string | null;
}

export interface MarketsProductsProps {
  sectors: Maybe<SectorNodeEdge>[];
}

export interface Markets {
  node: {
    name: string;
    id: string;
    market: Market;
  };
}

export interface Market {
  name: string;
  id: string;
}

export interface AttributesProductsProps {
  attributes: Attributes[];
}

export interface Attributes {
  message: string;
  value: string;
}

export interface DetailSectionProps {
  product: PatternNode;
  selectedColor: string | null;
  setSelectedColor: (color: string | null) => void;
  setCurrentImage: (image: string) => void;
  setSelectedIndexImage: (index: number) => void;
}

export interface ColorsProductProps {
  product: PatternNode;
  selectedColor: string | null;
  setSelectedColor: (color: string | null) => void;
  setCurrentImage: (image: string) => void;
  setSelectedIndexImage: (index: number) => void;
}

export interface VisibleColorsProps {
  visibleColors: any[] | undefined;
  selectedColor: string | null;
  setCurrentImage: (image: string) => void;
  setSelectedIndexImage: (index: number) => void;
  setSelectedColor: (color: string | null) => void;
}

export interface Props {
  isSelectable: boolean;
}

export interface ProductsRenderProps {
  isSelectable: boolean;
}

export interface ButtonSectionProps {
  text: string;
  product: any;
}

export interface ColorSectionProps {
  colors: { node: { imageThumbSmall: string } }[];
}

export interface Color {
  node: {
    imageThumbSmall: string;
    color: string;
    code: string;
  };
}

export interface DataSectionItem {
  collection?: string;
  altName: string;
  colors?: string[];
  color?: string;
  code?: string;
  [key: string]: any;
}

export interface DataSectionProps {
  item: DataSectionItem;
  isReference?: boolean;
}

export interface ColorUnselectedProps {
  product: PatternNode;
  title?: string;
}

export interface ImageSectionItem {
  src: string;
  isNew?: boolean;
  newColor?: boolean;
  selected?: boolean;
  title: string;
  markets: string[];
  products: {
    edges: any[];
  };
  images: string[];
  [key: string]: any;
}

export interface ImageSectionProps {
  item: ImageSectionItem;
  isSelectable?: boolean;
  isRemovable?: boolean;
}

export interface ProductsCardItem {
  selected?: boolean;
  src: string;
  title: string;
  markets: string[];
  images: string[];
  [key: string]: any;
}

export interface ProductsCardProps {
  children: ReactNode;
  item: ProductsCardItem;
  isReference?: boolean;
  isSelectable?: boolean;
  isRemovable?:boolean;
}

export interface ProductsCardButtonProps {
  [key: string]: any;
}

export interface ProductsCardChildProps {
  item: ProductsCardItem;
  isSelectable?: boolean;
}

export type ProductsCardChild = ReactElement<ProductsCardChildProps>;

export interface ProductsCardComponent extends FC<ProductsCardProps> {
  Button: FC<ProductsCardButtonProps>;
}

export interface TagSectionItem {
  isNew?: boolean;
  newColor?: boolean;
  [key: string]: any;
}

export interface TagSectionProps {
  item: TagSectionItem;
  className?: string;
}

export interface PatternVariables {
  id?: string; 
  slug: string; 
  unitSystem?: number; 
  instanceIds: string[];
  hasInstance?: boolean
  instanceId?: string
}
export interface PatternPdfResponse {
  pattern: {
    pdfUrl: string
  };
}

export interface PatternResponse {
  pattern: Pattern;
}

export interface Pattern {
  id: string;
  altName: string;
  isNew: boolean;
  name: string;
  zippedImagesUrl?: string;
  maintenanceGuide?: string;
  approvedCleanersPdfUrl?: string;
  otherattributes: {
    certificateDomain: string
  }
  manufacturingCertifications: ManufacturingCertifications[]
  relatedPatterns?: {
    edges: any[]
  }
  products: {
    edges: any[];
  };
  sectors: {
    edges: any[];
  };
  specsSheetData: {
    general: any[];
    other_attributes: any[];
  }
}

export interface ManufacturingCertifications {
  id: string 
  isSustainable: boolean 
  logo: string 
  name: string
}

export interface NewProductsResponse {
  id: string;
  code: string;
  color: string;
  isNew: boolean;
  name: string;
  zippedImagesUrl: string;
  maintenanceGuide?: string;
  approvedCleanersPdfUrl?: string;
  products: {
    edges: any[];
  };
  sectors: {
    edges: any[];
  };
  specsSheetData: {
    general: any[];
    other_attributes: any[];
  }
}

export interface SpecificationsProps {
  selectedSpecification: number;
  setSelectedSpecification: (key: number) => void;
  specifications: any  
}

export interface ProductMainDetailsProps {
  product: any;
  selectedIndexImage: number;
  currentImage: string;
  setCurrentImage: (key: string) => void;
  setSelectedIndexImage: (key: number) => void;
  filesData: any;
}
