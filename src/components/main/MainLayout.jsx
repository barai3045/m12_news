import React from 'react';
import TopNavBar from './TopNavBar';
import Footer from './Footer';
import { Toaster } from 'react-hot-toast';
import { cookies } from 'next/headers';

async function getData(){
    let socialRes = await fetch(`${process.env.HOST}/api/social`)
    let social = (await socialRes.json())['data']
    let categoryRes = await fetch(`${process.env.HOST}/api/category`)
    let category = (await categoryRes.json())['data']
    
    return {social:social, category:category}
}

const MainLayout = async(props) => {
    const data = await getData();
    
    const cookieStore = cookies()
    const token = cookieStore.get('token')
    let isLogin = false
    isLogin = typeof token !==  "undefined"

    
    return (
        <>
        <TopNavBar isLogin={isLogin} data={data}/>
        <div className='md:container md:mx-auto'>
            {props.children}
        
        </div>
        <Toaster position='bottom-center' />
        <Footer data={data}/>
            
        </>
    );
};

export default MainLayout;