import { MenuItemProps, SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export interface viewMenuInterface {
  id: number;
  label: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
}

export interface IMenuItemExtendProps extends MenuItemProps {
  label: string;
  icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
}

export interface PropertyDetailsFormValues {
  address: {
    addressLine1: String;
    addressLine2: String;
    city: String;
    county: String;
    postCode: String;
    country: String;
    client?: String;
  };
  property: {
    propertyType: String;
    bedrooms: String;
  };
}
