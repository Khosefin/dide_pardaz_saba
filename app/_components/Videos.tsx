"use client"
import Autoplay from "embla-carousel-autoplay"
import carousel1 from "@/public/images/carousel1.jpg";
import carousel2 from "@/public/images/carousel2.jpg";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";
import {useRef} from "react";

export default function VideosSection() {
    const autoplay = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));
    return (
        <>
            <div className='sectionTitle relative flex items-center text-center justify-center mt-10'>
                    <span className='bg-white px-3'>
                    کارگروه های آموزشی
                    </span>
            </div>

    <Carousel
        opts={{
            align: "start",
        }}
        plugins={[autoplay.current]}
        className="w-full mt-5"
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        dir='ltr'
        >
            <CarouselContent >
                <CarouselItem className="basis-1/2 lg:basis-1/3" >
                    <div className="flex flex-col items-center justify-start text-end border aspect-video w-full">
                        <Image src={carousel1} alt={'carousel1'} className='w-full max-h-[14rem]'/>
                        <div className='font-Cbold text-xs md:text-lg w-full h-10 md:h-16 p-4 flex justify-end items-center'>ویدیو کلاس
                            اموزشی
                        </div>
                    </div>
                </CarouselItem>
                <CarouselItem className="basis-1/2 lg:basis-1/3">
                <div className="flex flex-col items-center justify-start text-end border aspect-video w-full">
                        <Image src={carousel2} alt={'carousel2'} className='w-full max-h-[14rem]'/>
                        <div className='font-Cbold text-xs md:text-lg w-full h-10 md:h-16 p-4 flex justify-end items-center'>ویدیو کلاس اموزشی</div>
                    </div>
                </CarouselItem>
                <CarouselItem className="basis-1/2 lg:basis-1/3" >
                    <div className="flex flex-col items-center justify-start text-end border aspect-video w-full">
                        <Image src={carousel1} alt={'carousel1'} className='w-full max-h-[14rem]'/>
                        <div className='font-Cbold text-xs md:text-lg w-full h-10 md:h-16 p-4 flex justify-end items-center'>ویدیو کلاس
                            اموزشی
                        </div>
                    </div>
                </CarouselItem>
                <CarouselItem className="basis-1/2 lg:basis-1/3">
                <div className="flex flex-col items-center justify-start text-end border aspect-video w-full">
                        <Image src={carousel2} alt={'carousel2'} className='w-full max-h-[14rem]'/>
                        <div className='font-Cbold text-xs md:text-lg w-full h-10 md:h-16 p-4 flex justify-end items-center'>ویدیو کلاس اموزشی</div>
                    </div>
                </CarouselItem>
                <CarouselItem className="basis-1/2 lg:basis-1/3" >
                    <div className="flex flex-col items-center justify-start text-end border aspect-video w-full">
                        <Image src={carousel1} alt={'carousel1'} className='w-full max-h-[14rem]'/>
                        <div className='font-Cbold text-xs md:text-lg w-full h-10 md:h-16 p-4 flex justify-end items-center'>ویدیو کلاس
                            اموزشی
                        </div>
                    </div>
                </CarouselItem>
                <CarouselItem className="basis-1/2 lg:basis-1/3">
                <div className="flex flex-col items-center justify-start text-end border aspect-video w-full">
                        <Image src={carousel2} alt={'carousel2'} className='w-full max-h-[14rem]'/>
                        <div className='font-Cbold text-xs md:text-lg w-full h-10 md:h-16 p-4 flex justify-end items-center'>ویدیو کلاس اموزشی</div>
                    </div>
                </CarouselItem>
                <CarouselItem className="basis-1/2 lg:basis-1/3" >
                    <div className="flex flex-col items-center justify-start text-end border aspect-video w-full">
                        <Image src={carousel1} alt={'carousel1'} className='w-full max-h-[14rem]'/>
                        <div className='font-Cbold text-xs md:text-lg w-full h-10 md:h-16 p-4 flex justify-end items-center'>ویدیو کلاس
                            اموزشی
                        </div>
                    </div>
                </CarouselItem>
                <CarouselItem className="basis-1/2 lg:basis-1/3">
                <div className="flex flex-col items-center justify-start text-end border aspect-video w-full">
                        <Image src={carousel2} alt={'carousel2'} className='w-full max-h-[14rem]'/>
                        <div className='font-Cbold text-xs md:text-lg w-full h-10 md:h-16 p-4 flex justify-end items-center'>ویدیو کلاس اموزشی</div>
                    </div>
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className='!left-4' />
            <CarouselNext className='!right-4' />
        </Carousel>
        </>
    )
}
