import React from 'react';
import TopNavBar from './TopNavBar';
import Footer from './Footer';
import { Toaster } from 'react-hot-toast';

const MainLayout = (props) => {
    return (
        <>
        <TopNavBar/>
            <div className='md:container md:mx-auto'>
            {props.children}
            <Toaster position='bottom-center' />
            </div>
            
        <Footer/>
            
        </>
    );
};

export default MainLayout;