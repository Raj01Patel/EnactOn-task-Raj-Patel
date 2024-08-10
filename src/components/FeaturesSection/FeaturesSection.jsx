import React from 'react';
import { LuShoppingBag } from "react-icons/lu";
import { LuHeadphones } from "react-icons/lu";
import { FaShippingFast } from "react-icons/fa";



const FeaturesSection = () => {
    return (
        <>
            <div className="bg-transparent text-white py-14 border-b-4 border-light-yellow">
                <div className="container mx-auto flex justify-around items-center">

                    <div className='flex'>
                        <LuShoppingBag className='text-4xl mt-1 mr-2' />
                        <div className="Icon text-center block">
                            <h3 className="text-2xl font-medium text-[#D29867] py-2">FREE SHIPPING WORLDWIDE</h3>
                            <p className="text-lg text-white">Guaranteed Delivery</p>
                        </div>
                    </div>

                    <div className='flex'>
                        <LuHeadphones className='text-4xl mt-1 mr-2' />
                        <div className="Icon text-center block">
                            <h3 className="text-2xl font-medium text-[#D29867] py-2">24/7 CUSTOMER SERVICE</h3>
                            <p className="text-lg text-white">Text Us 24/7 at 070-7782-9137</p>
                        </div>
                    </div>

                    <div className='flex'>
                        <FaShippingFast className='text-4xl mt-1 mr-2' />
                        <div className="Icon text-center block">
                            <h3 className="text-2xl font-medium text-[#D29867] py-2">QUALITY GUARANTEE!</h3>
                            <p className="text-lg text-white">Send Within 30 Days</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='py-3 w-full flex justify-center'>
                <img className='h-[200px] w-[600px] object-cover' src='./Signature1.png' />
            </div>
        </>
    );
};

export default FeaturesSection;
