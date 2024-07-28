import React from 'react';

const Banner = () => {
    return (
        <div className='mt-4 flex items-center flex-col lg:flex-row-reverse'>
            <div className='w-full lg:w-1/2'>
                <img src="/1.png" className='w-full h-full object-cover' alt="" />
            </div>
            <div className='w-full space-y-3  lg:w-1/2'>
                <h1 className='text-4xl font-medium'>Want anything to be <br />
                easy with <span className='font-bold'>LaslesVPN.</span></h1>
                <p className='text-textColor pr-2'>Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.Most people make the mistake of forcing themselves to network.Or they pretend to be outgoing to make new connections.</p>
                <button className='text-white lg:w-[200px] bg-mainColor lg:h-[40px] rounded-lg hover:bottom-2 translate-y-2 relative duration-400  lg:py-8 px-4 py-2 font-bold flex items-center justify-center'>Get Started </button>
            </div>
        </div>
    );
};

export default Banner;