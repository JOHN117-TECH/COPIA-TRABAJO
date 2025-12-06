"use client";

import clsx from "clsx";
import Modal from "../modal/Modal"; 
import PhoneField from "./PhoneField";
import GetCurrentInstance from "@/hooks/useGetCurrentInstance";
import ModalPrivacyPolicy from "./modalPrivacyPolicy/ModalPrivacyPolicy";

import { useEffect, useState } from "react"; 
import { useTranslations } from "next-intl";
import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";
import {
  ErrorFieldProps,
  FormFieldProps,
  LabelFieldProps,
} from "@/models/formField.model";
import { useSingleFlatpageQueryQuery } from "@/graphql/flatPage/queries/singleFlatPage.generated";
import PasswordValidationStatus from "@/app/[locale]/(auth)/signup/components/PasswordValidationStatus";
import { useGetAddressSuggestionsQuery } from "@/graphql/dynamicForms/queries/getAddressSuggestions.generated";
import { usePlaceDetailsQuery } from "@/graphql/dynamicForms/queries/placeDetails.generated";

const Label = ({ field }: LabelFieldProps) => {
  const t = useTranslations("DynamicFormsFields");
  return (
    <label
      htmlFor={field.name}
      className="text-sm capitalize font-medium text-(--label-text)"
    >
      {t(field.label)}
    </label>
  );
};

const Errors = <T extends FieldValues>({
  field,
  errors,
}: ErrorFieldProps<T>) => {
  return (
    <>
      {errors[field.name] && (
        <div className="mt-1 flex justify-start items-center gap-1">
          <i className="icon-info text-(--notifications-error-100)" />
          <p className="text-(--notifications-error-100) text-xs m-0">
            {errors[field.name]?.message as string}
          </p>
        </div>
      )}
    </>
  );
};

const getInputState = (fieldName: string, errors: any, value: any, isSubmitted: boolean) => {
  if (errors[fieldName]) return "error";
  if (isSubmitted && value && !errors[fieldName]) return "success";
  return "default";
};

const FormField = <T extends FieldValues>({
  field,
  register,
  control,
  required = true,
  errors,
  watch,
  customWidths,
  showPasswordRules, 
  onPasswordFocus,
  onPlaceSelected,
  externalOptions, 
  externalOptionsProvided
}: FormFieldProps<T>) => {
  const t = useTranslations("DynamicFormsFields");
  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const placeholderText = `${field.placeholder || t(field.label)}${field.required ? "*" : ""}`;
  const { formState, setValue, trigger } = useFormContext();
  const { isSubmitted } = formState;
  const password = watch("password" as Path<T>);
  const rePassword = watch("rePassword" as Path<T>);
  const terms = watch("acceptTerms" as Path<T>);
  const newAddress = watch("useNewAddress" as Path<T>);
  const instanceId = GetCurrentInstance();
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [selectedPlaceId, setSelectedPlaceId] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<"main" | "shipping" | null>(null);
  const [hasSelectedSuggestion, setHasSelectedSuggestion] = useState(false);
  const [touchedAddress, setTouchedAddress] = useState(false);
  const [touchedAddressShipping, setTouchedAddressShipping] = useState(false);
  const addressFields = ["address", "cityId", "regionId", "countryId", "zipCode", "addressShipping", "regionId_2", "cityid_2", "countryId_2_", "zipCode_2"];
  const isZipField = ["zipCode", "zipCode_2"].includes(field.name);
  const isAddressInputField = ["address", "addressShipping"].includes(field.name);
  const autoFlagName = (name: string) => `_autofilled_${name}`;
  const isAutoFilled = !!watch(autoFlagName(field.name) as any);

  const { data: suggestionsData } = useGetAddressSuggestionsQuery({
    variables: {
      instanceId: instanceId,
      address: isZipField ? "" : inputValue,
      postalCode: isZipField ? inputValue : "",
    },
    // skip: isZipField ? inputValue.length < 2 : inputValue.length < 3,
    skip: !(isAddressInputField || isZipField) || (isZipField ? inputValue.length < 2 : inputValue.length < 3),
    fetchPolicy: "no-cache",
  });


  const { data: placeData } = usePlaceDetailsQuery({
    variables: {
      instanceId: instanceId,
      placeId: selectedPlaceId ?? "",
    },
    skip: !selectedPlaceId,
  });

  const clearFields = (fields: string[]) => {
    fields.forEach(f => {
      setValue(f, "", { shouldValidate: false, shouldDirty: false })
      setValue(autoFlagName(f) as any, false, { shouldValidate: false, shouldDirty: false });
    });
  };

  useEffect(() => {
    if (suggestionsData?.addressSuggestions && !hasSelectedSuggestion) {
      setSuggestions(suggestionsData.addressSuggestions);
      setShowSuggestions(true);
    }
  }, [suggestionsData, hasSelectedSuggestion]);

  useEffect(() => {
    if (placeData?.getPlaceDetails) {
      const details = placeData.getPlaceDetails;
      const updatedAutoFilled: Record<string, boolean> = {};

      const updateField = (name: string, value?: string | null) => {
        const hasValue = Boolean(value);
        if (hasValue){
          setValue(name as any, value, {
            shouldDirty: true,
            shouldTouch: true,
            shouldValidate: true,
          });
        } else {}
        setValue(autoFlagName(name) as any, hasValue, { shouldValidate: false, shouldDirty: false });
        updatedAutoFilled[name] = hasValue;
      };
      
      if (activeSection === "main") {
        clearFields(["cityId", "countryId", "regionId", "zipCode", "address"]);
        updateField("cityId", details.city);
        updateField("countryId", details.country);
        updateField("regionId", details.state);
        updateField("zipCode", details.postalCode);
        updateField("address", details.fullAddress)
      }
      if (activeSection === "shipping") {
        clearFields(["cityid_2", "countryId_2_", "regionId_2", "zipCode_2", "addressShipping"])
        updateField("cityid_2", details.city);
        updateField("countryId_2_", details.country);
        updateField("regionId_2", details.state);
        updateField("zipCode_2", details.postalCode);
        updateField("addressShipping", details.fullAddress)
      }
    }
  }, [placeData?.getPlaceDetails, setValue, activeSection]);

  const handleSuggestionClick = (suggestion: any) => {
    setHasSelectedSuggestion(true);
    setInputValue(suggestion.description);
    setSelectedPlaceId(suggestion.placeId);
    setShowSuggestions(false);
    setValue(field.name as Path<T>, suggestion.description, {
      shouldValidate: true,
      shouldTouch: true,
      shouldDirty: true,
    });
    
    const section =
      field.name.includes("Shipping") || field.name.endsWith("_2")
        ? "shipping"
        : "main";

    setActiveSection(section);

    if (onPlaceSelected) {
      onPlaceSelected(section, suggestion.placeId);
    }
  };

  const isAddressField = addressFields.includes(field.name);
  const value = watch(field.name as Path<T>);
  const inputState = getInputState(field.name, errors, value, isSubmitted);
  const baseInputClasses = "appearance-none outline-none w-full py-2 px-1 border-b-1 disabled:text-(--input-disabled-text)";
  const stateClasses = {
    default: "border-(--input-default-border) text-(--input-default-text) focus:border-(--input-active-border)",
    error: "border-(--notifications-error-100) text-(--notifications-error-100) focus:border-(--notifications-error-100)",
    success: "border-(--notifications-success-100) text-(--notifications-success-100) focus:border-(--notifications-success-100)",
  };

  const exclusivePairs = [
    ["sameAddress", "useNewAddress"],
  ];

  const handleExclusiveChange = (name: string, value: boolean) => {
    const pair = exclusivePairs.find(([a, b]) => a === name || b === name);
    if (!pair) return;

    const otherName = pair[0] === name ? pair[1] : pair[0];
    if (value) {
      setValue(otherName, false, { shouldValidate: true, shouldDirty: true });
    }
  };

  const { data } = useSingleFlatpageQueryQuery({
    variables: {
      slug: String("privacy-policy"),
      instanceId: GetCurrentInstance()
    },
  });

  const {
    onBlur: rhfOnBlur,
    onChange: rhfOnChange,
    name,
    ref,
    ...rest
  } = register(field.name as Path<T>, { required: field.required });

  const loadModalData = () => {
    try {
      setModalContent(data?.flatpage?.content || "");
      setShowModal(true);
    } catch (e) {
      console.error(e);
    }
  };
  const closeModalAcceptTerms = (value: boolean) => {
    setValue('acceptTerms', value)
    setShowModal(false);
  };

  return (
    <div
      className={clsx(
        "flex flex-col px-1 my-1",
        customWidths?.[field.name] ??
          (field.width === "FULL"
            ? "w-full"
            : field.width === "HALF"
            ? "w-full md:w-1/2"
            : "w-full")
      )}
    >
      {field.type === "CHECKBOX" && (
        <>
          {field.options?.map((option, idx) => {
            return (
              <div key={idx} className="mt-2">
                <label
                  key={`${option.value}_${option.field.id}_${idx}`}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type={field.type}
                    id={option.label}
                    {...register(field.name as Path<T>, { 
                      required: field.required, 
                      onChange: (e) => {
                        if (field.label === 'acceptTerms') {
                          loadModalData()
                        } else {
                          const checked = e.target.checked;
                          setValue(field.name as Path<T>, checked, {
                            shouldValidate: true,
                            shouldDirty: true,
                          });
                          handleExclusiveChange(field.name, checked);
                        }
                      }, 
                    })}
                    className="peer hidden"
                  />
                  <span
                    className={clsx(
                      "transition-colors duration-200 border-(--aqua-medium)", 
                      "w-4 h-4 flex items-center justify-center border-2 rounded-xs text-transparent", 
                      {
                        "bg-(--aqua-medium) border-(--aqua-medium) text-white": terms && field.label === "acceptTerms",
                        "peer-checked:bg-(--aqua-medium) peer-checked:border-(--aqua-medium) peer-checked:text-white": field.label !== "acceptTerms"
                      }
                    )}
                  >
                    <i className="icon-check text-base"></i>
                  </span>
                  <span className="text-base text-(--input-default-text)" onClick={(e) => field.label === 'acceptTerms' &&  e.preventDefault()}>
                    {t(option.label)}
                  </span>
                  {field.label === "acceptTerms" && (
                    <span className="text-(--aqua-100) underline cursor-pointer" onClick={loadModalData}>
                      {t("privacyPolicy")}
                    </span>
                  )}
                </label>
              </div>
            )
          })}
          <Errors field={field} errors={errors} />
        </>
      )}

      {["SELECT", "SELECT_COUNTRY"].includes(field.type) && (
        <Controller
          name={field.name as Path<T>}
          control={control}
          rules={{ required: field.required }}
          render={({ field: controllerField }) => {
            const selected = controllerField.value ?? "";
            const finalOptions = externalOptions ?? field.options ?? [];

            const toggleValue = (value: string | number) => {
              controllerField.onChange(value ? String(value) : "");
              setOpen(false);
            };

            const isSelected = (value: string | number) =>
              String(selected) === String(value);

            const getDisplayText = () => {
              if (selected !== undefined && selected !== null && String(selected) !== "") {
                const found = finalOptions.find((opt) => String(opt.value) === String(selected));
                if (found) {
                  return externalOptionsProvided ? found.label : t(found.label);
                }
              }
              return placeholderText;
            };

            if (controllerField.value === undefined || controllerField.value === null) {
              controllerField.onChange("");
            }

            return (
              <>
                {isFocused ? <Label field={field} /> : <p className="pb-1" />}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setOpen(!open)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => {setIsFocused(false); setOpen(false)}}
                    className={clsx(
                      "group w-full text-left px-2 py-2 border-b bg-(--input-bg) truncate border-(--input-default-border) text-(--input-default-text) focus:border-(--input-active-border) flex justify-between items-center",
                      {
                        "text-(--select-placeholder-text)": !selected,
                        "text-(--select-default-text)": selected,
                        "is-opened": open,
                      },
                      baseInputClasses, stateClasses[inputState]
                    )}
                  >
                    {getDisplayText()}
                    <i
                      className={clsx(
                        "icon-chevron-down text-xl ml-2 relative inline-block text-(--gray-60) transform-gpu transition-transform ease-in-out duration-300",
                        open ? "rotate-180 top-[-4px]" : "rotate-0 top-[-1px]"
                      )}
                    />
                  </button>

                  {open && (
                    <div className="absolute mt-1 border-b border-x border-(--black) rounded-b-[16px] bg-white shadow z-10 overflow-y-auto">
                      {finalOptions.map((option, idx) => {
                        const labelToDisplay = externalOptionsProvided ? option.label : t(option.label);
                        return (
                          <button
                            key={`${option.value}_${idx}`}
                            onMouseDown={() => toggleValue(option.value)}
                            className={clsx(
                              "px-3 py-2 cursor-pointer hover:bg-(--aqua-00) text-(--black) text-base w-[100%] text-left",
                              isSelected(option.value) && "bg-(--gray-10)"
                            )}
                          >
                            {labelToDisplay}
                          </button>
                        ); 
                      })}
                    </div>
                  )}
                </div>

                <Errors field={field} errors={errors} />
              </>
            );
          }}
        />
      )}

      {field.type === "TEXTAREA" && (
        <>
          {isFocused ? <Label field={field} /> : <p className="pb-1"></p>}
          <textarea
            className={clsx(baseInputClasses, stateClasses[inputState])}
            placeholder={placeholderText}
            id={field.name}
            onFocus={() => setIsFocused(true)}
            {...register(field.name as Path<T>, {
              required: field.required,
              onBlur: (e) => {
                setIsFocused(false);
                rhfOnBlur(e);
              },
            })}
          ></textarea>
          <Errors field={field} errors={errors} />
        </>
      )}
      {(field.type === "TEXT" ||
        field.type === "EMAIL" ||
        field.type === "PASSWORD" ||
        field.type === "NUMBER") && (
        <>
          {isFocused ? <Label field={field} /> : <p className="pb-1"></p>}
          {field.type === "PASSWORD" ? (
            <div className="flex items-center">
              <div className="relative flex-1">
                <input
                  className={clsx(baseInputClasses, stateClasses[inputState])}
                  type={showPassword ? "text" : "password"}
                  id={field.name}
                  onFocus={() => {
                    setIsFocused(true)
                    if ((field.name === "password" || field.name === "rePassword") && onPasswordFocus) {
                      onPasswordFocus();
                    }
                  }}
                  {...register(field.name as Path<T>, {
                    required: field.required,
                    onBlur: (e) => {
                      setIsFocused(false);
                      rhfOnBlur(e);
                    },
                  })}
                  placeholder={placeholderText}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-(--black-100)"
                  tabIndex={-1}
                >
                  <i className={`icon-eye text-(----gray-70) ${stateClasses[inputState]}`} />
                </button>
              </div>
              {showPasswordRules && field.name === "password" && (
                <PasswordValidationStatus
                  password={Array.isArray(password) ? password[0] ?? "" : password ?? ""}
                  mode="rules"
                />
              )}
              {showPasswordRules && field.name === "rePassword" && (
                <PasswordValidationStatus
                  password={Array.isArray(password) ? password[0] ?? "" : password ?? ""}
                  confirmPassword={Array.isArray(rePassword) ? rePassword[0] ?? "" : rePassword ?? ""}
                  mode="match"
                />
              )}
            </div>
          ) : (
            <div className="relative">
              <input
                className={`${baseInputClasses} ${stateClasses[inputState]} bg-(--input-bg)`}
                type={field.type as "text" | "email" | "number"}
                id={field.name}
                onFocus={() => {
                  setIsFocused(true)
                  if (field.name === "address") {
                    setTouchedAddress(true);
                  }
                  if (field.name === "addressShipping") {
                    setTouchedAddressShipping(true)
                  }
                }}
                disabled={isAutoFilled && !isAddressInputField && !isZipField}
                placeholder={placeholderText}
                {...register(field.name as Path<T>, {
                  required: field.required,
                  onChange:(e) => {
                    const val = e.target.value;
                    setInputValue(val);
                    setHasSelectedSuggestion(false);
                    if (!isAddressField && !isZipField) {
                      setValue(field.name as Path<T>, val);
                      return;
                    }

                    if (!isZipField && !isAddressInputField) {
                      setValue(field.name as Path<T>, val);
                    }
                    // if (!isAddressField) setValue(field.name as Path<T>, val);
                  },
                  onBlur: (e) => {
                    setIsFocused(false);
                    rhfOnBlur(e);
                    if (field.name === "address") {
                      const val = e.target.value.trim();
                      if (touchedAddress && val === "") {
                        trigger("address"); 
                      }
                    }
                    if (newAddress === true && field.name === "addressShipping" ) {
                      const val = e.target.value.trim();
                      if (touchedAddressShipping && val === "") {
                        trigger("addressShipping"); 
                      }
                    }
                  },
                })}
              />
              {isAddressField && showSuggestions && suggestions.length > 0 && (
                <ul className="absolute mt-1 border-b border-x border-(--black) rounded-b-[16px] bg-white shadow z-10 overflow-y-auto text-(--black) text-base text-left w-full max-h-40">
                  {suggestions.map((s) => (
                    <li
                      key={s.placeId}
                      onClick={() => handleSuggestionClick(s)}
                      className="px-3 py-2 hover:bg-(--aqua-00) cursor-pointer text-sm"
                    >
                      {s.description}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          <Errors field={field} errors={errors} />
        </>
      )}
      {field.type === "TEL" && (
        <>
          {isFocused ? <Label field={field} /> : <p className="pb-1"></p>}
          <PhoneField
            {...register(field.name as Path<T>, { required: field.required })}
            setIsFocused={setIsFocused}
            placeholder={placeholderText}
          />
          <Errors field={field} errors={errors} />
        </>
      )}
      {field?.type === "RADIO" && (
        <>
          <Label field={field} />

          <div className="flex flex-col gap-2">
            {field.options?.map((option, idx) => (
              <label
                key={`${option.value}_${option.field.id}_${idx}`}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="radio"
                  value={option.value}
                  {...register(field.name as Path<T>, {required: field.required})}
                  name={field.name} // importante para agrupar los radios
                  className="appearance-none w-4 h-4 rounded-full border-2 border-(--aqua-medium) relative cursor-pointer checked:after:content-[''] checked:after:block checked:after:w-2 checked:after:h-2 checked:after:rounded-full checked:after:bg-(--aqua-medium) 
                    checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2"
                />
                <span className="text-(--input-default-text)">
                  {t(option.label)}
                </span>
              </label>
            ))}
          </div>

          <Errors field={field} errors={errors} />
        </>
      )}
      {field?.type === "DATE" && (
        <>
          {isFocused && <Label field={field} />}
          <input
            type="date"
            id={field.name}
            placeholder={placeholderText}
            onFocus={() => setIsFocused(true)}
            className={clsx(baseInputClasses, stateClasses[inputState])}
            {...register(field.name as Path<T>, { 
              required: field.required, 
              onBlur: (e) => {
                setIsFocused(false);
                rhfOnBlur(e);
              },
            })}
          />
          <Errors field={field} errors={errors} />
        </>
      )}
      {field?.type === "TIME" && (
        <>
          {isFocused && <Label field={field} />}
          <input
            type="time"
            id={field.name}
            placeholder={placeholderText}
            onFocus={() => setIsFocused(true)}
            className={clsx(baseInputClasses, stateClasses[inputState])}
            {...register(field.name as Path<T>, { 
              required: field.required, 
              onBlur: (e) => {
                setIsFocused(false);
                rhfOnBlur(e);
              }, 
            })}
          />

          <Errors field={field} errors={errors} />
        </>
      )}
      {field?.type === "DATETIME" && (
        <>
          {isFocused && <Label field={field} />}

          <input
            type="datetime-local"
            id={field.name}
            placeholder={placeholderText}
            onFocus={() => setIsFocused(true)}
            className={clsx(baseInputClasses, stateClasses[inputState])}
            {...register(field.name as Path<T>, { 
              required: field.required, 
              onBlur: (e) => {
                setIsFocused(false);
                rhfOnBlur(e);
              },
            })}
          />

          <Errors field={field} errors={errors} />
        </>
      )}
      {field?.type === "URL" && (
        <>
          {isFocused && <Label field={field} />}

          <input
            type="url"
            id={field.name}
            placeholder={placeholderText}
            onFocus={() => setIsFocused(true)}
            className={clsx(baseInputClasses, stateClasses[inputState])}
            {...register(field.name as Path<T>, { 
              required: field.required, 
              onBlur: (e) => {
                setIsFocused(false);
                rhfOnBlur(e);
              },
            })}
          />
          <Errors field={field} errors={errors} />
        </>
      )}
      {field?.type === "HIDDEN" && (
        <input
          type="hidden"
          id={field.name}
          value={""}
          {...register(field.name as Path<T>)}
        />
      )}
      {field?.type === "RANGE" && (
        <>
          <Label field={field} />

          <input
            type="range"
            id={field.name}
            className="w-full accent-(--aqua-medium) cursor-pointer"
            min={0} // Valor mínimo por defecto, debemos esperar al backend para definirlo
            max={100} // Valor máximo por defecto, debemos esperar al backend para definirlo
            step={1} // Paso por defecto, podemos ajustarlo según sea necesario
            {...register(field.name as Path<T>, { required: field.required })}
          />

          <Errors field={field} errors={errors} />
        </>
      )}
      <Modal isOpen={showModal} onClose={() => closeModalAcceptTerms(false)} showFooterOn="never">
        <ModalPrivacyPolicy modalContent={modalContent} onAcceptTerms={() => closeModalAcceptTerms(true)}/>
      </Modal>
    </div>
  );
};

export default FormField;
