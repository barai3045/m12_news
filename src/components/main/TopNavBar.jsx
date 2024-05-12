"use client"
import Image from 'next/image';
import Link from 'next/link';
import React,  { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react'
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }


const TopNavBar = (props) => {
    let today = new Date()
    return (
        <>

   
        <div className='bg-slate-600 text-white font-semibold'>
            <div className='md:container md:mx-auto'>
                <div className='flex justify-between'>
                <p>
                {"Today: " +today.getDate()+ "/" +(today.getMonth()+1) +"/"+ today.getFullYear() }
                </p>

                <div className='flex gap-3 content-center py-1'>
                    <Link target='_black' href={props.data['social'][0]['facebook']}><FaFacebook/></Link>
                    <Link target='_black' href={props.data['social'][0]['youtube']}><FaYoutube/></Link>
                    <Link target='_black' href={props.data['social'][0]['twitter']}><FaTwitter/></Link>
                    <Link target='_black' href={props.data['social'][0]['linkedin']}><FaLinkedin/></Link>
                    
                
                </div>
                </div>
            </div>
            
        </div>
        <div className='flex bg-white shadow-md'>
            <div className='md:container md:mx-auto flex justify-between py-3 mx-2'>
                <div className='flex content-center gap-2'>
                    <div>
                    <Link href="/">
                        <Image src="/logo.png"  height={40} width={100} alt='logo 12News'/>
                    </Link>
                        
                    </div>
                    {
                        props.data["category"].map((item,i)=>{
                            return (
                                <div key={i} className='hover:border-blue-700 '>
                                    <Link key={i} href={`/byCategory?id=${item['id']}`} className="text-sm  font-semibold hover:border hover:border-blue-700 py-1 hover:rounded-xl px-2"> { item['name']}</Link>
                                </div>
                            )
                        })
                    }
              
                </div>
                <div className='flex gap-2'>
                { props.isLogin?(
                    <Menu as="div" className="relative inline-block text-left">
                        <div>
                            <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                            <IoPersonSharp />
                            <MdOutlineKeyboardArrowDown />
                            </Menu.Button>
                        </div>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                                <div className='block px-4 py-2 text-sm  text-gray-700'>Name</div>
                                <div className='block px-4 py-2 text-sm  text-gray-700'>Email</div>
                                
                            </div>
                            
                            <div className="py-1">
                                <Menu.Item>
                                {({ active }) => (
                                    <Link
                                    href="/user/profile"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                    >
                                    Profile
                                    </Link>
                                )}
                                </Menu.Item>
                                <Menu.Item>
                                {({ active }) => (
                                    <Link
                                    href="/user/comments"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                    >
                                    Comments
                                    </Link>
                                )}
                                </Menu.Item>
                            </div>
                            <div className="py-1">
                                <Menu.Item>
                                {({ active }) => (
                                    <Link
                                    href="/api/user/login"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                    >
                                    Logout
                                    </Link>
                                )}
                                </Menu.Item>
                            </div>
                            
                            </Menu.Items>
                        </Transition>
                        </Menu>
                ):(
                    <div> <Link className="rounded-md px-4 py-2 text-sm font-semibold hover:bg-blue-700 hover:text-white" href={`/user/login`}> Login  </Link>    </div>
                )

                }
                    
                   
                </div>
            </div>
            
        </div>
        </>
    );
};

export default TopNavBar;