import React from 'react'
import PostDetail from './components/PostDetail';
import Breadcrumbs from '@/components/Breadcrumbs'
import { PageProps } from '../../../../../.next/types/app/[locale]/news/[slug]/page';

const PostPage =  async({ params }: PageProps) => {
  const { slug } = await params;

  return (
    <div>
      <section className="hidden md:block bg-white px-[10%] py-8">
        <Breadcrumbs />
      </section>
      <PostDetail slug={slug} />
    </div>
  )
}

export default PostPage