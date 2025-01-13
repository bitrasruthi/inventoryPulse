import Grid2 from "@mui/material/Grid2";
import Fieldset from "../../components/fieldSet";
import OutlinedTextField from "../../components/outlinedTextField";
import ContentWrapper from "../../components/contentWrapper";
import SelectField from "../../components/selectField";
import { ClientOptions } from "../../types/type";

const AddInspection = () => {
  const inspectionType: ClientOptions[] = [
    { label: "name", value: "value" },
    { label: "name", value: "value" },
    { label: "name", value: "value" },
    { label: "name", value: "value" },
  ];

  return (
    <ContentWrapper>
      <Grid2 spacing={4} container size={{ sm: 12, md: 6 }}>
        <Grid2 size={{ sm: 12, md: 6 }} rowSpacing={4}>
          <Fieldset title="General Info" key={"inspectionInfo"}>
            <OutlinedTextField
              label="Inspection Name"
              variant="outlined"
              placeholder="Enter inspection name"
            />
            <SelectField options={inspectionType} label="Template" />
            <SelectField options={inspectionType} label="Inspection Type" />
          </Fieldset>
        </Grid2>
        <Grid2 size={{ sm: 12, md: 6 }} rowSpacing={4}>
          <Fieldset title="Notes" key={"InspectionNotes"}>
            <SelectField options={inspectionType} label="Location of Keys" />
            <SelectField
              options={inspectionType}
              label="Key Return Instructions"
            />
            <OutlinedTextField
              label="Internal Notes"
              variant="outlined"
              placeholder="Enter detail note"
              multiline
              maxRows={5}
              minRows={5}
            />
          </Fieldset>
        </Grid2>
      </Grid2>
    </ContentWrapper>
  );
};

export default AddInspection;
