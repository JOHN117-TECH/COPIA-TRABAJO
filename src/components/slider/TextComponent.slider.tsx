"use client";

import clsx from "clsx";
import { FC } from "react";
import { useTranslations } from "next-intl";
import ButtonType from "@/models/buttonType";
import { Button, ButtonIcon, ButtonText } from "../Button";
import { TextComponentProps } from "@/models/slider.model";
import SPGLink from "@/components/Link"

/**
 * A text component for the SimpleMultimediaSlider
 * @param {slide} prop - The slide object from the slides array
 * @returns {JSX.Element} - A JSX element containing the text content
 */
const TextComponent: FC<TextComponentProps> = ({ hasTranslation, slide }) => {
  const t = useTranslations("");
  
  return (
    <div className={clsx("w-full p-6 bg-black/30 relative h-full z-5",
    { "hidden": !slide.title && !slide.description})}
    >
      <section className="text-left md:w-[55%] sm:mx-[10%] h-full flex flex-col gap-4 justify-center">
        {slide.title && <h1 className="text-white">{hasTranslation ? t(slide.title) : slide.title}</h1>}
        {slide.description && <p className="text-white">{hasTranslation ? t(slide.description) : slide.description}</p>}
        {slide.buttonText && 
          <section>
            {slide.path ? (
              <SPGLink path={slide.path}>
                <Button design={ButtonType.FILLED_WHITE_BIG} onClick={slide.onClick}>
                  <ButtonText text={t(slide.buttonText)} />
                  {slide.buttonIcon && <ButtonIcon className={slide.buttonIcon} />}
                </Button>
              </SPGLink>
            ) : (
              <Button design={ButtonType.FILLED_WHITE_BIG} onClick={slide.onClick}>
                <ButtonText text={t(slide.buttonText)} />
                {slide.buttonIcon && <ButtonIcon className={slide.buttonIcon} />}
              </Button>
            )}
          </section>
        }
      </section>
    </div>
  );
};

export default TextComponent;
