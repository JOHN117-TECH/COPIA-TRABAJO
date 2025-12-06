import { useMemo } from "react";

const useDecodedId = (encodedId?: string): string | null => {
  return useMemo(() => {
    if (!encodedId) return null;
    try {
      const decoded = atob(encodedId);
      const [, id] = decoded.split(":");
      return id ?? null;
    } catch (error) {
      console.error("ID inválido:", error);
      return null;
    }
  }, [encodedId]);
};

export default useDecodedId; 