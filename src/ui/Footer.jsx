import moment from 'moment';
import React from 'react';
import { FaFacebook, FaHeart, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FaFaceGrinHearts } from 'react-icons/fa6';

const Footer = () => {
    return (
       <div className='pt-12 '>
         <div className='grid border-b-2 px-8 lg:px-2 mt-5  pb-4 max-w-6xl mx-auto  grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4'>
            <div className='px-4   flex flex-col gap-y-4'>
                <div className='flex items-center '>
                <img src="/logo.png" className='w-[10%]' alt="" />
                <h1 className='ml-2'>Lasles<span className='font-bold'>VPN</span></h1>
                </div>
                <p className='text-textColor tracking-wide text-justify'>
                <span>Lasles<span className='font-bold'>VPN</span></span> is a private virtual network that
                has unique features and has high security.
                </p>
                <div className='flex text-mainColor text-xl items-center gap-x-4'>
                    <FaFacebook/>
                    <FaTwitter/>
                    <FaLinkedin/>
                </div>
                <p>© <span>{moment().format('YYYY')}</span>  Revere Copper <span>LaslesVPN</span> </p>
            </div>
            <div className='px-4  flex flex-col gap-y-4'>
                <h1 className='text-xl font-bold'>product</h1>
                <div className='space-y-3 cursor-pointer'>
                    <p>Download</p>
                    <p>Pricing</p>
                    <p>Locations</p>
                    <p>Server</p>
                    <p>Countries</p>
                    <p>Blog</p>
                </div>
            </div>
            <div className='px-4 flex flex-col gap-y-4'>
            <h1  className='text-xl font-bold'>Engage</h1>
                <div className='space-y-3 cursor-pointer'>
                    <p>LaslesVPN ?</p>
                    <p>FAQ</p>
                    <p>Tutorials</p>
                    <p>About Us</p>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                </div>
            </div>
            <div className='px-4 flex flex-col gap-y-4'>
            <h1  className='text-xl font-bold'>Earn Money</h1>
                <div className='space-y-3 cursor-pointer'>
                    <p>Affiliate</p>
                    <p>Become Partner</p>
                 </div>
            </div>
        </div>
        <div className='flex justify-center items-center py-4 space-x-2 tracking-wide text-textColor'>
            <h1>This template is made with <FaHeart className='text-mainColor inline-block'/>  by Tailwindcss and React JS</h1>
        </div>
       </div>
    );
};

export default Footer;