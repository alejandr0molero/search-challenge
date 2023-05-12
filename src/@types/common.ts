import type { MultiValue, Props, PropsValue } from "react-select";

export type CustomOptionsProps = Record<string, string>;

export interface CustomSelectProps {
  options: CustomOptionsProps[];
  onChange: (
    param: string,
    value: string | MultiValue<Record<string, string>>,
  ) => void;
  defaultValue?: PropsValue<Record<string, string>>;
  name: Props["name"];
  placeholder?: string;
  className?: Props["className"];
  classNamePrefix?: Props["classNamePrefix"];
}

export interface CustomSelectChildProps {
  onChange: CustomSelectProps["onChange"];
  value: CustomSelectProps["defaultValue"];
  name: string;
}
