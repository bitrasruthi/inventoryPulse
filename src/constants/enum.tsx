export enum MenuTypeEnum {
  Inspections = 1,
  Properties = 2,
  Users = 3,
}

export enum FilterTypeEnum {
  InspectionState = 1,
  InspectionType = 2,
}

export enum InspectionColorEnum {
  Green = "#00BB54",
  Orange = "#EE9300",
  Blue = "#0182FC",
}

export enum InspectionBuildingStatusEnum {
  CheckIn = 1,
  CheckOut = 2,
  InventoryCheckIn = 3,
}
export enum InspectionStatusEnum {
  Active = 1,
  Pending = 2,
  InReview = 3,
}

export enum InspectionBuildngStatusTextEnum {
  CheckIn = "Check In",
  CheckOut = "Check Out",
  InventoryCheckIn = "Inventory & Check In",
}
export enum InspectionStatusTextEnum {
  Active = "Active",
  Pending = "Pending",
  InReview = "In Review",
}

export enum CardTypeEnum {
  Inspection = 1,
  Users = 2,
}
