import { Box } from "@mui/material";
import React, { useState } from "react";
import ContentWrapper from "../../components/contentWrapper";
import useDebounce from "../../helpers/UseDebounce";
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
        </Box>
      </ContentWrapper>
    </>
  );
};

export default InspectionList;
