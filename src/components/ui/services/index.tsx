import ServiceCard from '@/components/dump/card'
import { services } from '@/constants/services'
import React from 'react'

const Services = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10 px-10'>
        {
            services.map((service,index)=>(
                <ServiceCard service={service} key={index} />
            ))
        }
    </div>
  )
}

export default Services