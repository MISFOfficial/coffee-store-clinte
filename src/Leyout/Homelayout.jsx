import React from 'react';
import Header from '../Componet/Header';
import { Outlet } from 'react-router';

const Homelayout = () => {
    return (
        <div>
            <Header></Header>
            <div className='addCoffeeBg'>
                <div className='max-w-[1320px] mx-auto'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Homelayout;