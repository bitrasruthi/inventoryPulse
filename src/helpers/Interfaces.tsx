import { MenuItemProps, SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import {
  UseFormRegister,
  UseFormHandleSubmit,
  FieldErrors,
  UseFormReturn,
  FieldValues,
} from "react-hook-form";

export interface viewMenuInterface {
  id: number;
  label: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
}

export interface IMenuItemExtendProps extends MenuItemProps {
  label: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
}

export interface PropertyDetailsFormValues {
  address: {
    addressLine1: String;
    addressLine2: String;
    city: String;
    county: String;
    postCode: String;
    country: String;
    client: String;
  };
  property: {
    propertyType: String;
    bedrooms: String;
  };
}

export interface FormProps<T extends FieldValues> {
  register: UseFormRegister<T>;
  handleSubmit: UseFormHandleSubmit<T>;
  errors: FieldErrors<T>;
  reset: UseFormReturn<T>["reset"];
}
