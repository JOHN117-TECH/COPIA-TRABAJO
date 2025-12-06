"use client";

import clsx from "clsx";
import { ReactElement, useState } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
import ButtonType from "@/models/buttonType";
import { Button, ButtonIcon } from "../Button";
import ClientPortal from "../ClientPortal";
import { ModalProvider } from "./ModalContext";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactElement | ReactElement[];
  footer?: React.ReactNode;
  header?: boolean;
  showHeaderOn?: "mobile" | "desktop" | "both";
  showFooterOn?: "mobile" | "desktop" | "both" | "never";
  desktopPosition?: "center" | "right" | "bottom";
  mobilePosition?: "center" | "bottom" | "right";
  shouldCoverHeader?: boolean;
  isFullWidth?: boolean;
  hideOnCloseIcon?: boolean;
  disableBackdropClose?: boolean;
}

/**
 * A modal component that renders a modal dialog on the screen.
 *
 * @param {ModalProps} props - The props of the component
 * @param {boolean} props.isOpen - Whether the modal should be shown or not
 * @param {Function} props.onClose - The function to be called when the modal is closed
 * @param {ReactElement} props.children - The content of the modal
 * @param {string} [props.desktopPosition='center'] - The position of the modal on desktop screens
 * @param {string} [props.mobilePosition='center'] - The position of the modal on mobile screens
 * @param {boolean} [props.shouldCoverHeader=true] - Whether the modal should cover the header or not
 * @return {ReactElement} The Modal component
 */

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  header,
  footer,
  showHeaderOn = "both",
  showFooterOn = "both",
  desktopPosition = "center",
  mobilePosition = desktopPosition,
  isFullWidth = false, 
  shouldCoverHeader = true,
  hideOnCloseIcon = false,
  disableBackdropClose = false,
}) => {
  const [dynamicFooterContent, setDynamicFooterContent] = useState<React.ReactNode>(null);
  const isMobile = useMediaQuery("(max-width: 1023px)");

  const getDesktopClasses = () => {
    switch (desktopPosition) {
      case "center":
        return "justify-center items-center";
      case "right":
        return "justify-end items-center";
      case "bottom":
        return "justify-center items-end";
      default:
        return "justify-center items-center";
    }
  };

  const getMobileClasses = () => {
    switch (mobilePosition) {
      case "center":
        return "items-center justify-center";
      case "bottom":
        return "items-end justify-center";
      default:
        return "items-center justify-center";
    }
  };

  if (!isOpen) return null;

  const shouldShowHeader =
    (showHeaderOn === "both") ||
    (showHeaderOn === "mobile" && isMobile) ||
    (showHeaderOn === "desktop" && !isMobile);

  const shouldShowFooter =
    (showFooterOn === "both") ||
    (showFooterOn === "mobile" && isMobile) ||
    (showFooterOn === "desktop" && !isMobile);

  return (
    <ClientPortal containerId="portal-root">
      <dialog
        className={clsx(
          "fixed top-0 left-0 w-full h-full bg-black/50 z-[9999] flex transition-opacity",
          isMobile ? getMobileClasses() : getDesktopClasses()
        )}
        onClick={disableBackdropClose ? undefined : onClose}
      >
        <div
          className={clsx(
            "bg-white rounded-[10px] shadow-lg relative flex flex-col overflow-hidden",
            isMobile ? "max-h-[95vh] mx-4 w-full" : "md:max-w-[90%] md:max-h-[100vh]",
            shouldCoverHeader ? "mt-0" : "mt-[108px] md:mt-[0px]",
            {
              "rounded-b-[0px]": desktopPosition === "bottom" || mobilePosition === "bottom",
              "w-screen max-w-[100%]!": isFullWidth
            }
          )}
          onClick={(e) => e.stopPropagation()}
        >
          {
            !hideOnCloseIcon &&
              <Button
                onClick={onClose}
                design={ButtonType.LINK_GREEN_BIG}
                className="absolute top-2 right-2 z-10"
              >
                <ButtonIcon className="icon-close" />
              </Button>
          }
          {shouldShowHeader && header && (
            <div className="flex items-center justify-end border-b border-(--gray-20) px-5 py-4"><p></p></div>
          )}
          <ModalProvider
            hasFooter={shouldShowFooter}
            onSetFooterContent={setDynamicFooterContent}
          >
            <div className="flex-1 p-2 md:py-4 min-h-0">{children}</div>
          </ModalProvider>

          {shouldShowFooter && (
            <div className="border-t border-(--gray-20) px-4 py-2 md:py-4 bg-white shrink-0 sticky bottom-0 z-10">{footer || dynamicFooterContent}</div>
          )}
        </div>
      </dialog>
    </ClientPortal>
  );
};


export default Modal;