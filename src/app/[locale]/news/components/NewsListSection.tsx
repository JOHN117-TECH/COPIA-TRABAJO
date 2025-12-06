import Image from 'next/image'
import React, { useState } from 'react'
import DateFormatter from '@/hooks/DateFormatter'
import NewsListSkeleton from './NewsListSkeleton'
import { Button, ButtonIcon, ButtonText } from '@/components/Button'
import SPGLink from '@/components/Link'
import ButtonType from '@/models/buttonType'

const NewsListSection = ({data, selectedCategory, loading}: any) => {
  const fallBackSrc = '/errorImg.webp';
  const [imageError, setImageError] = useState(false);
  const firstPost = data?.posts?.edges[0]?.node

  if (loading) return <NewsListSkeleton />;
  return (
    <div className='flex flex-col gap-4'>
      {
        data?.posts && firstPost && firstPost?.title && firstPost?.summary &&
        <div className='bg-white rounded-lg shadow grid grid-cols-1 md:grid-cols-2 items-center'>
          <section className='p-10 py-16 space-y-6'>
            <h4 className='leading-tight font-bold'>{firstPost?.title}</h4>
            <p>{firstPost?.summary}</p>
            <hr />
            <div className='flex justify-between'>
              <p className='bg-(--gray-10) px-4 rounded border border-(--gray-10)'>{selectedCategory?.name}</p>
              <p>{DateFormatter(firstPost?.publicationDatetime)}</p>
            </div>
            <SPGLink path={`/news/${firstPost?.slug}`} >
              <Button design={ButtonType.FILLED_WHITE_MEDIUM}>
                <ButtonText text="Read more" />
                <ButtonIcon className="icon-arrow-outward" />
              </Button>
            </SPGLink>
          </section>
          <Image 
            src={imageError ? fallBackSrc : (firstPost?.listingImageThumbSmall as string)} 
            width={600} 
            height={100} 
            alt={firstPost?.altText} 
            onError={() => setImageError(true)}
          />
        </div>
      }
      <section className='grid grid-cols-1 md:grid-cols-3 gap-4 gap-y-8'>
        {
          data?.posts && data.posts?.edges.map((post: any, index: number) => {
            return post?.node.title && post?.node.content && index > 0 &&
              <div key={post?.node.id} className='bg-white rounded-lg shadow'>
                <Image 
                  src={imageError ? fallBackSrc : (post?.node?.listingImageThumbSmall as string)}
                  width={500} 
                  height={200} 
                  alt={post?.node?.altText}
                  onError={() => setImageError(true)} 
                />
                <section className='p-6 space-y-4'>
                  <h5 className='leading-tight text-xl font-bold'>{post?.node?.title}</h5>
                  <p>{post?.node?.summary}</p>
                  <hr />
                  <div className='flex justify-between'>
                    <p className='bg-(--gray-10) px-4 rounded border border-(--gray-10)'>{selectedCategory?.name}</p>
                    <p>{DateFormatter(post?.node?.publicationDatetime)}</p>
                  </div>
                  <span className='flex justify-end'>
                    <SPGLink path={`/news/${post?.node?.slug}`} >
                      <Button design={ButtonType.LINK_GREEN_BIG}>
                        <ButtonText text="Read more" />
                        <ButtonIcon className="icon-arrow-right" />
                      </Button>
                    </SPGLink>
                  </span>
                </section>
              </div>
            }
          )
        }
      </section>
    </div>
  )
}

export default NewsListSection