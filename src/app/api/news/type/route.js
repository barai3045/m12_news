import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
import React from 'react';

export async function GET(req, res){
    try {
        let {searchParams} = new URL(req.url);
        let type = searchParams.get('type');

        const prisma = new PrismaClient();
        const result = await prisma.news.findMany({
            where:{type:type},
            select:{id:true, title:true, img1:true, short_des:true}
        })

        return NextResponse.json({status:"success", data:result})
    } catch(e){
        return NextResponse.json({status:"fail", data: e.toString()})
    }


};
