import { useState, type FC, useEffect, useCallback } from "react";

import type { CustomSelectProps } from "../../../@types/common";
import type { SearchContextProps } from "../../../context/SearchContext";

import "./InputForm.scss";
import { SearchIcon } from "../../../assets/icons/SearchIcon";

import { useDebounce } from "use-debounce";

interface InputFormProps {
  onChange: CustomSelectProps["onChange"];
  value: SearchContextProps["textSearch"];
}

export const InputForm: FC<InputFormProps> = ({
  onChange,
  value: defaultValue,
}) => {
  const [text, setText] = useState<InputFormProps["value"]>(defaultValue);
  const [value] = useDebounce(text, 300);

  const clearText = useCallback(() => setText(""), [setText]);

  useEffect(() => {
    onChange("textSearch", text as string);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const handleTextSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div className="input-field">
      <SearchIcon className="input-field--icon" />
      <input name="text" value={text} onChange={handleTextSearch} />
      {text && text.length && (
        <div className="input-field--clear" onClick={clearText}></div>
      )}
    </div>
  );
};
