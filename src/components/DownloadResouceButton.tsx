import { useTranslations } from 'next-intl';
import React from 'react'

const DownloadResouceButton = ({ data, textKey }: { data: any[], textKey: string}) => {
  const t = useTranslations(textKey);
  return (
    <div className="bg-white rounded-xl p-6 border border-(--aqua-light) space-y-4">
      {data.map((item: any, idx: number) => (
        <a
          key={idx}
          href={item?.link || undefined}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 px-2 py-1 text-(--black) no-underline font-medium"
        >
          <i className="icon-download text-3xl text-(--spg-link) font-black inline-block" />
          {t(item?.buttonText)}
        </a>
      ))}
    </div>
  )
}

export default DownloadResouceButton