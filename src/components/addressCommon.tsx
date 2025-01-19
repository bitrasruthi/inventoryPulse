import { Grid2 } from "@mui/material";
import OutlinedTextField from "./outlinedTextField";
import SelectField from "./selectField";
import { ClientOptions } from "../types/type";
import { PropertyDetailsFormValues } from "../helpers/Interfaces";
import { UseFormReturn } from "react-hook-form";

interface IProps {
  formProps: UseFormReturn<PropertyDetailsFormValues>;
}

const AddressCommon: React.FC<IProps> = ({ formProps }) => {
  const {
    register,
    formState: { errors },
  } = formProps;

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
        error={!!errors.address?.addressLine1}
        helperText={errors?.address?.addressLine1?.message}
        formProps={register("address.addressLine1")}
      />
      <OutlinedTextField
        label="Address Line 2"
        variant="outlined"
        placeholder="Enter Address Line 2"
        error={!!errors.address?.addressLine2}
        helperText={errors?.address?.addressLine2?.message}
        formProps={register("address.addressLine2")}
      />
      <Grid2 container spacing={{ xs: 0, md: 2 }}>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <OutlinedTextField
            label="City"
            variant="outlined"
            placeholder="Enter City"
            error={!!errors.address?.city}
            helperText={errors?.address?.city?.message}
            formProps={register("address.city")}
          />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <SelectField
            label="County"
            options={client}
            error={!!errors.address?.county}
            helperText={errors?.address?.county?.message}
            {...register("address.county")}
          />
        </Grid2>
      </Grid2>
      <Grid2 container spacing={{ xs: 0, md: 2 }}>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <OutlinedTextField
            variant="outlined"
            label="Postal Code"
            error={!!errors.address?.postCode}
            helperText={errors?.address?.postCode?.message}
            formProps={register("address.postCode")}
          />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <SelectField
            options={client}
            label="Country"
            error={!!errors.address?.country}
            helperText={errors?.address?.country?.message}
            {...register("address.country")}
          />
        </Grid2>
      </Grid2>
    </>
  );
};

export default AddressCommon;
