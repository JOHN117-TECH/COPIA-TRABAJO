'use client';

import React from 'react';
import VimeoPlayer from '@u-wave/react-vimeo';

interface VimeoSlideProps {
  vimeoId: string; // ✅ sólo string
  active?: boolean;
  onVideoProgress?: (percent: number) => void;
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
        autoplay={active} // se reproduce cuando el slide está activo
        muted // 🔇 necesario para que el autoplay no sea bloqueado
        background
        controls={false} // pon true si quieres depurar
        responsive
        playsInline
        onTimeUpdate={(data: any) => {
          if (!onVideoProgress) return;
          const percent = (data?.percent ?? 0) * 100;
          onVideoProgress(percent);
        }}
        onPlay={onPlay}
        onPause={onPause}
        onEnd={onEnded}
      />
    </div>
  );
}
