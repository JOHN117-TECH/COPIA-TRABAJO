"use client";

import { createContext, PropsWithChildren } from "react";

interface ISelectBuilder extends PropsWithChildren {
  value: Set<string>;
  updateSelectValue: (val: string) => void;
  removeValue: (val: string) => void;
}

const SelectContext = createContext<ISelectBuilder | undefined>(undefined);

export default SelectContext;
