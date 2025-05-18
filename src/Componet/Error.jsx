import React from 'react';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className='h-screen w-screen flex flex-col items-center '>
            <img src="/404.gif" alt="" />
            <Link to='/' className='text-[green] text-5xl'><FaHome></FaHome></Link>
        </div>
    );
};

export default Error;