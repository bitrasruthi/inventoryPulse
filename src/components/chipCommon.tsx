import React from "react";
import { Chip, ChipProps, Stack, styled } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import useFiltersStore from "../store/filterStore";

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
  const { updateFilters, removeDateRangeFilter } = useFiltersStore();

  const handleDelete = (item: { id: number; name: string }) => {
    if (item?.id == -1) {
      removeDateRangeFilter();
    } else {
      updateFilters(item);
    }
  };

  return (
    <Stack direction="row" spacing={1} p={2} flexWrap={"wrap"} gap={1}>
      {list?.length > 0 &&
        list?.map((item: any, index: number) => (
          <StyledChip
            {...props}
            key={index}
            deleteIcon={<ClearIcon />}
            onDelete={() => handleDelete(item)}
            label={item?.name}
          />
        ))}
    </Stack>
  );
};

export default ChipCommon;
