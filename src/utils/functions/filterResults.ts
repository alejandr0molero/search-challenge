import type { SearchContextProps } from "../../context/SearchContext";

const filterByParams =
  (searchParams: SearchContextProps) => (item: Record<string, string>) =>
    Object.entries(searchParams).every(([key, value]) => {
      if (Array.isArray(value)) {
        return value.some(itemValue => itemValue === item[key]);
      }
      return item[key] && item[key].includes(value);
    });

export const filterResults = (
  data: Record<string, string>[],
  searchParams: SearchContextProps,
) => data.filter(filterByParams(searchParams));
