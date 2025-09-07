import Button from '@/components/dump/button'
import { service } from '@/constants/services'
import Image from 'next/image'
import React from 'react'

const Service = () => {
    return (
        <div className='py-16 px-10 w-full'>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                    <p className=" uppercase text-sm text-[#9FA7AF]">{service.heading}</p>
                    <h3 className="text-2xl md:text-3xl mt-2 text-[#000911] font-bold max-w-lg">
                        {service.subHeading}
                    </h3>
                </div>
                <Button className="!py-2 w-fit max-md:mt-6" label={service.btnLabel} variant={"primary"} />
            </div>
            <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 mt-16">
                {service.services.map((service, i) => (
                    <div key={i} className="service-card-bg p-4 border-2 border-[#F5F5F5] rounded-xl cursor-pointer hover:bg-[#FBEEEB80] hover:border-[#FBEEEB80] flex flex-col">
                        <div className="flex-1">
                            <h3 className="text-md text-[#000911] font-bold mt-6 mb-2">
                                {service.heading}
                            </h3>
                            <p className="text-sm text-[#000911] opacity-50">
                                {service.description}
                            </p>
                        </div>
                        <div className="mt-4 flex justify-center">
                            <Image src={service.image} alt={service.heading} width={0} height={0} sizes="100vw" className="w-full h-auto object-contain max-h-64" />
                        </div>
                        <div className="mt-4 flex items-center justify-center">
                            <Button className='max-md:py-3 max-md:px-6' label={service.btnLabel} variant="secondary" />
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Service