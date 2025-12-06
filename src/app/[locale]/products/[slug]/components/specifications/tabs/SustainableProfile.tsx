import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl';
import { buildSustainableAttributes } from '../constants';
import { PatternNode, SustainabilityNode } from '@/graphql/generated/types';

const SustainableProfile = ({ product }: { product: PatternNode}) => {
  const sustainability = product.sustainability as SustainabilityNode;
  const t = useTranslations("ProductDetail.SustainableProfile");
  const attributes = buildSustainableAttributes(sustainability);
  const certificateDomain = product.otherattributes?.certificateDomain
  const keys = Object.keys(sustainability) as Array<keyof SustainabilityNode>;

  const features = keys
    .filter((key) => sustainability[key] === true)
    .map((key) => {
      const logoKey = `${key}Logo` as keyof SustainabilityNode;
      const certKey = `${key}CertificateFile` as keyof SustainabilityNode;

      return {
        key,
        logo: sustainability[logoKey] ?? null,
        certificate: sustainability[certKey] ?? null
      };

  });
  
  return (
    <div className='space-y-4'>
      <h5>{t("attributes")}</h5>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {
          attributes.map((item, index) => (
            <div className='flex flex-col' key={index}>
              <p className='text-sm text-(--gray-60) mb-1 font-medium uppercase'>{t(item.title)}</p>
              {!item.logo && <p className='text-(--gray-70)'>{item.value}</p>}
              {
                item.logo &&
                <Image
                  src={certificateDomain + item.logo}
                  alt="text-img"
                  width={100}
                  height={100}
                /> 
              }
            </div>
          ))
        }
      </div>

      <h5>{t("certifications")}</h5>
      <div className='flex items-center flex-wrap'>
        {features.map((feat) => (
          <div key={feat.key} className="gap-2">
            <Image
              src={certificateDomain + feat.logo}
              alt="text-img"
              width={100}
              height={100}
            />
          </div>
        ))}
      </div>

    </div>
  )
}

export default SustainableProfile