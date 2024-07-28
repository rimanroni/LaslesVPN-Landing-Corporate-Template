import React from 'react';
import PlanCard from './PlanCard';

const ChoosePlan = () => {
    const navItems = [
        {title:"Free Plan" , img:"https://i.ibb.co/M8WCdWz/pricing.png", item:[
            'Unlimited Bandwidth',
            'Encrypted Connection',
            'No Traffic Logs',
            'Works on All Devices'
        ],price:"Free"},
        {title:"Standard Plan" , img:"https://i.ibb.co/M8WCdWz/pricing.png", item:[
            'Unlimited Bandwidth',
            'Encrypted Connection',
            'Yes Traffic Logs',
            'Works on All Devices',
            'Connect Anyware'
        ],price:"$9" ,months:true},
        {title:"Premium Plan" , img:"https://i.ibb.co/M8WCdWz/pricing.png", item:[
            'Unlimited Bandwidth',
            'Encrypted Connection',
            'No Traffic Logs',
            'Works on All Devices',
            'Connect Anyware',
            'Get New Features'
        ],price:"$12" ,months:true, year:true }
       
    ]
    return (
        <div className='mt-10 py-12 '>
            <div className='text-center  space-y-3'>
            <h1 className='lg:text-4xl font-bold  tracking-wide text-2xl'>Choose Your Plan</h1>
            <p className='text-textColor'>Let's choose the package that is best for you and explore it <br /> happily and cheerfully.</p>
            </div>

            <div className='grid mt-10    grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
               {navItems.map((item, ind)=>(
                <PlanCard key={ind} items={item}/>
               ))}
            </div>
        </div>
    );
};

export default ChoosePlan;