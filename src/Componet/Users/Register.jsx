import React from 'react';
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className='addCoffeeBg'>
            <div className="flex h-screen   justify-center items-center px-6 py-12 lg:px-8">
                <div className="mt-10 w-[500px]  bg-[#ECEAE3] px-[20px] py-[40px] md:px-[40px] md:py-[30px] rounded-[20px]">
                    <h1 className='text-2xl md:text-4xl font-bold text-center'>Register Now!</h1>
                    <form action="#" method="POST" className="space-y-6 mt-15">
                        {/* name */}
                        <div>
                            <label htmlFor="Name" className="block text-sm/6 font-medium text-gray-900">
                                Name
                            </label>
                            <div className="mt-2">
                                <input
                                    
                                    name="name"
                                    type="text"
                                    placeholder='Your name'
                                    required
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>
                        {/* address */}
                        <div>
                            <label htmlFor="Name" className="block text-sm/6 font-medium text-gray-900">
                                Address
                            </label>
                            <div className="mt-2">
                                <input
                                    
                                    name="address"
                                    type="text"
                                    placeholder='Your address'
                                    required
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>
                        {/* Phone */}
                        <div>
                            <label htmlFor="Name" className="block text-sm/6 font-medium text-gray-900">
                                Phone
                            </label>
                            <div className="mt-2">
                                <input
                                    
                                    name="phone"
                                    type="number"
                                    placeholder='Your name'
                                    required
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>
                        {/* Photo */}
                        <div>
                            <label htmlFor="Name" className="block text-sm/6 font-medium text-gray-900">
                                Photo
                            </label>
                            <div className="mt-2">
                                <input
                                    
                                    name="photo"
                                    type="text"
                                    placeholder='Photo URL'
                                    required
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>
                        {/* email */}
                        <div>
                            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder='Enter your email'
                                    required
                                    autoComplete="email"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                    Password
                                </label>
                            </div>
                            <div className="mt-2 relative">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder='Password'
                                    required
                                    autoComplete="current-password"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                                <div className='absolute right-3 top-2.5 text-[#969696]'><FaEye></FaEye></div>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm/6 text-gray-500">
                        have an account?{' '}
                        <Link to='/signin'><a className="font-semibold text-indigo-600 hover:text-indigo-500">
                            Sing in now
                        </a></Link>

                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;