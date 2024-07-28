import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';
const Review = () => {
    const reviewsOne = [
        {
            img:"https://i.ibb.co/Jxvk1Xw/user-1.png", 
            name:"Viezh Robert",
            form:"arsaw, Poland",
            rating:"4.5",
            desc:"“Wow...I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”."
         },
        {
            img:"https://i.ibb.co/brhfdQq/user-2.png", 
            name:"Kim Young Jou",
            form:"Seoul, South Korea",
            rating:"5",
            desc:"“I like it because I like to travel far and still can connect with high speed.”"
         },
        {
            img:"https://i.ibb.co/rdhQGsD/user-3.png", 
            name:"Viezh Robert",
            form:"Shanxi, China",
            rating:"4.5",
            desc:"“Wow...I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”."
         }
         
    ]
    const reviewsTwo = [
        {
            img:"https://i.ibb.co/Jxvk1Xw/user-1.png", 
            name:"Viezh Robert",
            form:"arsaw, Poland",
            rating:"4.5",
            desc:"“Wow...I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”."
         },
        {
          
            img:"https://i.ibb.co/brhfdQq/user-2.png",
            name:"Roni Riman",
            form:"Seoul, South Korea",
            rating:"5",
            desc:"“I like it because I like to travel far and still can connect with high speed.”"
         },
        {
            img:"https://i.ibb.co/rdhQGsD/user-2.png", 
            name:"Viezh Robert",
            form:"Shanxi, China",
            rating:"4.5",
            desc:"“Wow...I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”."
         }
         
    ]
    const reviewsThree= [
        {
            
            img:"https://i.ibb.co/rdhQGsD/user-3.png", 
            name:"Viezh Robert",
            form:"arsaw, Poland",
            rating:"4.5",
            desc:"“Wow...I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”."
         },
        {
            img:"https://i.ibb.co/brhfdQq/user-2.png", 
            name:"Kim Young Jou",
            form:"Seoul, South Korea",
            rating:"5",
            desc:"“I like it because I like to travel far and still can connect with high speed.”"
         },
        {
            img:"https://i.ibb.co/Jxvk1Xw/user-1.png", 
            name:"Viezh Robert",
            form:"Shanxi, China",
            rating:"4.5",
            desc:"“Wow...I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”."
         }
         
    ]
  
    const [active1, setActive1] = useState(true)
    const [active2, setActive2] = useState(false)
    const [active3, setActive3] = useState(false)
    const handleLeft = () =>{
        
        setActive2(true)
        setActive1(false)
        setActive3(false)
        

    }
    const handleRight = () =>{
        setActive3(true)
         setActive1(false)
         setActive2(false)
    }
    return (
        <div>
            <div className='text-center space-y-3'>
                <h1 className='text-2xl lg:text-4xl font-bold tracking-wide'>Trusted by Thousands of <br />
                Happy Customer</h1>
                <p className='text-textColor tracking-wide'>
                These are the stories of our customers who have joined us <br /> with great pleasure when using this crazy feature.
                 </p>
            </div>
          
           <div className={`${active1?'block':'hidden'} mt-10 grid grid-cols-1 lg:grid-cols-3 gap-5 justify-between relative items-center`}>
           {reviewsOne.map((item, ind)=>(
             <motion.div
             initial={{x:50,opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{duration:.6, delay:.5}}
            className={`  border-2 space-y-3 rounded-xl h-[200px]  p-4`}
           key={ind} >
                <div className='flex justify-between items-center'>
                <div className='flex gap-x-4 items-center'>
                   <img src={item.img} alt="" />
                   <div>
                       <h1>{item.name}</h1>
                       <p>{item.form}</p>
                   </div>
                </div>
                <div className='flex gap-x-4 items-center '>
                   <h1>{item.rating}</h1>
                   <FaStar className='text-yellow-400'/>
                </div>
                </div>
                <p className='text-textColor tracking-wide'>{item.desc}</p>
            </motion.div>
           ))}
           
             </div>

             <div className={`${active2?'block':'hidden'} mt-10 grid grid-cols-1 lg:grid-cols-3 gap-5 justify-between delay-300 duration-300  items-center`}>
           {reviewsTwo.map((item, ind)=>(
             <motion.div
             initial={active2?{x:50,opacity:0}:''}
            animate={active2?{x:0, opacity:1}:""}
            transition={active2?{duration:.6, delay:.5}:""}
           key={ind} className={`  border-2 space-y-3 rounded-xl h-[200px]  p-4`}>
                <div className='flex justify-between items-center'>
                <div className='flex gap-x-4 items-center'>
                   <img src={item.img} alt="" />
                   <div>
                       <h1>{item.name}</h1>
                       <p>{item.form}</p>
                   </div>
                </div>
                <div className='flex gap-x-4 items-center '>
                   <h1>{item.rating}</h1>
                   <FaStar className='text-yellow-400'/>
                </div>
                </div>
                <p className='text-textColor tracking-wide'>{item.desc}</p>
            </motion.div>
           ))}
          
              </div>
            {/*  carsule dynamic  */}
            <div className={`${active3?'block':'hidden'} mt-10 grid grid-cols-1 lg:grid-cols-3 gap-5 justify-between items-center`}>
           {reviewsThree.map((item, ind)=>(
             <motion.div
             initial={{x:50,opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{duration:.6, delay:.5}}
           key={ind} className={`  border-2 space-y-3 rounded-xl h-[200px]  p-4`}>
                <div className='flex justify-between items-center'>
                <div className='flex gap-x-4 items-center'>
                   <img src={item.img} alt="" />
                   <div>
                       <h1>{item.name}</h1>
                       <p>{item.form}</p>
                   </div>
                </div>
                <div className='flex gap-x-4 items-center '>
                   <h1>{item.rating}</h1>
                   <FaStar className='text-yellow-400'/>
                </div>
                </div>
                <p className='text-textColor tracking-wide'>{item.desc}</p>
            </motion.div>
           ))}
             </div>
         




            <div className='flex justify-between m-4'>
                <div className='flex justify-center items-center mt-4 '>
                    <p className={`w-[20px] h-[20px] mr-1 ${active1?'bg-red-500':'bg-rose-300'} rounded-full `} ></p>
                    <p className={`w-[20px] h-[20px] ml-2 ${active2?'bg-red-500':'bg-rose-300'}   rounded-full`}></p>
                    <p className={`w-[20px] h-[20px] ml-2 ${active3?'bg-red-500':'bg-rose-300'} rounded-full  `}></p>
                </div>
                <div className='space-x-2 '>
                    <button onClick={handleLeft} className='border-mainColor border-2 rounded-full lg:px-4 lg:py-4 p-2 text-mainColor'><FaArrowLeft/></button>
                    <button onClick={handleRight} className='border-mainColor border-2 rounded-full lg:px-4 lg:py-4 p-2 text-mainColor'><FaArrowRight/></button>
                </div>
            </div>
        </div>
    );
};

export default Review;