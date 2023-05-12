import type { FC } from "react";

import "./SearchBar.scss";
import { CountrySelect } from "../forms/CountrySelect/CountrySelect";
import { InputForm } from "../forms/InputForm/InputForm";
import { VersionSelect } from "../forms/VersionSelect/VersionSelect";

import type { CustomSelectProps } from "../../@types/common";
import type { SearchContextProps } from "../../context/SearchContext";

interface SearchBarProps {
  onChange: CustomSelectProps["onChange"];
  searchParams: SearchContextProps;
  resetValues: React.Dispatch<React.SetStateAction<SearchContextProps>>;
}

export const SearchBar: FC<SearchBarProps> = ({
  onChange,
  searchParams,
  resetValues,
}) => {
  const { textSearch = "", country = [], version = [] } = searchParams;

  return (
    <div className="search-bar">
      <div className="search-bar--selects">
        <CountrySelect value={country} onChange={onChange} name="country" />
        <VersionSelect value={version} onChange={onChange} name="version" />
        <button onClick={() => resetValues({})}>Clear all filters</button>
      </div>
      <div className="search-bar--text">
        <InputForm onChange={onChange} value={textSearch} />
      </div>
    </div>
  );
};
