import { serviceItem } from '@/types'
import React from 'react'
import Button from './button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

const ServiceCard = ({service}:{service:serviceItem}) => {
    const {label,btnLabel,image,isInvest} = service
  return (
    <div className='service-card-bg relative overflow-hidden rounded-3xl flex flex-col gap-10 py-3 pl-4 grow'>
        <h3 className='w-[60%] font-bold text-lg'>{label}</h3>
        <Image className='object-cover absolute bottom-0 right-0 z-10' src={image} width={200} height={200} alt="card image" />
        <Button className='w-fit z-20' label={btnLabel} variant='primary' rightIcon={<ArrowRight size={18} className='text-white' />} />
    </div>
  )
}

export default ServiceCard