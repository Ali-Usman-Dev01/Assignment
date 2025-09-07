import Button from '@/components/dump/button'
import { about } from '@/constants/about'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const AboutUs = () => {
    return (
        <section className="w-full bg-white py-16 px-6 md:px-16">
            <div className="mx-auto flex flex-col lg:flex-row justify-between gap-10 items-center px-10">
                <div className='flex-shrink-1'>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
                        {about.heading}
                    </h2>
                    <p className="mt-4 text-gray-600 text-base md:text-lg">
                        {about.description}
                    </p>
                    <Button className='w-fit mt-3' label={about.btnLabel} variant='primary' rightIcon={<ArrowRight size={18} className='text-white' />} />

                </div>

                <div className="flex max-md:flex-col flex-row items-center gap-6">
                    {/* CEO Image */}
                    <div className="flex-shrink-0 w-[250px] h-[300px]">
                        <Image
                            src={about.Image}
                            alt="CEO"
                            width={250}
                            height={300}
                            className="rounded-lg shadow-lg object-cover w-full h-full"
                        />
                    </div>

                    {/* Quote Box */}
                    <div className="flex-shrink-0 w-[250px] h-[300px] bg-[#4B1D0C] text-white p-6 rounded-lg shadow-lg flex flex-col justify-between">
                        <div>
                            <Image
                                className="object-contain"
                                src="/assets/images/quotes.png"
                                width={20}
                                height={20}
                                alt="quotes"
                            />
                            <p className="text-md mt-3">{about.card.message}</p>
                        </div>
                        <div>
                            <p className="mt-4 font-medium">{about.card.from}</p>
                            <p className="signature text-lg">{about.card.signature}</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default AboutUs