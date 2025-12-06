import { PropsWithChildren } from "react";
import { FieldValues } from "react-hook-form";
import { ZodType, z } from "zod";
import {  FieldProps } from "./formField.model";
import { GetDynamicFormQuery } from "@/graphql/dynamicForms/queries/getDynamicForm.generated";

export interface DynamicFormBuilder extends PropsWithChildren {
  className?: string;
  methods: any;
  schema?: any;
  onSubmitAction: (data: any) => any;
  countryId?: number;
  setCountryId?: (val: number) => void;
  stateId?: number;
  setStateId?: (val: number) => void;
}

export interface DynamicFormProps<T extends FieldValues>
  extends PropsWithChildren {
  fields: FieldNode[];
  schema: z.ZodTypeAny;
  className?: string;
  defaultValues?: Partial<T>;
  customWidths?: Record<string, string>;
  showPasswordRules?: boolean;
  onSubmit: (data: T) => Promise<{ success: boolean; error?: string }>;
}

export interface DynamicFormFieldProps extends PropsWithChildren {
  field: FieldProps;
  schema?: ZodType<any, any, any>;
  customWidths?: Record<string, string>;
  showPasswordRules?: boolean;
  dynamicOptions?: Record<string, { value: string; label: string }[]>;
  onPasswordFocus?: () => void;
  onPlaceSelected?: (section: string, placeId: any) => void;
}



export interface GetDynamicFormResponse {
  contactForm: {
    id: string;
    title: string;
    description: string;
    active: boolean;
    fields: {
      edges: {
        node: DynamicFormField;
      }[];
    };
  } | null;
}

export interface GetContactFormResponse {
  contactForm: {
    id: string;
    title: string;
    description: string;
    active: boolean;
    fields: {
      edges: {
        node: DynamicFormField;
      }[];
    };
  } | null;
}

export interface DynamicFormField {
  id: string;
  form: {
    id: string;
  };
  name: string;
  label: string;
  placeholder?: string;
  fieldType: DynamicFormFieldType;
  required: boolean;
  order: number;
  width: DynamicFormFieldWidth;
  options?: {
    edges: {
      node: DynamicFormFieldOption;
    }[];
  };
}

export type DynamicFormFieldType =
  | 'TEXT' // OK
  | 'EMAIL'// OK
  | 'TEXTAREA' // OK
  | 'TEL'
  | 'SELECT' // OK
  | 'NUMBER'
  | 'CHECKBOX' // OK
  | 'RADIO'
  | 'DATE'
  | 'TIME'
  | 'DATETIME'
  | 'URL'
  | 'FILE'
  | 'PASSWORD' // OK
  | 'HIDDEN'
  | 'RANGE';

export type DynamicFormFieldWidth = 'FULL' | 'HALF';

export interface DynamicFormFieldOption {
  field: {
    id: string;
  };
  label: string;
  value: string;
  order: number;
}

export type FieldNode = NonNullable<
  NonNullable<
    NonNullable<GetDynamicFormQuery['contactForm']>['fields']
  >['edges'][number]
>['node'];

export type MinimalContactFormFieldNode = {
  id: string;
  name: string;
  label: string;
  placeholder?: string;
  fieldType: DynamicFormFieldType;
  required: boolean;
  order: number;
  width: DynamicFormFieldWidth;
  form: {
    id: string;
  };
  dependsOn?: {
    id: string;
    name?: string;
    label?: string;
  } | null;
  options?: {
    edges: ({
      node?: {
        label: string;
        value: string;
        order: number;
        field: {
          id: string;
        };
      } | null;
    } | null)[];
  } | null;
};


