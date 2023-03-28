import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'


const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <div className="bg-black fixed w-full h-20 shadow-xl z-[100]">
             <div className=" mt-1 md:pl-[13rem] flex justify-between items-center w-full h-full pr-8 2xl:px-16">
               {/* <Image
                    src=""
                    alt='/'
                    width='125'
                    height='50'
                /> */}
                <div className="md:pr-[17rem] font-bold">
                    <ul className='hidden md:flex '>
                        <Link href='/' >
                            <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                        </Link>
                        <Link href='/about' >
                            <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
                        </Link>
                        <Link href='/portfolio' >
                            <li className='ml-10 text-sm uppercase hover:border-b'>Portfolio</li>
                        </Link>
                        <Link href='/services' >
                            <li className='ml-10 text-sm uppercase hover:border-b'>Services</li>
                        </Link>
                        <Link href='/contact' >
                            <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
                        </Link>
                    </ul>
                    <div onClick={handleNav} className='md:hidden text-xl'>
                        <AiOutlineMenu size={30} />
                    </div>
                </div>
            </div>

            <div className={nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-gray-600/70" : ""}>
                <div className={
                    nav
                        ? " fixed left-0 top-0 w-[75%] sm:[60%] md:w-[45%] h-screen bg-gray-800 p-10 ease-in duration-500"
                        : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
                }
                >
                    <div>
                        <div className="flex w-full items-center justify-between">
                            {/* <Image src='' width='100' height='50' alt='/' /> */}
                            <div onClick={handleNav} className=' rounded text-lg font-bold full shadow-lg shadow-gray-600 p-3 cursor-pointer'>
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className="border-b border-gray-600 my-4">
                            <p className="w-[85%] md:w-[90%] py-4 font-bold">Lets build something together</p>
                        </div>
                    </div>
                    <div className="">
                        <ul className='uppercase font-semibold'>
                            <Link href='/' >
                                <li className='py-4 text-sm'>Home</li>
                            </Link>
                            <Link href='/about' >
                                <li className='py-4 text-sm'>About</li>
                            </Link>
                            <Link href='/portfolio' >
                                <li className='py-4 text-sm'>Portfolio</li>
                            </Link>
                            <Link href='/services' >
                                <li className='py-4 text-sm'> Services</li>
                            </Link>
                            <Link href='/contact' >
                                <li className='py-4 text-sm'>Contact</li>
                            </Link>
                        </ul>
                        <div className="pt-40">
                            <p className="uppercase tracking-widest text-gray-200 font-bold"> lets connect</p>
                            {/* <div className="flex items-center justify-between my-4 sm:w-[80%]">
                                <div className="rounded-full shadow-lg bg-slate-500 shadow-gray-600 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                    <FaLinkedinIn />
                                </div>
                                <div className="rounded-full shadow-lg bg-slate-500 shadow-gray-600 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                    <FaLinkedinIn />
                                </div>
                                <div className="rounded-full shadow-lg bg-slate-500 shadow-gray-600 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                    <FaLinkedinIn />
                                </div>
                                <div className="rounded-full shadow-lg bg-slate-500 shadow-gray-600 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                    <FaLinkedinIn />
                                </div> */}
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </div>

        
        </div>



    )
}

export default Navbar