import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

interface PortalProps {
  children: React.ReactNode;
  containerId: string;
}

const ClientPortal = ({ children, containerId }: PortalProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const container = document.getElementById(containerId);

  return mounted && container ? createPortal(children, container) : null;
};

export default ClientPortal;
