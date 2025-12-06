import { useLocale } from "next-intl";

export default function DateFormatter(dateStr: string) {
  const locale = useLocale();
  const date = new Date(dateStr);
  return date.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}
