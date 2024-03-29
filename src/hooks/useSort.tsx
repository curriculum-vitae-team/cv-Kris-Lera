import { useCallback, useEffect, useMemo, useState } from 'react';
import { ISortingRules, SortingOrder } from '@components/AppTable';

export default function useSort<T extends any[]>(
  data: T,
  initialField: keyof T[number]
): [T, ISortingRules<T>, (field: keyof T[number]) => void, boolean] {
  const [sortingRules, setSortingRules] = useState<ISortingRules<T>>({
    field: initialField,
    order: SortingOrder.ASC
  });

  const [isLoadingSort, setIsLoadingSort] = useState<boolean>(false);

  const sortedData = useMemo(() => {
    const { field, order } = sortingRules;

    return [...data].sort((a, b) => {
      const first = a[field];
      const second = b[field];

      if (!first && !second) {
        return 0;
      } else if (!first) {
        return 1;
      } else if (!second) {
        return -1;
      }

      const firstStr = String(first);
      const secondStr = String(second);

      return order === SortingOrder.ASC
        ? firstStr.localeCompare(secondStr)
        : secondStr.localeCompare(firstStr);
    }) as T;
  }, [data, sortingRules]);

  const cycleSortingRules = useCallback((field: keyof T) => {
    setSortingRules((previous) => ({
      field,
      order: field === previous.field ? (+!previous.order as SortingOrder) : SortingOrder.ASC
    }));
  }, []);

  useEffect(() => {
    if (sortedData !== data) {
      setIsLoadingSort(true);
      setTimeout(() => {
        setIsLoadingSort(false);
      }, 600);
    }
  }, [sortedData, data]);

  return [sortedData, sortingRules, cycleSortingRules, isLoadingSort];
}
