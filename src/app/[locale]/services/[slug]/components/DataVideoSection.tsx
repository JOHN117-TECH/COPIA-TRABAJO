'use client'

import React from 'react'
import ReactPlayer from 'react-player'
import { useTranslations } from 'next-intl';

const DataVideoSection = ({ src, paragraph } : { src: string, paragraph: string }) => {
  const t = useTranslations('Services');
  return (
    <div className='bg-white px-[10%] py-8 flex flex-col md:flex-row gap-4 pb-12 items-center'>
      <p className='md:max-w-[50%] md:pr-10'>{t(paragraph)}</p>
      <ReactPlayer
        url={src}
        playing={true}
        muted
        controls
        width="100%"
        height="300px"
      />
    </div>
  )
}

export default DataVideoSection