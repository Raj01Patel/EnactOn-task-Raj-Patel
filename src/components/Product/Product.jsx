import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


const Product = () => {
    const products = [
        {
            name: 'CINNAMON HONEY',
            originalPrice: '$12.00',
            discountedPrice: '$9.00',
            imageUrl: './CinnamonHoney.png',
        },
        {
            name: 'COCONUT OIL',
            originalPrice: '$20.00',
            discountedPrice: '$15.00',
            imageUrl: './CoconutOil.png',
        },
        {
            name: 'MANGO HONEY',
            originalPrice: '$9.00',
            discountedPrice: '$6.00',
            imageUrl: './MangoHoney.png',
        },
        {
            name: 'HONEY HABANERO',
            originalPrice: '$12.00',
            discountedPrice: '$9.00',
            imageUrl: './HabanaroHoney.png',
        },
        {
            name: 'CINNAMON HONEY',
            originalPrice: '$12.00',
            discountedPrice: '$9.00',
            imageUrl: './CinnamonHoney.png',
        },
        {
            name: 'COCONUT OIL',
            originalPrice: '$20.00',
            discountedPrice: '$15.00',
            imageUrl: './CoconutOil.png',
        },
        {
            name: 'MANGO HONEY',
            originalPrice: '$9.00',
            discountedPrice: '$6.00',
            imageUrl: './MangoHoney.png',
        },
        {
            name: 'HONEY HABANERO',
            originalPrice: '$12.00',
            discountedPrice: '$9.00',
            imageUrl: './HabanaroHoney.png',
        }
    ];

    return (

        <>
            <div className='relative'>
                <div className=" text-white p-2">

                    <div>
                        <h2 className="w-[35%] text-3xl font-bold pt-24 mb-2 mt-3 text-light-yellow border-b-4 border-light-yellow">CHEF MATT PRODUCTS</h2>
                        <p className="w-[40%] text-lg py-7">
                            Shop Gourmet Chef Quality products from the Chef Matt brand. Chef it yourself and Thank us later.
                        </p>
                    </div>

                    <img height="319px" width="310px" className='absolute top-[-115px] opacity-75 object-cover bg-transparent ' src='https://s3-alpha-sig.figma.com/img/d3eb/0473/0832345180f545abf5abe8c3f88a760f?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QdDjLk9oAXYH34zOljxselfw4aA6EoEPKqTbZzAGJom1WxgDptCEGkVLeCUfOIO~7Fjc6kItUUskaV-aj8me7z8YPfTmQHaqhAF0ag7yfgP8ChQgQqqI~G586C5k2RBHKA59-bIWIR4Yh3GI5CTlQTGtPMuXhceUm683NxgpWdUhlAJrzeC9vsDXAo-LmoAFkmY-ijCO1dAEsdiZog9Pcu6DZHYYAIWBbVMk3GFVvajdCc4tIP73SOGZpdFG5O4qKdfZPphjOqNezGhnssU90VV7YCODP3ysfdkhUDQpINID8O9J2gbe1dUh-z9mFkf3r0BHuKlDs2HaM4KY77xN5w__' />

                    <Swiper slidesPerView={4} spaceBetween={40} navigation={true} modules={[Navigation]} className="flex justify-center items-center">
                        {products.map((product, index) => (
                            <SwiperSlide key={index} className=" text-center px-8 ">
                                <div className=" relative border-4 border-light-yellow bg-white rounded-full p-9 h-60 w-60">
                                    <img src={product.imageUrl} alt={product.name} className="w-40 h-36" />
                                </div>
                                <p className="mt-4 text-lg text-yellow-500">{product.name}</p>
                                <div className="flex justify-center space-x-2 mt-2">
                                    <span className="line-through">{product.originalPrice}</span>
                                    <span>{product.discountedPrice}</span>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

        </>



    );
};

export default Product;