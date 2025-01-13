import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const useFormHook = (schema: yup.ObjectSchema<any>) => {
  const form = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const {
    register,
    handleSubmit,
    formState,
    control,
    reset,
    getValues,
    setValue,
    watch,
    clearErrors,
  } = form;
  const { errors, isSubmitted } = formState;

  return {
    setValue,
    register,
    handleSubmit,
    control,
    errors,
    Controller,
    reset,
    getValues,
    watch,
    clearErrors,
    form,
    isSubmitted,
  };
};
