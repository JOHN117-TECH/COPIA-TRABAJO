'use client';

import React, { useState } from 'react'
import { useTranslations } from 'next-intl';
import Breadcrumbs from '@/components/Breadcrumbs';
import FaqsSection from './components/FaqsSection';
import ContactForm from '@/components/forms/ContactForm';
import PaginationSection from './components/PaginationSection';
import GetCurrentInstance from '@/hooks/useGetCurrentInstance';
import { useGetFaQsQuery } from '@/graphql/faqs/queries/getFaqs.generated';

const Faqs = () => {
  const t = useTranslations("FAQs");
    const [isOpen, setIsOpen] = useState<number[]>([]);
  
  // const { data, loading, error } = useGetFaQsQuery({
  //   variables: {
  //      instances: GetCurrentInstance()
  //   },
  // });
  
  const data = [
    {
      node: {
        question: "question1",
        answer: "answer1"
      }
    },
    {
      node: {
        question: "question1",
        answer: "answer1"
      }
    },
    {
      node: {
        question: "question1",
        answer: "answer1"
      }
    }
  ]

  const filterData = (filter: string) => {

  }

  return (
    <div>
      <section className="bg-white px-[10%] py-8">
        <Breadcrumbs />
        <h1 className='text-center text-(--spg-text) my-6'>{t("title")}</h1>
        <FaqsSection data={data} filterData={filterData} />
        <PaginationSection data={data} />
      </section>
      <ContactForm formType={'home'}/>
    </div>
  )
}

export default Faqs