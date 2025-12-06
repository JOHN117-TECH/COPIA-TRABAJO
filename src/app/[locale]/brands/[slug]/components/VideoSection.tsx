"use client";

import React from 'react'
import ReactPlayer from 'react-player'
import { useTranslations } from 'next-intl';

const VideoSection = ({ data, slug }: { data: any, slug: string }) => {
  const t = useTranslations('Brands.'+ slug);

  return (
    <div className="relative w-full md:h-[60vh] overflow-hidden shadow-lg flex flex-col md:flex-row">
      <section className="w-full px-[10%] bg-black/30 relative z-10 flex flex-col justify-center min-h-[200px]">
        <h3 className='text-white'>{t(data.title)}</h3>
        <p className='text-white'>{t(data.description)}</p>
      </section>
      <section className="md:absolute inset-0 w-full h-full transition-opacity duration-700">
        <ReactPlayer
          url={data.src}
          playing={true}
          muted
          controls
          width="100%"
          height="100%"
        />
      </section>
    </div>
  )
}

export default VideoSection