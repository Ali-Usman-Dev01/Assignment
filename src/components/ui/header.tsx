import { headerContent } from '@/constants/header'
import React from 'react'

const Header = () => {
    return (
        <div className="bg-[#803520] text-white py-2 overflow-hidden whitespace-nowrap">
            <div className="flex w-max animate-marquee">
                {
                    headerContent.map((item, index) => (
                        <div key={index} className='kode-mono text-white text-xs flex items-center gap-4 mx-6'>
                            <span className="mx-6">{item}</span>
                            <span className="mx-6 opacity-15 text-xl">|</span>
                        </div>
                    ))
                }
                {
                    headerContent.map((item, index) => (
                        <div key={index} className='kode-mono text-white text-xs flex items-center gap-4 mx-6'>
                            <span className="mx-6">{item}</span>
                            <span className="mx-6 opacity-15 text-xl">|</span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Header