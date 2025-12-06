import Image from "next/image";
import clsx from "clsx";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Button, ButtonIcon } from "@/components/Button";
import SPGLink from "@/components/Link"; 
import { useTranslations } from "next-intl";
import ButtonType from "@/models/buttonType";

export interface BannerSlideItem {
  src: string;
  title?: string;
  description?: string;
  buttonText?: string;
  path?: string;
  onClick?: () => void;
}

export interface BannerSlideProps {
  items: BannerSlideItem[];
  currentIndex: number;
}

const BannerSlide = ({ items, currentIndex }: BannerSlideProps) => {
  const t = useTranslations("");
  const isMobile = useMediaQuery("(max-width: 768px)");
  const slide = items[currentIndex];

  const splitText = (text: string, index: number) => {
    return (
      <div className="flex flex-col">
        <span className="block md:inline">{text.slice(0, index)}</span>
        <span className="block md:inline">{text.slice(index)}</span>
      </div>
    );
  };

  return (
    <div
      className={clsx(
        "relative w-full overflow-hidden rounded-3xl",
        "h-[75vh] md:h-[66vh]"
      )}
    >
      <Image
        src={slide.src}
        alt={slide.title || "Banner"}
        fill
        priority
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/30" />
      {(slide.title || slide.description || slide.buttonText) && (
        <div className="absolute inset-0 flex items-center">
          <div
            className={clsx(
              "flex flex-col gap-4 text-white items-start text-left",
              "px-6 md:px-16",
              isMobile
                ? "w-full"
                : "w-[70%]"
            )}
          >
            {slide.title && (
              <h1
                className={clsx(
                  "font-semibold leading-tight text-white",
                  "text-2xl sm:text-3xl md:text-4xl lg:text-[40px]"
                )}
              >
                {slide.title}
              </h1>
            )}
            {slide.buttonText && (
              <div className="mt-6 font-medium">
                {slide.path ? (
                  <SPGLink path={slide.path}>
                    <Button design={ButtonType.FILLED_WHITE_BIG} className="flex flex-row">
                      {isMobile ? splitText(t(slide.buttonText), 14) : t(slide.buttonText)}
                      <ButtonIcon className="icon-arrow-outward text-2xl ml-1" />
                    </Button>
                  </SPGLink>
                ) : (
                  <Button design={ButtonType.FILLED_WHITE_BIG} onClick={slide.onClick} className="flex flex-row">
                    {isMobile ? splitText(t(slide.buttonText), 14) : t(slide.buttonText)}
                    <ButtonIcon className="icon-arrow-outward text-2xl ml-1" />
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BannerSlide;
