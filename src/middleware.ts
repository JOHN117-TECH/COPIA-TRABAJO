import { routing } from "./i18n/routing"
import createMiddleware from "next-intl/middleware"
import { NextRequest, NextResponse } from "next/server"
import { detectInstance } from "./config/detectInstance"
import { configs, InstanceKey } from "./config/instances"
import { normalizeHostHeader } from "./hooks/normalizedHostHeader"

// 1️⃣ Configura el middleware base de next-intl
const intlMiddleware = createMiddleware(routing)

// 2️⃣ Detección de instancia (subdominio)
function getInstanceFromRequest(req: NextRequest): InstanceKey {
  // Preferimos x-forwarded-host (reverse proxies), si no existe usamos host
  const xfHost = req.headers.get("x-forwarded-host")
  const host = xfHost || req.headers.get("host") || ""
  const normalizedHost = normalizeHostHeader(host)
  return detectInstance(normalizedHost)
}

// 3️⃣ Middleware principal
export function middleware(req: NextRequest) {
  const instance = getInstanceFromRequest(req)
  const config = configs[instance]
  const pathname = req.nextUrl.pathname

  const url = req.nextUrl.clone()

  // Reemplaza el host local por el real
  const hostHeader = req.headers.get("x-forwarded-host") || req.headers.get("host") || ""
  const protocol = req.headers.get("x-forwarded-proto") || "https"
  url.host = hostHeader
  url.protocol = protocol

  // Normaliza el path (quita / final si existe)
  const normalizedPath =
  pathname.endsWith("/") && pathname !== "/" ? pathname.slice(0, -1) : pathname
  
  // Extrae el locale visible del path: ej. /es/cart → "es"
  const segments = normalizedPath.split("/").filter(Boolean)
  const locale = segments[0] || routing.defaultLocale
  
  // --- 4️⃣ Verificar rutas restringidas según instancia ---
  const restrictedRoutes = config.restrictedRoutes || []
  
  // Ruta real sin el prefijo del locale
  const pathWithoutLocale = "/" + segments.slice(1).join("/")
  
  const isRestricted = restrictedRoutes.some(
    (restricted) =>
      restricted === pathWithoutLocale ||
    (restricted.endsWith("/*") &&
    pathWithoutLocale.startsWith(restricted.replace("/*", "")))
  )
  
  if (isRestricted) {
    // Reescribe a la página 404 localizada
    return NextResponse.rewrite(new URL(`/${locale}/not-found`, url))
  }

  const allowedLocales = config.allowedLocales || routing.locales
  if (!allowedLocales.includes(locale as any)) {
    const fallbackLocale = allowedLocales[0] || routing.defaultLocale

    // Usa los headers reales para reconstruir la URL correcta
    const protocol = req.headers.get("x-forwarded-proto") || "https"
    const host = req.headers.get("x-forwarded-host") || req.headers.get("host") || ""
    const url = new URL(`/${fallbackLocale}${pathWithoutLocale}`, `${protocol}://${host}`)
    return NextResponse.redirect(url)
  }

  // --- 6️⃣ Aplicar traducción con next-intl ---
  return intlMiddleware(req)
}

// 7️⃣ Matcher: ignora recursos estáticos, API, etc.
export const config = {
  matcher: ["/((?!api|trpc|_next|_vercel|.*\\..*).*)"],
}
