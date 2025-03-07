import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { StepperStepEnum } from "./enum";
import GarageIcon from "../assets/icons/garageIcon";
import Garden from "../assets/icons/garden";
import ParkingSlot from "../assets/icons/parkingSlot";
import slide1 from "../assets/slide1.png";
import { Box } from "@mui/material";
import theme from "../styles/theme";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import BedIcon from "../assets/icons/primaryBedIcon";
import BathIcon from "../assets/icons/primaryBathIcon";
import RestoreOutlinedIcon from "@mui/icons-material/RestoreOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";

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

export const inspectionColors = ["#00BB54", "#EE9300", "#0182FC"];
export const inspectionColors2 = ["#BBEDD1", "#FAE2BB", "#0182FC"];

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
    key: 1,
    label: "View",
    icon: VisibilityOutlinedIcon,
  },
  {
    key: 2,
    label: "Edit",
    icon: EditOutlinedIcon,
  },
  {
    key: 3,
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
    icon: <AssignmentOutlinedIcon />,
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
    label: "Report Settings",
    isActive: false,
    value: "4",
    icon: <SettingsOutlinedIcon />,
  },
  {
    id: 5,
    label: "Activity",
    isActive: false,
    value: "5",
    icon: <RestoreOutlinedIcon />,
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
    icon: <ParkingSlot />,
    value: "Yes",
    description: "Parking Slot",
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
];

export const propertiesListDummy = [
  {
    id: 1,
    status: 1,
    buildingStatus: 1,
    address:
      "115-116, Beaverbrook Town House, Sloane St, London SW16 9PJ, United Kingdom",
    beds: 3,
    baths: 3,
    rooms: 3,
    garage: true,
    parkingSlot: true,
    garden: true,
  },
  {
    id: 1,
    status: 1,
    buildingStatus: 1,
    address:
      "115-116, Beaverbrook Town House, Sloane St, London SW16 9PJ, United Kingdom",
    beds: 3,
    baths: 3,
    rooms: 3,

    garage: true,
    parkingSlot: true,
    garden: true,
  },
];

export const activities = [
  {
    name: "Kumar Raja",
    status: "changed Inspection Type",
    timestamp: "today 04:38 PM",
    action: "Check Out → Check In",
  },
  {
    name: "David Thomas",
    file: "untitled.pdf",
    status: "uploaded a document",
    timestamp: "today 04:30 PM",
    // action: "",
  },
  {
    name: "Kumar Raja",
    status: "changed the status",
    timestamp: "today 04:20 PM",
    action: "Pending → Assigned",
  },
  {
    name: "Kumar Raja",
    status: "added an inspection note",
    timestamp: "today 04:18 PM",
    action:
      "The primary objective of the inspection is to assess the current condition of the property, identify any maintenance issues, ensure compliance with safety regulations, and verify that the property is being used as intended. Regular inspections help in maintaining the property's value, ensuring tenant satisfaction, and addressing potential problems before they escalate.",
  },
];

export const tableDataDummy2 = {
  inspection_id: 5474887,
  inspection_type_id: 1,
  report_key: "bcdaebb6667ac",
  room_order: [
    "4c0bddd6-97e6-40a1-bffd-c8005e67a470",
    "dbc2b0eb-f08d-4447-9a0a-b60fbc8e43ea",
  ],
  rooms: {
    "4c0bddd6-97e6-40a1-bffd-c8005e67a470": {
      id: 61727256,
      uuid: "4c0bddd6-97e6-40a1-bffd-c8005e67a470",
      name: {
        value: "Airing cupboard",
        editable: true,
      },
      block_type: "DETAILED",
      field_order: [
        "c26ea5bf-6e79-402e-8cf8-e164cc588ca5",
        "db2c0f99-4239-46ab-89df-8750d406e427",
        "9a2ab4c6-4d1d-4e2c-8e2b-1216b03336e2",
        "9803492f-002b-4222-948c-9c2e3191bb3b",
        "9cee695c-c521-4436-92ed-e801073c0d77",
      ],
      fields: {
        "c26ea5bf-6e79-402e-8cf8-e164cc588ca5": {
          id: 134652431,
          uuid: "c26ea5bf-6e79-402e-8cf8-e164cc588ca5",
          name: "name",
          label: "Name",
          editable: true,
          placeholder: "Item Name…",
          type: "TEXT",
          source: {
            type: "DICTIONARY",
            dictionary: "items",
          },
          deleted_at: null,
          can_edit_value: true,
          required: true,
          source_id: null,
        },
        "db2c0f99-4239-46ab-89df-8750d406e427": {
          id: 134652432,
          uuid: "db2c0f99-4239-46ab-89df-8750d406e427",
          name: "description",
          label: "Description",
          editable: true,
          placeholder: "Item Description…",
          type: "TEXTAREA",
          source: {
            type: "DICTIONARY",
            dictionary: "descriptions",
          },
          deleted_at: null,
          can_edit_value: true,
          required: false,
          source_id: null,
        },
        "9a2ab4c6-4d1d-4e2c-8e2b-1216b03336e2": {
          id: 134652434,
          uuid: "9a2ab4c6-4d1d-4e2c-8e2b-1216b03336e2",
          name: "9a2ab4c6-4d1d-4e2c-8e2b-1216b03336e2",
          label: "Rating",
          editable: true,
          placeholder: "give rating",
          type: "SCALE",
          source: {
            type: "OPTION_SET",
            option_set: {
              id: 3,
              name: "5 Star",
              editable: false,
              type: 2,
              options: [1, 2, 3, 4, 5],
              accountId: null,
              colors: [],
              deleted_at: null,
            },
          },
          deleted_at: null,
          can_edit_value: true,
          required: false,
          source_id: null,
        },
        "9803492f-002b-4222-948c-9c2e3191bb3b": {
          id: 134652489,
          uuid: "9803492f-002b-4222-948c-9c2e3191bb3b",
          name: "9803492f-002b-4222-948c-9c2e3191bb3b",
          label: "Single Select",
          editable: true,
          placeholder: "Select one",
          type: "SELECT",
          source: {
            type: "OPTIONS",
            options: ["test 2", "test 1"],
          },
          deleted_at: null,
          can_edit_value: true,
          required: false,
          source_id: null,
        },
        "9cee695c-c521-4436-92ed-e801073c0d77": {
          id: 134652490,
          uuid: "9cee695c-c521-4436-92ed-e801073c0d77",
          name: "9cee695c-c521-4436-92ed-e801073c0d77",
          label: "Multi select",
          editable: true,
          placeholder: "Multi select placeholder",
          type: "SELECT_MULTI",
          source: {
            type: "OPTIONS",
            options: ["Option1", "Option2", "Option3"],
          },
          deleted_at: null,
          can_edit_value: true,
          required: false,
          source_id: null,
        },
      },
      item_order: [
        "6a9b1a38-0f34-489f-92b4-bb7acdbf9ee1",
        "fb7e5a3f-767b-4488-8af1-64bbd8e40f43",
      ],
      items: {
        "6a9b1a38-0f34-489f-92b4-bb7acdbf9ee1": {
          id: 526202035,
          uuid: "6a9b1a38-0f34-489f-92b4-bb7acdbf9ee1",
          deleted_at: null,
          values: {
            "9a2ab4c6-4d1d-4e2c-8e2b-1216b03336e2": {
              content: 1,
            },
            "9803492f-002b-4222-948c-9c2e3191bb3b": {
              content: "value2 select",
            },
            "9cee695c-c521-4436-92ed-e801073c0d77": {
              content: ["Option1"],
            },
            "c26ea5bf-6e79-402e-8cf8-e164cc588ca5": {
              content: "item",
            },
            "db2c0f99-4239-46ab-89df-8750d406e427": {
              content: "description values",
            },
          },
          attachments: {},
          previous_attachments: {},
          comments: {},
          actions: {},
          editable: {
            name: true,
            description: true,
            condition: true,
          },
          hide_on_report: false,
          skip_reference: false,
          fields: null,
          field_order: null,
          can_configure_fields: true,
          source_id: {
            id: null,
            type: 1,
          },
          can_add_actions: true,
        },
        "fb7e5a3f-767b-4488-8af1-64bbd8e40f43": {
          id: 526202051,
          uuid: "fb7e5a3f-767b-4488-8af1-64bbd8e40f43",
          deleted_at: null,
          values: {
            "9a2ab4c6-4d1d-4e2c-8e2b-1216b03336e2": {
              content: 2,
            },
            "9803492f-002b-4222-948c-9c2e3191bb3b": {
              content: "selcted value 2",
            },
            "9cee695c-c521-4436-92ed-e801073c0d77": {
              content: "value2",
            },
            "c26ea5bf-6e79-402e-8cf8-e164cc588ca5": {
              content: "item2",
            },
            "db2c0f99-4239-46ab-89df-8750d406e427": {
              content: "desc",
            },
          },
          attachments: {},
          previous_attachments: {},
          comments: {},
          actions: {},
          editable: {
            name: true,
            description: true,
            condition: true,
          },
          hide_on_report: false,
          skip_reference: false,
          fields: null,
          field_order: null,
          can_configure_fields: true,
          source_id: {
            id: null,
            type: 1,
          },
          can_add_actions: true,
        },
      },
      comments: {},
      attachments: {},
      previous_attachments: {},
      deleted_at: null,
      status: null,
      hide_on_report: false,
      skip_reference: false,
      source_id: {
        id: null,
        type: 1,
      },
      option_set_id: null,
      option_set: null,
      can_create_field: true,
      can_add_items: true,
      can_reorder_items: true,
      can_delete_items: true,
      can_configure_fields: true,
      can_add_actions: true,
      locked: false,
    },
    "dbc2b0eb-f08d-4447-9a0a-b60fbc8e43ea": {
      id: 61763898,
      uuid: "dbc2b0eb-f08d-4447-9a0a-b60fbc8e43ea",
      name: {
        value: "Attic",
        editable: true,
      },
      block_type: "DETAILED",
      field_order: [
        "fd663e7d-f14f-4fda-98c6-1c795458ccff",
        "d526ea98-6c17-4c56-911c-78cbb30b68ce",
        "b071e893-ead6-42b4-9d9c-ac71e5d64e67",
        "9d021f0b-d70c-4fb5-bd63-bdbd48442a3f",
        "2feff7a0-b79f-48d0-be6a-6a8c0843f4bb",
      ],
      fields: {
        "fd663e7d-f14f-4fda-98c6-1c795458ccff": {
          id: 134774106,
          uuid: "fd663e7d-f14f-4fda-98c6-1c795458ccff",
          name: "name",
          label: "Name",
          editable: true,
          placeholder: "Item Name…",
          type: "TEXT",
          source: {
            type: "DICTIONARY",
            dictionary: "items",
          },
          deleted_at: null,
          can_edit_value: true,
          required: true,
          source_id: null,
        },
        "d526ea98-6c17-4c56-911c-78cbb30b68ce": {
          id: 134774107,
          uuid: "d526ea98-6c17-4c56-911c-78cbb30b68ce",
          name: "description",
          label: "Description",
          editable: true,
          placeholder: "Item Description…",
          type: "TEXTAREA",
          source: {
            type: "DICTIONARY",
            dictionary: "descriptions",
          },
          deleted_at: null,
          can_edit_value: true,
          required: false,
          source_id: null,
        },
      },
      item_order: ["47624d58-1f4b-4e59-ac56-41cc6c3a0dd2"],
      items: {
        "47624d58-1f4b-4e59-ac56-41cc6c3a0dd2": {
          id: 526450336,
          uuid: "47624d58-1f4b-4e59-ac56-41cc6c3a0dd2",
          deleted_at: null,
          values: {
            "b071e893-ead6-42b4-9d9c-ac71e5d64e67": {
              content: null,
            },
            "9d021f0b-d70c-4fb5-bd63-bdbd48442a3f": {
              content: null,
            },
            "2feff7a0-b79f-48d0-be6a-6a8c0843f4bb": {
              content: null,
            },
            "fd663e7d-f14f-4fda-98c6-1c795458ccff": {
              content: "Accessories",
            },
            "d526ea98-6c17-4c56-911c-78cbb30b68ce": {
              content: null,
            },
          },
          attachments: {},
          previous_attachments: {},
          comments: {},
          actions: {},
          editable: {
            name: true,
            description: true,
            condition: true,
          },
          hide_on_report: false,
          skip_reference: false,
          fields: null,
          field_order: null,
          can_configure_fields: true,
          source_id: {
            id: null,
            type: 1,
          },
          can_add_actions: true,
        },
      },
      comments: {},
      attachments: {},
      previous_attachments: {},
      deleted_at: null,
      status: null,
      hide_on_report: false,
      skip_reference: false,
      source_id: {
        id: null,
        type: 1,
      },
      option_set_id: null,
      option_set: null,
      can_create_field: true,
      can_add_items: true,
      can_reorder_items: true,
      can_delete_items: true,
      can_configure_fields: true,
      can_add_actions: true,
      locked: false,
    },
  },
  read_only: false,
  locked_structure: false,
  locked_field_order: false,
  checklist: {
    items: [],
  },
  attachments: {},
  assets: [],
  conditional_logic_rules: {},
};

export const radioDummyList = [
  { label: "Yes", value: 1 },
  { label: "No", value: 2 },
  { label: "Neutral", value: 3 },
];

export const layoutRadios1 = [
  { label: "Portrait", value: 1 },
  { label: "Landscape", value: 2 },
];
export const layoutRadios2 = [
  { label: "Together", value: 1 },
  { label: "By Responsibility", value: 2 },
  { label: "By Action", value: 3 },
];

export const coverImagesDummy = [
  {
    imageUrl: slide1,
    id: 1,
  },
  {
    imageUrl: slide1,
    id: 2,
  },
  {
    imageUrl: slide1,
    id: 3,
  },
  {
    imageUrl: slide1,
    id: 4,
  },
  {
    imageUrl: slide1,
    id: 5,
  },
  {
    imageUrl: slide1,
    id: 6,
  },
  {
    imageUrl: slide1,
    id: 7,
  },
  {
    imageUrl: slide1,
    id: 8,
  },
];

export const suggestedColors = [
  "#E94F35",
  "#FBBA00",
  "#ffee00",
  "#65b33b",
  "#00aae5",
  "#111",
  "#fff",
];

export const palettes = [
  {
    label: "Main Heading",
    id: 1,
    colors: suggestedColors,
  },
  {
    label: "Column Heading",
    id: 2,
    colors: suggestedColors,
  },
  {
    label: "Sub Heading",
    id: 3,
    colors: suggestedColors,
  },
];

export const itemRadios1 = [
  { label: "Small (4 per row)", value: 1 },
  { label: "Medium (3 per row)", value: 2 },
  { label: "Large (2 per row)", value: 3 },
  { label: "Full (1 per row)", value: 4 },
];
export const itemRadios2 = [
  { label: "After Items", value: 1 },
  { label: "Before Items", value: 2 },
  { label: "After Each Items", value: 3 },
  { label: "After All Sections", value: 4 },
  { label: "Don't Show on Report", value: 5 },
];

export const sectionRadios2 = [
  { label: "After Items", value: 1 },
  { label: "Before Items", value: 2 },
  { label: "After All Sections", value: 3 },
  { label: "Don't Show on Report", value: 4 },
];

export const properyRadios2 = [
  { label: "After All Sections", value: 3 },
  { label: "Don't Show on Report", value: 4 },
];

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <Box
      sx={{
        position: "absolute",
        right: 0,
        top: 0,
        alignItems: "center",
        display: "flex",
        height: "100%",
      }}
    >
      <KeyboardArrowRightIcon
        onClick={onClick}
        style={{
          ...style,
          fontSize: "30px",
          color: "#fff",
          background: theme.palette.primary.main,
          borderRadius: "50%",
          cursor: "pointer",
          zIndex: 1001,
        }}
      />
    </Box>
  );
};

const CustomPrevArrow = (props) => {
  const { style, onClick } = props;
  return (
    <Box
      sx={{
        left: 0,
        top: 0,
        position: "absolute",
        alignItems: "center",
        display: "flex",
        height: "100%",
      }}
    >
      <KeyboardArrowLeftIcon
        onClick={onClick}
        style={{
          ...style,
          fontSize: "30px",
          color: "#fff",
          background: theme.palette.primary.main,
          borderRadius: "50%",
          cursor: "pointer",
          zIndex: 1001,
        }}
      />
    </Box>
  );
};

export const coverImgSettings = {
  arrows: true,
  autoplaySpeed: 6000,
  infinite: false,
  speed: 500,
  slidesToShow: 2.2,
  slidesToScroll: 1,
  nextArrow: <CustomNextArrow />,
  prevArrow: <CustomPrevArrow />,
  initialized: 0,
};
