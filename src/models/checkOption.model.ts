import { MouseEvent } from "react";
import { OptionProps } from "./formField.model";

interface CheckOptionProps extends OptionProps {
  className?: string;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
}

export default CheckOptionProps;
