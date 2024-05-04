import { useState } from 'react';
import { logo } from './../assests/index'

import { RiMenu2Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

const NavbarSection = () => {

    const [isNavOpen, setIsNavOpen] = useState(false);
    const [active, isActive] = useState("/")

    return (
        <nav className="w-full py-6 px-6 sm:px-14 md:px-20 flex items-center justify-between bg-primary-color relative">
            <div className='flex items-center gap-2 cursor-pointer'>
                <img src={logo} alt="" className='w-[40px] h-[40px] object-contain' />
                <h5 className='poetsen-one-regular text-lg capitalize'>nikhil sai</h5>
            </div>

            <ul className='items-center gap-5 hidden md:flex'>
                <li className={`capitalize text-black ${active === "/" ? "font-bold text-xl" : "font-semibold"}`}><a a href="/" rel='noopener noreferrer' >home</a></li>
                <li className={`capitalize text-black ${active === "/about" ? "font-bold text-xl" : "font-semibold"}`}><a a href="/" rel='noopener noreferrer' >about me</a></li>
                <li className={`capitalize text-black ${active === "/projects" ? "font-bold text-xl" : "font-semibold"}`}><a a href="/" rel='noopener noreferrer' >my projects</a></li>
                <li className={`capitalize text-black ${active === "/blog" ? "font-bold text-xl" : "font-semibold"}`}><a a href="/" rel='noopener noreferrer' >blog</a></li>
                <li className={`capitalize text-black ${active === "/contact" ? "font-bold text-xl" : "font-semibold"}`}><a a href="/" rel='noopener noreferrer' >contact me</a></li>
            </ul>

            <span className='block md:hidden' onClick={() => {
                setIsNavOpen(!isNavOpen)
            }}>
                {
                    isNavOpen ? <IoMdClose className='text-4xl font-bold cursor-pointer' /> : <RiMenu2Fill className='text-4xl font-bold cursor-pointer' />
                }
            </span>

            <ul className={`justify-start px-6 sm:px-14 gap-8 md:hidden flex pt-8 flex-col absolute left-0 w-full h-screen bg-white ${isNavOpen ? "top-24" : "top-[-800%]"} transition-all duration-500 ease-linear`}>
                <li className='font-semibold capitalize text-black text-xl'><a a href="/" rel='noopener noreferrer' >home</a></li>
                <li className='font-semibold capitalize text-black text-xl'><a a href="/" rel='noopener noreferrer' >about me</a></li>
                <li className='font-semibold capitalize text-black text-xl'><a a href="/" rel='noopener noreferrer' >my projects</a></li>
                <li className='font-semibold capitalize text-black text-xl'><a a href="/" rel='noopener noreferrer' >blog</a></li>
                <li className='font-semibold capitalize text-black text-xl'><a a href="/" rel='noopener noreferrer' >contact me</a></li>
            </ul>
        </nav>
    )
}

export default NavbarSection