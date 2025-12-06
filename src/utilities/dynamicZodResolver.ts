import { zodResolver } from "@hookform/resolvers/zod";
import { FieldNode } from "@/models/dynamicForm.model";

export function dynamicZodResolver(schema: any, fields: FieldNode[], t: (key: string) => string) {
  return async (values: any, context: any, options: any) => {
    const baseResolver = zodResolver(schema);

    const result = await baseResolver(values, context, options);

    if (result.errors && typeof result.errors === "object") {
      Object.keys(result.errors).forEach((key) => {
        const err = (result.errors as Record<string, any>)[key];

        if (err?.type === "invalid_type" || err?.message === "Required") {
          const field = fields.find((f:any) => f.name === key);
          if (field) {
            (result.errors as Record<string, any>)[key].message =
              `${t(field.label)} ${t("isRequired")}`;
          }
        }
      });
    }

    return result;
  };
}
