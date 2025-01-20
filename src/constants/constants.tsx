import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import HomeIcon from "../assets/icons/homeIcon";
import AddHomeIcon from "../assets/icons/addHomeIcon";
import ImportIcon from "../assets/icons/ImportIcon";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { StepperStepEnum } from "./enum";
import BedIcon from "../assets/icons/bedIcon";
import BathIcon from "../assets/icons/bathIcon";
import GarageIcon from "../assets/icons/garageIcon";
import AdditionalAreas from "../assets/icons/garden";
import Garden from "../assets/icons/garden";
import ParkingSlot from "../assets/icons/parkingSlot";

export const tabMenuList = [
  {
    id: 1,
    label: "List",
    isActive: true,
    value: "1",
    icon: <FormatListBulletedIcon />,
  },
  {
    id: 1,
    label: "Calendar",
    isActive: false,
    value: "2",
    icon: <CalendarMonthIcon />,
  },
] as any;

export const inspectionFilters = [
  { id: 1, name: "Date" },
  {
    id: 2,
    name: "Inspection State",
    values: [
      { id: 1, name: "Select/Unselect All" },
      { id: 2, name: "Assigned" },
      { id: 3, name: "Active" },
      { id: 4, name: "In review" },
      { id: 5, name: "Completed" },
      { id: 6, name: "Closed" },
      { id: 7, name: "Cancelled" },
    ],
  },
  {
    id: 3,
    name: "Inspection Type",
    values: [
      { id: 8, name: "Select/Unselect All" },
      { id: 9, name: "Check in" },
      { id: 10, name: "Check out" },
      { id: 11, name: "Inventory & Check in" },
      { id: 12, name: "Inventory & Schedule of condition" },
    ],
  },
  {
    id: 4,
    name: "Confirmed",
    values: [
      { id: 13, name: "Confirmed" },
      { id: 14, name: "To Be Confirmed" },
      { id: 15, name: "To Be Confirmed By Contact" },
    ],
  },
];

export const inspectionBtnList = [
  { id: 1, name: "Existing Property", icon: HomeIcon },
  { id: 2, name: "New Property", icon: AddHomeIcon },
  { id: 3, name: "Import", icon: ImportIcon },
];

export const inspectionColors = ["#00BB54", "#EE9300", "#0182FC"];

export const inspectionListDummy = [
  {
    id: 1,
    status: 1,
    buildingStatus: 1,
    address:
      "115-116, Beaverbrook Town House, Sloane St, London SW16 9PJ, United Kingdom",
    beds: 3,
    baths: 3,
    buildingType: "Zeltra",
    contact: "Kumar Raja",
    barCodeNum: 23456789,
    date: "2025-01-04T10:15:00Z",
  },
  {
    id: 2,
    status: 2,
    buildingStatus: 2,
    address:
      "115-116, Beaverbrook Town House, Sloane St, London SW16 9PJ, United Kingdom",
    beds: 3,
    baths: 3,
    buildingType: "Zeltra",
    contact: "Kumar Raja",
    barCodeNum: 23456789,
    date: "2025-01-04T10:15:00Z",
  },
  {
    id: 3,
    status: 3,
    buildingStatus: 3,
    address:
      "115-116, Beaverbrook Town House, Sloane St, London SW16 9PJ, United Kingdom",
    beds: 3,
    baths: 3,
    buildingType: "Zeltra",
    contact: "Kumar Raja",
    barCodeNum: 23456789,
    date: "2025-01-04T10:15:00Z",
  },
  {
    id: 4,
    status: 1,
    buildingStatus: 1,
    address:
      "115-116, Beaverbrook Town House, Sloane St, London SW16 9PJ, United Kingdom",
    beds: 3,
    baths: 3,
    buildingType: "Zeltra",
    contact: "Kumar Raja",
    barCodeNum: 23456789,
    date: "2025-01-04T10:15:00Z",
  },
  {
    id: 3,
    status: 3,
    buildingStatus: 3,
    address:
      "115-116, Beaverbrook Town House, Sloane St, London SW16 9PJ, United Kingdom",
    beds: 3,
    baths: 3,
    buildingType: "Zeltra",
    contact: "Kumar Raja",
    barCodeNum: 23456789,
    date: "2025-01-04T10:15:00Z",
  },
  {
    id: 4,
    status: 1,
    buildingStatus: 1,
    address:
      "115-116, Beaverbrook Town House, Sloane St, London SW16 9PJ, United Kingdom",
    beds: 3,
    baths: 3,
    buildingType: "Zeltra",
    contact: "Kumar Raja",
    barCodeNum: 23456789,
    date: "2025-01-04T10:15:00Z",
  },
];

export const userListDummy = [
  {
    id: 1,
    status: 1,
    name: "Oliver Smith",
    phone: "+44 7911 123456",
    email: "johnmathew@mail.com",
    jobType: "Full Time",
    role: "Manager",
  },
  {
    id: 2,
    status: 1,
    name: "Oliver Smith",
    phone: "+44 7911 123456",
    email: "johnmathew@mail.com",
    jobType: "Full Time",
    role: "Admin",
  },
  {
    id: 3,
    status: 1,
    name: "Oliver Smith",
    phone: "+44 7911 123456",
    email: "johnmathew@mail.com",
    jobType: "Full Time",
    role: "Clerk",
  },
  {
    id: 4,
    status: 1,
    name: "Oliver Smith",
    phone: "+44 7911 123456",
    email: "johnmathew@mail.com",
    jobType: "Full Time",
    role: "Manager",
  },
];

export const clientListDummy = [
  {
    id: 1,
    status: 1,
    name: "David Lee",
    companyName: "Land Securities Group plc",
    phone: "+44 7911 123456",
    email: "johnmathew@mail.com",
    address: "Aldwych, London WC2B 4DD, United Kingdom",
  },
  {
    id: 2,
    status: 1,
    name: "David Lee",
    companyName: "Land Securities Group plc",
    phone: "+44 7911 123456",
    email: "johnmathew@mail.com",
    address: "Aldwych, London WC2B 4DD, United Kingdom",
  },
  {
    id: 3,
    status: 1,
    name: "David Lee",
    companyName: "Land Securities Group plc",
    phone: "+44 7911 123456",
    email: "johnmathew@mail.com",
    address: "Aldwych, London WC2B 4DD, United Kingdom",
  },
  {
    id: 4,
    status: 1,
    name: "David Lee",
    companyName: "Land Securities Group plc",
    phone: "+44 7911 123456",
    email: "johnmathew@mail.com",
    address: "Aldwych, London WC2B 4DD, United Kingdom",
  },
];

export const contactListDummy = [
  {
    id: 1,
    status: 1,
    name: "David Lee",
    phone: "+44 7911 123456",
    email: "johnmathew@mail.com",
    role: "Manager",
  },
  {
    id: 2,
    status: 1,
    name: "David Lee",
    phone: "+44 7911 123456",
    email: "johnmathew@mail.com",
    role: "Manager",
  },
  {
    id: 3,
    status: 1,
    name: "David Lee",
    phone: "+44 7911 123456",
    email: "johnmathew@mail.com",
    role: "Manager",
  },
  {
    id: 4,
    status: 1,
    name: "David Lee",
    phone: "+44 7911 123456",
    email: "johnmathew@mail.com",
    role: "Manager",
  },
];

export const userMenuList = [
  {
    id: 1,
    label: "View",
    icon: VisibilityOutlinedIcon,
  },
  {
    id: 2,
    label: "Edit",
    icon: EditOutlinedIcon,
  },
  {
    id: 3,
    label: "Delete",
    icon: DeleteOutlineIcon,
  },
];

export const steps = [
  {
    enum: StepperStepEnum.PropertyDetails,
    label: "Property Details",
    status: 0,
  },
  {
    enum: StepperStepEnum.InspectionDetails,
    label: "Inspection Details",
    status: 0,
  },
  { enum: StepperStepEnum.Schedule, label: "Schedule", status: 0 },
  { enum: StepperStepEnum.Contacts, label: "Contacts", status: 0 },
];

export const inspectionsDetailsMenuList = [
  {
    id: 1,
    label: "Info",
    isActive: true,
    value: "1",
    icon: <InfoOutlinedIcon />,
  },
  {
    id: 2,
    label: "Report",
    isActive: false,
    value: "2",
    icon: <EventNoteOutlinedIcon />,
  },
  {
    id: 3,
    label: "Upload",
    isActive: false,
    value: "3",
    icon: <CloudUploadOutlinedIcon />,
  },
  {
    id: 4,
    label: "Settings",
    isActive: false,
    value: "4",
    icon: <SettingsOutlinedIcon />,
  },
  {
    id: 5,
    label: "Activity",
    isActive: false,
    value: "5",
    icon: <CalendarMonthIcon />,
  },
] as any;

export const propertyDetails = [
  {
    icon: <BedIcon />,
    value: "03",
    description: "Bed Room",
  },
  {
    icon: <BathIcon />,
    value: "03",
    description: "Bath Room",
  },
  {
    icon: <AdditionalAreas />,
    value: "-",
    description: "Additional Areas",
  },
  {
    icon: <GarageIcon />,
    value: "Yes",
    description: "Grage",
  },
  {
    icon: <Garden />,
    value: "Yes",
    description: "Garden",
  },
  {
    icon: <ParkingSlot />,
    value: "No",
    description: "Parking Slot",
  },
];
