"use client";

import { createContext } from "react";

interface ISelectLocationBuilder {
  countryId?: number;
  setCountryId: (value: number) => void;
  stateId?: number;
  setStateId: (value: number) => void;
}

const SelectLocationContext = createContext<ISelectLocationBuilder | undefined>(
  undefined,
);

export default SelectLocationContext;
