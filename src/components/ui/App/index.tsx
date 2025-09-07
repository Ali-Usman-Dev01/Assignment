import { mobile } from '@/constants/mobile'
import Image from 'next/image'
import React from 'react'

const MobileApp = () => {
    return (
        <div className="px-6 md:px-10 py-16">
            <div className="relative">
                <Image
                    src={mobile.main}
                    className="w-full h-auto min-h-[400px] rounded-xl object-cover"
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt="mobile-image"
                />
                <Image
                    src={mobile.mobileImage}
                    className="hidden md:block absolute right-20 bottom-0"
                    width={300}
                    height={300}
                    alt="mobile-image"
                />
                <div
                    className="absolute top-6 left-6 md:top-10 md:left-10 
          text-white flex flex-col gap-4 md:gap-6 
          p-4 md:p-6 rounded-xl 
          max-w-[90%] md:max-w-sm"
                >
                    <p className="uppercase text-sm">{mobile.heading}</p>
                    <p className="text-4xl font-bold">{mobile.subHeading}</p>
                    <p className="text-sm">{mobile.description}</p>
                    <div className="flex flex-wrap items-center gap-3 mt-4">
                        {mobile.store.map((st, i) => (
                            <Image
                                key={i}
                                src={st.image}
                                width={140}
                                height={80}
                                alt="store-image"
                                className="w-36 h-auto"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileApp
