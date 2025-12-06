import { FieldErrors, FieldValues, UseFormRegister, UseFormWatch } from "react-hook-form";
import { DynamicFormFieldType, DynamicFormFieldOption, DynamicFormFieldWidth } from "./dynamicForm.model";

export interface LabelFieldProps {
  field: {
    name: string;
    label: string;
  };
}

export interface ErrorFieldProps<T extends FieldValues> {
  field: {
    name: string;
  };
  errors: FieldErrors<T>;
}

export interface OptionProps {
  name: string;
  value: string;
  children?: OptionProps[];
}

export interface FieldProps {
  name: string;
  label: string;
  type: DynamicFormFieldType; // antes era string
  placeholder?: string;
  required?: boolean;
  dependsOn?: { name: string } | null; // Añadido para manejar dependencias entre campos
  options?: DynamicFormFieldOption[]; // ya no es edges
  width?: DynamicFormFieldWidth;
  display?: "modal" | "dropdown" | "default"; // Añadido para manejar el tipo de visualización
  multiple?: boolean; // Añadido para manejar campos múltiples
}


export interface FormFieldProps<T extends FieldValues> {
  field: FieldProps;
  control: any;
  register: UseFormRegister<T>;
  required?: boolean;
  errors: FieldErrors<T>;
  watch: UseFormWatch<T>;
  customWidths?: Record<string, string>;
  showPasswordRules?: boolean;
  onPasswordFocus?: () => void;
  disabledByParent?: boolean;
  onPlaceSelected?: (section: "main" | "shipping", placeId: string) => void;
  externalOptions?: { value: string; label: string }[];
  externalOptionsProvided?: boolean;
}

//////////////////////// // 
// Tipo base para nodos genéricos de GraphQL 
interface Node {
  __typename: string;
  id: string;
}

// Tipo para el formulario padre
interface ContactFormNode extends Node {
  __typename: "ContactFormNode";
}

// Tipo para las opciones del campo (aunque está vacío, lo definimos por consistencia)
interface ContactFormFieldOptionEdge {
  __typename: string;
  // puedes añadir más campos aquí si fueran necesarios
}

interface ContactFormFieldOptionNodeConnection {
  __typename: "ContactFormFieldOptionNodeConnection";
  edges: ContactFormFieldOptionEdge[];
}

// Tipo principal del campo del formulario
export interface ContactFormFieldNode extends Node {
  __typename: "ContactFormFieldNode";
  form: ContactFormNode;
  name: string;
  label: string;
  placeholder: string;
  fieldType: "NUMBER" | "TEXT" | "EMAIL" | string; // puedes ajustar según los tipos válidos
  required: boolean;
  order: number;
  width: "FULL" | "HALF" | string; // ajusta si hay más valores posibles
  options: ContactFormFieldOptionNodeConnection;
}

type DependsOn = {
  id: string;
  name?: string;
  label?: string;
} | null;


