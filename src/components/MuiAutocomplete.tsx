import { AutocompleteProps } from "@mui/material";
import React from "react";

interface IProps extends AutocompleteProps<any, true, false, false> {}

const MuiAutocomplete = (props: IProps) => {
  return <div>MuiAutocomplete</div>;
};

export default MuiAutocomplete;
