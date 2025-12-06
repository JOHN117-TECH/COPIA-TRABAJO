"use client";

import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import ButtonType from "@/models/buttonType";
import { Button, ButtonIcon } from "@/components/Button";
import SPGLink from "@/components/Link";
import useMediaQuery from "@/hooks/useMediaQuery";
import { motion } from "framer-motion";

interface MarketCardProps {
  item: any;
  index: number;
  isActive: boolean;
}

const MarketCard = ({ item, index, isActive }: MarketCardProps) => {
  const fallBackSrc = '/errorImg.webp';
  const [imageError, setImageError] = useState(false);
  const isMobile = useMediaQuery("(max-width: 1024px)");

  return (
    <motion.div
      layout
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={clsx(
        "relative overflow-hidden cursor-pointer mx-auto md:h-[440px]",
        isActive ? "md:flex-[1.2]" : "md:flex-[1]",
        isActive ? "flex-[2]" : "flex-1"
      )}
      style={{
        borderRadius: isMobile
          ? isActive
            ? "1.5rem"
            : "9999px"
          : "2.5rem",
        flexBasis: isMobile
          ? "auto"
          : isActive
          ? "40%"
          : "25%",
      }}
    >
      <Image
        src={imageError ? fallBackSrc : (item?.src as string)}
        alt={item?.title}
        width={500}
        height={500}
        className="absolute inset-0 w-full h-full object-cover"
        onError={() => setImageError(true)}
      />

      {/* Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-[70%] bg-gradient-to-t from-(--black)/80" />
      <div className="absolute inset-0 bg-(--black)/20" />

      {/* Contenido */}
      <div className={clsx("relative z-10 flex flex-col justify-end px-6 text-white h-full space-y-1",
        isActive && isMobile ? "py-14" : "py-4", 
        !isMobile && "py-14", 
      )}>
        <h2 className={clsx("dalamoa-title absolute top-1 left-5 my-0 text-[50px]/15 md:text-[80px]/15 text-white/50 py-0")}>{index + 1}</h2>
        <h3 className={clsx("text-(--white) md:p-0", 
          isMobile && (isActive ? "pt-8" : "text-2xl pl-9 py-2 font-normal"), 
          !isMobile && !isActive && "font-semibold text-2xl", 
          !isMobile && isActive && "font-semibold text-[32px]"
        )}>{item?.title}</h3>
        {isActive && (
          <p className="text-(--white) text-base line-clamp-3">
            {item?.description}
          </p>
        )}
        <SPGLink path={`/markets/${item?.title}`} >
          <Button design={ButtonType.FILLED_WHITE_BIG_ROUNDED} className={clsx("absolute bottom-4 right-4", 
            isMobile && (!isActive && "absolute bottom-5 right-4")
          )}>
            <ButtonIcon className="icon-arrow-outward text-(--aqua-100)" />
          </Button>
        </SPGLink>
      </div>
    </motion.div>
  );
};

export default MarketCard;
