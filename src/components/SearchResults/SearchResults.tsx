import "./SearchResults.scss";
import { isNil, omitBy, size } from "lodash";
import { useCallback, useContext, useMemo } from "react";

import { SearchContext } from "../../context/SearchContext";
import memoryData from "../../data/data.json";
import { filterResults } from "../../utils/functions/filterResults";
import { ResultCard } from "../ResultCard/ResultCard";

export const SearchResults = () => {
  const searchData = useContext(SearchContext);
  const { country, version, textSearch } = searchData;

  const countries =
    Array.isArray(country) && size(country) > 0
      ? country.map(countryValue => countryValue.value)
      : undefined;

  const versions =
    Array.isArray(version) && size(version) > 0
      ? version.map(versionValue => versionValue.value)
      : undefined;

  const data = useMemo(() => memoryData, []);

  const results = useMemo(
    () =>
      filterResults(
        data,
        omitBy(
          {
            text: textSearch,
            country: countries,
            version: versions,
          },
          isNil,
        ),
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [searchData],
  );

  const renderResults = useCallback(() => {
    return Array.isArray(results) && size(results) > 0 ? (
      results.map(result => (
        <ResultCard
          version={result.version}
          content={result.text}
          text={textSearch}
        />
      ))
    ) : (
      <>No data found</>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [results]);

  return <div className="search-results">{renderResults()}</div>;
};
