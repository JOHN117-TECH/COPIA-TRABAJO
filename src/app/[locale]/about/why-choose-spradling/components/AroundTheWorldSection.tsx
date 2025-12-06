import React, { useState } from 'react'
import Dropdown from '@/components/dropdown/Dropdown'
import WhereToBuyMap from '@/app/[locale]/(root)/components/WhereToBuyMap.home'

import { useTranslations } from 'next-intl'
import { OfficeNode } from '@/graphql/generated/types'
import { WCS_AROUND_THE_WORLD } from '@/utilities/constants'
import { FilterOfficesToMap } from '@/hooks/FilterOfficesToMap'
import { useGetOfficesQuery } from '@/graphql/offices/queries/getOffices.generated'

const AroundTheWorldSection = () => {
  const t = useTranslations('AboutUs.WhyChooseSpradling');
  const [selected, setSelected] = useState({lat: 30, lng: -30});
  const { data, loading, error } = useGetOfficesQuery({
    variables: {
      orderBy: "business"
    }
  });

  return (
    <section className='flex flex-col md:flex-row mt-8 md:mt-16' >
      <div className='md:max-w-[50%] py-16 md:pl-[8%] md:pr-10 bg-(--spg-primary) px-6'>
        <h4 className='text-white mb-2'>{t("aroundTheWorld")}</h4>
        <p className='text-white mb-4'>{t("aroundTheWorldDesc")}</p>
        {
          WCS_AROUND_THE_WORLD.map((item: any, idx: number) => (
            <Dropdown className="text-white py-4 pr-6 border-t border-t-(--white)" key={idx}>
              <Dropdown.Toggle>
                <div className='flex items-center justify-between text-white  pb-4'>
                  <span>{t(item.title)}</span>
                  <i className="icon-chevron-down text-[10px] ml-2 relative inline-block group-[.is-opened]:rotate-180 group-[.is-opened]:top-[-4px] text-(--gray-10)"/>
                </div>
              </Dropdown.Toggle>
              <Dropdown.Menu className="w-full rounded-md overflow-hidden py-1 px-2 max-h-[300px] overflow-y-scroll pr-4 space-y-6" customClasses>
                {
                  data?.offices?.edges.map((office: any, idx: number) => (
                    office.node.business.toLowerCase() == item.title ?
                      <Dropdown.Item key={idx}>
                        <div className='flex flex-col' onClick={() => {setSelected({lat: office.node.latitude, lng: office.node.longitude})}}>
                          <span className='flex items-center mb-1'>
                            <i className="icon-location text-(--black) mr-2"></i>
                            <p className='text-(--black) font-medium'>{office.node.name}</p>
                          </span>
                          <span className='pl-6'>
                            <p className='text-(--black) font-medium'>{office.node.city.region.name}, {office.node.city.country.name}</p>
                            <p className='text-(--black) text-sm leading-tight'>{office.node.address}</p>
                            <p className='text-(--black) text-sm leading-tight'>{office.node.phone}</p>
                            <p className='text-(--black) text-sm leading-tight'>{office.node.email}</p>
                          </span>
                        </div>
                      </Dropdown.Item>
                    : <div key={idx}></div>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          ))
        }
      </div>
      <WhereToBuyMap 
        coordinates={selected} 
        offices={
          FilterOfficesToMap(
            data?.offices?.edges?.map(e => e?.node) as (OfficeNode | null | undefined)[]
          )
        } 
      />
    </section>
  )
}

export default AroundTheWorldSection