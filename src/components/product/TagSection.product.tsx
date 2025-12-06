import { FC } from "react";
import { useTranslations } from "next-intl";
import { TagSectionProps } from "@/models/products.model";
import clsx from "clsx";
import { TagLabel, Tags } from "../Tags";

const TagSection: FC<TagSectionProps> = ({ item, className }) => {
  const t = useTranslations('Products');
  return (
    <span className={
      clsx("absolute py-[2px] left-2 top-1", 
        className
      )}
    >
      <Tags variant="filled" size="sm">
        <TagLabel label={item?.isNew ? t("newProduct") : t("newColor")}/>
      </Tags>
    </span>
  );
};

export default TagSection;