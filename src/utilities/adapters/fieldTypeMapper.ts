export const mapFieldTypeToInputType = (fieldType: string): string => {
  switch (fieldType) {
    case "TEXT":
    case "TEXTAREA":
      return "text";
    case "EMAIL":
      return "email";
    case "TEL":
      return "tel";
    case "SELECT":
      return "select";
    case "CHECKBOX":
      return "checkbox";
    case "RADIO":
      return "radio";
    case "DATE":
      return "date";
    case "TIME":
      return "time";
    case "DATETIME":
      return "datetime-local";
    case "URL":
      return "url";
    case "FILE":
      return "file";
    case "PASSWORD":
      return "password";
    case "NUMBER":
      return "number";
    case "HIDDEN":
      return "hidden";
    default:
      return "text";
  }
};
