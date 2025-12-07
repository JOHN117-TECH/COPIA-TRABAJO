'use client';

import { useEffect, useRef } from 'react';
import VimeoPlayer from '@u-wave/react-vimeo';

interface VimeoSlideProps {
  vimeoId: string; // id o url de Vimeo
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
  const playerRef = useRef<any | null>(null);
  const prevActiveRef = useRef<boolean>(active);

  // cuando el slide se vuelve activo otra vez después de haber estado inactivo,
  // reiniciamos el vídeo desde 0 y lo reproducimos.
  /* useEffect(() => {
    const player = playerRef.current;
    if (!player) {
      prevActiveRef.current = active;
      return;
    }

    // de INACTIVO -> ACTIVO => reinicia y reproduce
    if (active && !prevActiveRef.current) {
      player
        .setCurrentTime(0)
        .then(() => player.play())
        .catch(() => {
          // ignoramos errores de autoplay
        });
    }

    // de ACTIVO -> INACTIVO => pausamos
    if (!active && prevActiveRef.current) {
      player.pause().catch(() => {});
    }

    prevActiveRef.current = active;
  }, [active]); */

  return (
    <div className={className}>
      <VimeoPlayer
        video={vimeoId}
        autoplay={active}
        paused={!active}
        controls={false}
        responsive
        muted
        playsInline
        showTitle={false}
        showByline={false}
        showPortrait={false}
        onReady={(player: any) => {
          playerRef.current = player;
        }}
        onPlay={() => {
          onPlay?.();
        }}
        onPause={onPause}
        onEnd={() => {
          onVideoProgress?.(100);
          onEnded?.();
        }}
        onTimeUpdate={(data: any) => {
          if (!onVideoProgress || !data) return;

          const { percent, duration, seconds } = data;
          let p = 0;

          if (typeof percent === 'number') {
            // percent viene 0–1
            p = percent * 100;
          } else if (
            typeof duration === 'number' &&
            duration > 0 &&
            typeof seconds === 'number'
          ) {
            p = (seconds / duration) * 100;
          }

          if (p < 0) p = 0;
          if (p > 100) p = 100;

          onVideoProgress(p);
        }}
      />
    </div>
  );
}
