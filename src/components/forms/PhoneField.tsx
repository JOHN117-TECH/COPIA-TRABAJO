// "use client";

// import clsx from "clsx";
// import "./PhoneField.css";
// import { useWatch } from "react-hook-form";
// import PhoneFieldAttrs from "@/models/phone.model";
// import { PhoneInput } from "react-international-phone";
// import { getFormContext } from "@/hooks/ReactHookFormBuilder";

// const PhoneField = ({ name, className = "", setIsFocused, placeholder }: PhoneFieldAttrs) => {
//   const { setValue, control } = getFormContext();
//   const watchedPhone = useWatch({ name, control });

//   const formattedValue =
//     watchedPhone && watchedPhone.toString().startsWith("+")
//       ? watchedPhone
//       : watchedPhone
//       ? `+${watchedPhone}`
//       : "";

//   return (
//     <PhoneInput
//       name={name}
//       value={formattedValue}
//       onChange={(value) => {
//         const normalized = value.startsWith("+") ? value : `+${value}`;
//         setValue(name, normalized, { shouldDirty: true });
//       }}
//       onFocus={() => setIsFocused(true)}
//       onBlur={() => setIsFocused(false)}
//       placeholder={placeholder}
//       inputClassName="w-full"
//       className={clsx({
//         "w-full relative border-b-1 border-[--gray-10]": true,
//         [className]: className.length > 0,
//       })}
//     />
//   );
// };

// export default PhoneField;


"use client";

import "react-phone-input-2/lib/style.css";
import clsx from "clsx";
import "./PhoneField.css";
import { useWatch } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import { getFormContext } from "@/hooks/ReactHookFormBuilder";
import PhoneFieldAttrs from "@/models/phone.model";

const PhoneField = ({ name, className = "", setIsFocused, placeholder }: PhoneFieldAttrs) => {
  const { setValue, control } = getFormContext();
  const watchedPhone = useWatch({ name, control });

  return (
    <PhoneInput
      country={"us"}    
      value={watchedPhone || ""}
      onChange={(value, data) => {
        const normalized = value.startsWith("+") ? value : `+${value}`;
        setValue(name, normalized, { shouldDirty: true });
      }}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      placeholder={placeholder}
      enableSearch           
      inputClass="w-full"
      containerClass={clsx(
        "w-full relative border-b-1 border-[--gray-10]",
        className
      )}
    />
  );
};

export default PhoneField;
