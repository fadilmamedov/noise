import { useEffect, useRef } from "react";

export const useKeyDown = (code: string, handler: () => void) => {
  const ref = useRef(handler);
  ref.current = handler;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === code) {
        ref.current();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [code]);
};
