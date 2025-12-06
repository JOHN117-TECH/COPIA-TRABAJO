"use client";

import clsx from "clsx";
import Link from "next/link";
import { useLocale } from "next-intl";

interface SPGLinkProps {
  path: string;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const SPGLink: React.FC<SPGLinkProps> = ({
  path,
  children,
  className,
  onClick,
}) => {
  const locale = useLocale(); // ← idioma actual ("es", "en", etc.)
  const localizedPath = `/${locale}${path.startsWith("/") ? path : `/${path}`}`;

  return (
    <Link
      href={localizedPath}
      className={clsx(className, "no-underline")}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default SPGLink;
