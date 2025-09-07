import { menuItems, splitMenu } from '@/constants/menu'
import { meunItem } from '@/types'
import { ChevronDown } from 'lucide-react'
import React from 'react'


const MenuBar = () => {
    return (
        <header className='border-t border-b border-[#DDDEDF1A] w-full'>
            <div className='flex max-sm:flex-col flex-row items-center max-md:px-2 px-8'>
                <div className='flex flex-1 items-center gap-4 max-sm:gap-2 flex-wrap max-sm:mt-4'>
                    {
                        menuItems.map((menu, index) => (
                            <MenuItem menu={menu} key={index} />
                        ))
                    }
                </div>
                <div className='flex items-center justify-center h-14 sm:border-l border-[#DDDEDF1A] gap-3 px-8'>
                    {
                        splitMenu.map((menu, index) => (
                            <MenuItem menu={menu} key={index} />
                        ))
                    }
                </div>
            </div>
        </header>
    )
}

const MenuItem = ({ menu }: { menu: meunItem }) => {
    return (
        <div className='flex items-center gap-1 cursor-pointer select-none' >
            <p className={`text-xs ${menu.focused ? "text-[#F46600]" : "text-white"}`}>{menu.label}</p>
            {menu.isPopover && <span><ChevronDown size={18} className='text-gray-400' /></span>}
        </div>
    )
}

export default MenuBar