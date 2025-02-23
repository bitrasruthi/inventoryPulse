import { Box, Grid2 } from "@mui/material";
import MuiAlert from "../../../components/MuiAlert";
import ReportsSettingsStyles from "../../../styles/reportSettingsStyles";
import Fieldset from "../../../components/fieldSet";
import MuiRadioButton from "../../../components/MuiRadioButton";
import LabelCommon from "../../../components/labelCommon";
import { useFormHook } from "../../../hooks/useFormHook";
import SwitchButton from "../../../components/switchButton";

const layoutRadios1 = [
  { label: "Portrait", value: 1 },
  { label: "Landscape", value: 2 },
];
const layoutRadios2 = [
  { label: "Together", value: 1 },
  { label: "By Responsibility", value: 2 },
  { label: "By Action", value: 3 },
];

type Props = {};

const ReportSettings = (props: Props) => {
  const { form } = useFormHook();
  const { control } = form;
  return (
    <ReportsSettingsStyles>
      <MuiAlert
        label={
          "Apply the settings and click the ‘Preview’ button to view real-time updates. Clicking the Info icon will help you identify where the settings/changes are reflected."
        }
      />
      <Grid2 container spacing={2}>
        <Grid2 size={6}>
          <Fieldset title="Layout Settings" key={"layout_settings"}>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Box>
                <LabelCommon fieldName={"Orientation"} />
                <MuiRadioButton control={control} radioList={layoutRadios1} />
              </Box>
              <Box>
                <LabelCommon fieldName={"Group"} />
                <MuiRadioButton control={control} radioList={layoutRadios2} />
              </Box>
            </Box>
          </Fieldset>
        </Grid2>
        <Grid2 size={6}>
          <Fieldset title="Settings" key={"settings"}>
            <SwitchButton
              label="Table of Content"
              hasInfoIcon={true}
              isBoldText={true}
            />
            <SwitchButton label="Numbering Modification" hasInfoIcon={true} />
            <SwitchButton label="Show Action Summary on Report" />
          </Fieldset>
        </Grid2>
      </Grid2>
    </ReportsSettingsStyles>
  );
};

export default ReportSettings;
