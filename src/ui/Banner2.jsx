import React from 'react';
import { MdOutlineDone } from 'react-icons/md';

const Banner2 = () => {
    const listItem = [
        'Powerfull online protection.',
        'Internet without borders.',
        'Supercharged VPN.',
        'Internet without borders.'
    ]
    return (
        <div className='grid  py-10 gap-4 items-center mt-12 grid-cols-1 lg:grid-cols-2'>
            <div>
                <img src="/2.png" className='w-full h-full object-cover' alt="" />
            </div>
            <div className='space-y-3 '>
                <div className="w-full h-full object-cover">
                <h1 className='text-3xl  font-medium tracking-wide'>We Provide Many <br />Features You Can Use</h1>
                <p className='text-textColor'>You can explore the features that we provide with fun and 
                    <br />
                    have their own functions each feature.</p>
                   
             <ul>
                {listItem.map((item, ind)=>(
                    <li
                    className='flex items-center  mt-4 space-x-2'
                    key={ind}><span className='bg-green-600 text-white  rounded-full'><MdOutlineDone /></span> <span>{item}</span></li>
                ))}
             </ul>
                 </div>
 
            </div>
        </div>
    );
};

export default Banner2;