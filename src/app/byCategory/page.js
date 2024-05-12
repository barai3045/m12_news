import MainLayout from '@/components/main/MainLayout';
import React from 'react';

async function getData(id){
    let list = (await (await fetch(`${process.env.HOST}/api/news/category?catId=${id}`, { cache: 'no-store' })).json())['data']
    return {list:list}
}


const page = async(props) => {

    let id = props.searchParams['id'];
    const data = await getData(id);

    return (
        <MainLayout>
            <div className='grid grid-cols-2 gap-2 my-3'>
            { data['list'].map((item,i)=>{
                return (
                    <div className="flex flex-row p-3 bg-white gap-2">
                    <div className='basis-1/3'> <img  className="rounded rounder-md" src={item['img3']}/> </div>
                    <div  className='basis-2/3 '> 
                        <p className='text-sm font-semibold pb-1'>{item['title']}</p>
                        <p className="text-sm" >{item['short_des']}</p>
                    </div>
                    
                    </div>
                    
                )
            })

            }

            </div>
        </MainLayout>
    );
};

export default page;