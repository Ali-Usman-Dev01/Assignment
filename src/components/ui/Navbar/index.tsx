import React from 'react'
import TopBar from './top-bar'
import MenuBar from './menu-bar'

const Navbar = () => {
    return (
        <div className="flex flex-col gap-3 absolute top-3 z-50 w-full">
            <TopBar />
            <MenuBar />
        </div>
    )
}

export default Navbar