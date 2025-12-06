"use cliente"
import Image from 'next/image';
import { CertificationCardProps } from "@/models/sustainability.model";
import { useTranslations } from "next-intl";
import useMediaQuery from '@/hooks/useMediaQuery';

const CertificationCard: React.FC<CertificationCardProps> = ({
  item,
  translateKey, 
  orientation = "vertical",
}) => {
  const t = translateKey ? useTranslations(translateKey) : null;
  const isMobile = useMediaQuery("(max-width: 768px)"); 
  
  const title = translateKey && t ? t(item.title) : item.title; 
  const description = translateKey && t ? t(item.description) : item.description; 
  const src = item.src ? item.src : item.image; 

  const layoutClass =
    orientation === "vertical"
      ? "flex-col items-start"
      : "flex-row items-start";

  const textSize =
    orientation === "vertical"
      ? isMobile
        ? "text-base"
        : "text-lg"
      : isMobile
      ? "text-base"
      : "text-lg";

  const titleSize =
    orientation === "vertical"
      ? isMobile
        ? "text-base"
        : "text-xl"
      : isMobile
      ? "text-lg"
      : "text-2xl";

  const imageSize =
    orientation === "vertical"
      ? isMobile
        ? "w-18 h-18"
        : "w-22 h-22"
      : isMobile
      ? "w-19 h-19"
      : "w-19 h-19";

  return (
    <div className={`flex ${layoutClass} p-4 sm:p-6 gap-4`}>
      <div className={`flex-shrink-0 ${imageSize} rounded-lg overflow-hidden`}>
        <Image
          src={src}
          alt={title}
          width={80}
          height={80}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col items-start">
        <h3 className={`${titleSize} font-semibold text-(--black-100)`}>{title}</h3>
        <p className={`${textSize} text-left text-(--gray-60) my-2`}>{description}</p>
      </div>
    </div>
  );
};

export default CertificationCard;

