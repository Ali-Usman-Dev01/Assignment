import React from 'react'
import Navbar from '../Navbar'
import Button from '@/components/dump/button'
import Image from 'next/image'

const HeroSection = () => {
    return (
        <section className="relative w-full h-[900px] flex items-center justify-center text-center text-white">
            <video
                className="absolute z-10 w-full h-full object-cover"
                src="/assets/videos/hero.mp4"
                autoPlay
                muted
                loop
                playsInline
            />
            <Navbar />
            <div className="absolute bg-black z-40 w-full h-full opacity-40" />
            <div className="absolute max-md:px-3 px-6 z-50 max-md:bottom-16 bottom-14 max-md:left-2 left-5 text-left">
                <h1 className="max-md:text-2xl text-4xl font-bold leading-tight">
                    Simplifying Commodity Trade <br /> for Modern Businesses
                </h1>
                <p className="mt-2 text-xs font-normal text-gray-200">
                    Explore opportunities and expand your reach in global markets.
                </p>
            </div>
            <Button className='z-50 max-md:bottom-3 bottom-6 right-8 absolute !py-2 !px-3 !gap-1' label="Ask Zarea AI" rightIcon={<Image className='object-cover' src={"/assets/images/ai.png"} width={20} height={20} alt='ai logo' />} />
        </section>
    )
}

export default HeroSection