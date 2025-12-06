import { euConfig } from "./instances/eu"
import { latConfig } from "./instances/lat"
import { mxConfig } from "./instances/mx"
import { usConfig } from "./instances/us"

export type InstanceKey = "lat" | "mx" | "eu" | "us"

export interface InstanceConfig {
  restrictedRoutes: string[],
  [key: string]: any
  
}

export const configs: Record<InstanceKey, InstanceConfig> = {
  lat: latConfig,
  mx: mxConfig,
  eu: euConfig,
  us: usConfig,
}
