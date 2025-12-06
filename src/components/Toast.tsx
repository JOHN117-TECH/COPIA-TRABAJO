"use client"
import { toast } from "sonner";

const cancelButton = (
  <button 
    onClick={() => toast.dismiss()}
    style={{
      position: "absolute", 
      right: 15,
      top: 17, 
      marginLeft: "12px",
      background: "transparent",
      border: "none",
      cursor: "pointer",
    }}
  >
    <i className="icon-close text-lg text-white" />
  </button>
) 

export const Toast = {
  success: (msg: string) =>
    toast.success(msg, {
      cancel: cancelButton
    }),
  error: (msg: string) =>
    toast.error(msg, {
      cancel: cancelButton
    }),
  warning: (msg: string) =>
    toast.warning(msg, {
      cancel: cancelButton
    }),
  info: (msg: string) =>
    toast.info(msg, {
      cancel: cancelButton
    }),
};
