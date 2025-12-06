import ButtonType from "./buttonType";
import { PropsWithChildren, MouseEvent } from "react";

export interface ButtonProps extends PropsWithChildren {
  className?: string | null;
  customColors?: boolean;
  disabled?: boolean;
  design?: ButtonType;
  text?: string;
  type?: "submit" | "reset" | "button" | undefined;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export interface ButtonIconProps {
  className?: string;
}

export interface ButtonTextProps {
  className?: string;
  text?: string;
  hasTranslation?: boolean;
  // translation,
}
