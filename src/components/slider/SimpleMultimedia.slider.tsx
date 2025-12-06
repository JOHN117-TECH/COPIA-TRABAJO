"use client";

import clsx from "clsx";
import Player from "@vimeo/player";
import TextComponent from "./TextComponent.slider";

import { FC, useState, useEffect, useRef } from "react";
import { SimpleMultimediaSliderProps } from "@/models/slider.model";
import Image from "next/image";
import useMediaQuery from "@/hooks/useMediaQuery";

/**
 * A simple multimedia slider component
 *
 * @param {Object} props - The props of the component
 * @param {Array} props.slides - The array of slides to be displayed
 * @param {number} props.currentIndex - The current index of the slide to be displayed
 * @param {Function} props.nextSlide - The function to be called when the slide has finished playing
 * @param {boolean} [props.onlyImage=false] - Whether to display only images or videos
 */
const SimpleMultimediaSlider: FC<SimpleMultimediaSliderProps> = ({
  slides,
  rounded,
  currentIndex,
  nextSlide,
  onlyImage = false,
  hasTranslation = false,
  customHeight = "md:h-[80vh]",
}) => {
  const slide = slides[currentIndex];
  const [isClient, setIsClient] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const videoContainerRef = useRef<HTMLDivElement | null>(null);
  const playerRef = useRef<any>(null);

  const mediaSrc =
    slide.type === "video" && isMobile && slide.srcMobile
      ? slide.srcMobile
      : slide.src;

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (slide.type === "video") return;

    const interval = setInterval(() => {
      nextSlide();
    }, 8000);

    return () => clearInterval(interval);
  }, [slide.type, nextSlide]);

  useEffect(() => {
    if (slide.type !== "video") {
      setIsLoading(false);
      return;
    }

    setIsLoading(true);

    if (playerRef.current) {
      playerRef.current.destroy();
      playerRef.current = null;
    }

    const iframe = document.getElementById(`vimeo-iframe-${currentIndex}`);

    if (iframe) {
      const player = new Player(iframe);

      player.on("play", () => {
        setIsLoading(false);
      });

      player.on("ended", () => {
        setTimeout(() => nextSlide(), 50);
      });

      playerRef.current = player;
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, [slide, currentIndex, nextSlide]);


  return isClient ? (
    <div className={clsx("relative w-full overflow-hidden shadow-lg", customHeight, {"rounded-[48px]": rounded})}>
      {!onlyImage && <TextComponent hasTranslation={hasTranslation} slide={slide} />}

      <div className="absolute inset-0 w-full h-full">
        {slide.type === "image" ? (
          <Image
            width={0}
            height={0}
            src={mediaSrc}
            alt={`Slide ${currentIndex}`}
            className="w-full h-full object-cover object-center"
          />
        ) : (
          <div
            ref={videoContainerRef}
            className="absolute inset-0 w-full h-full overflow-hidden"
          >
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/60">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-white/40 border-t-white" />
              </div>
            )}
            <iframe
              id={`vimeo-iframe-${currentIndex}`}
              src={`${mediaSrc}?autoplay=1&muted=1&loop=0&background=1&controls=0&api=1`}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; encrypted-media; web-share"
              className="absolute top-1/2 left-1/2 pointer-events-none"
              style={{
                width: "250%",
                height: "250%",
                transform: "translate(-50%, -50%)",
              }}
            />
          </div>
        )}
      </div>
      <div className="absolute inset-0 bg-black/20" />
    </div>
  ) : null;
};

export default SimpleMultimediaSlider;
