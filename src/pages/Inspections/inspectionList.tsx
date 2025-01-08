import { Box, Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import ContentWrapper from "../../components/contentWrapper";
import useDebounce from "../../helpers/UseDebounce";
import FiltersStore from "../../store/filterStore";
import ChipCommon from "../../components/chipCommon";
import CardCommon from "../../components/cardCommon";
import { inspectionListDummy } from "../../constants/constants";
import { CardTypeEnum } from "../../constants/enum";
import Pagination from "../../components/pagination";
import { momentDateFormatUtil } from "../../helpers/Util";
import { userCommon } from "../../context/CommonContext";
type Props = {};

const InspectionList = (props: Props) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { selectedFilterItemList, dateRangeFilter } = FiltersStore();
  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const { chipList, getChipList } = userCommon();

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

  useEffect(() => {
    getChipList(dateRangeFilter, selectedFilterItemList);
  }, [dateRangeFilter, selectedFilterItemList]);

  const debouncedSearch = useDebounce(searchTerm, 500);

  const handleTextFieldChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchTerm(event.target.value as string);
  };

  return (
    <>
      {
        <>
          <ChipCommon list={chipList} />
          <Divider />
        </>
      }
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
          <CardCommon
            list={inspectionListDummy}
            type={CardTypeEnum.Inspection}
          />
        </Box>
      </ContentWrapper>
    </>
  );
};

export default InspectionList;
