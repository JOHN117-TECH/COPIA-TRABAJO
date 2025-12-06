import { filtersReducer } from "./FilterReducer";
import { FiltersState, initialFiltersState } from "@/models/filters.model";

type Listener = () => void;

const listeners = new Set<Listener>();
let state: FiltersState = initialFiltersState;

function getState(): FiltersState {
  return state;
 }

function dispatch(action: Parameters<typeof filtersReducer>[1]) {
  state = filtersReducer(state, action) as FiltersState;
  listeners.forEach(listener => listener());
}

function subscribe(listener: Listener): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export const filterStore = {
  getState,
  dispatch,
  subscribe,
};

