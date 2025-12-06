'use client';

import React, { useRef } from 'react';
import VimeoPlayer from '@u-wave/react-vimeo';

interface VimeoSlideProps {
  vimeoId: string;
  onProgress: (percent: number) => void;
  onPlay: () => void;
  onPause: () => void;
  onEnded: () => void;
  className?: string;
}

export default function VimeoSlide({
  vimeoId,
  onProgress,
  onPlay,
  onPause,
  onEnded,
  className,
}: VimeoSlideProps) {
  const lastUpdate = useRef(0);

  return (
    <div className={`w-full h-full overflow-hidden ${className}`}>
      <VimeoPlayer
        video={vimeoId}
        autoplay
        muted
        controls={false}
        onPlay={onPlay}
        onPause={onPause}
        onEnd={onEnded}
        onTimeUpdate={(e: any) => {
          if (!e?.seconds || !e?.duration) return;

          // 🔥 limitamos frecuencia de actualización (para que no “explote” la barra)
          const now = Date.now();
          if (now - lastUpdate.current < 150) return; // max ~7 updates/seg
          lastUpdate.current = now;

          const percent = (e.seconds / e.duration) * 100;
          onProgress(percent);
        }}
      />
    </div>
  );
}
