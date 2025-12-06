"use client";
import { FC } from "react";
import clsx from "clsx";
import { TagIconProps, TagLabelProps, TagProps, TagRemoveButtonProps } from "@/models/tags.model";

const baseStyles = "inline-flex items-center font-medium py-1 transition-colors duration-200";

const sizeStyles = {
  sm: "text-xs px-2",
  md: "text-sm px-2",
  lg: "text-base px-2",
};

const roundedStyles = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full",
};

export const Tags: FC<TagProps> = ({
  variant = "filled",
  color = "var(--aqua-soft)",
  textColor = "var(--aqua-dense)",
  size = "md",
  rounded = "sm",
  className,
  ...props
}) => {
  const variantStyles = {
    filled: {
      backgroundColor: color,
      color: textColor || "white",
      border: "none",
    },
    outlined: {
      backgroundColor: "transparent",
      color: textColor || color,
      border: `1px solid ${color}`,
    },
  }[variant];

  return (
    <span
      className={clsx(
        baseStyles,
        sizeStyles[size],
        roundedStyles[rounded],
        className
      )}
      style={variantStyles}
    >
      {props?.children}
    </span>
  );
};

export const TagIcon: FC<TagIconProps> = ({ className }) => {
  return <i className={clsx(className)} />;
};

export const TagLabel: FC<TagLabelProps> = ({ className, label }) => {
  return <span className={clsx(className)}>{label}</span>;
};

export const TagRemoveButton: FC<TagRemoveButtonProps> = ({
  iconClassName,
  onRemove,
}) => {
  return (
    <button
      type="button"
      onClick={onRemove}
      className="ml-2 focus:outline-none"
    >
      <i className={clsx( iconClassName)} />
    </button>
  );
};

