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
    icon: FormatListBulletedIcon,
  },
  {
    id: 1,
    label: "Calendar",
    isActive: false,
    value: "2",
    icon: CalendarMonthIcon,
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
      { id: 5, name: "Cancelled" },
    ],
  },
  {
    id: 3,
    name: "Inspection Type",
    values: [
      { id: 1, name: "Select/Unselect All" },
      { id: 2, name: "Check in" },
      { id: 2, name: "Check out" },
      { id: 2, name: "Inventory & Check in" },
      { id: 2, name: "Inventory & Schedule of condition" },
    ],
  },
];

export const inspectionBtnList = [
  { id: 1, name: "Existing Property", icon: HomeIcon },
  { id: 2, name: "New Property", icon: AddHomeIcon },
  { id: 3, name: "Import", icon: ImportIcon },
];
