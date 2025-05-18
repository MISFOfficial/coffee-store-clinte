import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const AddCoffee = () => {

    const handleAddCoffee = e => {
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)
        const newCoffee = Object.fromEntries(formData)

        fetch('http://localhost:3000/coffees', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then((data) => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Coffee Added Successfully",
                        icon: "success",
                        draggable: true
                    });
                    form.reset()
                }
            })
    }

    return (
        <div className='px-[112px] py-[70px] bg-[#F4F3F0] text-black'>
            <Link to='/'><button className='btn bg-black text-white'>Back to Home</button></Link>
            <div>
                <h1 className='text-[45px] font-normal text-center'>Add New Coffee</h1>
                <p className='text-[18px] text-center'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>
            <form onSubmit={handleAddCoffee} action="" className='mt-[32px]'>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <fieldset className=" p-4">
                        <legend className="">Name</legend>
                        <input type="text" className="input w-full bg-white " placeholder="Enter coffee name" name='name' required/>
                    </fieldset>
                    <fieldset className="p-4">
                        <legend className="">Quantity</legend>
                        <input type="text" className="input w-full bg-white" placeholder="Enter coffee quantity" name='quantity' required/>
                    </fieldset>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <fieldset className=" p-4">
                        <legend className="">Supplier</legend>
                        <input type="text" className="input w-full bg-white " placeholder="Enter coffee Supplier" name='supplier' required />
                    </fieldset>
                    <fieldset className="p-4">
                        <legend className="">Taste</legend>
                        <input type="text" className="input w-full bg-white" placeholder="Enter coffee Taste" name='taste' required/>
                    </fieldset>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <fieldset className=" p-4">
                        <legend className="">Price</legend>
                        <input type="text" className="input w-full bg-white " placeholder="Enter coffee Price" name='price' required/>
                    </fieldset>
                    <fieldset className="p-4">
                        <legend className="">Details</legend>
                        <input type="text" className="input w-full bg-white" placeholder="Enter coffee Details" name='details' required/>
                    </fieldset>
                </div>
                <div className=''>
                    <fieldset className=" p-4">
                        <legend className="">Photo</legend>
                        <input type="text" className="input w-full bg-white " placeholder="Photo URL" name='photo' required/>
                    </fieldset>
                </div>
                {/* button */}
                <fieldset className=" p-4">
                    <input type="submit" className="input w-full bg-[#D2B48C] cursor-pointer" value='Add Coffee' required/>
                </fieldset>
            </form>
        </div>
    );
};

export default AddCoffee;