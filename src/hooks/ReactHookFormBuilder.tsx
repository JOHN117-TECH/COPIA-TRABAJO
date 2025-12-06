"use client";

import React from "react";
import { FormProvider, useFormContext } from "react-hook-form";
import clsx from "clsx";
import { DynamicFormBuilder } from "@/models/dynamicForm.model";

export const DynamicFormProvider = ({
  className = "",
  children,
  methods,
  onSubmitAction,
}: DynamicFormBuilder) => {
  
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={onSubmitAction}
        className={clsx({
          "flex flex-col gap-y-3 bg-transparent!": true,
          "py-8 px-4": className.length == 0,
          [className]: className.length > 0,
        })}
      >
        {children}
      </form>
    </FormProvider>
  );
};

export const getFormContext = () => {
  const formContext = useFormContext();

  return formContext;
};
