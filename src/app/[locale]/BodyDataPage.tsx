"use client";

import { useEffect } from "react"; 
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";

const BodyDataPage = () => {
  const pathname = usePathname();
  const locale = useLocale()

   // rutas exactas
  const exactRoutes = [
    "/",
    "/login",
    "/signup",
    "/brands",
    "/projects",
    "/checkout-email",
    "/password-reset",
  ];
  // rutas que se pueden tratar como prefijos
  const prefixRoutes = [
    "/about",
    "/markets",
    "/services",
    "/sustainability",
    "/password-recovery",
  ];

  useEffect(() => {
    if (!pathname) return;

    const cleanPath = pathname.replace(new RegExp(`^/${locale}`), "") || "/";

    const isWhiteHeaderPage =
      exactRoutes.includes(cleanPath) ||
      prefixRoutes.some((route) => cleanPath.startsWith(route));


    document.body.setAttribute(
      "data-page",
      isWhiteHeaderPage ? "white" : "default"
    );
  }, [pathname, locale]);

  return null;
}

export default BodyDataPage