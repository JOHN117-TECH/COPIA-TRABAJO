import { filterStore } from "./filterStore";
import { useEffect, useMemo, useState } from "react";
import GetCurrentInstance from "./useGetCurrentInstance";
import { AdaptedOutput, DataAdapter, RawData } from "@/models/filters.model";
import { useFiltersQuery } from "@/graphql/patternsAndProducts/queries/getFilters.generated";
import { usePatternsQueryQuery } from "@/graphql/patterns/allPaterns/queries/getAllPatterns.generated";

export const useFilter = () => {
  const instanceId = GetCurrentInstance();
  const [state, setState] = useState(filterStore.getState());
  const toArray = (val: string[] | string | null): string[] | null =>
    val == null ? null : Array.isArray(val) ? val : [val];

  const normalize = (arr: any[], key: string): string[] | string | null => {
    if (!Array.isArray(arr) || arr.length === 0) return null;
    const values = arr.map(item => item?.[key]).filter(Boolean);
    if (values.length === 0) return null;
    return values.length === 1 ? values[0] : values;
  };

  const adapt = (data: DataAdapter): AdaptedOutput => ({
    sectorIds: toArray(normalize(data.sectorIds, 'sectorId')),
    predominantColor: data.predominantColor?.map(c => c.value).join(',') || null,
    composition: normalize(data.composition, 'value'),
    design: normalize(data.design, 'value'),
    brands: normalize(data.brands, 'id'),
    patterns: normalize(data.patterns, 'code'),
    search: data.search,
    after: data.after
  });

  const variables = {
    instanceIds: [instanceId],
    instanceID: instanceId,
    saleable: true,
    lang: "es",
  };

  const adaptedFilters = useMemo(() => adapt(state.selectedFilters as DataAdapter), [state.selectedFilters]);

  const { data: filtersData, loading: filtersLoading, error: filtersError } = useFiltersQuery({ variables });

  const { data: patterns, loading, error } = usePatternsQueryQuery({
    //@ts-ignore
    variables: {
      ...adaptedFilters,
      first: 12,
      orderBy: "new_first",
      instanceIds: [instanceId],
      saleable: true,
    },
  });
  
  useEffect(() => {
    if (patterns) {
      const products = patterns.patterns?.edges || [];
      const total = patterns.patterns?.totalCount || 0;
      const pagination = patterns.patterns?.pageCursors || {};
      filterStore.dispatch({ type: "SET_PRODUCTS", payload: { products, total } });
      filterStore.dispatch({ type: "SET_PAGINATION", payload: { pagination } });
    }
  },[patterns])

  useEffect(() => {
    if (filtersData) {
      const simplified = flatten(filtersData?.filters);
      const pagination = patterns?.patterns?.pageCursors || {};
      const marketTypes = filtersData?.markets?.edges.map((m: any) => ({
        ...m.node,
        isSelected: false,
      }));
      const filters = { ...simplified, marketTypes }
  
      filterStore.dispatch({
        type: "SET_INITIAL_DATA",
        payload: { filters },
      });
      filterStore.dispatch({ type: "SET_PAGINATION", payload: { pagination } });

  
      const unsubscribe = filterStore.subscribe(() => {
        setState(filterStore.getState());
      });
      return unsubscribe;
    }
  }, [filtersData]);

  const flatten = (data: RawData) => ({
    sectorsIds: data.sectors ?? [],
    colors: data.colors ?? [],
    compositions: data.compositions ?? [],
    design: data.design ?? [],
    brands: data.brands ?? [],
    patterns: data.patterns ?? [],
  });

  const toggleColor = (color: { title: string, value: string}) => {
    filterStore.dispatch({ type: "TOGGLE_COLOR", payload: color });
  };

  const toggleDesign = (design: string) => {
    filterStore.dispatch({ type: "TOGGLE_DESIGN", payload: design });
  };

  const toggleComposition = (composition: string) => {
    filterStore.dispatch({ type: "TOGGLE_COMPOSITION", payload: composition });
  };

  const searchProducts = (design: string) => {
    filterStore.dispatch({ type: "SET_SEARCH", payload: design });
  };

  const changePageProducts = (page: string) => {
    filterStore.dispatch({ type: "SET_PAGE", payload: page });
  };

  const toggleMarkets = (isFather: boolean, market?: any, sector?: any) => {
    let sectorObjects: {
      marketId: string;
      marketName: string;
      sectorId: string;
      sectorName: string;
      title: string;
    }[] = [];

    if (isFather && market) {
      sectorObjects = market.sectors?.edges.map((edge: { node: { id: string; name: string } }) => ({
        marketId: market.id,
        marketName: market.name,
        sectorId: edge.node.id,
        sectorName: edge.node.name,
        title: `${market.name}/${edge.node.name}`,
      })) || [];
    } else if (sector && market) {
      sectorObjects = [{
        marketId: market.id,
        marketName: market.name,
        sectorId: sector.id,
        sectorName: sector.name,
        title: `${market.name}/${sector.name}`,
      }];
    }
    filterStore.dispatch({
      type: "TOGGLE_SECTOR",
      payload: {
        market,
        sectorObjects,
        isFather,
      },
    });
  };

  const resetFilters = () => {
    filterStore.dispatch({ type: "RESET_FILTERS" });
  }

  
  return {
    state,
    toggleColor,
    toggleDesign,
    resetFilters,
    toggleMarkets,
    searchProducts,
    toggleComposition,
    filtersLoading,
    changePageProducts
  };

};
