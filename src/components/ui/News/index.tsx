import Button from '@/components/dump/button'
import { news } from '@/constants/news'
import { ArrowRight } from 'lucide-react'
import React from 'react'
import Report from './report'
import Release from './release'

const News = () => {
    return (
        <div className='px-10 py-16'>
            <div className='flex items-end justify-between'>
                <div className='flex flex-col gap-3'>
                    <h1 className='text-4xl font-bold text-[#000911]'>{news.heading}</h1>
                    <p className='text-sm max-w-sm text-[#000911]'>{news.desciption}</p>
                </div>
                <Button label={news.btnLabel} variant='primary' rightIcon={<ArrowRight size={20} className='text-white' />} />
            </div>

            <div className='grid grid-cols-2 max-lg:grid-cols-1 gap-5 mt-8'>
                <Report reportSection={news.reportSection} />
                <Release releases={news.releases} />
            </div>

        </div>
    )
}

export default News