import Grid2 from "@mui/material/Grid2";
import Fieldset from "../../components/fieldSet";
import OutlinedTextField from "../../components/outlinedTextField";
import ContentWrapper from "../../components/contentWrapper";
import SelectField from "../../components/selectField";
import SwitchButton from "../../components/switchButton";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import theme from "../../styles/theme";
import { ClientOptions } from "../../types/type";
import AddressCommon from "../../components/addressCommon";
import { FormProps, PropertyDetailsFormValues } from "../../helpers/Interfaces";

interface IProps {
  formProps: FormProps<PropertyDetailsFormValues>;
}

const SaveProperty: React.FC<IProps> = ({ formProps }) => {
  const { register, errors } = formProps;

  const client: ClientOptions[] = [
    { label: "name", value: "value" },
    { label: "name", value: "value" },
    { label: "name", value: "value" },
    { label: "name", value: "value" },
  ];
  return (
    <ContentWrapper>
      <Grid2 spacing={4} container size={{ sm: 12, md: 6 }}>
        <Grid2 size={{ sm: 12, md: 6 }} rowSpacing={4}>
          <Fieldset title="Address" key={"address"}>
            <AddressCommon formProps={formProps} />
            <SelectField options={client} label="Client" />
          </Fieldset>
          <Fieldset title="Transfer Past Inspections" key={"Inspections"}>
            <FormGroup sx={{ pb: 2 }}>
              <FormControlLabel
                control={
                  <Checkbox
                    // onChange={() => handleCheckBox(childItem)}
                    size="small"
                    sx={{
                      "&.Mui-checked": {
                        color: theme.palette.primary.main,
                      },
                    }}
                    checked={true}
                  />
                }
                label={"Enabled"}
              />
            </FormGroup>
            <OutlinedTextField label="Reference" variant="outlined" />
            <OutlinedTextField label="UPRN" variant="outlined" />
            <OutlinedTextField label="EPC Rating" variant="outlined" />
            <SelectField
              options={client}
              label="Parent Property (Building or Estate)"
            />
          </Fieldset>
        </Grid2>
        <Grid2 size={{ sm: 12, md: 6 }} rowSpacing={4}>
          <Fieldset title="Property Details" key={"address"}>
            <Grid2 container spacing={{ xs: 0, md: 2 }}>
              <Grid2 size={{ xs: 12, md: 6 }}>
                <SelectField
                  options={client}
                  label="Type"
                  error={!!errors.property?.propertyType}
                  helperText={errors?.property?.propertyType?.message}
                  {...register("property.propertyType")}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 6 }}>
                <SelectField options={client} label="Detachement/ Style" />
              </Grid2>
            </Grid2>
            <Grid2 container spacing={{ xs: 0, md: 2 }}>
              <Grid2 size={{ xs: 12, md: 6 }}>
                <SelectField options={client} label="Furnishing" />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 6 }}>
                <OutlinedTextField
                  label="Bedrooms"
                  variant="outlined"
                  isnotboldtext={false}
                  error={!!errors.property?.bedrooms}
                  helperText={errors?.property?.bedrooms?.message}
                  formProps={register("property.bedrooms")}
                />
              </Grid2>
            </Grid2>
            <Grid2 container spacing={{ xs: 0, md: 2 }}>
              <Grid2 size={{ xs: 12, md: 6 }}>
                <OutlinedTextField variant="outlined" label="Bathrooms" />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 6 }}>
                <OutlinedTextField
                  label="Additional Areas"
                  variant="outlined"
                />
              </Grid2>
            </Grid2>
            <SwitchButton label="Garage" />
            <SwitchButton label="Parking Slot" />
            <SwitchButton label="Garden" />
          </Fieldset>
          <Fieldset title="Notes" key={"notes"}>
            <OutlinedTextField
              label=""
              variant="outlined"
              multiline
              placeholder="Enter Additional notes"
              minRows={7}
            />
          </Fieldset>
        </Grid2>
      </Grid2>
    </ContentWrapper>
  );
};

export default SaveProperty;
