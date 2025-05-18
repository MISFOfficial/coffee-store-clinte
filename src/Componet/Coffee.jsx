import React from 'react';
import { FaEye, FaPen } from 'react-icons/fa';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import Swal from 'sweetalert2';

const Coffee = ({ coffee, coffees, setCoffees }) => {

    const { _id, photo, name, quantity, price } = coffee

    const handleDeleteCoffe = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            console.log(result.isConfirmed)
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/coffees/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            // remove the coffee from the state
                            const remainingCoffee=coffees.filter(cof=> cof._id !== _id);
                            setCoffees(remainingCoffee)
                        }
                    })
            }
        });
    }

    return (
        <div >
            <div className="flex  items-center justify-center bg-[#F5F4F1] px-[30px] rounded-[10px] ">
                <figure>
                    <img
                        src={photo}
                        alt="photo" />
                </figure>
                <div className="">
                    <h2 className='text-[12px] md:text-[20px]'><span className='font-semibold'>Name :</span> {name}</h2>
                    <p className='text-[12px] md:text-[20px]'><span className='font-semibold'>Quantity :</span> {quantity}</p>
                    <p className='text-[12px] md:text-[20px]'><span className='font-semibold'>price :</span> {price}</p>
                </div>
                <div className='flex flex-col gap-2 md:gap-5 ml-[54px]'>
                    <div className='cursor-pointer p-[10px] bg-[#aca73c] text-white rounded-[5px]'><FaEye></FaEye></div>
                    <div className='cursor-pointer p-[10px] bg-[black] text-white rounded-[5px]'><FaPen></FaPen></div>
                    <div onClick={() => handleDeleteCoffe(_id)} className='cursor-pointer p-[10px] bg-[#da0f0f] text-white rounded-[5px]'><MdOutlineDeleteOutline></MdOutlineDeleteOutline></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default Coffee;