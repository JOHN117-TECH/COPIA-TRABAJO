"use client";

import React from "react";
import DynamicForm from "./DynamicForm";
import buildDynamicSchema from "@/utilities/dynamicFormSchemaBuilder";

import { z } from "zod";
import { DocumentNode } from "graphql";
import { useTranslations } from "next-intl";
import { postDynamicForm } from "@/services/postDynamicForm.service";
import { MinimalContactFormFieldNode } from "@/models/dynamicForm.model";
import { mapDynamicFieldToFieldProps } from "@/utilities/adapters/fieldAdapter";
import { useGetDynamicFormQuery } from "@/graphql/dynamicForms/queries/getDynamicForm.generated";
import { useDynamicSelectOptions } from "@/hooks/useDynamicSelectOptions";

/**
 * DynamicFormWrapper
 * -------------------
 * Componente encargado de cargar, construir y renderizar un formulario dinámico
 * basado en la configuración de campos obtenida desde un backend GraphQL.
 *
 * Flujo y funcionamiento:
 * 1. Recibe un `formId` para identificar el formulario y una query GraphQL `formQuery`
 *    para obtener la configuración dinámica del formulario (campos, validaciones, etc).
 * 2. Utiliza un hook generado con Codegen `useGetDynamicFormQuery(useGetDynamicFormQuery)` para obtener los datos
 *    de los campos desde el backend.
 * 3. Construye dinámicamente un esquema de validación con Zod usando `buildDynamicSchema(fields)`,
 *    basado en los campos obtenidos.
 * 4. Renderiza el formulario usando el componente genérico `DynamicForm`, que aplica
 *    el esquema para validación y control.
 * 5. Cada campo es adaptado a las props necesarias por `DynamicForm.Field` a través
 *    de `adaptFieldToFieldProps`.
 * 6. La función `handleSubmit` procesa el envío, llamando a `postDynamicForm` para
 *    enviar los datos al backend.
 * 7. Permite un callback opcional `onSubmit` para manejar la respuesta después del envío.
 * 8. Recibe y renderiza hijos adicionales, como botones u otros componentes.
 *
 * Props:
 * - formId: string - Identificador único del formulario para cargar su configuración.
 * - formQuery: string - Query GraphQL que recupera los campos y la estructura del formulario.
 * - className?: string - Clases CSS para estilizar el contenedor del formulario.
 * - children?: React.ReactNode - Elementos adicionales que se renderizarán dentro del formulario.
 * - onSubmit?: (response: Record<string, unknown>, data: any) => void - Callback para manejar la respuesta del envío. Recibe la respuesta y los datos del formulario.
 * - extraVariables?: object - Objeto de variables adicionales para el envío de la mutación.
 * - sectionDividers?: object - Objeto de componentes para dividir secciones del formulario basado en el nombre del campo. El componente debe ser un componente React el cual se renderizará antes del campo del formulario indicado como la key del objeto. El objeto debe tener la estructura { [fieldName: string]: { component: React.ReactNode, hasDivider?: boolean } }
 *
 *
 * Ejemplo de uso:
 * const sectionDividers = {
 *   firstName: { component: <FormSectionDividerAccount title={t("profile")} /> },
 *   company: { component: <FormSectionDividerAccount title={t("companyDetails")} hasDivider /> },
 *   countryId: { component: <FormSectionDividerAccount title={t("location")} hasDivider /> },
 *   zipCode: { component: <FormSectionDividerAccount title={t("address")} hasDivider /> },
 * };

 * <DynamicFormWrapper
 *   formId="form123"
 *   formQuery={MY_DYNAMIC_FORM_QUERY}
 *   onSubmit={(response) => console.log("Envío exitoso", response)}
 *   extraVariables={{ variable1: "value1", variable2: "value2" }}
 *   sectionDividers={sectionDividers}
 *   className="mi-formulario"
 * >
 *   <Button type="submit">Enviar</Button>
 * </DynamicFormWrapper>
 */

interface DynamicFormWrapperProps {
  formId: string;
  formQuery: DocumentNode;
  className?: string;
  children?: React.ReactNode;
  sectionDividers?: any;
  extraVariables?: Record<string, unknown>;
  initialData?: Record<string, unknown>; 
  onSubmit?: (data: Record<string, unknown>, formData: Record<string, unknown>) => void;
  customWidths?: Record<string, string>;
  onPasswordFocus?: () => void;
  selectedPlaces?: React.Dispatch<React.SetStateAction<Record<string, unknown>>>;
  transformVariables?: (values: Record<string, any>) => Record<string, any>;
}

  const DynamicFormWrapper = ({
    formId,
    formQuery,
    className,
    children,
    onSubmit,
    extraVariables,
    sectionDividers,
    initialData=undefined,
    customWidths,
    onPasswordFocus,
    selectedPlaces, 
    transformVariables
  }: DynamicFormWrapperProps) => {
    const t = useTranslations("Signup");
    const tDynamic = useTranslations("DynamicFormsFields");
    const dynamicOptions = useDynamicSelectOptions();
    const { data, loading, error } = useGetDynamicFormQuery({
    variables: {
        id: formId
      },
    });
    if (loading) return <p>Loading form...</p>;
    if (error) return <p>Error loading form</p>;
        
    const fields =
      data?.contactForm?.fields?.edges
        ?.filter((edge): edge is { node: NonNullable<typeof edge>["node"] } => !!edge?.node)
        .map((edge) => edge.node) ?? [];

    const isPasswordValidationForm = formId === "Q29udGFjdEZvcm1Ob2RlOjU=" || formId === "Q29udGFjdEZvcm1Ob2RlOjc=";

    const buildSchema = () => {
      let schema: z.ZodTypeAny= buildDynamicSchema(fields, tDynamic);
      
      if (isPasswordValidationForm) {
        schema = (schema as z.ZodObject<any>).extend({
          password: z
            .string()
            .min(8, { message: t("lengthPassword") })
            .regex(/[A-Z]/, { message: t("uppercaseValidate") })
            .regex(/[a-z]/, { message: t("lowerValidate") })
            .regex(/[0-9]/, { message: t("numberValidate") })
            .regex(/[^A-Za-z0-9]/, { message: t("symbolValidate") }),
          rePassword: z.string(),
        }).refine((data: any) => data.password === data.rePassword, {
          message: t("errorPassword"),
          path: ["rePassword"],
        }) as unknown as z.ZodObject<any>;
      }

      const shippingFields = [
        "addressShipping",
        "regionId_2",
        "cityid_2",
        "countryId_2_",
        "zipCode_2",
      ];

      schema = schema.superRefine((values: any, ctx) => {
        if (!values?.useNewAddress) return;

        shippingFields.forEach((fieldName) => {
          const val = values?.[fieldName];
          if (val === undefined || val === null || String(val).trim() === "") {
            const fieldDef = fields.find((f: any) => f.name === fieldName);
            const label = fieldDef ? tDynamic(fieldDef.label) : tDynamic(fieldName);
            ctx.addIssue({
              path: [fieldName],
              code: z.ZodIssueCode.custom,
              message: `${label} ${tDynamic("isRequired")}`,
            });
          }
        });
      });

      return schema;
    };

    const schema = buildSchema()

    type FormSchema = z.infer<typeof schema>;
   
    const handleSubmit = async (data: FormSchema) => {
      try {
        let formData = initialData ? {input: {...data, ...extraVariables}} : data;

          if (transformVariables) {
            const transformed = transformVariables(formData);
            formData = transformed;
          }
        const submissionData = {
          ...formData,
          ...(extraVariables ?? {}),
        };
        const result = await postDynamicForm(submissionData, formQuery);

        if (onSubmit) {
          onSubmit(result, submissionData);
        }
        return {
          success: result?.success ?? true,
          error: result?.error,
          result
        };
      } catch (error: unknown) {
        console.error("Error submitting form:", error);
        return {
          success: false,
          error: error instanceof Error ? error.message : "Unknown error",
        };
      }
    };

  return (
    <DynamicForm<FormSchema>
      fields={fields}
      schema={schema}
      onSubmit={handleSubmit}
      className={className}
      defaultValues={initialData}
    >
      <div className="flex flex-wrap mb-4 w-full">
        {fields.map((field) => {
          if (!field) return null;
      
          const divider = sectionDividers?.[field.name];

          return (
            <React.Fragment key={field.name}>
              {divider && divider.component}
              <DynamicForm.Field
                field={mapDynamicFieldToFieldProps(field as unknown as MinimalContactFormFieldNode)}
                schema={schema}
                customWidths={customWidths}
                showPasswordRules={isPasswordValidationForm}
                dynamicOptions={dynamicOptions}
                onPasswordFocus={onPasswordFocus}
                onPlaceSelected={(section, placeId) => {
                  selectedPlaces?.(prev => ({
                    ...prev,
                    [section]: placeId
                  }));
                }}
              />
              {divider && divider.hasDivider &&
                <hr />
              }
            </React.Fragment>
          );
        })}
      </div>
      {children}
    </DynamicForm>
  );
};

export default DynamicFormWrapper;
