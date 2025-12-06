"use client"

import { useMemo } from "react"
import { configs } from "@/config/instances"
import { detectInstance } from "@/config/detectInstance"
import { normalizeHostHeader } from "./normalizedHostHeader"

export function useInstance() {
  const host =
    typeof window !== "undefined"
      ? window.location.hostname
      : "default.localhost"

  const normalizedHost = normalizeHostHeader(host)
  const instance = detectInstance(normalizedHost)
  const config = useMemo(() => configs[instance], [instance])
  return { instance, config }
}
