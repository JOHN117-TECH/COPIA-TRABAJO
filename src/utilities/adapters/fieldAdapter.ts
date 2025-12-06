import { FieldProps } from "@/models/formField.model";
import { MinimalContactFormFieldNode } from "@/models/dynamicForm.model"; // Ajusta la ruta

export function mapDynamicFieldToFieldProps(
  field: MinimalContactFormFieldNode
): FieldProps {
  return {
    name: field.name,
    label: field.label,
    type: field.fieldType,
    placeholder: field.placeholder,
    required: field.required,
    width: field.width,
    //@ts-ignore
    dependsOn: field.dependsOn ? { id: field.dependsOn.id, name: field.dependsOn.name, label: field.dependsOn.label} : null,
    options: field.options?.edges
      ?.filter((edge): edge is { node: NonNullable<typeof edge>["node"] } => !!edge?.node)
      .map((edge) => ({
        label: edge.node!.label,
        value: edge.node!.value,
        order: edge.node!.order,
        field: {
          id: edge.node!.field.id,
        },
      })),
    display: "default",
    multiple: false,
  };
}

