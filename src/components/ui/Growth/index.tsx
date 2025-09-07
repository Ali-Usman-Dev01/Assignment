import Button from '@/components/dump/button'
import { growth } from '@/constants/growth'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Growth = () => {
    return (
        <section className="bg-[#0B1C2C] text-white">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-center px-6 py-16">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold leading-snug">
                        {growth.heading}
                    </h2>
                    <Button className='mt-6 !py-2' label={growth.btnLabel} variant={'primary'} rightIcon={<ArrowRight size={18} className='text-white' />} />
                    <div className="mt-12 grid sm:grid-cols-3 gap-8">
                        {
                            growth.stats.map((stat, index) => (
                                <div key={index}>
                                    <span>{stat.icon}</span>
                                    <h3 className="text-2xl font-bold text-orange-500 mt-2">{stat.total}</h3>
                                    <p
                                        className="text-md mt-1 text-white"
                                        dangerouslySetInnerHTML={{ __html: stat.heading }}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="relative w-full h-64 md:h-96">
                    <Image
                        src={growth.truck}
                        alt="Truck"
                        fill
                        className="object-cover rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </section>
    )
}

export default Growth