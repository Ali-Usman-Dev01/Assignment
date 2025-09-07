import Button from '@/components/dump/button'
import Input from '@/components/dump/input'
import { contact } from '@/constants/contact'
import { useContactUsForm } from '@/hooks/useContactUsForm'
import { formStateType } from '@/types'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const ContactUs = () => {
    const { formState, setKeyByValue, submit } = useContactUsForm();
    return (
        <div className='bg-[#F5F5F5] px-10 pt-16 grid grid-cols-2 max-md:grid-cols-1 max-md:gap-10'>
            <div className='relative'>
                <h3 className='text-sm uppercase text-[#9FA7AF]'>{contact.heading}</h3>
                <h2 className='text-4xl font-bold text-[#000911]'>{contact.subHeading}</h2>
                <p className='text-sm text-[#000911]'>{contact.description}</p>
                <div className='mt-10 grid grid-cols-2 max-sm:grid-cols-1 gap-4'>
                    {
                        contact.location.map((loc, i) => (
                            <div className='flex flex-col gap-4' key={i}>
                                <h4 className='text-xl font-bold text-[#000911]'>{loc.heading}</h4>
                                <p className='text-sm text-[#000911]'>{loc.description}</p>
                            </div>
                        ))
                    }
                </div>
                <Image width={0} height={0} sizes="100vw" className="w-full h-auto object-contain max-h-64 absolute bottom-0 -left-5 max-md:hidden" src={contact.locationImage} alt='map' />
            </div>
            <div className='bg-white p-8 rounded-xl mb-10'>
                <h2>{contact.form.heading}</h2>
                <div className='grid grid-cols-2 max-sm:grid-cols-1 my-6 gap-4'>
                    {
                        contact.form.fields.map((field) => (
                            <Input type={field.type} key={field.key} onChange={(e) => setKeyByValue(field.key, e.target.value)} value={formState[field.key as keyof formStateType]} required={field.isRequired} label={field.label} name={field.key} placeholder={field.placeholder} />
                        ))
                    }
                </div>
                <Input type="textarea" onChange={(e) => setKeyByValue(contact.form.textarea.key, e.target.value)} value={formState[contact.form.textarea.key as keyof formStateType]} required={contact.form.textarea.isRequired} label={contact.form.textarea.label} name={contact.form.textarea.key} placeholder={contact.form.textarea.placeholder} />
                <Button onClick={submit} className='w-full mt-4 !py-3 !justify-center' label={contact.form.submit} variant='primary' rightIcon={<ArrowRight size={20} className='text-white' />} />
            </div>
        </div>
    )
}

export default ContactUs