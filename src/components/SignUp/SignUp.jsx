import React from 'react'

const SignUp = ({}) => {
    return (
        <div className="relative bg-cover bg-center h-[400px] w-full mt-14" style={{ backgroundImage: `url('./BgImage.png')` }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 bg-transparent text-white px-6 w-full h-[400px] content-center">
                <h2 className="text-4xl font-normal mb-2 bg-transparent py-6 border-b-4 border-white w-[50%]">SIGN UP SPECIAL PROMOTIONS</h2>
                <p className="mb-6 text-lg bg-transparent py-4">Get exclusive deals you won’t find anywhere else straight to your inbox!</p>

                <input
                    type="email"
                    placeholder="Enter email address"
                    className="px-4 py-3 w-1/2 bg-black text-white opacity-55 rounded-sm mr-4 border-2 border-white"
                />
                <button className="bg-[#D29867] text-white px-6 py-3 hover:bg-[#b17c55] w-36 font-medium text-lg">
                    Subscribe
                </button>
            </div>
        </div>
    );
}

export default SignUp