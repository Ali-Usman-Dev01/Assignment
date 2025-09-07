import { InputProps } from '@/types'
import React from 'react'

const Input = ({ value, onChange, label, placeholder, name, required, type }: InputProps) => {
    switch (type) {
        case "input":
            return (
                <div className='w-full flex flex-col gap-1'>
                    <label className='flex gap-1' htmlFor={name}>{label}{required && <span className='text-red-500 mt-0.5'>*</span>}</label>
                    <div className='w-full'>
                        <input className='w-full outline-none text-lg text-black py-1.5 px-4 bg-[#00000008] rounded-2xl' type="text" id={name} required={required} placeholder={placeholder} name={name} value={value as string} onChange={onChange} />
                    </div>
                </div>
            )
        case "select":
            return (
                <div className='w-full flex flex-col gap-1'>
                    <label className='flex gap-1' htmlFor={name}>{label}{required && <span className='text-red-500 mt-0.5'>*</span>}</label>
                    <div className='w-full px-4 bg-[#00000008] rounded-xl'>
                        <select className=' w-full outline-none py-2.5'>
                            <option>1</option>
                            <option>2</option>
                        </select>
                    </div>
                </div>
            )
        case "textarea":
            return (
                <div className='w-full flex flex-col gap-1'>
                    <label className='flex gap-1' htmlFor={name}>{label}{required && <span className='text-red-500 mt-0.5'>*</span>}</label>
                    <div className='w-full'>
                        <textarea rows={10} className='w-full outline-none text-lg text-black py-1.5 px-4 bg-[#00000008] rounded-2xl' id={name} required={required} placeholder={placeholder} name={name} value={value as string} onChange={onChange} />
                    </div>
                </div>
            )
        default:
            return (
                <div className='w-full flex flex-col gap-1'>
                    <label className='flex gap-1' htmlFor={name}>{label}{required && <span className='text-red-500 mt-0.5'>*</span>}</label>
                    <div className='w-full'>
                        <input className='w-full outline-none text-lg text-black py-1.5 px-4 bg-[#00000008] rounded-2xl' type="text" id={name} required={required} placeholder={placeholder} name={name} value={value as string} onChange={onChange} />
                    </div>
                </div>
            )
    }

}

export default Input