import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import HomeIcon from "../assets/icons/homeIcon";
import AddHomeIcon from "../assets/icons/addHomeIcon";
import ImportIcon from "../assets/icons/ImportIcon";

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
