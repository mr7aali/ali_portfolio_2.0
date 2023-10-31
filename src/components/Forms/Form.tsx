import { type } from "os";
import React, { ReactElement, ReactNode } from "react";
import { useForm, FormProvider, useFormContext, SubmitHandler } from "react-hook-form";

type FormConfig={
    defaultValues?:Object;
}
type FormProps={
    children?:ReactElement | ReactNode;
    submitHandler:SubmitHandler<any>
} & FormConfig


const Form = ({ children, submitHandler, defaultValues }:FormProps) => {
  
  const formConfig:FormConfig={};
  
    const methods = useForm();

  const onSubmit = (data:any) => console.log(data);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <input type="submit" />
      </form>
    </FormProvider>
  );
};

export default Form;
