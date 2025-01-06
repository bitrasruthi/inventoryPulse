import { Box, Grid2 } from "@mui/material";
import ContentWrapper from "../../components/contentWrapper";
import Fieldset from "../../components/fieldSet";
import AddressCommon from "../../components/addressCommon";
import SelectField from "../../components/selectField";
import { ClientOptions } from "../../types/type";
import OutlinedTextField from "../../components/outlinedTextField";
import SwitchButton from "../../components/switchButton";

const AddUser = () => {
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
                <Box
                  sx={{
                    border: "1px solid #ccc",
                    padding: 2,
                    height: 150,
                    mb: 2,
                  }}
                >
                  Left Side Content
                </Box>{" "}
              </Grid2>
              <Grid2 size={{ xs: 12, md: 6 }}>
                <SelectField label="Title" options={client} />
                <OutlinedTextField
                  label="Name"
                  variant="outlined"
                  required={true}
                />
              </Grid2>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <SelectField label="Role" options={client} />
            </Grid2>
            <OutlinedTextField
              label="Email"
              variant="outlined"
              required={true}
            />
            <Grid2 container spacing={{ xs: 0, md: 2 }}>
              <Grid2 size={{ xs: 12, md: 6 }}>
                <OutlinedTextField label="Telephone" variant="outlined" />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 6 }}>
                <OutlinedTextField label="Mobile" variant="outlined" />
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
        </Grid2>
        <Grid2 size={{ sm: 12, md: 6 }} rowSpacing={2}>
          <Fieldset title="Address" key={"address"}>
            <AddressCommon />
          </Fieldset>
          <Fieldset title="Notes" key={"notes"}>
            <SwitchButton label="Login Status" />
            <SwitchButton label="Email Notifications" />
            <SwitchButton label="Create Inspection" />
          </Fieldset>
        </Grid2>
      </Grid2>
    </ContentWrapper>
  );
};

export default AddUser;
