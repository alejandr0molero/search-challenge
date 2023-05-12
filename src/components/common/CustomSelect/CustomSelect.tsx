import { useCallback, type FC } from "react";
import Select from "react-select";

import type { CustomSelectProps } from "../../../@types/common";
import type { MultiValue } from "react-select";

export const CustomSelect: FC<CustomSelectProps> = ({
  options,
  onChange,
  defaultValue,
  name,
  className = "basic-multi-select",
  classNamePrefix = "select",
  placeholder,
}) => {
  const handleOnChange = useCallback(
    (values: MultiValue<Record<string, string>>) => {
      onChange?.(name as string, values);
    },
    [name, onChange],
  );

  return (
    <Select
      isMulti
      name={name}
      className={className}
      classNamePrefix={classNamePrefix}
      onChange={handleOnChange}
      options={options}
      value={defaultValue}
      placeholder={placeholder}
    />
  );
};
