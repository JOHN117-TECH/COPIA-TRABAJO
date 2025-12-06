import { Button, ButtonText } from '@/components/Button';
import capitalizeFirstLetter from '@/hooks/useCapitalizeText';
import { useTranslations } from 'next-intl';
import React from 'react'

const DownloadLibrary = ({ data, slug }: any) => {
  const t = useTranslations("Services");
  
  return (
    <section className="bg-(--spg-primary) py-16 flex flex-col md:flex-row gap-4 px-[10%] justify-between items-center">
      <div className="md:w-[50%] flex flex-col gap-4">
        <h4 className="text-white">{t("downloadLibrary")}</h4>
        <p className="text-white">{t("downloadLibraryDesc")}</p>
        <div>
          <Button>
            <ButtonText text={t("contact")} />
          </Button>
        </div>
      </div>
      <div className='flex flex-col gap-4'>
        <div className="bg-white rounded-xl p-6 md:pr-12">
          <a
            href={data}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 px-2 py-1 text-(--background) no-underline"
          >
            <i className="icon-download text-[10px] text-(--spg-link) font-800 inline-block" />
            {t("download")} {t(capitalizeFirstLetter(slug)+".title")} {t("library")}
          </a>
        </div>
      </div>
    </section>
  )
}

export default DownloadLibrary