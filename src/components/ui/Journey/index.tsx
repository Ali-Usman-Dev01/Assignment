import StepperIndicator from '@/components/dump/stepper'
import { journey } from '@/constants/journey'
import React from 'react'

const Journey = () => {
    return (
        <section className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-6">
                <h4 className='text-[#9FA7AF] text-sm uppercase mb-2'>{journey.subHeadng}</h4>
                <h2 className='text-[#000911] text-4xl max-w-xl font-bold mb-8'>{journey.heading}</h2>
                <div className="relative">
                    <div className="hidden lg:flex justify-between w-[80%] px-4">
                        <div className="w-full border-t border-[#FBEEEB] relative top-4"></div>
                    </div>

                    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 relative z-10">
                        {journey.steps.map((step, i) => (
                            <div key={i} className="flex flex-col items-start text-left">
                                <div className="flex flex-col items-start mb-4 relative">
                                    <div
                                        className={`w-8 h-8 flex items-center justify-center border-4 rounded-full ${step.active
                                                ? "border-[#F46600] text-[#F46600]"
                                                : "border-[#0E2437] text-[#0E2437]"
                                            } bg-white z-10`}
                                    />
                                    <span
                                        className={`text-xs mt-2 font-medium ${step.active ? "text-[#F46600]" : "text-[#0E2437]"
                                            }`}
                                    >
                                        {step.step}
                                    </span>
                                </div>

                                <div className="mb-3">{step.icon}</div>

                                <h3
                                    className={`font-semibold text-[#0E2437]`}
                                >
                                    {step.title}
                                </h3>
                                <p className="text-gray-600 text-sm mt-2">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Journey