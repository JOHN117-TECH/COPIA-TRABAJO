export function normalizeHostHeader(hostHeader: string | null): string {
  if (!hostHeader) return ""
  const first = hostHeader.split(",")[0].trim()
  const withoutPort = first.split(":")[0]
  return withoutPort.replace(/^www\./i, "")
}