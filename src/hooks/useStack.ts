import { useCallback, useState } from "react";
import { toast } from "react-toastify";
import type { Technology } from "../types/technology";

interface UseStackResult {
  stack: Technology[];
  isInStack: (id: string) => boolean;
  addToStack: (technology: Technology) => void;
  removeFromStack: (id: string) => void;
  removeAll: () => void;
}

export function useStack(): UseStackResult {
  const [stack, setStack] = useState<Technology[]>([]);

  const isInStack = useCallback(
    (id: string) => stack.some((tech) => tech.id === id),
    [stack]
  );

  const addToStack = useCallback(
    (technology: Technology) => {
      setStack((current) => {
        if (current.some((tech) => tech.id === technology.id)) {
          toast.warn(`${technology.name} is already in your stack.`);
          return current;
        }
        toast.success(`${technology.name} added to your stack.`);
        return [...current, technology];
      });
    },
    []
  );

  const removeFromStack = useCallback((id: string) => {
    setStack((current) => {
      const target = current.find((tech) => tech.id === id);
      if (target) {
        toast.info(`${target.name} removed from your stack.`);
      }
      return current.filter((tech) => tech.id !== id);
    });
  }, []);

  const removeAll = useCallback(() => {
    setStack((current) => {
      if (current.length > 0) {
        toast.info("Your stack has been cleared.");
      }
      return [];
    });
  }, []);

  return { stack, isInStack, addToStack, removeFromStack, removeAll };
}
