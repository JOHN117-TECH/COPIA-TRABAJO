'use client';

import React, { useRef } from 'react';
import VimeoPlayer from '@u-wave/react-vimeo';

export interface VimeoSlideProps extends React.HTMLAttributes<HTMLDivElement> {
  vimeoId: string;
  /** si el slide está activo en el Swiper */
  active?: boolean;
  /** 0–100 de progreso para la barra del tab */
  onVideoProgress?: (percent: number) => void;
  onPlay?: () => void;
  onPause?: () => void;
  onEnded?: () => void;
}

export default function VimeoSlide({
  vimeoId,
  active = false,
  onVideoProgress,
  onPlay,
  onPause,
  onEnded,
  className,
  ...rest
}: VimeoSlideProps) {
  const lastUpdate = useRef(0);

  return (
    <div className={`h-full w-full ${className ?? ''}`} {...rest}>
      <VimeoPlayer
        video={vimeoId}
        autoplay={active}
        paused={!active}
        muted
        controls={false}
        background
        width="100%"
        height="100%"
        onPlay={onPlay}
        onPause={onPause}
        onEnd={onEnded}
        onTimeUpdate={(e: any) => {
          if (!active || !e) return;

          const now = Date.now();
          // limitamos frecuencia de actualización
          if (now - lastUpdate.current < 150) return;
          lastUpdate.current = now;

          const { seconds, duration } = e;
          if (!duration && duration !== 0) return;

          const percent = duration > 0 ? (seconds / duration) * 100 : 0;

          onVideoProgress?.(percent);
        }}
      />
    </div>
  );
}
