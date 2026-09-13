import { useEffect, useState } from "react";
import type { Technology } from "../types/technology";

interface UseTechnologiesResult {
  technologies: Technology[];
  isLoading: boolean;
  error: string | null;
}

/**
 * Loads technology data from the local JSON file at runtime via fetch,
 * rather than a static bundle import, so a genuine loading state exists.
 * On local JSON this may only take a few milliseconds, but the
 * loading -> success/error flow is real.
 */
export function useTechnologies(): UseTechnologiesResult {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function load() {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(`${import.meta.env.BASE_URL}data/technologies.json`, {
          signal: controller.signal,
        });
        if (!response.ok) {
          throw new Error(`Failed to load technologies (status ${response.status})`);
        }
        const data: Technology[] = await response.json();
        setTechnologies(data);
      } catch (err) {
        if (err instanceof DOMException && err.name === "AbortError") return;
        setError(err instanceof Error ? err.message : "Something went wrong while loading technologies.");
      } finally {
        setIsLoading(false);
      }
    }

    load();
    return () => controller.abort();
  }, []);

  return { technologies, isLoading, error };
}
