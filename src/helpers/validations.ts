import * as yup from "yup";

const validate = {
  propertyDetailsSchema: yup.object({
    address: yup.object({
      addressLine1: yup.string().required("Address line1 is required"),
      addressLine2: yup.string().required("Address line2 is required"),
      city: yup.string().required("City is required"),
      county: yup.string().required("County is required"),
      postCode: yup.string().required("Post code is required"),
      country: yup.string().required("Country is required"),
    }),
    property: yup.object({
      propertyType: yup.string().required("Type is required"),
      bedrooms: yup.string().required("Bedrooms  is required"),
    }),
  }),
};

export default validate;