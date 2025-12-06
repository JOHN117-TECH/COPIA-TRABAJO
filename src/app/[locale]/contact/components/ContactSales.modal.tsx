import Image from 'next/image';
import React, { useState } from 'react'
import { useTranslations } from 'next-intl';

const ContactSales = () => {
  const t = useTranslations("Contact");
  const [imageError, setImageError] = useState(false);
  const fallBackSrc = '/errorImg.webp';
  
  // TODO: Quitar data quemada
  const dataRender = [
    {name: "Brian Clark", image: "https://img.freepik.com/foto-gratis/estilo-vida-emociones-gente-concepto-casual-confiado-agradable-sonriente-mujer-asiatica-brazos-cruzados-pecho-seguro-listo-ayudar-escuchando-companeros-trabajo-participando-conversacion_1258-59335.jpg?semt=ais_hybrid&w=740", email: "sales@spradling.group", phone: "(205) 985-5207", whatsapp: "(205) 985-5207"},
    {name: "Stephanie Powell", image: "https://www.caritas.org.mx/wp-content/uploads/2019/02/cualidades-persona-humanitaria.jpg", email: "sales@spradling.group", phone: "(205) 985-5207", whatsapp: "(205) 985-5207"},
    {name: "Christopher White", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJqTJ3N-jLKJOcgpc3C_rWXnERVXmq_C2a8w&s", email: "sales@spradling.group", phone: "(205) 985-5207", whatsapp: "(205) 985-5207"},
    {name: "Emily Miller", image: "https://concepto.de/wp-content/uploads/2018/08/persona-e1533759204552.jpg", email: "sales@spradling.group", phone: "(205) 985-5207", whatsapp: "(205) 985-5207"},
    {name: "Michael Davis", image: "https://img.freepik.com/foto-gratis/hombre-tiro-medio-peinado-afro_23-2150677135.jpg?semt=ais_hybrid&w=740", email: "sales@spradling.group", phone: "(205) 985-5207", whatsapp: "(205) 985-5207"},
    {name: "William Anderson", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-NV9q05F16g50huet5CWXj-AtbmH30NTR4A&s", email: "sales@spradling.group", phone: "(205) 985-5207", whatsapp: "(205) 985-5207"}
  ]

  return (
    <div className='container px-8 md:px-25 py-8 md:py-10 flex gap-4 flex-col text-center'>
      <h3 className='leading-tight'>{t("ContactSales.title")}</h3>
      <p className="text-sm">{t("ContactSales.description")}</p>
      <section className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4 max-h-[60vh] overflow-y-auto">
        {dataRender.map((item, index) => (
        <div key={index} className='flex flex-col items-start'>
          <Image
            src={imageError ? fallBackSrc : (item.image as string)}
            alt="text-img"
            width={150}
            height={150}
            className="w-15 h-15 rounded-full object-cover mx-auto"
            onError={() => setImageError(true)}
          />
          <p className='text-lg font-semibold text-center w-full my-2 truncate'>{item.name}</p>
          <div className='flex items-center gap-2 w-full truncate'>
            <p className='text-xs/4 font-semibold truncate'>{t('email')}:</p>
            <p className='text-xs/4 font-normal truncate'>{item.email}</p>
          </div>
          <div className='flex items-center gap-2 w-full truncate'>
            <p className='text-xs/4 font-semibold truncate'>{t('phone')}:</p>
            <p className='text-xs/4 font-normal truncate'>{item.phone}</p>
          </div>
          <div className='flex items-center gap-2 w-full truncate'>
            <p className='text-xs/4 font-semibold truncate'>{t('whatsapp')}:</p>
            <p className='text-xs/4 font-normal truncate'>{item.whatsapp}</p>
          </div>
        </div>
        ))}
      </section>
    </div>
  )
}

export default ContactSales