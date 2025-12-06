"use client";

import NotLogged from './components/NotLogged';
import EmptyLists from './components/EmptyLists';
import React, { useEffect, useState } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';

import { LISTS } from '@/utilities/constants';
import { getCookie } from '@/hooks/getCookie';
import ListsSection from './components/ListsSection';

const Lists = () => {
  const [data, setData] = useState<any>(LISTS);
  const [isLogged, setIsLogged] = useState<boolean>(!!getCookie("userToken"));

  useEffect(() => {
    const handleAuthChange = (event: Event) => {
      const customEvent = event as CustomEvent<{ logged: boolean }>;
      setIsLogged(customEvent.detail.logged);
    };

    window.addEventListener("authChange", handleAuthChange);

    setIsLogged(!!getCookie("userToken"));

    return () => {
      window.removeEventListener("authChange", handleAuthChange);
    };
  }, []);

  return (
    <>
      <section className="bg-white px-[10%] pt-8">
        <Breadcrumbs />
      </section>
      <>
        {!isLogged ? (
          <NotLogged />
        ) : data.edges.length === 0 ? (
          <EmptyLists />
        ) : (
          <ListsSection data={data} />
        )}
      </>
    </>
  )
}

export default Lists