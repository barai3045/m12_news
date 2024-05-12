import MainLayout from '@/components/main/MainLayout';
import ProfileForm from '@/components/user/ProfileForm';
import { cookies } from 'next/headers';
import React from 'react';

async function  getData(cookies) {
    let option={method:'GET', headers:{'Cookie': cookies}, cache: 'no-store'}
    let profile = (await(await fetch(`${process.env.HOST}/api/user/profile`, option)).json())['data']
    return {profile:profile};
}

const page = async () => {

    const cookieStore = cookies()
    let data=await getData(cookieStore);

    console.log(data)
    return (
        <MainLayout>
            <ProfileForm/>
            
        </MainLayout>
    );
};

export default page;