import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import theme from "../styles/theme";
import ContentWrapper from "./contentWrapper";
import FiltersStore from "../store/filterStore";

interface Props {
  filters: any;
}

const Filters: React.FC<Props> = ({ filters }) => {
  const { updateFilters, selectedFilterItemList } = FiltersStore();

  const handleCheckBox = (filterItem: { id: number; name: string }) => {
    updateFilters(filterItem);
  };

  return (
    <ContentWrapper paddingX={2} paddingY={3}>
      {filters?.map((item: any, index: number) => (
        <>
          <Accordion
            defaultExpanded
            key={index}
            elevation={0}
            sx={{ p: 1, pt: 0, pb: 0 }}
          >
            <AccordionSummary
              sx={{ p: 0 }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span" sx={{ fontFamily: "roboto-bold" }}>
                {item?.name}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ p: 0 }}>
              {item?.values?.map((childItem: any) => {
                const isChecked = selectedFilterItemList?.some(
                  (filterItem: any) => filterItem.id === childItem?.id
                );

                return (
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          onChange={() => handleCheckBox(childItem)}
                          size="small"
                          sx={{
                            "&.Mui-checked": {
                              color: theme.palette.primary.main,
                            },
                          }}
                          checked={isChecked}
                        />
                      }
                      label={childItem?.name}
                    />
                  </FormGroup>
                );
              })}
            </AccordionDetails>
          </Accordion>
          {index !== filters?.length - 1 && <Divider variant="fullWidth" />}
        </>
      ))}
    </ContentWrapper>
  );
};

export default Filters;
