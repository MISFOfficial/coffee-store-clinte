import React from 'react';
import { FaHouseChimney } from 'react-icons/fa6';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className='h-screen w-screen flex flex-col items-center '>
            <img src="/404.gif" alt="" />
            <Link to='/' className='text-[green] text-3xl md:text-5xl'><FaHouseChimney></FaHouseChimney></Link>
        </div>
    );
};

export default Error;