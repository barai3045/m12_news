import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const TopNavBar = () => {
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
                    <Link href=""><FaFacebook/></Link>
                    <Link href=""><FaYoutube/></Link>
                    <Link href=""><FaTwitter/></Link>
                    <Link href=""><FaLinkedin/></Link>
                    
                
                </div>
                </div>
            </div>
            
        </div>
        <div className='flex bg-white shadow-md'>
            <div className='md:container md:mx-auto flex justify-between py-3'>
                <div className='flex content-center gap-2'>
                    <div>
                        <Image src="/logo.png"  height={60} width={60} alt='logo 12News'/>
                    </div>
                    
                    <div >Menu1</div>
                    <div> Menu1</div>
                    <div>Menu1</div>
                    <div>Menu1</div>
                    <div>Menu1</div>
                </div>
                <div className='flex gap-2'>
                    <div>Login</div>
                    <div>Logout</div>
                </div>
            </div>
            
        </div>
        </>
    );
};

export default TopNavBar;