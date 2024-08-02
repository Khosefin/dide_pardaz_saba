"use client"
import Image from "next/image";
import courseImage from "@/public/images/course1.jpg";
import {Button} from "@/components/ui/button";
import {useIntersection} from "@mantine/hooks";
import {useRef} from "react";
import {cn} from "@/lib/utils";

export default function Course (){
    const courseSection = useRef<HTMLDivElement>(null);
    const { ref, entry } = useIntersection({
        root: courseSection.current,
        threshold: 0,
    });
    return (
        <div className='mt-10 flex flex-col'>
            <div className='sectionTitle relative flex items-center text-center justify-center'>
                    <span className='bg-white px-3'>
                    دوره های درحال تکمیل
                    </span>
            </div>
            <div ref={ref} className='flex md:flex-row flex-col items-center mt-5 md:mt-0 gap-3 justify-between'>
                {Array.from({length: 3}).map((_, index) => (
                    <div key={index}
                         className={cn('flex flex-col justify-center w-full md:w-1/3 items-center text-center md:mt-5 rounded-sm border md:hover:scale-[103%] transition-all shadow-lg',entry?.isIntersecting ? "flipCart" : "")}>
                        <Image src={courseImage} alt={"courseImage"} className='w-full'/>
                        <div className='flex flex-col p-4 w-full items-center text-center justify-center gap-2'>
                            <div className='flex flex-col items-center text-xs justify-center gap-1'>
                                <span className='font-Cbold text-sm md:text-lg'>ترم یک حسابداری مشاغل به روش نوین</span>
                                <span>علی رنجبر</span>
                                <span></span>
                            </div>
                            <div className='flex flex-col w-full items-center justify-center gap-2 font-Cbold text-xs'>
                                <div className='flex w-full justify-between text-center items-center'>
                                    <span>شروع دوره:</span>
                                    <span>1403/05/11</span>
                                </div>
                                <div className='flex w-full justify-between text-center items-center'>
                                    <span>روزهای برگزاری:</span>
                                    <span>پنج شنبه - جمعه</span>
                                </div>
                                <div className='flex w-full justify-between text-center items-center'>
                                    <span>ساعات جلسات:</span>
                                    <span>14:00 الی 17:00</span>
                                </div>
                            </div>
                            <div className='text-sm mt-1'>هزینه: 2,400,000 تومان</div>
                        </div>
                        <div className='flex gap-2 py-2 bg-gray-100 border-t w-full justify-center'>
                            <Button variant='default' className='bg-[#198754] hover:bg-[#198754]/80 text-xs'> افزودن به
                                سبدخرید</Button>
                            <Button variant='default' className='bg-[#0D6EFD] hover:bg-[#0D6EFD]/80 text-xs'>جزئیات
                                دوره</Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}