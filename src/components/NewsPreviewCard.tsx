import Image from "next/image";
import { useState } from "react";
import { TagLabel, Tags } from "./Tags";
import { Button, ButtonIcon, ButtonText } from "./Button";
import SPGLink from "./Link";
import ButtonType from "@/models/buttonType";
import { useTranslations } from "next-intl";

interface NewsPreviewProps {
  img: string;
  title: string;
  summary: string;
  tag: string[];
  slug: string; 
}

const NewsPreviewCard = ({ img, title, summary, tag, slug }: NewsPreviewProps) => {
  const fallBackSrc = '/errorImg.webp';
  const [imageError, setImageError] = useState(false);
  const t = useTranslations("HomePage.latestArticles");
  
  return (
    <div
      className="relative max-w-[482px] bg-white rounded-2xl shadow-sm overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-[1.01] hover:shadow-md"
    >
      <div className="relative w-full h-52">
        <Image
          src={imageError ? fallBackSrc : img}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 360px"
          onError={() => setImageError(true)}
        />
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          {tag.map((item, index) => (
            <Tags key={index} variant="filled" size="sm" color="var(--aqua)" textColor="var(--white)">
              <TagLabel label={item} className="uppercase"/>
            </Tags>
          ))}
        </div>
      </div>
      <div className="p-5 flex flex-col gap-2">
        <h3 className="text-base font-semibold text-gray-900 leading-snug line-clamp-2">
          {title}
        </h3>
        <p className="text-sm m-0 text-gray-600 line-clamp-2">{summary}</p>

        <SPGLink path={`/news/${slug}`}>
          <Button className="p-0! mt-2" design={ButtonType.LINK_GREEN_MEDIUM}>
            <ButtonText className="underline font-medium" text={t("readMore")}/>
            <ButtonIcon className="icon-arrow-right"/>
          </Button>
        </SPGLink>
      </div>
    </div>
  );
};

export default NewsPreviewCard;
