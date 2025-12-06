import { createContext, PropsWithChildren } from "react";

interface IDropdownBuilder extends PropsWithChildren {
  visible: boolean;
  toggle: () => void;
  open: () => void;
  close: () => void;
  isPopup: boolean;
}

const DropdownContext = createContext<IDropdownBuilder | undefined>(undefined);

export default DropdownContext;
