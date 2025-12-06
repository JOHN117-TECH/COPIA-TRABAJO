import clsx from "clsx";
import SPGLink from "./Link";
import Image from "next/image";

import { FC, useState } from "react";
import { useTranslations } from "next-intl";
import { Button, ButtonIcon, ButtonText } from "./Button";
import ButtonType from "@/models/buttonType";

interface ColumnCardItem {
  imageThumbMedium: string;
  name: string;
  description: string;
  onClick?: () => void;
  buttonText: string;
  title?: string;
}

interface ColumnCardProps {
  item: ColumnCardItem;
  index: number;
  hasTranslate?: boolean;
}

/**
 * A component that renders a column card with an image, title, description and optional button
 * @param {object} props - The props of the component
 * @param {object} props.item - The item to be rendered
 * @param {string} props.item.src - The source of the image
 * @param {string} props.item.title - The title of the item
 * @param {string} props.item.description - The description of the item
 * @param {function} props.item.onClick - The function to be called when the button is clicked
 * @param {string} props.item.buttonText - The text of the button
 * @param {number} props.index - The index of the item
 * @return {ReactElement} The Component
 */
const ColumnCard: FC<ColumnCardProps> = ({ item, index, hasTranslate=true }) => {
  const t = useTranslations();
  const fallBackSrc = '/errorImg.webp';
  const [imageError, setImageError] = useState(false);
  return (
    <div
      className={clsx(
        "flex flex-col p-4 h-full",
        index % 2 === 0
          ? "bg-(--spg-primary)"
          : "bg-(--gray-20)",
      )}
    >
      <Image
        src={imageError ? fallBackSrc : (item.imageThumbMedium as string)}
        alt="text-img"
        width={150}
        height={150}
        className="w-full h-[16em] object-cover rounded-md mb-4"
        onError={() => setImageError(true)}
      />
      <div className="py-4">
        <h5 className={clsx("font-700 leading-tight", index % 2 === 0 && "text-white")}>
          {hasTranslate ? t(item.title? item.title : "") : item.title}
        </h5>
        <p className={clsx("text-sm my-4", index % 2 === 0 && "text-white")}>
          {hasTranslate ? t(item.description) : item.description}
        </p>
        <SPGLink path={`/market/${item.name}`}>
          <Button design={ButtonType.FILLED_WHITE_BIG_ROUNDED}>
            <ButtonIcon className="icon-arrow-outward" />
          </Button>
        </SPGLink>
      </div>
    </div>
  );
};


export default ColumnCard;
