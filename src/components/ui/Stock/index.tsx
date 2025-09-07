import Button from '@/components/dump/button';
import { stock } from '@/constants/stock'
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

const StockPrice = () => {
    const { heading, subHeading, btnLabel, secpLogo, stockCard, contactCard } = stock;
    return (
        <div className='px-10 py-16 grid max-lg:grid-cols-1 grid-cols-2 items-center bg-[#F5F5F5]'>
            {/* left */}
            <div>
                <h4 className='text-sm text-[#2DBE73] font-medium'>{heading}</h4>
                <p className='text-4xl text-[#000911] font-bold max-w-md'>{subHeading}</p>
                <div className='flex items-center gap-5 mt-5'>
                    <Button label={btnLabel} variant='primary' rightIcon={<ArrowRight size={20} className='text-white' />} />
                    <Image src={secpLogo} width={60} height={60} className='' alt="logo" />
                </div>
            </div>
            {/* right */}
            <div className='grid max-sm:grid-cols-1 grid-cols-2 gap-2 max-lg:mt-5'>
                <div className='bg-white border border-[#F5F5F5] p-5 rounded-xl'>
                    <div className='flex items-center gap-3'>
                        <Image src={stockCard.logo} width={50} height={50} className='' alt="logo" />
                        <div className=''>
                            <div className='flex items-center gap-1'>
                                <p className='text-[#000911] text-md font-bold'>{stockCard.name}</p>
                                <span><Image src={stockCard.verfiedImage} width={15} height={15} alt="logo" /></span>
                            </div>
                            <p className='text-xs mt-1 text-[#7A7A7A] '>{stockCard.tech}</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-2 mt-5'>
                        {
                            stockCard.stocks.map((stock, i) => (
                                <div key={i} className='border border-[#F5F5F5] rounded-2xl p-3 flex flex-col items-center justify-center'>
                                    <p className='text-xs text-[#7A7A7A]'>{stock.label}</p>
                                    <p className='text-md font-bold text-[#000911]'>{stock.value}</p>
                                </div>
                            ))
                        }
                    </div>
                    <Image src={stockCard.chart} width={0} height={0} sizes='100vw' className='mt-8 w-full h-auto max-h-64' alt="logo" />
                </div>
                <div className='bg-[#562315] text-white p-5 rounded-xl'>
                    <h4>{contactCard.heading}</h4>
                    <h2 className='text-2xl '>{contactCard.subHeading}</h2>
                    <div className='flex flex-col gap-5 mt-8'>
                        {
                            contactCard.details.map((detail,i)=>(
                                <div key={i} className='flex flex-col'>
                                    <p className='text-xs'>{detail.label}</p>
                                    <p className='text-md font-bold '>{detail.value}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StockPrice