import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = (props) => {
    let today = new Date()
    return (
        <div className='bg-slate-600 text-white'>

        <div className='md:container md:mx-auto grid grid-cols-4 gap-3'>
            <div className='py-2'>
                <p className='text-xl font-bold '>About</p>
                <p className='text-sm'>Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                <div className='flex gap-3'>
                    <Link target='_black' href={props.data['social'][0]['facebook']}><FaFacebook/></Link>
                    <Link target='_black' href={props.data['social'][0]['youtube']}><FaYoutube/></Link>
                    <Link target='_black' href={props.data['social'][0]['twitter']}><FaTwitter/></Link>
                    <Link target='_black' href={props.data['social'][0]['linkedin']}><FaLinkedin/></Link>
                
                </div>
            </div>
            <div className='py-2'>
                <p className='font-bold text-xl'>Recommended</p>


                {
                    props.data["category"].map((item,i)=>{
                        if(i<5){
                        return (
                        <div key={i}>
                            <Link href={`/byCategory?id=${item['id']}`} className="text-sm ">{item['name']}</Link>
                        </div>
                        )
                        }
                    })
                }

                
                
                
            </div>
            <div className='py-2'>
                <p className=" font-bold"> Legal </p>
                <div>
                    <Link href="/policy?type=privacy" className="text-sm">Privacy Policy</Link>
                </div>
                <div>
                    <Link href="/policy?type=terms" className="text-sm">Terms & Conditions</Link>
                </div>
                
            </div>
            <div>
                1
            </div>
     
        </div>

        <div className='bg-black text-white font-semibold'>
            <div className='md:container md:mx-auto flex justify-center'>
                {"@ All right reserved " + today.getFullYear() }
            </div>
        </div>

        </div>
    );
};

export default Footer;