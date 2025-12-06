import { InstanceKey } from "./instances"

export function detectInstance(host?: string): InstanceKey {
  if (!host) return "us" //TODO: Cambiar según el api de detección de instancias
  const sub = host.split(".")[0].toLowerCase()
  if (["lat", "mx", "us", "eu"].includes(sub)) return sub as InstanceKey
  return "us" //TODO: Cambiar según el api de detección de instancias
}
