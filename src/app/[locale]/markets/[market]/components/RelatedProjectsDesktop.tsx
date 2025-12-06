import Image from 'next/image';
import React, { useState } from 'react'
import { useTranslations } from 'next-intl';
import ButtonType from '@/models/buttonType';
import { Button, ButtonIcon, ButtonText } from '@/components/Button'

const RelatedProjectsDesktop = ({ projects }: { projects: any[] }) => {
  const t = useTranslations("Markets");
  const fallBackSrc = '/errorImg.webp';
  const [imageError, setImageError] = useState(false);
  return (
    <div className="hidden md:grid grid-cols-2">
      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-white p-6 shadow-sm flex flex-col items-start gap-4"
        >
          <div className="w-full flex justify-center my-8">
            <Image
              src={imageError ? fallBackSrc : (project.image as string)}
              alt="text-img"
              width={150}
              height={150}
              className="object-contain w-[70%]"
              onError={() => setImageError(true)}
            />
          </div>
          <div className="space-y-4">
            <h3 className="text-md font-semibold text-(--spg-primary) leading-tight">
              {project.title}
            </h3>
            <p className="text-sm">{project.location}</p>
            <p className="text-sm">{project.description}</p>
            <Button design={ButtonType.FILLED_WHITE_MEDIUM}>
              <ButtonText text={t("getDetails")} />
              <ButtonIcon className="icon-arrow-right" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default RelatedProjectsDesktop