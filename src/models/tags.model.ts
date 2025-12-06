import { PropsWithChildren } from "react";

export interface TagProps extends PropsWithChildren {
  variant?: "filled" | "outlined";
  color?: string;
  textColor?: string;
  rounded?: "none" | "sm" | "md" | "lg" | "full";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export interface TagIconProps {
  className: string;
}

export interface TagLabelProps {
  className?: string;
  label: string;
}

export interface TagRemoveButtonProps {
  iconClassName?: string;
  onRemove: () => void;
}
