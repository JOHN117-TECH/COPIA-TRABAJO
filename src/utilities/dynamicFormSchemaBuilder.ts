import { z, ZodTypeAny, ZodString, ZodNumber } from "zod";
import { FieldNode } from "@/models/dynamicForm.model";

export default function buildDynamicSchema(fields: FieldNode[], t: (key: string) => string) {
  const shape: Record<string, ZodTypeAny> = {};

  const shippingFields = [
    "addressShipping",
    "regionId_2",
    "cityid_2",
    "countryId_2_",
    "zipCode_2",
  ];

  fields.forEach((field) => {
    if (!field) return;

    const treatAsOptional = shippingFields.includes(field.name);

    let validator: ZodTypeAny;

    switch (field.fieldType) {
      case "TEXT":
      case "EMAIL":
      case "URL":
      case "PASSWORD":
      case "HIDDEN":
        validator = z.string();
        if (!treatAsOptional && field.required) {
          validator = (validator as ZodString).min(1, {
            message: `${t(field.label)} ${t("isRequired")}`,
          });
        } else {
          validator = (validator as ZodString).optional();
        }
        if (field.fieldType === "EMAIL") {
          validator = (validator as ZodString).email ? (validator as ZodString).email({ message: "Invalid email" }) : validator;
        }
        break;

      case "NUMBER":
      case "RANGE":
      case "TEL":
        validator = z.coerce.number();
        if (!treatAsOptional && field.required) {
          validator = (validator as ZodNumber).min(1, {
            message: `${t(field.label)} ${t("isRequired")}`,
          });
        } else {
          validator = (validator as ZodNumber).optional();
        }
        break;

      case "CHECKBOX":
        validator = z.boolean();
        if (!treatAsOptional && field.required) {
          validator = validator.refine((val) => val === true, {
            message: `${t(field.label)} ${t("mustBeAccepted")}`,
          });
        } else {
          validator = validator.optional();
        }
        break;

      case "SELECT":
      case "RADIO":
        validator = z.string();
        if (!treatAsOptional && field.required) {
          validator = (validator as ZodString).min(1, {
            message: `${t(field.label)} ${t("isRequired")}`,
          });
        } else {
          validator = (validator as ZodString).optional();
        }
        break;

      case "DATE":
      case "TIME":
      case "DATETIME":
        validator = z.string();
        if (!treatAsOptional && field.required) {
          validator = (validator as ZodString).min(1, {
            message: `${t(field.label)} ${t("isRequired")}`,
          });
        } else {
          validator = (validator as ZodString).optional();
        }
        break;

      case "FILE":
        validator = z.any();
        if (!treatAsOptional && field.required) {
          validator = validator.refine((val) => val !== undefined, {
            message: `${t(field.label)} ${t("isRequired")}`,
          });
        } else {
          validator = validator.optional();
        }
        break;

      default:
        validator = z.any().optional();
    }

    shape[field.name] = validator;
  });

  return z.object(shape);
}
