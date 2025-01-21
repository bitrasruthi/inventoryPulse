import { Box, Divider } from "@mui/material";
import React, { useEffect } from "react";
import ContentWrapper from "../../components/contentWrapper";
import useFiltersStore from "../../store/filterStore";
import ChipCommon from "../../components/chipCommon";
import { inspectionListDummy } from "../../constants/constants";
import Pagination from "../../components/pagination";
import InspectionCard from "../../components/inspectionCard";
import useInspectionStore from "../../store/inspectionStore";
import OutlinedCustomButton from "../../components/outlinedCustomButton";

const InspectionList = () => {
  const {
    selectedFilterItemList,
    dateRangeFilter,
    getChipListWithDateRange,
    chipList,
  } = useFiltersStore();
  const { currentStep } = useInspectionStore();

  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (
    _event: React.MouseEvent<HTMLButtonElement> | null,
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

  useEffect(() => {
    getChipListWithDateRange();
  }, [dateRangeFilter, selectedFilterItemList]);

  return (
    <>
      {chipList?.length > 0 && (
        <>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <ChipCommon list={chipList} />
            <Box display={"flex"} flexWrap={"wrap"} mx={2}>
            
              <OutlinedCustomButton
                label="Reset Filter"
                backgroundColor="#111"
                color="#fff"
              />
            </Box>
          </Box>
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
      </Box>

      <ContentWrapper paddingY={0}>
        <Box height={"69vh"} sx={{ overflowY: "auto" }}>
          <InspectionCard list={inspectionListDummy} />
        </Box>
      </ContentWrapper>
    </>
  );
};

export default InspectionList;
