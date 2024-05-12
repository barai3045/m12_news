import { NextResponse } from "next/server";
import { VerifyToken } from "./utility/JWFTokenHelper";

export async function middleware(req,res){
    try {
        let token = req.cookies.get('token');
       
        let payload = await VerifyToken(token['value'])
        
        const requestHeader = new Headers(req.headers);
        requestHeader.set('email', payload['email'])
        requestHeader.set('id', payload['id'])
        console.log(requestHeader)
        return NextResponse.next({request:{headers:requestHeader}})

    } catch(e) {
        if(req.nextUrl.pathname.startsWith("/api/")){
            return NextResponse.json({status:'fail', data:'Unauthorized'}, {status:401})
        } else {
            return NextResponse.redirect(new URL('/user/login', req.url))
        }

        
    }
}


export const config={
    matcher:[
        '/user/profile',
        '/user/comments',
        '/api/user/profile'
        
    ]
}