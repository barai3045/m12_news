"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import SubmitButton from '../main/SubmitButton';
import { ErrorToast, IsEmpty, SuccessToast } from '@/utility/FormHelper';
import Link from 'next/link';

const SignUpForm = () => {
    let [data, setData] = useState({firstName:"", lastName:"", email:"", mobile:"", password:"", otp:"0"})
    let [submit, setSubmit] = useState(false)
    let router = useRouter()

    const inputOnChange = (name, value) =>{
        setData(()=>({
            ...data,
            [name]:value
        }))
    }

    const formSubmit =async ()=>{
        if(IsEmpty(data.firstName)){
            ErrorToast('First Name Required!')
        }
        else if(IsEmpty(data.lastName)){
            ErrorToast('Last Name Required!')
        } 
        else if(IsEmpty(data.mobile)){
            ErrorToast('Mobile Required!')
        } 

        else if(IsEmail(data.email)){
            ErrorToast("Valid Email Address Required")
        }

        else if(IsEmpty(data.password)){
            ErrorToast("Valid Password Required")
        } 
        
        else {
            setSubmit(true)
            const options = {method:"POST", body:JSON.stringify(data)}
            let res = await(await fetch("/api/user/registration", options)).json();
            setSubmit(false)
            setData({firstName:"", lastName:"", email:"", mobile:"", password:""})

            if (res['status'] === 'success') {
                SuccessToast("Request Success")
                router.push("/user/login")
            } else {
                ErrorToast("Invalid Request !")
            }
        }

    }

    return (
        <div className='flex justify-center  my-3'>

            <div className='bg-slate-300 w-96 h-auto'>
                <h2 className="text-base font-semibold leading-7 text-gray-900 px-3">Personal Information</h2>
                <p className="mt-1 text-sm leading-6 text-gray-600 px-3">Use a permanent address where you can receive mail.</p>
                <form>
                    <div className='m-4'>
                        <div>
                            <label className='block text-sm font-medium leading-6 text-gray-900 mb-2'>First Name </label>
                            <input
                                value={data.firstName} 
                                onChange={(e)=>{inputOnChange('firstName', e.target.value)}}
                                type="text"
                                name="firstName"
                                id='firstName'
                                autoComplete='given-name'
                                className='block w-full rounded-md border-0 p-1 text-gray-900 shadow-sm text-sm'
                            />
                        </div>
                        <div>
                            <label className='block text-sm font-medium leading-6 text-gray-900 mb-2'>Last Name </label>
                            <input
                                value={data.lastName} 
                                onChange={(e)=>{inputOnChange('lastName', e.target.value)}}
                                type="text"
                                name="lastName"
                                id='lastName'
                                autoComplete='sure-name'
                                className='block w-full rounded-md border-0 p-1 text-gray-900 shadow-sm text-sm'
                            />
                        </div>
                        <div>
                            <label className='block text-sm font-medium leading-6 text-gray-900 mb-2'>Mobile </label>
                            <input
                                value={data.mobile} 
                                onChange={(e)=>{inputOnChange('mobile', e.target.value)}}
                                type="text"
                                name="mobile"
                                id='mobile'
                                autoComplete='mobile'
                                className='block w-full rounded-md border-0 p-1 text-gray-900 shadow-sm text-sm'
                            />
                        </div>
                        <div>
                            <label className='block text-sm font-medium leading-6 text-gray-900 mb-2'>Email </label>
                            <input
                                value={data.email} 
                                onChange={(e)=>{inputOnChange('email', e.target.value)}}
                                type="email"
                                name="email"
                                id='email'
                                autoComplete='email'
                                className='block w-full rounded-md border-0 p-1 text-gray-900 shadow-sm text-sm'
                            />
                        </div>
                        <div>
                            <label className='block text-sm font-medium leading-6 text-gray-900 mb-2'>Password </label>
                            <input
                                value={data.password} 
                                onChange={(e)=>{inputOnChange('password', e.target.value)}}
                                type="text"
                                name="password"
                                id='password'
                                autoComplete='password'
                                className='block w-full rounded-md border-0 p-1 text-gray-900 shadow-sm text-sm'
                            />
                        </div>
                    

                        <div className="mt-6 flex items-center justify-end gap-x-6">
                            <SubmitButton className="bg-indigo-700 px-4 py-2 rounded-md text-sm text-white opacity-50 hover:opacity-90" submit={submit} onClick={formSubmit} text="SignUp"/>
                        </div>

                    </div>
                    
                </form>
                <div className="p-4">
                    If you already have an account 
                    <Link href="/user/login" className="text-blue-500 px-2">Login</Link>
                </div>

            </div>

    </div>
    );
};

export default SignUpForm;