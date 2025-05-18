import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import Coffee from './Coffee';

const Home = () => {

    const coffeesData = useLoaderData()

    const [coffees, setCoffees] = useState(coffeesData)


    return (
        <div>
            {
                coffees ? <div className='grid grid-cols-1 md:grid-cols-2  gap-[24px] mt-[30px]'>
                    {
                        coffees.map((coffee) =>
                            <Coffee
                                key={coffee._id}
                                coffees={coffees}
                                setCoffees={setCoffees}
                                coffee={coffee}></Coffee>)
                    }
                </div> : <div className='bg-black'><p>Coffee not Avilable</p></div>
            }
        </div>
    );
};

export default Home;