import React from 'react';
import { MdOutlineDone } from 'react-icons/md';

const PlanCard = ({items}) => {
    const {img, title, item, price , months , year} = items;
    return (
        <div className='bg-white border-2 w-full  content-baseline space-y-6 p-4 h-auto rounded-lg'>
            <div className='space-y-3 text-2xl font-bold  '>
            <img src={img} className=' mx-auto ' alt="" />
            <h1 className='text-center'>{title}</h1>
            </div>
           <div className="flex justify-center items-center">
            <div className='space-y-9    '>
               <ul>
                {item.map((services,ind)=>(
                    <li 
                    className='flex mt-2 items-center space-x-2'
                    key={ind}><span className='text-green-600 font-bold text-xl'><MdOutlineDone /></span> <span>{services}</span></li>
                ))}
               </ul>

                <div className='text-center space-y-3 mt-10 '>
                <h1 className='text-3xl'>{price}<span className='text-[#505564]'>{months&& "/mo"}</span></h1>
                <br />
                <button className={`${year&&'bg-mainColor'} hover:bg-mainColor duration-300 hover:text-white border border-mainColor px-6 py-1 rounded-full`}>Sign Up</button>
                </div>
            </div>
           </div>
        </div>
    );
};

export default PlanCard;