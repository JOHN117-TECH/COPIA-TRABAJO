import React, { createContext, useContext } from "react";

interface ModalContextProps {
  hasFooter: boolean;
  setFooterContent: (content: React.ReactNode) => void;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const ModalProvider: React.FC<{
  hasFooter: boolean;
  children: React.ReactNode;
  onSetFooterContent: (content: React.ReactNode) => void;
}> = ({ hasFooter, children, onSetFooterContent }) => {
  return (
    <ModalContext.Provider value={{ hasFooter, setFooterContent: onSetFooterContent }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModalContext debe usarse dentro de un ModalProvider");
  }
  return context;
};

