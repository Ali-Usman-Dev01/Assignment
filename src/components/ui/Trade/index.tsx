import { trade } from '@/constants/trade'
import { ChevronDown, TrendingDown, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

const Trade = () => {
    const { heading, subHeading, navMenues, trend, trendImage } = trade;
    return (
        <div className='px-10 py-16'>
            <h4 className='text-[#9FA7AF] text-sm uppercase'>{heading}</h4>
            <h2 className='text-[#000911] text-4xl font-bold mt-6'>{subHeading}</h2>
            <div className='flex items-center gap-6 my-8 flex-wrap'>
                {
                    navMenues.map((menu, i) => (
                        <p key={i} className={`text-sm text-[#000911] ${menu.isActive && "py-2 px-6 rounded-full text-white bg-[#F46600]"}`} >{menu.label}</p>
                    ))
                }
            </div>
            <div className='grid grid-cols-2 max-md:grid-cols-1 mt-16 gap-5 border border-[#DDDEDF] rounded-xl items-center'>
                {/* left */}
                <div className='p-8 max-md:border-b max-md:border-r-0 border-r border-[#DDDEDF]'>
                    <div className='flex items-center justify-between'>
                        <h2 className='text-xl text-[#000911] font-bold'>{trend.heading}</h2>
                        <div className='flex items-center py-2 px-6 rounded-full gap-1 border border-[#000911]'><p className='text-[#000911] text-sm'>1 Year</p><ChevronDown size={20} className='text-red-500' /></div>
                    </div>
                    <div className='grid grid-cols-2 gap-8 mt-6'>
                        {
                            trend.values.map((value, i) => {
                                const isUpTrend = value.trend == "up"
                                const isDownTrend = value.trend == "down"
                                const icon = isUpTrend ? <TrendingUp size={20} className='text-green-400' /> : isDownTrend ? <TrendingDown size={20} className='text-red-500' /> : null
                                const color = isDownTrend ? "text-red-500" : isUpTrend ? "text-green-500" : "text-[#000911]"
                                return (
                                    <div key={i} className='flex flex-col gap-2'>
                                        <h3>{value.label}</h3>
                                        <p className={`flex items-center gap-3 font-bold text-xl ${color}`}> {icon && icon} {value.value}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                {/* right */}
                <div className='pr-8'>
                    <Image src={trendImage} width={0} height={0} alt='chart image' sizes='100vw' className='w-full h-auto max-h-[500px]' />
                </div>
            </div>
        </div>
    )
}

export default Trade