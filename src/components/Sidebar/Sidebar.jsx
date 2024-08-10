import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";





const Sidebar = ({ isOpen, setIsOpen }) => {

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (

        <div>
            {
                isOpen ?
                    <div className='sidebar text-4xl w-full h-screen cursor-pointer py-3 flex items-center flex-col'>
                        <div className='w-full flex justify-center bg-transparent' onClick={toggleMenu}>
                            <GiHamburgerMenu className='bg-transparent' />
                        </div>
                        <div className='w-[450px] -rotate-90 mt-48 px-3 bg-transparent'>
                            <img src='./Signature1.png' className='bg-transparent h-[120px] w-full object-cover' />
                        </div>
                    </div>
                    :
                    <div className='py-5 h-screen'>
                        <div className='w-full flex justify-center cursor-pointer' onClick={toggleMenu}><ImCross /></div>
                        <div>
                            <img src='./Signature1.png' className='bg-transparent h-[120px] w-full object-cover' />
                        </div>
                        <nav className='flex flex-col'>
                            <ul className='w-full px-4 font-normal text-xl cursor-pointer'>
                                <li className='py-3 text-light-yellow'>HOME</li>
                                <li className='py-3 hover:text-light-yellow'>PRODUCTS</li>
                                <li className='py-3 hover:text-light-yellow'>MEET CHEF MATT</li>
                                <li className='py-3 hover:text-light-yellow'>FAQ</li>
                                <li className='py-3 hover:text-light-yellow'>CONNECT WITH US</li>
                            </ul>
                            <div className='w-full py-4 gap-4 flex justify-center'>
                                <div className='flex'>
                                    <FaShoppingCart className='mt-1 mr-1 text-2xl' />
                                    <p className='text-xl'>Cart</p>
                                </div>
                                <div className='flex'>
                                    <FaRegHeart className='mt-1 mr-1 text-2xl' />
                                    <p className='text-xl'>WishList</p>
                                </div>
                            </div>
                        </nav>
                    </div>
            }
        </div>

    )
}

export default Sidebar

