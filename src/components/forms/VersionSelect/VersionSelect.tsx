import { useMemo, type FC } from "react";

import { buildVersionOptions } from "../../../utils/functions/versionOptions";
import { CustomSelect } from "../../common/CustomSelect/CustomSelect";

import type { CustomSelectChildProps } from "../../../@types/common";

export const VersionSelect: FC<CustomSelectChildProps> = ({
  value,
  onChange,
  name,
}) => {
  const options = useMemo(() => buildVersionOptions(5), []);
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
