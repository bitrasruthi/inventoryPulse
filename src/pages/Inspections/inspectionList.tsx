import { Box, Grid2 as Grid, Grid2, SelectChangeEvent } from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import ContentWrapper from "../../components/contentWrapper";
import OutlinedTextField from "../../components/outlinedTextField";
import SwitchButton from "../../components/switchButton";
import SelectField from "../../components/selectField";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AdUnitsIcon from "@mui/icons-material/AdUnits";
import useDebounce from "../../helpers/UseDebounce";
import Fieldset from "../../components/fieldSet";

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

  const handleSelectChange = (event: any) => {
    setSelectedValue(event.target.value as string);
  };

  const handleTextFieldChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchTerm(event.target.value as string);
  };

  return (
    <ContentWrapper>
      <Box p={1}>InspectionList</Box>
      <Grid container spacing={4}>
        <Grid size={6}>
          <Fieldset title={<div>User Info</div>}>
            <Grid>
              <SelectField
                value={selectedValue}
                onChange={handleSelectChange}
                options={options}
                label={"Property Type"}
                required={true}
              />
            </Grid>
            <Grid>
              <OutlinedTextField
                variant="outlined"
                startAdormentIcon={AccountBalanceIcon}
                endAdormentIcon={AdUnitsIcon}
                onChange={handleTextFieldChange}
                required={true}
                label={"First Name"}
              />
            </Grid>
            <Grid>
              <SwitchButton
                label={"Garage"}
                defaultChecked
                onChange={(e) => console.log(e)}
              />
            </Grid>
          </Fieldset>
        </Grid>
        <Grid size={6}>
          <Fieldset title={<div>User Info</div>}>
            <Grid>
              <SelectField
                value={selectedValue}
                onChange={handleSelectChange}
                options={options}
                label={"Property Type"}
                required={true}
              />
            </Grid>
            <Grid>
              <OutlinedTextField
                variant="outlined"
                startAdormentIcon={AccountBalanceIcon}
                endAdormentIcon={AdUnitsIcon}
                onChange={handleTextFieldChange}
                required={true}
                label={"First Name"}
              />
            </Grid>
            <Grid>
              <SwitchButton
                label={"Garage"}
                defaultChecked
                onChange={(e) => console.log(e)}
              />
            </Grid>
          </Fieldset>
        </Grid>
      </Grid>
    </ContentWrapper>
  );
};

export default InspectionList;
