import clsx from 'clsx'
import Image from 'next/image'
import React, { useState } from 'react'
import Checkbox from '@/components/forms/Checkbox'

interface Props {
  name: string
  description: string
  image: string
  checked: boolean
  onClick?: () => void
  disabled?: boolean
  className?: string
}
// Verificar si se debe usar o si se reemplaza por 'ProductCard', posiblemente deprecada...
const PatternOrProductCard: React.FC<Props> = ({ name, description, image, checked, onClick, disabled=false, className }) => {
  const fallBackSrc = '/errorImg.webp';
  const [imageError, setImageError] = useState(false);
  return (
    <div className={clsx("flex gap-4 rounded-md shadow-md pr-4", { "bg-(--gray-20)": disabled}, className)}>
      <Image
        src={imageError ? fallBackSrc : (image as string)}
        alt="text-img"
        width={150}
        height={150}
        className="w-20 h-20 object-cover rounded-l-md"
        onError={() => setImageError(true)}
      />
      <div className="flex flex-col w-full justify-center">
        <h5 className="text-lg text-(--spg-text-dark) truncate leading-6">{name}</h5>
        <p className="text-sm text-(--spg-text)">{description}</p>
      </div>
      {
        !disabled && 
        <Checkbox
          name={""}
          checked={checked}
          onClick={onClick}
        />
      }
    </div>
  )
}

export default PatternOrProductCard