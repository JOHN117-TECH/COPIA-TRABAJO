import { useTranslations } from 'next-intl';
import React from 'react'

const Commitment = ({ data }: { data: any}) => {
  const t = useTranslations("Sustainability");
  
  return (
    <section className="bg-(--spg-primary) py-32 flex flex-col md:flex-row gap-4 px-[10%] justify-between">
      <div className="md:w-[50%] flex flex-col gap-4">
        <h4 className="text-white">{t("ongoingCommitment")}</h4>
        <p className="text-white">{t("descriptionCommitment")}</p>
      </div>
      <div className="bg-white rounded-xl p-6 md:pr-12">
        {data.homeSliders.edges.map((slider: any, idx: number) => (
          <a
            key={idx}
            href={slider?.node?.link || undefined}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 px-2 py-1 text-(--background) no-underline"
          >
            <i className="icon-download text-[10px] text-(--spg-link) font-800 inline-block" />
            {slider?.node?.buttonText}
          </a>
        ))}
      </div>
    </section>
  )
}

export default Commitment