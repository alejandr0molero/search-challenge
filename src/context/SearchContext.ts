import { createContext } from "react";

import type { CustomOptionsProps } from "../@types/common";

export interface SearchContextProps {
  textSearch?: string;
  country?: CustomOptionsProps[];
  version?: CustomOptionsProps[];
}

export const SearchContext = createContext<SearchContextProps>({});
