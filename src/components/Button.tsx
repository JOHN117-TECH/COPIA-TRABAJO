"use client";

import clsx from "clsx";
import {
  ButtonIconProps,
  ButtonProps,
  ButtonTextProps,
} from "@/models/button.model";

export const Button = (props: ButtonProps) => {
  const btnDesign = props?.design ?? "btn-filled-black btn-big";
  const classes = props.className ?? "";

  return (
    <button
      disabled={props?.disabled ?? false}
      className={clsx(
        "cursor-pointer px-[16px] py-[10px] rounded-[100px] items-center justify-center flex",
        btnDesign,
        classes 
      )}
      type={props?.type ?? "button"}
      role="button"

      onClick={props?.onClick}
      data-button-design={btnDesign}
    >
      {props?.children}
    </button>
  );
};

export const ButtonIcon = ({ className }: ButtonIconProps) => {
  return <i className={clsx(className)} />;
};

export const ButtonText = ({ className, text }: ButtonTextProps) => {
  return <span className={className}>{text}</span>;
};
