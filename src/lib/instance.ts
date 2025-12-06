import { headers } from "next/headers"
import { detectInstance } from "@/config/detectInstance"
import { configs, InstanceKey } from "@/config/instances"
import { normalizeHostHeader } from "@/hooks/normalizedHostHeader"

export interface Instance {
  instance: InstanceKey
  config: (typeof configs)[InstanceKey]
}

/**
 * Obtiene la instancia actual (país + configuración) según el host/subdominio.
 * Funciona tanto en Server Components como en layouts.
 */
export async function getInstance(): Promise<Instance> {
  const h = await headers()
  const host = h.get("x-forwarded-host") || h.get("host") || ""
  const normalizedHost = normalizeHostHeader(host)
  const instance = detectInstance(normalizedHost)
  const config = configs[instance]
  return { instance, config }
}
