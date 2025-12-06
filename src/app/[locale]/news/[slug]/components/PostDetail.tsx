"use client";

import React from 'react'
import { useGetPostQuery } from '@/graphql/news/queries/getPost.generated';
import { useTranslations } from 'next-intl';
import { Button, ButtonIcon, ButtonText } from '@/components/Button';
import ButtonType from '@/models/buttonType';

const PostDetail = ({slug}: {slug: string}) => {
  const t = useTranslations('News');
  const { data, loading, error } = useGetPostQuery({
    variables: {
       slug: slug
    },
  });
  return (
    <div>
      <section className='bg-(--gray-10) w-full text-center py-20 space-y-8'>
        <h2 className='md:w-[40%] mx-auto'>{data?.post?.title}</h2>
        <p className='md:w-[60%] mx-auto'>{data?.post?.summary}</p>
      </section>
      <section className='flex justify-center items-center py-6 gap-4'>
        <p>{t('shareArticle')}</p>
        <Button design={ButtonType.LINK_WHITE_MEDIUM}>
          <ButtonText text="Share" />
          <ButtonIcon className="icon-share" />
        </Button>
      </section>
      <div
        className="prose max-w-none px-[10%] space-y-8"
        dangerouslySetInnerHTML={{ __html: data?.post?.content || '' }}
      />
    </div>
  )
}

export default PostDetail