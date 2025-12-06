import SharedFormFieldAttrs from "./sharedFormField.model";

interface PhoneFieldAttrs extends SharedFormFieldAttrs {
  disabled?: boolean;
  placeholder?: string;
  setIsFocused: (value: boolean) => void;
}

export default PhoneFieldAttrs;
