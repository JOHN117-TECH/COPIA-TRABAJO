import clsx from 'clsx'
import Image from 'next/image';
import React, { useState } from 'react'
import { useTranslations } from 'next-intl';
import ButtonType from '@/models/buttonType';
import { Button, ButtonIcon, ButtonText } from '@/components/Button'

const RelatedProjectsMovile = ({ projects }: { projects: any[] }) => {
  const t = useTranslations("Markets");
  const fallBackSrc = '/errorImg.webp';
  const [imageError, setImageError] = useState(false);
  const [current, setCurrent] = useState(0);

  return (
    <div className="md:hidden relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="min-w-full bg-(--gray-10) p-6 rounded-md"
            >
              <div className="flex flex-col items-center gap-4">
                <Image
                  src={imageError ? fallBackSrc : (project.image as string)}
                  alt="text-img"
                  width={150}
                  height={150}
                  className="object-contain w-full"
                  onError={() => setImageError(true)}
                />
                <div className="space-y-4">
                  <h3 className="font-semibold text-(--spg-primary) leading-tight">
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
            </div>
          ))}
        </div>
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center mt-4 gap-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={clsx(
              "w-3 h-1 rounded-full transition-all duration-300",
              current === index
                ? "bg-(--spg-primary) w-5"
                : "bg-gray-300"
            )}
          />
        ))}
      </div>
    </div>
  )
}

export default RelatedProjectsMovile