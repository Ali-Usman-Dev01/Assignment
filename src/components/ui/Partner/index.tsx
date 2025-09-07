import { partners } from '@/constants/partners'
import Image from 'next/image'
import React from 'react'

const Partners = () => {
  return (
    <div className='mt-20 px-10 flex flex-col items-center justify-center w-full overflow-hidden'>
        <h3 className='text-2xl opacity-50 text-black font-bold'>{partners.heading}</h3>
        <div className='animate-marquee w-max mt-8'>
            {
                partners.list.map((partner,index)=><Image key={index} className='object-cover' src={partner} width={200} height={200} alt='partner' />)
            }
        </div>
    </div>
  )
}

export default Partners