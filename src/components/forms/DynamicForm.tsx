"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { z } from "zod";
import {
  DynamicFormProvider,
  getFormContext,
} from "@/hooks/ReactHookFormBuilder";
import SelectLocationContext from "@/hooks/SelectLocationContext";
import {
  DynamicFormFieldProps,
  DynamicFormProps,
} from "@/models/dynamicForm.model";
import FormField from "./FormField";
import type { FieldErrors } from "react-hook-form";
import { dynamicZodResolver } from "@/utilities/dynamicZodResolver";
import { useTranslations } from "next-intl";

const DynamicForm = <T extends FieldValues>({
  fields,
  schema,
  onSubmit,
  className,
  children,
  defaultValues,
}: DynamicFormProps<T>) => {
  const tDynamic = useTranslations("DynamicFormsFields");
  const methods = useForm<z.infer<typeof schema>>({
    resolver: dynamicZodResolver(schema, fields, tDynamic),
    defaultValues,
  });

  const [countryId, setCountryId] = useState(0);
  const [stateId, setStateId] = useState(0);

  const { handleSubmit } = methods;

  const formSubmit: SubmitHandler<T> = async (data) => {
    const result = await onSubmit(data);
    if (!result.success) {
      console.error("❌ Error submitting form:", result.error);
    }
  };

  const handleError = (errors: FieldErrors) => {
    console.error("❌ Validation errors:", errors); // Log temporal para saber qué campos no estan pintandose en el FormField
  };

  return (
    <DynamicFormProvider
      className={className}
      methods={methods}
      onSubmitAction={handleSubmit(formSubmit as SubmitHandler<FieldValues>, handleError)}
    >
      <SelectLocationContext.Provider
        value={{ countryId, setCountryId, stateId, setStateId }}
      >
        <div className="grid gap-4">
          {children}
        </div>
        
      </SelectLocationContext.Provider>
    </DynamicFormProvider>
  );
};

DynamicForm.Field = function Field({ field, customWidths, showPasswordRules, onPasswordFocus, onPlaceSelected, dynamicOptions}: DynamicFormFieldProps) {
  const formContext = getFormContext();
  const { watch } = formContext;
  const value = watch(field.name);
  const options = dynamicOptions?.[field.name];
  const isSelectType = field.type === "SELECT";

  const hasExternalOptions =
    isSelectType &&
    Array.isArray(options) &&
    options.length > 0 &&
    (!Array.isArray(field.options) || field.options.length === 0);

  if (field.dependsOn?.name) {
    const dependsValue = watch(field.dependsOn.name);
    if (!dependsValue) {
      return null;
    }
  }
  
  return (
    <FormField<FieldValues>
      field={field}
      register={formContext.register}
      control={formContext.control}   
      errors={formContext.formState.errors}
      watch={formContext.watch}
      customWidths={customWidths}
      showPasswordRules={showPasswordRules}
      onPasswordFocus={onPasswordFocus}
      onPlaceSelected={onPlaceSelected}
      externalOptions={options}
      externalOptionsProvided={hasExternalOptions}
    />
  );
} as React.FC<DynamicFormFieldProps>;
DynamicForm.Field.displayName = "DynamicFormField";

export default DynamicForm;