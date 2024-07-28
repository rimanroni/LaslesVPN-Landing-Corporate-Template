import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { motion } from 'framer-motion';
const Navbar = () => {

    const [navbar, setNavbar] = useState(false);
    const handleNav = () =>{
        setNavbar(!navbar)
     }
    return (
        <div className='  duration-500 max-w-6xl px-4 mx-auto  '>
        <div className='flex py-2  justify-between items-center '>
            <div className='flex justify-center items-center gap-2'>
                <img src="/logo.png" className='w-1/2' alt="" />
                <h1 className='text-xl font-semibold'>Lasles<span className='font-bold'>VPN</span></h1>
            </div>
            <div className={`hidden lg:block`}>
                <ul className='flex items-center text-[17px]  text-textColor gap-4 font-[400]'>
                <li className='text-mainColor cursor-pointer'>About</li>
                <li className='cursor-pointer'>Features</li>
                <li className='cursor-pointer'>Pricing</li>
                <li className='cursor-pointer'>Testimonials</li>
                <li className='cursor-pointer'>Help</li>
                 </ul>
            </div>
            <div className='flex gap-4 font-bold items-center'>
                 <div className={`lg:hidden block text-2xl`}>
                    <button onClick={handleNav} className='p-2 border-[1px]'><FaBars/></button>
                 </div>
                <div  className={`hidden lg:block lg:space-x-8`}>
                <button className='hover:underline '>Sing In</button>
                <button className='border  border-mainColor px-6 py-1 rounded-full text-mainColor hover:bg-mainColor hover:text-white duration-300'>Sign Up</button>
                 </div>
            </div>
          
        </div> 
        <motion.div
        initial={{y:20, opacity:0}}
        animate={{y:0, opacity:1}}
        transition={{duration:.6, delay:.5}}


        className={`transition   py-6 px-2 duration-500 ${navbar?'block  ' :"hidden  "} lg:hidden `}>
            <ul className=' space-y-3 items-center text-[17px]  text-textColor gap-4 font-[400]'>
                <li className='text-mainColor cursor-pointer'>About</li>
                <li className='cursor-pointer'>Features</li>
                <li className='cursor-pointer'>Pricing</li>
                <li className='cursor-pointer'>Testimonials</li>
                <li className='cursor-pointer pb-2'>Help</li><hr />
                 </ul>
                <div className='mt-4   space-x-4'>
                <button className='border border-mainColor px-6 py-1 rounded-full text-mainColor hover:bg-mainColor mr-2 hover:text-white duration-300'>Sign Up</button>
                <button className='hover:underline '>Sing In</button>
                </div>
            </motion.div>
        </div>
    );
};

export default Navbar;