"use client";
import React, { useState } from 'react'
import { LineShadowText } from "@/components/magicui/line-shadow-text";
import { useTheme } from "next-themes";
import { Upload, X } from 'lucide-react';
import { Input } from "@/components/ui/input"
import Image from 'next/image';
import { Textarea } from '@/components/ui/textarea';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
export const ImageUpload = () => {


    const AiModelList = [
        {
            name: "Deepseek",
            icon: "/deepseek.png"
        },
        {
            name: "Llama by Meta",
            icon: "/meta.png"
        },
        {
            name: "Google Gemini",
            icon: "/google.png"
        },
    ]


    const theme = useTheme();
    const shadowColor = theme.resolvedTheme === "dark" ? "white" : "black";
    const [previewUrl, setPreviewUrl] = useState<string | null>(null)


    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        console.log(files)
        if (files) {
            const file = files[0];
            const imageUrl = URL.createObjectURL(file);
            setPreviewUrl(imageUrl);
            console.log(imageUrl)
            console.log(file);
        }
    }


    const ConvertToCode = () => {
        // Save image in cloudinary
        const fileName = Date.now() + ".png";
    }


    return (
        <div>
            <div className='flex items-baseline text-3xl'>
                <LineShadowText className='text-center font-bold italic hover:text-blue-400' shadowColor={shadowColor}>
                    Dashboard&nbsp;
                </LineShadowText>
                <div className='my-4 font-semibold italic'> - Convert your image into reality within a single click</div>
            </div>
            <div className='flex justify-around items-center my-16 flex-col sm:flex-row'>
                {previewUrl ?
                    (<div className='border p-7'>
                        <X className='cursor-pointer' onClick={() => setPreviewUrl(null)} />
                        <Image src={previewUrl} alt="Preview" width={300} height={300} />
                    </div>
                    ) :
                    (
                        <div className='flex flex-col gap-y-3 justify-center items-center border-2 py-10 px-20 rounded-md shadow-md'>
                            <div><Upload className='text-primary' /></div>
                            <div className='font-semibold'>Upload Image</div>
                            <div>Click button to click your image</div>
                            <div>
                                <Input id="picture" type="file" multiple={false} onChange={handleFileChange} />
                            </div>
                        </div>)

                }
                <div className='w-96 flex flex-col gap-3 justify-center items-center rounded-md'>
                    <div className='w-full'>
                        <div className='font-semibold'>Choose AI Model</div>
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Models" />
                            </SelectTrigger>
                            <SelectContent>
                                {AiModelList.map((model, index) => (
                                    <SelectItem key={index} value={model.name}>
                                        <div className='flex  gap-x-2'>
                                            <div>{model.name}</div>
                                            <Image src={model.icon} alt={model.name} width={20} height={20} />
                                        </div>
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>

                    </div>
                    <div className='w-full'>
                        <div className='font-semibold'>Write description about your image</div>
                        <Textarea placeholder="Type your message here." className='w-full' rows={5} />
                    </div>
                </div>
            </div>

            <div>
                <button className='text-xl text-center flex justify-center items-center w-full hover:bg-primary bg-blue-500 text-white p-2 rounded-md'>Image to Code </button>
            </div>
        </div>
    )
}
