import { StepperIndicatorProps } from '@/types'
import React from 'react'

const StepperIndicator = ({ nuberOfsteps, activeIndex, className }: StepperIndicatorProps) => {
    return (
        <div className={`relative flex items-center justify-between w-full ${className}`}>
            {
                Array.from({ length: nuberOfsteps }).map((_, i) => {
                    const borderColor = activeIndex == i ? "border-[#F46600]" : "border-[#0E2437]"
                    return (
                        <div key={i} className='z-20'>
                            <div className={`h-6 w-6 border-4 rounded-full bg-white ${borderColor}`} />
                        </div>
                    )
                })
            }
            <div className='top-3 h-0.5 w-full absolute z-10 bg-[#FBEEEB]' />
        </div>
    )
}

export default StepperIndicator