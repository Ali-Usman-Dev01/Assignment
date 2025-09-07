import { ReleaseProps } from '@/types'
import { MoveLeft, MoveRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Release = ({ releases }: ReleaseProps) => {
    return (
        <div className='grid grid-cols-1 gap-5'>
            {
                releases.map((release, i) => (
                    <div key={i} className='border border-gray-100 p-4 rounded-2xl mt-6'>
                        <div className='flex items-center justify-between'>
                            <h3 className='text-xl font-bold text-[#000911]'>{release.label}</h3>
                            <p className='text-[#f46400] text-sm cursor-pointer'>{release.btnLabel}</p>
                        </div>
                        <div className='flex items-center gap-3 mt-3'>
                            <Image src={release.image} className='rounded-2xl object-cover' width={200} height={200} alt='release' />
                            <div className='flex flex-col gap-3'>
                                <div className='bg-gray-200 px-4 py-1.5 rounded-full w-fit'>
                                    <p className='text-[#000911] text-xs'>{release.tag}</p>
                                </div>
                                <h2 className='text-xl font-bold text-[#000911]'>{release.title}</h2>
                                <p className='text-sm text-[#000911] opacity-50'>{release.description}</p>
                            </div>
                        </div>
                        <div className='flex items-center justify-end gap-3 mt-6'>
                            <div className='text-lg text-[#000911] border border-[#000911] rounded-full cursor-not-allowed py-3 px-6 opacity-50 '>
                                <MoveLeft />
                            </div>
                            <div className='text-lg text-[#000911] border border-[#000911] rounded-full cursor-pointer py-3 px-6'>
                                <MoveRight />
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Release