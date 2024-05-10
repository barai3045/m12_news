import { NextResponse } from "next/server";

export async function GET(req, res){
    try {



        return NextResponse.json({status:"status", data:result})
    } catch(e){
        return NextResponse.json({status:'fail', data:e.toString()})
    }
}