import Button from '@/components/dump/button'
import { ArrowRight, Search, ShoppingCart, UserRound } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const TopBar = () => {
  return (
    <div className='flex items-center justify-between max-md:px-2 px-8'>
      <Image className='oject-cover' src={"/assets/images/logo.png"} height={100} width={100} alt='logo' />
      <div className='flex items-center max-md:gap-2 gap-6'>
        <span><Search size={18} className='text-white' /></span>
        <span><ShoppingCart size={18} className='text-white' /></span>
        <span><UserRound size={18} className='text-white' /></span>
        <Button variant='primary' label='Talk To Expert' rightIcon={<ArrowRight size={18} className='text-white' />} />
        <Button className='max-md:hidden flex' variant='outline' label='Create an Account' />
      </div>
    </div>
  )
}

export default TopBar