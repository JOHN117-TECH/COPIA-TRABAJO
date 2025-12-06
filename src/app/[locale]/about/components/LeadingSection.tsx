import DownloadResouceButton from '@/components/DownloadResouceButton';
import { useTranslations } from 'next-intl';
import React from 'react'

const LeadingSection = ({ data }: { data: any}) => {
  const t = useTranslations("AboutUs.WeAreSpradling");
  const codeOfEthics = [
    {
      link: "https://static.spradling.group/uploads/documents/164/file/Code_Of_Ethics-2.pdf",
      buttonText: "codeOfEthics"
  }]
  return (
    <section className="bg-(--spg-primary) py-32 flex flex-col md:flex-row gap-4 px-[10%] justify-between items-center">
      <div className="md:w-[50%] flex flex-col gap-4">
        <h4 className="text-white">{t("leading")}</h4>
        <p className="text-white">{t("leadingDesc")}</p>
      </div>
      <div className='flex flex-col gap-4'>
        <DownloadResouceButton 
          data={codeOfEthics}
          textKey="AboutUs.WeAreSpradling"
        />
        <DownloadResouceButton 
          data={data}
          textKey="AboutUs.WeAreSpradling"
        />
      </div>
    </section>
  )
}

export default LeadingSection