import { Box, Grid2 as Grid, SelectChangeEvent, Stack } from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import ContentWrapper from "../../components/contentWrapper";
import OutlinedTextField from "../../components/outlinedTextField";
import SwitchButton from "../../components/switchButton";
import SelectField from "../../components/selectField";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AdUnitsIcon from "@mui/icons-material/AdUnits";
import useDebounce from "../../helpers/UseDebounce";
import Fieldset from "../../components/fieldSet";
import FiltersStore from "../../store/filterStore";
import ChipCommon from "../../components/chipCommon";
import CardCommon from "../../components/cardCommon";
import { inspectionListDummy } from "../../constants/constants";
import { CardTypeEnum } from "../../constants/enum";

type Props = {};

const options = [
  { label: "Option 1", value: "option1" },
  { label: "Option 2", value: "option2" },
  { label: "Option 3", value: "option3" },
];

const InspectionList = (props: Props) => {
  const [selectedValue, setSelectedValue] = useState<string>(options[0]?.value);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { selectedFilterItemList } = FiltersStore();

  const debouncedSearch = useDebounce(searchTerm, 500);

  const handleSelectChange = (event: any) => {
    setSelectedValue(event.target.value as string);
  };

  const handleTextFieldChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchTerm(event.target.value as string);
  };

  console.log(selectedFilterItemList);

  return (
    <>
      <ChipCommon list={selectedFilterItemList} />
      <ContentWrapper>
        <Box>
          <CardCommon
            list={inspectionListDummy}
            type={CardTypeEnum.Inspection}
          />
          {/* <Fieldset title={<div>User Info</div>}>
          <Grid container spacing={4}>
            <Grid size={6}>
              <SelectField
                value={selectedValue}
                onChange={handleSelectChange}
                options={options}
                label={"Property Type"}
                required={true}
              />
            </Grid>
            <Grid size={6}>
              <OutlinedTextField
                variant="outlined"
                StartAdormentIcon={AccountBalanceIcon}
                EndAdormentIcon={AdUnitsIcon}
                onChange={handleTextFieldChange}
                required={true}
                label={"First Name"}
              />
            </Grid>
            <Grid size={6}>
              <SwitchButton
                label={"Garage"}
                defaultChecked
                onChange={(e) => console.log(e)}
              />
            </Grid>
          </Grid>
        </Fieldset> */}
        </Box>
      </ContentWrapper>
    </>
  );
};

export default InspectionList;
