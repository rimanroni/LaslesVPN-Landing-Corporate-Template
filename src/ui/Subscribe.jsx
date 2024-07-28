import React from 'react';

const Subscribe = () => {
    return (
        <div className='shadow-xl relative top-[5rem] rounded-md px-8 my-4 py-5  mt-10'>
             <div className='flex px-4 lg:flex-row flex-col gap-4  lg:items-center lg:justify-between '>
                <div className='space-y-2'>
                    <h1 className='text-4xl font-bold'>Subscribe Now for <br />
                    Get Special Features!</h1>
                    <p className='text-textColor '>Let's subscribe with us and find the fun.</p>
                </div>
                <div>
                    <button className='bg-mainColor text-white font-bold  px-6 py-3 rounded-lg'>Subscribe Now</button>
                </div>
             </div>
        </div>
    );
};

export default Subscribe;