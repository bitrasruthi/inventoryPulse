import { Grid2 } from "@mui/material";
import ContentWrapper from "../../components/contentWrapper";
import Fieldset from "../../components/fieldSet";
import AddressCommon from "../../components/addressCommon";
import SelectField from "../../components/selectField";
import { ClientOptions } from "../../types/type";
import OutlinedTextField from "../../components/outlinedTextField";
import SwitchButton from "../../components/switchButton";
import ProfileUpload from "../../components/profileUpload";
import { UseFormReturn } from "react-hook-form";
import { PropertyDetailsFormValues } from "../../helpers/Interfaces";

interface IProps {
  formProps: UseFormReturn<PropertyDetailsFormValues>;
}

const AddClient: React.FC<IProps> = ({ formProps }) => {
  const client: ClientOptions[] = [
    { label: "name", value: "value" },
    { label: "name", value: "value" },
    { label: "name", value: "value" },
    { label: "name", value: "value" },
  ];
  return (
    <ContentWrapper>
      <Grid2 spacing={4} container size={{ xs: 12, md: 6 }}>
        <Grid2 size={{ xs: 12, md: 6 }} rowSpacing={4}>
          <Fieldset title="Basic Info" key={"basic_info"}>
            <Grid2 container spacing={{ xs: 0, md: 2 }}>
              <Grid2 size={{ xs: 12, md: 6 }}>
                <ProfileUpload
                  title="Choose Profile Picture"
                  image="/broken-image.jpg"
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 6 }}>
                <OutlinedTextField
                  label="Company Name"
                  variant="outlined"
                  placeholder="Enter Company Name"
                />
                <OutlinedTextField
                  label="VAT"
                  variant="outlined"
                  required={true}
                  placeholder="Enter VAT"
                />
              </Grid2>
            </Grid2>
            <OutlinedTextField
              label="Company"
              variant="outlined"
              placeholder="Enter Company"
            />
            <OutlinedTextField
              label="Website"
              variant="outlined"
              placeholder="Enter Website Address"
            />
            <OutlinedTextField label="Billing Email" variant="outlined" />
            <Grid2 container spacing={{ xs: 0, md: 2 }}>
              <Grid2 size={{ xs: 12, md: 6 }}>
                <SelectField label="Booking Notice Period" options={client} />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 6 }}>
                <SelectField
                  label="Show Booked Time slot as"
                  options={client}
                />
              </Grid2>
            </Grid2>
            <OutlinedTextField
              label=""
              variant="outlined"
              multiline
              placeholder="Enter Other Details"
              minRows={7}
            />
          </Fieldset>
          <Fieldset title="Contact Info" key={"contact_info"}>
            <Grid2 container spacing={{ xs: 0, md: 2 }}>
              <Grid2 size={{ xs: 12, md: 6 }}>
                <SelectField label="Title" options={client} />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 6 }}>
                <OutlinedTextField
                  label="Name"
                  variant="outlined"
                  required={true}
                />
              </Grid2>
            </Grid2>
            <OutlinedTextField
              label="Email"
              variant="outlined"
              required={true}
              placeholder="Enter Email"
            />
            <Grid2 container spacing={{ xs: 0, md: 2 }}>
              <Grid2 size={{ xs: 12, md: 6 }}>
                <OutlinedTextField
                  label="Telephone"
                  variant="outlined"
                  placeholder="Enter Number"
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 6 }}>
                <OutlinedTextField label="Mobile" variant="outlined" />
              </Grid2>
            </Grid2>
          </Fieldset>
        </Grid2>
        <Grid2 size={{ sm: 12, md: 6 }} rowSpacing={2}>
          <Fieldset title="Address" key={"address"}>
            <AddressCommon formProps={formProps} />
          </Fieldset>
          <Fieldset title="Settings" key={"settings"}>
            <SwitchButton label="Show Invoice in Menu" />
            <SwitchButton label="Show Integrations" />
            <SwitchButton label="Allow Client to Create Inspections" />
            <SwitchButton label="Allow Client to Edit Appointments" />
            <SwitchButton label="Show Clerk Information" />
          </Fieldset>
        </Grid2>
      </Grid2>
    </ContentWrapper>
  );
};

export default AddClient;
