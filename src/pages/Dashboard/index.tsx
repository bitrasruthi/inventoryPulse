import { Container } from "@mui/material";
import { Button } from "rsuite";
import LabelValueCommon from "../../components/labelValueCommon";
import SectionTitleCommon from "../../components/sectionTitleCommon";
import InspectionContactCommon from "../../components/inspectionContactCommon";
import DateTimeCard from "../../components/dateTimeCardCommon";
import ActivityStepper from "../../components/activityStepper";

const Dashboard = () => {
  // const actionButtons = [
  //   { label: 'Disagree', onClick: handleDisagree, variant: 'contained' },
  //   { label: 'Agree', onClick: handleAgree },
  // ] as ButtonProps;

  return (
    <Container>
      <h1>Dashboard</h1>
      <Button appearance="primary">Primary</Button>
      <LabelValueCommon fieldName="Inpection Type" value="Check In" type={1} />
      <LabelValueCommon fieldName="Inpection Type" value="Check In" type={2} />
      <SectionTitleCommon title="Properties Details" />
      <InspectionContactCommon
        fieldName="Kavipriya L"
        value="987654323"
        type={2}
      />
      <DateTimeCard date="15 Dec 2024" time="10:30am" />
      <ActivityStepper />
    </Container>
  );
};

export default Dashboard;
