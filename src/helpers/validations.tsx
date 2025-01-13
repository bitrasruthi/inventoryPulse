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
      client: yup.string().required("Client is required"),
    }),
    property: yup.object({
      type: yup.string().required("Type is required"),
      detatchment: yup.string().required("Detachment/Style is required"),
      furnishing: yup.string().required("Furnishing is required"),
      bedrooms: yup.string().required("Bedrooms  is required"),
      bathrooms: yup.string().required("Bathrooms is required"),
    }),
  }),
};

export default validate;
