"use client";

import { useContext } from "react";
import { StateSelect } from "react-country-state-city";
import SelectLocationContext from "@/hooks/SelectLocationContext";
import { StateFieldProps } from "@/models/locationSelect.model";
import "./CountryStateCity.css";

const StateField = ({ countryId, className = "" }: StateFieldProps) => {
  const context = useContext(SelectLocationContext);

  return (
    <StateSelect
      countryid={countryId}
      inputClassName={className}
      onChange={(_state) => {
        if ('id' in _state) {
          context?.setStateId(_state.id);
        }
      }}
      onTextChange={() => {}}
      placeholder="Select State"
    />
  );
};

export default StateField;
