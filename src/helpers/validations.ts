import * as yup from "yup";
import { PropertyDetailsFormValues } from "./Interfaces";
import { ISignInDto } from "../api/axios-client";

const propertyDetailsSchema: yup.ObjectSchema<PropertyDetailsFormValues> = yup
  .object()
  .shape({
    address: yup
      .object({
        addressLine1: yup.string().required("Address line1 is required"),
        addressLine2: yup.string().required("Address line2 is required"),
        city: yup.string().required("City is required"),
        county: yup.string().required("County is required"),
        postCode: yup.string().required("Post code is required"),
        country: yup.string().required("Country is required"),
      })
      .required("Address is required"),
    property: yup
      .object({
        propertyType: yup.string().required("Property type is required"),
        bedrooms: yup.string().required("Bedrooms are required"),
      })
      .required("Property details are required"),
  })
  .required();

const loginSchema: yup.ObjectSchema<ISignInDto> = yup.object().shape({
  email: yup.string().email().required("Email is required"),
  password: yup.string().required("Password is required"),
});

const validate = {
  propertyDetailsSchema,
  loginSchema,
};

export default validate;
