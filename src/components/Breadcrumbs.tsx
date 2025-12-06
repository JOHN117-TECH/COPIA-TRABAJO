"use client";

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import SPGLink from './Link';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  pathLabelMap?: Record<string, string>;
  segmentToLabel?: (segment: string) => string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ pathLabelMap = {}, segmentToLabel }) => {
  const t = useTranslations('Breadcrumbs');
  const pathname = usePathname();
  const [breadcrumbItems, setBreadcrumbItems] = useState<BreadcrumbItem[]>([]);
  const locale = useLocale();

  useEffect(() => {
    if (pathname) {
      const pathSegments = pathname.split('/').filter(segment => segment !== '' && segment !== locale);
      const items: BreadcrumbItem[] = [{ label: t('home'), href: '/'}];
      let currentPath = '/';

      pathSegments.forEach(segment => {
        currentPath += `${segment}/`;
        const segmentWithoutTrailingSlash = currentPath.slice(0, -1);

        const label =
          pathLabelMap[segmentWithoutTrailingSlash] ||
          segment.charAt(0).toUpperCase() + segment.slice(1);

        items.push({ label: t(label), href: segmentWithoutTrailingSlash });
      });

      // ✅ Agregar un nuevo label al final usando segmentToLabel
      if (segmentToLabel && pathSegments.length > 0) {
        const lastSegment = pathSegments[pathSegments.length - 1];
        const extraLabel = segmentToLabel(lastSegment);

        if (extraLabel) {
          items.push({ label: t(extraLabel), href: pathname });
        }
      }

      setBreadcrumbItems(items.filter(item => item.href !== `/${locale}`));
    } else {
      setBreadcrumbItems([{ label: t('home'), href: '/' }]);
    }
  }, [pathname]);

  return (
    <nav aria-label="breadcrumb">
      <ol className="flex gap-1">
        {breadcrumbItems.map((item, index) => (
          <li key={index} className="">
            {index < breadcrumbItems.length - 1 ? (
              <>
                <SPGLink path={item.href} className='text-(--gray-70) text-sm truncate'>
                  {item.label}
                </SPGLink>
                <i className="icon-chevron-right text-(--gray-50) ml-1 text-base top-0.5 relative" />
              </>
            ) : (
              <span className="text-sm text-(--aqua-medium) font-medium underline truncate">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;