"use client";

import SelectLocationContext from "@/hooks/SelectLocationContext";
import { CountryFieldProps } from "@/models/locationSelect.model";
import { useContext } from "react";
import { CountrySelect } from "react-country-state-city";
import "./CountryStateCity.css";

const CountryField = ({ className = "" }: CountryFieldProps) => {
  const context = useContext(SelectLocationContext);

  return (
    <CountrySelect
      inputClassName={className}
      onChange={(_country) => {
        if ('id' in _country) {
          context?.setCountryId(_country.id);
        }
      }}
      onTextChange={() => {}}
      placeholder="Select Country"
    />
  );
};

export default CountryField;
