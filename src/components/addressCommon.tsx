import { Grid2 } from "@mui/material";
import OutlinedTextField from "./outlinedTextField";
import SelectField from "./selectField";
import { ClientOptions } from "../types/type";

const AddressCommon = () => {
  const client: ClientOptions[] = [
    { label: "name", value: "value" },
    { label: "name", value: "value" },
    { label: "name", value: "value" },
    { label: "name", value: "value" },
  ];
  return (
    <>
      <OutlinedTextField
        label="Address Line 1"
        variant="outlined"
        required={true}
        placeholder="Search Address or Postal Code"
      />
      <OutlinedTextField
        label="Address Line 2"
        variant="outlined"
        placeholder="Enter Address Line 2"
      />
      <Grid2 container spacing={{ xs: 0, md: 2 }}>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <OutlinedTextField
            label="City"
            variant="outlined"
            placeholder="Enter City"
          />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <SelectField label="County" options={client} />
        </Grid2>
      </Grid2>
      <Grid2 container spacing={{ xs: 0, md: 2 }}>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <OutlinedTextField variant="outlined" label="Postal Code"     />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <SelectField options={client} label="Country" />
        </Grid2>
      </Grid2>
    </>
  );
};

export default AddressCommon;
