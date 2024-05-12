import {headers} from "next/headers";
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";


export async function GET(req, res){
    try {

        const headersList = headers()
        let id = parseInt(headersList.get("id"));
        console.log(id)
        const prisma = new PrismaClient();
        const result = await prisma.users.findUnique({where:{id:id}})

        return NextResponse.json({status:"success", data: result })

    } catch(e){
        return NextResponse.json({status:"fail", data: e})
    }
}





export async function POST(req, res){
    try {
        let headersList=headers();
        let id = parseInt(headersList.get('id'));

        let reqBody = await req.json();
        reqBody.otp ="0";
        const prisma = new PrismaClient()
        const result = await prisma.users.update({
            where: {id:id},
            data:reqBody
        })

        return NextResponse.json({status:"success", data:result})
    }
    catch (e) {
        return NextResponse.json({status:"fail", data:e})
    }
}