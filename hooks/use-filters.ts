import * as React from "react";

type Filters = Record<string, string | number | boolean | undefined>;

export function useFilters<T extends Filters>(initial: T) {
  const [filters, setFilters] = React.useState<T>(initial);

  function updateFilters(next: Partial<T>) {
    setFilters((prev) => ({ ...prev, ...next }));
  }

  function resetFilters() {
    setFilters(initial);
  }

  return { filters, updateFilters, resetFilters };
}
