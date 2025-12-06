'use client';

import Breadcrumbs from '@/components/Breadcrumbs';
import NewsListSection from './components/NewsListSection';
import CategoriesSection from './components/CategoriesSection';

import React, { useEffect, useState } from 'react'
import { useGetCategoriesQuery } from '@/graphql/news/queries/getCategories.generated';
import { usePostsByCategoryQuery } from '@/graphql/news/queries/getPostsByCategory.generated';

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState<any>();
  const { data: categories, loading: categoriesLoading, error: categoriesError } = useGetCategoriesQuery({})
  const { data, loading, error } = usePostsByCategoryQuery({
    variables: {
      category: [selectedCategory?.id || categories?.blogCategories?.edges[0]?.node?.id],
    },
    skip: !selectedCategory && !categories?.blogCategories?.edges?.length
  });

  useEffect(() => {
    if (categories?.blogCategories?.edges?.length) {
      setSelectedCategory(categories?.blogCategories?.edges[0]?.node);
    }
  }, [categories]);

  return (
    <div className='flex flex-col gap-4 p-10'>
      <Breadcrumbs />
      <CategoriesSection 
        loading={categoriesLoading}
        categories={categories} 
        selectedCategory={selectedCategory} 
        setSelectedCategory={setSelectedCategory} 
      />
      <NewsListSection 
        data={data} 
        loading={categoriesLoading || loading}
        selectedCategory={selectedCategory} 
      />
    </div>
  )
}

export default News
