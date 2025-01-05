import * as React from "react";
import TablePagination, {
  TablePaginationOwnProps,
} from "@mui/material/TablePagination";
import { Box, styled } from "@mui/material";

interface IProps extends TablePaginationOwnProps {}

const StyledPagination = styled(TablePagination)(({ theme }) => ({
  borderBottom: "none",
  padding: 0,
  "& .MuiTablePagination-toolbar": {
    padding: 0,
  },
  "& .MuiTablePagination-actions": {
    order: -1,
    display: "flex",
    alignItems: "center",
  },
  "& .MuiTablePagination-spacer": {
    display: "none",
  },
  "& .MuiTablePagination-displayedRows": {
    marginLeft: "auto",
  },
}));

const Pagination: React.FC<IProps> = (props) => {
  const {} = props;

  const labelDisplayedRows = ({ from, to }: { from: number; to: number }) => {
    return `Result ${from}–${to}`;
  };

  return (
    <StyledPagination
      {...props}
      labelRowsPerPage=""
      labelDisplayedRows={labelDisplayedRows}
      SelectProps={{
        sx: { ml: 1, mr: 2, border: "1px solid #ccc", borderRadius: "4px" },
      }}
    />
  );
};

export default Pagination;
