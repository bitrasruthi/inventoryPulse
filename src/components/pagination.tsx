import * as React from "react";
import TablePagination, {
  TablePaginationOwnProps,
} from "@mui/material/TablePagination";
import { Grid2, styled, Typography } from "@mui/material";
import OutlinedTextField from "./outlinedTextField";
import SelectField from "./selectField";
import SearchIcon from "@mui/icons-material/Search";

const options = [
  { label: "Recent", value: "option1" },
  { label: "Option 2", value: "option2" },
  { label: "Option 3", value: "option3" },
];

interface IProps extends TablePaginationOwnProps {}

const StyledPagination = styled(TablePagination)(() => ({
  borderBottom: "none",
  padding: 0,
  margin: 0,
  "& .MuiTablePagination-toolbar": {
    padding: 0,
  },
  "& .MuiTablePagination-actions": {
    order: -1,
    display: "flex",
    alignItems: "center",
    gap: "0px !important",
    margin: 0,
    "& button": {
      padding: 0,
      "&:hover": {
        backgroundColor: "transparent",
        borderRaduis: "none",
      },
    },
    "& button:first-of-type .MuiSvgIcon-root": {
      width: "30px !important",
      height: "30px !important",
      backgroundColor: "#F0F0F0",
      borderRadius: 0,
    },
    "& button:last-of-type .MuiSvgIcon-root": {
      width: "30px !important",
      height: "30px !important",
      backgroundColor: "#F0F0F0",
      borderRadius: 0,
      color: "#333333 !important",
    },
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

  const [selectedValue, setSelectedValue] = React.useState<string>(
    options[0]?.value
  );

  const labelDisplayedRows = ({ from, to }: { from: number; to: number }) => {
    return `Result ${from}–${to}`;
  };

  const handleSelectChange = (event: any) => {
    setSelectedValue(event.target.value as string);
  };

  return (
    <Grid2 container spacing={2} width={"100%"}>
      <Grid2 size={{ xs: 12, md: 6 }}>
        <StyledPagination
          {...props}
          labelRowsPerPage=""
          labelDisplayedRows={labelDisplayedRows}
          SelectProps={{
            sx: { ml: 1, mr: 2, border: "1px solid #ccc", borderRadius: "4px" },
          }}
        />
      </Grid2>
      <Grid2
        size={{ xs: 12, md: 6 }}
        display={"flex"}
        justifyContent={{ xs: "left", md: "right" }}
      >
        <Grid2 container spacing={2}>
          <Grid2 size={{ xs: 12, sm: 6 }} display={"flex"} alignItems="center">
            <Typography pr={1} width={{ sm: "inherit" }}>
              Sort By
            </Typography>
            <SelectField
              value={selectedValue}
              onChange={handleSelectChange}
              options={options}
              type="pagination"
            />
          </Grid2>
          <Grid2
            size={{ xs: 12, sm: 6 }}
            display={"flex"}
            alignItems="center"
            pr={{ xs: 0, sm: 1 }}
          >
            <OutlinedTextField
              variant="outlined"
              startAdormentIcon={SearchIcon}
              placeholder="Search by address"
              type="pagination"
            />
          </Grid2>
        </Grid2>
      </Grid2>
    </Grid2>
  );
};

export default Pagination;
