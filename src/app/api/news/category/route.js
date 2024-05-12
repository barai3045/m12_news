import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req, res){
    try {

        let {searchParams} = new URL(req.url);
        let catId = parseInt(searchParams.get('catId'));

        const prisma = new PrismaClient();
        const result = await prisma.news.findMany({
            where:{categoryId:catId},
            select:{
                id:true, title:true, short_des:true, img1:true, img2:true, img3:true, img4:true
            }
        })


        return NextResponse.json({status:"success", data:result})
    } catch(e){
        return NextResponse.json({status:"fail", data:e.toString()})
    }
}