import React from 'react';
import Carousel from '../main/Carousal';
import Link from 'next/link'

//https://www.youtube.com/watch?v=XJSOgV4VELk
const NewsHero = (props) => {
    return (
        <div className='App py-4'>
            <div className='w-full'>
                <div className='grid grid-cols-4 gap-4'>
                    <div className='col-span-4 md:col-span-3'>
                        <Carousel autoSlide={true}>
                        {
                            props.data['slider'].map((item, i)=>{
                            return( <img src={item['img1']} alt={item['title']}/>)
                            })
                        }
                        </Carousel>
                    </div>
                    <div className="col-span-4  md:col-span-1 h-full bg-gray-600">
                        <Link href="">
                        <img  src={props.data['featured'][0]['img1']} />
                        <p className='p-1 px-2 text-xl text-white font-semibold'> {props.data['featured'][0]['title']} </p>
                        <p className='p-1 px-2 text-sm text-white '> {props.data['featured'][0]['short_des']} </p>
                        
                        </Link>
                        
                        
                    </div>

                </div>
                
            </div>
        </div>


    );
};

export default NewsHero;