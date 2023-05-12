import { useCallback, useState } from "react";

import { SearchBar } from "./components/SearchBar/SearchBar";
import { SearchResults } from "./components/SearchResults/SearchResults";
import { Wrapper } from "./components/Wrapper/Wrapper";
import { SearchContext } from "./context/SearchContext";

import type { SearchContextProps } from "./context/SearchContext";

import "./App.scss";
import type { MultiValue } from "react-select";

const App = () => {
  const [searchParams, setSearchParams] = useState<SearchContextProps>({});

  const updateSearchParams = useCallback(
    (param: string, value: MultiValue<Record<string, string>> | string) => {
      setSearchParams(currentValue => ({
        ...currentValue,
        [param]: value,
      }));
    },
    [],
  );

  return (
    <SearchContext.Provider value={searchParams}>
      <Wrapper>
        <SearchBar
          onChange={updateSearchParams}
          searchParams={searchParams}
          resetValues={setSearchParams}
        />
        <SearchResults />
      </Wrapper>
    </SearchContext.Provider>
  );
};

export default App;
