import { PageCursors } from "@/graphql/patterns/allPaterns/queries/getAllPatterns.generated";

export type PropsFilters = "marketTypes" | "design" | "colors" | "composition" | "application" | "sustainability" | "flammability" | "approvedCleaners" | "additionalFeatures" | "collections" | "markets" | "search";

export type FilterItemObject =
  | { colors: FilterItem[] }
  | { design: FilterItem[] }
  | { marketTypes: any[] }
  | { composition: FilterItem[] }
  | { application: any[] }
  | { sustainability: FilterItem[] }
  | { flammability: FilterItem[] }
  | { approvedCleaners: FilterItem[] }
  | { additionalFeatures: FilterItem[] }
  | { collections: any[] };

export type Action =
  | { type: 'TOGGLE_COLOR'; payload: { title: string, value: string } }
  | { type: 'TOGGLE_DESIGN'; payload: string }
  | { type: 'TOGGLE_COMPOSITION'; payload: string }
  | { type: 'SET_SEARCH'; payload: string }
  | { type: 'RESET_FILTERS' }
  | { type: 'TOGGLE_SECTOR'; payload: { market?: any; sectorObjects: any, isFather: boolean } }  
  | { type: "SET_PRODUCTS"; payload: { products: any[], total: number } }
  | { type: "SET_INITIAL_DATA"; payload: Partial<FiltersState> }
  | { type: "SET_PAGE"; payload: string }
  | { type: "SET_PAGINATION"; payload: { pagination: PageCursors | null } };

type PaginationData = {
  cursor: string;
  isCurrent: boolean;
  page: number
}

export type RawData = {
  sectors?: { id: string }[];
  colors?: { name: string }[];
  compositions?: { name: string }[];
  design?: { name: string }[];
  search?: string;
  afterCursor?: string;
  brands?: { id: string }[];
  patterns?: { code: string }[];
};

export type DataAdapter = {
  sectorIds: { id: string }[];
  predominantColor: { value: string }[];
  composition: { name: string }[];
  design: { name: string }[];
  search?: string;
  afterCursor?: string;
  brands: { id: string }[];
  patterns: { code: string }[];
  after: string;
};

export type AdaptedOutput = {
  sectorIds: string[] | null;
  predominantColor: string | null;
  composition: string | string[] | null;
  design: string | string[] | null;
  brands: string | string[] | null;
  patterns?: string | string[] | null;
  search?: string;
  after: string;
};

export interface FilterItem {
  value: string;
  title: string;
  isSelected?: boolean;
}

export interface ProductDetail {
  src: string;
  images: string[];
  title: string;
  markets: string[];
  products: any[];
  [key: string]: any;
}

export interface ProductDetailModalProps {
  slug: string;
}

export interface DropdownMarketTypesProps {
  filterItems: FilterItem[] | [];
}

export interface DropdownSimpleProps {
  filterItems: FilterItem[] | [];
  filterKey: "design" | "composition" | "colors";
  index: number
}

export interface DropdownFiltersModalProps {
  filters: FilterItemObject[];
}

export interface DropdownColorsProps {
  filterItems: FilterItem[] | [];
  filterKey:  "marketTypes" | "textures" | "colors" | "composition";
  index: number
}

export interface MarketType {
  [key: string]: {
    id: string;
    slug?: string;
    name: string;
    description?: string;
    imageThumbMedium?: string;
    isSelected?: boolean;
    sectors: {
      edges?: [
        {node: {
          id: string;
          name: string;
          slug: string;
          isSelected?: boolean;
          patternSet: {
            totalCount: number;
          };
        }}
      ];
    };
  };
};

export interface Node {
  id: string;
  value: string;
  name: string;
  isSelected: boolean;
  patternSet: { totalCount: number };
}

export interface DropdownCheckProps {
  name: string;
  item: { node: MarketType };
  children: { node: Node }[];
}

export interface FiltersState {
  filters: Record<string, any>;
  selectedFilters: Record<string, any>;
  nextPage: string[];
  products: any[];
  totalProducts: number;
  pagination: PageCursors | null;
}

export interface SectorObject {
  sectorId: string;
}

export interface FiltersResult {
  selectedFilters: {
    predominantColor?: string | string[];
    design?: string | string[];
    composition?: string | string[];
    sectorIds?: string | string[];
    search?: string;
    after?: string;
  };
  filters?: Record<string, any>;
  nextPage?: string[];
  products?: any[];
  totalProducts?: number;
  pagination: PageCursors | null;
}

export const initialFiltersState: FiltersState = {
  filters: {},
  selectedFilters: {},
  nextPage: [],
  products: [],
  totalProducts: 0,
  pagination: {
    next: {
      cursor: "",
      isCurrent: false,
      page: 0
    },
    around: [{
      cursor: "",
      isCurrent: false,
      page: 0
    }],
    last: {
      cursor: "",
      isCurrent: false,
      page: 0
    },
    first: {
      cursor: "",
      isCurrent: false,
      page: 0
    },
    previous: {
      cursor: "",
      isCurrent: false,
      page: 0
    }

  }
};

export interface DropdownFiltersProps {
  marketTypes: any;
  title: string;
}

export interface FiltersButtonsProps {
  showOptionsColors: boolean;
  setShowOptionsColors: (boolean: boolean) => void;
}