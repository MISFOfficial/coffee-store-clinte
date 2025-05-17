import React from 'react';

const AddCoffee = () => {

    const handleAddCoffee=e=>{
        e.preventDefault()
        console.log('work')
    }

    return (
        <div className='px-[112px] py-[70px] bg-[#F4F3F0] text-black'>
            <button className='btn bg-black text-white'>Back to Home</button>
            <div>
                <h1 className='text-[45px] font-normal text-center'>Add New Coffee</h1>
                <p className='text-[18px] text-center'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>
            <form onSubmit={handleAddCoffee} action="" className='mt-[32px]'>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <fieldset className=" p-4">
                        <legend className="">Name</legend>
                        <input type="text" className="input w-full bg-white " placeholder="Enter coffee name"  />
                    </fieldset>
                    <fieldset className="p-4">
                        <legend className="">Chef</legend>
                        <input type="text" className="input w-full bg-white" placeholder="Enter coffee Chef" />
                    </fieldset>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <fieldset className=" p-4">
                        <legend className="">Supplier</legend>
                        <input type="text" className="input w-full bg-white " placeholder="Enter coffee Supplier" />
                    </fieldset>
                    <fieldset className="p-4">
                        <legend className="">Taste</legend>
                        <input type="text" className="input w-full bg-white" placeholder="Enter coffee Taste" />
                    </fieldset>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <fieldset className=" p-4">
                        <legend className="">Category</legend>
                        <input type="text" className="input w-full bg-white " placeholder="Enter coffee Category" />
                    </fieldset>
                    <fieldset className="p-4">
                        <legend className="">Details</legend>
                        <input type="text" className="input w-full bg-white" placeholder="Enter coffee Details" />
                    </fieldset>
                </div>
                <div className=''>
                    <fieldset className=" p-4">
                        <legend className="">Photo</legend>
                        <input type="text" className="input w-full bg-white " placeholder="Photo URL" />
                    </fieldset>
                </div>
                {/* button */}
                <fieldset className=" p-4">
                    <input type="submit" className="input w-full bg-[#D2B48C] cursor-pointer" value='Add Coffee' />
                </fieldset>
            </form>
        </div>
    );
};

export default AddCoffee;