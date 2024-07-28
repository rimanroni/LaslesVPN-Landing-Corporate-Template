import React from 'react';
import { FaBars, FaLocationArrow, FaUser } from 'react-icons/fa';
import { HiBars2, HiMiniBars2 } from 'react-icons/hi2';

const Interface = () => {
    return (
        <div className='shadow-lg rounded-md py-8 mt-10 bg-white  grid grid-cols-3 justify-center items-center gap-4 mx-auto'>
            <div className='flex  border-r py-5 items-center justify-center space-x-2 lg:space-x-8'>
              <div className='flex lg:text-2xl justify-center items-center bg-[#FEEBEB] px-4 py-4 text-[#F53838] rounded-full'>
              <FaUser/>
              </div>
                <div className=''>
                    <h1 className='font-bold'>90+</h1>
                    <p className='text-textColor'>Users</p>
                 </div>
            </div>
            <div className='flex border-r py-5 items-center justify-center space-x-2 lg:space-x-8'>
            <div className='flex lg:text-2xl justify-center items-center bg-[#FEEBEB] px-4 py-4 text-[#F53838] rounded-full' >
            <FaLocationArrow/>
            </div>
            <div className=''>
                    <h1 className='font-bold'>30+</h1>
                    <p className='text-textColor'>Users</p>
                 </div>
            </div>
            <div className='flex py-5 items-center justify-center space-x-2 lg:space-x-8'>
                <div className='flex lg:text-2xl font-bold justify-center items-center bg-[#FEEBEB] px-4 py-4 text-[#F53838] rounded-full'>
                <HiMiniBars2 />
                </div>
                <div className=''>
                    <h1 className='font-bold'>50+</h1>
                    <p className='text-textColor'>Users</p>
                 </div>
            </div>
        </div>
    );
};

export default Interface;