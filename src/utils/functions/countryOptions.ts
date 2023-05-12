import { getCountries } from "country-list-spanish";

export const buildCountriesOptions = () => {
  const countryNames = getCountries();

  return countryNames.map((countryName: string) => ({
    label: countryName,
    value: countryName,
  }));
};
