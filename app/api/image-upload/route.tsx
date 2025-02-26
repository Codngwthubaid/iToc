import { v2 as cloudinary } from 'cloudinary';
import { NextRequest, NextResponse } from "next/server"


cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

interface CLoudinaryUploadResukt {
    public_id : string,
    [key : string] : any
}

export async function POST(res:NextRequest) {
    
}