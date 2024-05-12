
import React from 'react';

import MainLayout from '@/components/main/MainLayout';
import parse from 'html-react-parser';


async function getData(type) {
    let data = (await(await fetch(`${process.env.HOST}/api/policy?type=${type}`)).json())['data']
    return data;
}


const page = async (props) => {

    let type = props.searchParams['type'];
    const data = await getData(type);
    
    return (
        <MainLayout>
            <div className='container mt-3 bg-white mb-3'>
                <div className='flex'>
                    <div className='card p-4'>
                        {parse(data[0]['description'])}
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default page;