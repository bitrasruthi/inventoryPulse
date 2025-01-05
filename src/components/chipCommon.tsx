import React from "react";
import { Chip, ChipProps, Stack, styled } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import FiltersStore from "../store/filterStore";

interface IProps extends ChipProps {
  list: [{ id: number; name: string }];
}

export const StyledChip = styled(Chip)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  color: "#333333",
  "& .MuiChip-deleteIcon": {
    color: "#333333",
    width: 18,
    height: 18,
  },
}));

const ChipCommon: React.FC<IProps> = (props) => {
  const { list } = props;
  const { updateFilters, removeDateRangeFilter } = FiltersStore();

  const handleDelete = (item: { id: number; name: string }) => {
    updateFilters(item);
    removeDateRangeFilter();
  };

  return (
    <Stack direction="row" spacing={1} p={2}>
      {list?.length > 0 &&
        list?.map((item: any, index: number) => (
          <StyledChip
            key={index}
            deleteIcon={<ClearIcon />}
            onDelete={() => handleDelete(item)}
            {...props}
            label={item?.name}
          />
        ))}
    </Stack>
  );
};

export default ChipCommon;
