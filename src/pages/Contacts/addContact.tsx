import { Grid2 } from "@mui/material";
import ContentWrapper from "../../components/contentWrapper";
import Fieldset from "../../components/fieldSet";
import SelectField from "../../components/selectField";
import { ClientOptions } from "../../types/type";
import OutlinedTextField from "../../components/outlinedTextField";
import SwitchButton from "../../components/switchButton";
import { UseFormReturn } from "react-hook-form";
import { PropertyDetailsFormValues } from "../../helpers/Interfaces";

interface IProps {
  formProps: UseFormReturn<PropertyDetailsFormValues>;
}

const AddContact: React.FC<IProps> = ({ formProps }) => {
  const contact: ClientOptions[] = [
    { label: "Mr", value: "value" },
    { label: "Mrs", value: "value" },
    { label: "Miss", value: "value" },
  ];

  return (
    <ContentWrapper>
      <Grid2 spacing={4} container size={{ xs: 12, md: 6 }}>
        <Grid2 size={{ xs: 12, md: 6 }} rowSpacing={4}>
          <Fieldset title="Basic Info" key={"basic_info"}>
            <Grid2 container spacing={{ xs: 0, md: 2 }}>
              <Grid2 size={{ xs: 12, md: 6 }}>
                <SelectField label="Title" options={contact} />
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
            <OutlinedTextField
              label="Note"
              variant="outlined"
              multiline
              placeholder="Enter Other Details"
              minRows={7}
            />
          </Fieldset>
        </Grid2>
        <Grid2 size={{ sm: 12, md: 6 }} rowSpacing={2}>
          <Fieldset title="Settings" key={"notes"}>
            <SwitchButton label="Signee" />
            <SwitchButton label="Notify of Conduct Date" />
            <SwitchButton label="Deliver Completed Report" />
          </Fieldset>
        </Grid2>
      </Grid2>
    </ContentWrapper>
  );
};

export default AddContact;
