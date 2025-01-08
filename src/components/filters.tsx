import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Grid2 as Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import theme from "../styles/theme";
import ContentWrapper from "./contentWrapper";
import useFiltersStore from "../store/filterStore";
import SelectField from "./selectField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DateRangePicker from "@mui/lab/DateRangePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import OutlinedTextField from "./outlinedTextField";

interface Props {
  filters: any;
}

const options = [{ label: "Date Created", value: "option1" }];

const Filters: React.FC<Props> = ({ filters }) => {
  const {
    updateFilters,
    selectedFilterItemList,
    setDateRangeFilter,
    dateRangeFilter,
  } = useFiltersStore();
  const [selectedValue, setSelectedValue] = useState<string>(options[0]?.value);

  const handleCheckBox = (filterItem: { id: number; name: string }) => {
    updateFilters(filterItem);
  };

  const handleSelectChange = (event: any) => {
    setSelectedValue(event.target.value as string);
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
            {item?.name === "Date" ? (
              <AccordionDetails sx={{ p: 0 }}>
                <SelectField
                  value={selectedValue}
                  onChange={handleSelectChange}
                  options={options}
                  isNotBoldText={true}
                  marginBottom={2}
                />
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DateRangePicker
                    label=""
                    value={dateRangeFilter}
                    disableFuture={true}
                    inputFormat="dd/MM/yyyy"
                    onChange={(newValue) => {
                      if (newValue) {
                        setDateRangeFilter(newValue);
                      }
                    }}
                    renderInput={(startProps, endProps) => {
                      startProps.inputProps = {
                        ...startProps.inputProps,
                        placeholder: "From:dd/mm/yy",
                        readOnly: true,
                      };

                      endProps.inputProps = {
                        ...endProps.inputProps,
                        placeholder: "To:dd/mm/yy",
                        readOnly: true,
                      };
                      return (
                        <Grid container spacing={2}>
                          <Grid size={6}>
                            <OutlinedTextField
                              {...startProps}
                              isNotBoldText={true}
                              variant="outlined"
                              label=""
                            />
                          </Grid>
                          <Grid size={6}>
                            <OutlinedTextField
                              {...endProps}
                              isNotBoldText={true}
                              variant="outlined"
                              label=""
                            />
                          </Grid>
                        </Grid>
                      );
                    }}
                  />
                </LocalizationProvider>
              </AccordionDetails>
            ) : (
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
            )}
          </Accordion>
          {index !== filters?.length - 1 && <Divider variant="fullWidth" />}
        </>
      ))}
    </ContentWrapper>
  );
};

export default Filters;
