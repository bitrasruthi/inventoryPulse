import React, { SyntheticEvent, useEffect, useState } from "react";
import { Autocomplete, AutocompleteProps, TextField } from "@mui/material";

interface IProps
  extends Omit<AutocompleteProps<any, true, false, false>, "renderInput"> {
  selectedValues?: string[];
  onHandleChange?: (
    event: SyntheticEvent<Element, Event>,
    value: string[]
  ) => void;
  options: string[];
  placeholder?: string;
}

const MuiAutocomplete: React.FC<IProps> = ({
  selectedValues = [],
  onHandleChange,
  options,
  placeholder,
  ...autoCompleteProps
}) => {
  const [selectedValue, setSelectedValue] = useState<string[]>([]);

  useEffect(() => {
    if (selectedValues !== undefined && Array.isArray(selectedValues)) {
      setSelectedValue(selectedValues);
    }
  }, [selectedValues]);

  const handleChange = (
    event: SyntheticEvent<Element, Event>,
    value: string[]
  ) => {
    setSelectedValue(value);
    onHandleChange?.(event, value);
  };

  return (
    <Autocomplete
      {...autoCompleteProps}
      multiple
      value={selectedValue}
      options={options}
      getOptionLabel={(option) => option}
      filterSelectedOptions
      onChange={handleChange}
      renderInput={(params) => (
        <TextField {...params} variant="outlined" placeholder={placeholder} />
      )}
    />
  );
};

export default MuiAutocomplete;
