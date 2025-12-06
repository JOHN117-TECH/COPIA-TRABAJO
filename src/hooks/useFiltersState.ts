import { useReducer } from "react";
import { filtersReducer } from "./FilterReducer";
import { initialFiltersState } from "@/models/filters.model";

export const useFiltersState = () => {
  const [state, dispatch] = useReducer(filtersReducer, initialFiltersState);
  return { state, dispatch };
};
