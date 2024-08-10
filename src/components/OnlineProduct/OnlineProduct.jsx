import React from 'react';

const OnlineProduct = ({ isOpen }) => {
    return (
        <>
            <div className='w-full pt-12 flex justify-end bg-white mt-11 relative'>
                <img className='h-[344px] w-full object-cover' src='./Ad.png' alt='Ad' />

                <div className='absolute right-1/2 transform translate-x-1/2 md:translate-x-0 md:right-[35%] bg-white w-11/12 md:w-[400px] text-center'>
                    <h1 className='font-semibold text-xl md:text-3xl py-4 md:py-7 bg-white text-black'>ONLINE ONLY</h1>
                    <p className='text-base md:text-xl py-2 md:py-3 pb-4 md:pb-6 bg-white text-black'>
                        GET 20% OFF YOUR ORDER OF $50 OR MORE Use code <b className='bg-white text-black'>“Chef20”</b>
                    </p>
                    <button className='border-2 border-black w-full md:w-52 py-3 font-medium text-lg md:text-2xl bg-white text-black'>
                        Shop Now
                    </button>
                </div>
            </div>

            {!isOpen && <div className='w-full mt-11'>
                <div className='flex flex-wrap'>
                    <img className='h-[200px] md:h-[260px] w-1/2 object-fill' src='./Subscribe.png' alt='Subscribe' />
                    <img className='h-[200px] md:h-[260px] w-1/2 object-fill' src='./Meet Chef.png' alt='Meet Chef' />
                </div>
                <div className='flex flex-wrap'>
                    <img className='h-[200px] md:h-[260px] w-1/2 object-fill' src='./Recipes.png' alt='Recipes' />
                    <img className='h-[200px] md:h-[260px] w-1/2 object-fill' src='./Signature.png' alt='Signature' />
                </div>
            </div>}
        </>
    );
}

export default OnlineProduct;
