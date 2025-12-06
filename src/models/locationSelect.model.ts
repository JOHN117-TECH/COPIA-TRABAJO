import { MouseEvent } from "react";

export interface CityFieldProps {
  countryId: number;
  stateId: number;
  className?: string;
}

export interface CountryFieldProps {
  className?: string;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
}

export interface StateFieldProps {
  countryId: number;
  className?: string;
}
