import { createContext } from "react";

interface TabsContextProps {
  currentTab: string;
  setCurrentTab: (val: any) => void;
}

const TabsContext = createContext<TabsContextProps | undefined>(undefined);

export default TabsContext;
