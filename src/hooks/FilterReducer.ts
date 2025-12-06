import { Action, FiltersResult, SectorObject } from "@/models/filters.model";

function toggleArray<T>(current: T[] | T | undefined, value: T): T[] {
  const arr = Array.isArray(current)
    ? current
    : typeof current === 'undefined'
      ? []
      : [current];

  const exists = arr.includes(value);
  if (exists) {
    return arr.filter(item => item !== value);
  } else {
    return [...arr, value];
  }
}

export function filtersReducer(state: FiltersResult, action: Action): FiltersResult {
  const isSameSector = (a: { sectorId: string }, b: { sectorId: string }) =>
    a.sectorId === b.sectorId;

  function isProductsPayload(payload: any): payload is { products: any[]; total: number } {
    return 'products' in payload && 'total' in payload;
  }

  function isInitialDataPayload(payload: any): payload is { filters: any } {
    return 'filters' in payload;
  }

  switch (action.type) {
    // -------------------------------------
    //  TOGGLE_COLOR
    // -------------------------------------
    case "TOGGLE_COLOR":
      return {
        ...state,
        selectedFilters: {
          ...(state.selectedFilters || {}),
          //@ts-ignore
          predominantColor: toggleArray(state.selectedFilters?.predominantColor, action.payload),
        }
      }

    // -------------------------------------
    //  TOGGLE_DESIGN
    // -------------------------------------
    case "TOGGLE_DESIGN":
      return {
        ...state,
        selectedFilters: {
          ...(state.selectedFilters ?? {}),
          design: toggleArray(state.selectedFilters?.design, action.payload)
        }
      };

    // -------------------------------------
    //  TOGGLE_COMPOSITION
    // -------------------------------------
    case "TOGGLE_COMPOSITION":
      return {
        ...state,
        selectedFilters: {
          ...(state.selectedFilters ?? {}),
          composition: toggleArray(state.selectedFilters?.composition, action.payload)
        }
      };

    // -------------------------------------
    //  TOGGLE_SECTOR
    // -------------------------------------
    case "TOGGLE_SECTOR": {
      const { sectorObjects, isFather } = action.payload as { market?: any; sectorObjects: any; isFather: boolean; };
      const current = state.selectedFilters?.sectorIds ?? [];
      
      let updated;
      
        if (isFather) {
          const allSelected = sectorObjects.every((obj: SectorObject)  =>
          //@ts-ignore
          current.some(curr => isSameSector(curr, obj))
        );
        
        updated = allSelected
        //@ts-ignore
        ? current.filter(curr => !sectorObjects.some(obj => isSameSector(curr, obj)))
        : Array.from(
          new Map([...current, ...sectorObjects].map(obj => [obj.sectorId, obj])).values()
        );
      } else {
        //@ts-ignore
        const exists = current.some(curr => isSameSector(curr, sectorObjects[0]));
        updated = exists
          //@ts-ignore
          ? current.filter(curr => !isSameSector(curr, sectorObjects[0]))
          : [...current, sectorObjects[0]];
      }

      return {
        ...state,
        selectedFilters: {
          ...(state.selectedFilters || {}),
          sectorIds: updated,
        },
      };
    }

    // -------------------------------------
    //  SET_SEARCH
    // -------------------------------------
    case "SET_SEARCH":
      return {
        ...state,
        selectedFilters: {
          ...(state.selectedFilters ?? {}),
          search: action.payload
        }
      };

    // -------------------------------------
    //  RESET_FILTERS
    // -------------------------------------
    case "RESET_FILTERS":
      return {
        ...state,
        selectedFilters: {}
      };

    // -------------------------------------
    //  SET_PAGE
    // -------------------------------------
    case "SET_PAGE":
      return {
        ...state,
        selectedFilters: {
          ...(state.selectedFilters ?? {}),
          after: action.payload
        }
      };

    // -------------------------------------
    //  SET_PRODUCTS
    // -------------------------------------
    case "SET_PRODUCTS":
      if (!isProductsPayload(action.payload)) return state;
      return {
        ...state,
        products: action.payload.products,
        totalProducts: action.payload.total
      };

    // -------------------------------------
    //  SET_PAGINATION
    // -------------------------------------
    case "SET_PAGINATION":
      return {
        ...state,
        pagination: action.payload.pagination
      };

    // -------------------------------------
    //  SET_INITIAL_DATA
    // -------------------------------------
    case "SET_INITIAL_DATA":
      if (!isInitialDataPayload(action.payload)) return state;
      return {
        ...state,
        filters: action.payload.filters ?? {},
        selectedFilters: state.selectedFilters ?? {}
      };

    // -------------------------------------
    //  DEFAULT
    // -------------------------------------
    default:
      return state;
  }
}
