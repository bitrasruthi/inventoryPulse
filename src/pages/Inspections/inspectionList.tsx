import { Box } from "@mui/material";
import React from "react";
import ContentWrapper from "../../components/contentWrapper";

type Props = {};

const InspectionList = (props: Props) => {
  return (
    <ContentWrapper paddingX={2} paddingY={3}>
      <Box p={1}>InspectionList</Box>
    </ContentWrapper>
  );
};

export default InspectionList;
