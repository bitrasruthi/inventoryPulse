import { Box, Divider, Grid2 as Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import ContentWrapper from "../../components/contentWrapper";
import useDebounce from "../../helpers/UseDebounce";
import FiltersStore from "../../store/filterStore";
import ChipCommon from "../../components/chipCommon";
import CardCommon from "../../components/cardCommon";
import { inspectionListDummy } from "../../constants/constants";
import { CardTypeEnum } from "../../constants/enum";
import Pagination from "../../components/pagination";
import SelectField from "../../components/selectField";
import OutlinedTextField from "../../components/outlinedTextField";
import SearchIcon from "@mui/icons-material/Search";
type Props = {};

const options = [
  { label: "Recent", value: "option1" },
  { label: "Option 2", value: "option2" },
  { label: "Option 3", value: "option3" },
];

const InspectionList = (props: Props) => {
  const [selectedValue, setSelectedValue] = useState<string>(options[0]?.value);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { selectedFilterItemList } = FiltersStore();
  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

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
    <>
      {selectedFilterItemList?.length > 0 && (
        <>
          <ChipCommon list={selectedFilterItemList} />
          {/* <ChipCommon list={dateRangeFilter} /> */}
          <Divider />
        </>
      )}
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        p={2}
      >
        <Pagination
          count={100}
          page={page}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        <Grid container spacing={2}>
          <Grid size={6} display={"flex"} alignItems="center">
            <Typography pr={1}>Sort By</Typography>
            <SelectField
              value={selectedValue}
              onChange={handleSelectChange}
              options={options}
            />
          </Grid>
          <Grid size={6} display={"flex"} alignItems="center">
            <OutlinedTextField
              variant="outlined"
              startAdormentIcon={SearchIcon}
              placeholder="Search by address"
            />
          </Grid>
        </Grid>
      </Box>
      <ContentWrapper>
        <CardCommon list={inspectionListDummy} type={CardTypeEnum.Inspection} />
      </ContentWrapper>
    </>
  );
};

export default InspectionList;
