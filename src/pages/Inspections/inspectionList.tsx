import { Box, Grid2 as Grid, SelectChangeEvent } from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import ContentWrapper from "../../components/contentWrapper";
import OutlinedTextField from "../../components/outlinedTextField";
import SwitchButton from "../../components/switchButton";
import SelectField from "../../components/selectField";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AdUnitsIcon from "@mui/icons-material/AdUnits";
import useDebounce from "../../helpers/UseDebounce";

type Props = {};

const options = [
  { label: "Option 1", value: "option1" },
  { label: "Option 2", value: "option2" },
  { label: "Option 3", value: "option3" },
];

const InspectionList = (props: Props) => {
  const [selectedValue, setSelectedValue] = useState<string>(options[0]?.value);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const debouncedSearch = useDebounce(searchTerm, 500);

  const handleSelectChange = (value: string) => {
    setSelectedValue(value as string);
  };

  const handleTextFieldChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchTerm(event.target.value as string);
  };

  console.log(debouncedSearch);

  return (
    <ContentWrapper paddingX={2} paddingY={3}>
      <Box p={1}>InspectionList</Box>
      <Grid container spacing={4}>
        <Grid size={6}>
          <SelectField
            value={selectedValue}
            handleSelect={() => handleSelectChange}
            options={options}
          />
        </Grid>
        <Grid size={6}>
          <OutlinedTextField
            variant="outlined"
            StartAdormentIcon={AccountBalanceIcon}
            EndAdormentIcon={AdUnitsIcon}
            onChange={handleTextFieldChange}
          />
        </Grid>
        <Grid size={6}>
          <SwitchButton label={"Garage"} />
        </Grid>
      </Grid>
    </ContentWrapper>
  );
};

export default InspectionList;
