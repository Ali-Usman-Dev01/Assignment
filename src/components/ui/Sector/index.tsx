import Button from '@/components/dump/button'
import { businessSector } from '@/constants/sectors'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const BusinessSectors = () => {
  return (
    <div className='py-16 px-10 w-full'>
        <div className='flex flex-col items-center'>
            <p className='uppercase text-sm text-[#9FA7AF] '>{businessSector.heading}</p>
        <h2 className='text-4xl text-[#000911] font-bold  mt-2'>{businessSector.subHeading}</h2>
        <p className='text-sm text-[#000911] max-w-1/2 text-center mt-2'>{businessSector.description}</p>
        </div>
        <div className='grid md:grid-cols-4 grid-cols-2 gap-4 mt-16'>
            {
                businessSector.sectors.map((sector,i)=>(
                    <div key={i} className='p-4 border-2 border-[#F5F5F5] rounded-xl cursor-pointer hover:bg-[#FBEEEB80] hover:border-[#FBEEEB80]'>
                        <Image className='h-8 w-8 object-contain' src={sector.image} width={100} height={100} alt={sector.label} />
                        <h3 className='text-md text-[#000911] font-bold mt-6 mb-2'>{sector.label}</h3>
                        <p className='text-sm text-[#000911] opacity-50'>{sector.description}</p>
                    </div>
                ))
            }
        </div>
        <div className='flex items-center justify-center mt-16 gap-4'>
            <Button label='Talk to a Specialist' variant='primary' rightIcon={<ArrowRight size={18} className='text-white' />} />
            <Button label='Start Sourcing Today' variant='secondary_outline' />
        </div>
    </div>
  )
}

export default BusinessSectors