import { ReportProps } from '@/types'
import { Download } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Report = ({ reportSection }:ReportProps) => {
    return (
        <div className='border border-gray-100 py-4 rounded-2xl mt-6'>
            <div className='flex items-center justify-between mx-6 pb-2 border-b border-gray-100'>
                <h3 className='text-xl text-[#00091] font-bold'>{reportSection.heading}</h3>
                <p className='text-[#F46600] text-sm cursor-pointer'>{reportSection.btnLabel}</p>
            </div>
            <div className='flex flex-col gap-3 py-3'>
                {
                    reportSection.reports.map((report, i) => (
                        <div key={i} className='hover:bg-[#FBEEEB52] hover:cursor-pointer py-3 px-6 flex items-center justify-between text-[#000911]'>
                            <div className='flex items-center gap-2'>
                                <Image src={report.fileIconImage} width={30} height={30} alt='file' />
                                <div>
                                    <h3 className='text-sm font-semibold'>{report.fileLabel}</h3>
                                    <p className='text-xs'>{report.dated}</p>
                                </div>
                            </div>
                            <div className='group flex items-center gap-2 text-sm'>
                                <p className='hover:text-[#F46400]'>{report.btnLabel}</p>
                                <Download size={18} className='group-hover:text-[#F46400]' />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Report