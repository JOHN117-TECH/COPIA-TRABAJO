export const localeMap = {
  es: ["es-ca", "es-mx", "es-lat"],
  en: ["en-us", "en-uk"],
  fr: ["fr"],
  it: ["it"],
  pl: ["pl"],
} as const

export type LangCode = keyof typeof localeMap
export type Locale = (typeof localeMap)[LangCode][number]
