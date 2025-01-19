import { useForm, UseFormReturn } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const useFormHook = <T extends yup.ObjectSchema<any>>(
  schema: T
): {
  form: UseFormReturn<any>;
} => {
  const form = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  return {
    form,
  };
};
