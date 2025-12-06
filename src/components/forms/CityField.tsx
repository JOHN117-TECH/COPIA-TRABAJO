"use client";

import { useState } from "react";
import { CitySelect } from "react-country-state-city";
import { CityFieldProps } from "@/models/locationSelect.model";
import "./CountryStateCity.css";

type City = {
  name: string;
  id: number;
  state_id: number;
  country_id: number;
};

const CityField = ({ countryId, stateId, className = "" }: CityFieldProps) => {
  const [city, setCity] = useState<City | null>(null);

  return (
    <CitySelect
      countryid={countryId}
      stateid={stateId}
      onChange={(value) => {
        if (typeof value === "object" && value !== null && "name" in value) {
          setCity(value as unknown as City);
        }
      }}
      placeHolder="Select City"
    />
  );
};

export default CityField;
