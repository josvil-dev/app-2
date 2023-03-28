import React from 'react'
import Link from 'next/link'
import { BiBriefcase, BiHomeAlt, BiUser,BiCommentDots  } from 'react-icons/bi'
import { BsClipboardData} from 'react-icons/bs'


const Nav = () => {
    return (
        <nav className='fixed bottom-2 lg:bottom-14 w-full overflow-hidden z-50'>
            <div className="container mx-auto">
                <div className="w-full bg-blue-600 h-[50px] backdrop-blur-2xl rounded-full max-w-[250px] mx-auto px-5 flex justify-between items-center text-2xl text-white">
                    <Link className='cursor-poineter w-[60px] h-[60px] flex items-center justify-center'href={'/'}>
                        <BiHomeAlt />
                    </Link>
                    <Link className='cursor-poineter w-[60px] h-[60px] flex items-center justify-center'href={'/about'}>
                        <BiUser />
                    </Link>
                    <Link className='cursor-poineter w-[60px] h-[60px] flex items-center justify-center'href={'/portfolio'}>
                        <BsClipboardData />
                    </Link>
                    <Link className='cursor-poineter w-[60px] h-[60px] flex items-center justify-center'href={'/services'}>
                        <BiBriefcase />
                    </Link>
                    <Link className='cursor-poineter w-[60px] fill-white h-[60px] flex items-center justify-center'href={'/contact'}>
                        <BiCommentDots />
                    </Link>
                </div>
            </div>
        </nav >
    )
}

export default Nav;