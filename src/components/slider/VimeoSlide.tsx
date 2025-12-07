'use client';

import React from 'react';
import VimeoPlayer from '@u-wave/react-vimeo';

interface VimeoSlideProps {
  vimeoId: string; // id o url del video
  active?: boolean;
  onVideoProgress?: (percent: number) => void; // 0–100
  onPlay?: () => void;
  onPause?: () => void;
  onEnded?: () => void;
  className?: string;
}

export default function VimeoSlide({
  vimeoId,
  active = false,
  onVideoProgress,
  onPlay,
  onPause,
  onEnded,
  className,
}: VimeoSlideProps) {
  return (
    <div className={className}>
      <VimeoPlayer
        video={vimeoId}
        autoplay={active}
        paused={!active}
        controls={false}
        responsive
        // 🔹 cuando empieza el vídeo, lo dejamos en 0%
        onPlay={() => {
          onPlay?.();
          onVideoProgress?.(0);
        }}
        onPause={() => {
          onPause?.();
        }}
        // 🔹 cuando termina, lo dejamos en 100% por si no llegó justo
        onEnd={() => {
          onEnded?.();
          onVideoProgress?.(100);
        }}
        // 🔹 aquí convertimos el progreso de Vimeo (0–1) a 0–100
        onTimeUpdate={(data: any) => {
          if (!onVideoProgress || !data) return;

          const { percent, duration, seconds } = data;
          let p = 0;

          if (typeof percent === 'number') {
            // percent viene entre 0 y 1
            p = percent * 100;
          } else if (
            typeof duration === 'number' &&
            duration > 0 &&
            typeof seconds === 'number'
          ) {
            p = (seconds / duration) * 100;
          }

          // clamp 0–100
          if (p < 0) p = 0;
          if (p > 100) p = 100;

          onVideoProgress(p);
        }}
      />
    </div>
  );
}
