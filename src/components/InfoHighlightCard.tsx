import clsx from "clsx";
import React from "react";
import Image from "next/image";
import SPGLink from "@/components/Link";
import { InfoHighlightCardProps } from "@/models/sustainability.model";

export default function InfoHighlightCard({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  description,
  ctaText,
  ctaLink,
  className
}: InfoHighlightCardProps) {
  return (
    <div className={clsx("relative w-full aspect-square md:aspect-auto md:h-4/5 overflow-hidden shadow-md md:min-h-[500px]", className)}>
      <Image
        src={imageSrc}
        alt={imageAlt}
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
      />

      <div className="absolute inset-0 bg-white/70 z-10" />

      <div className="relative z-20 p-6 flex flex-col justify-end h-full text-left md:pt-[30%] md:pb-[10%] md:px-[20%]">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        {subtitle && <p className="text-lg mb-4 font-semibold">{subtitle}</p>}
        <p className="text-sm mb-4 leading-tight">{description}</p>
        {
          ctaText && ctaLink &&
          <SPGLink path={ctaLink}>
            {ctaText}
            <i className="text-[var(--spg-link)] ic-arrow-right text-sm ml-5" />
          </SPGLink>
        }
      </div>
    </div>
  );
}
