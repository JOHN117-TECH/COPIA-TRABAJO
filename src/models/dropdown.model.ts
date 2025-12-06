import { MouseEvent, PropsWithChildren } from "react";

interface DropdownProps extends PropsWithChildren {
  className?: string;
  customClasses?: boolean;
  customContext?: boolean;
  hoverEnabled?: boolean;
  showAsAPopup?: boolean;
  visible?: boolean;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
}

export default DropdownProps;
