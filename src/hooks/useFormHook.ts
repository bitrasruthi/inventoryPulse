import { useForm, UseFormReturn } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const useFormHook = <T extends yup.AnyObjectSchema>(
  schema?: T
): {
  form: UseFormReturn<yup.InferType<T>>;
} => {
  const form = useForm<yup.InferType<T>>({
    mode: "onChange",
    resolver: schema ? yupResolver(schema) : undefined,
  });

  return {
    form,
  };
};
