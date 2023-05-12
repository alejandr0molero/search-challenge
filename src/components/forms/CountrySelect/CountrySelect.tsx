import { useMemo, type FC } from "react";

import { buildCountriesOptions } from "../../../utils/functions/countryOptions";
import { CustomSelect } from "../../common/CustomSelect/CustomSelect";

import type { CustomSelectChildProps } from "../../../@types/common";

export const CountrySelect: FC<CustomSelectChildProps> = ({
  value,
  onChange,
  name,
}) => {
  const options = useMemo(() => buildCountriesOptions(), []);
  return (
    <CustomSelect
      name={name}
      placeholder={name}
      options={options}
      onChange={onChange}
      defaultValue={value}
    />
  );
};
