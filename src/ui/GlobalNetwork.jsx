import React from 'react';

const GlobalNetwork = () => {
    const imgitems = [
        'https://i.ibb.co/4jTF7px/netflix.png',
        'https://i.ibb.co/whxy332/spotify.png',
        'https://i.ibb.co/cJtjLSm/amazon.png',
        'https://i.ibb.co/q50X8sx/discord.png',
        'https://i.ibb.co/SwXS3gn/reddit.png'
    ]
    return (
        <div className='py-10'>
            <div className='text-center space-y-2 '>
                <h1 className='text-2xl lg:text-3xl font-bold'>Huge Global Network <br />
                of Fast VPN</h1>
                <p className='text-textColor'>See LaslesVPN everywhere to make it easier for you when 
                    <br /> you move locations.</p>
            </div>
            <div className='mt-12'>
                <img src="/map.png" alt="" />
            </div>
            <div className='grid grid-cols-1  mt-8  gap-4 md:grid-cols-2 lg:grid-cols-5'>
                {imgitems.map((item, ind)=>(
                    <div key={ind} className='m-4'>
                           <img src={item} className='mx-auto object-cover    ' alt="" />
                    </div>
                ))}
            </div>



      
        </div>
    );
};

export default GlobalNetwork;