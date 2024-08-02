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
import Fade from "embla-carousel-fade";

export default function CarouselSection() {
    const autoplay = useRef(Autoplay({ delay: 2000, stopOnInteraction: false }));
    const fade = useRef(Fade({ active: true }));

    return (
        <Carousel
            plugins={[autoplay.current, fade.current]}
            className="w-full md:w-3/5"
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={autoplay.current.reset}
            dir='ltr'
        >
            <CarouselContent >
                    <CarouselItem >
                        <div className="flex items-center justify-center">
                            <Image src={carousel1} alt={'carousel1'} className='w-full max-h-[28rem]'/>
                        </div>
                    </CarouselItem>
                <CarouselItem>
                        <div className="flex items-center justify-center">
                            <Image src={carousel2} alt={'carousel2'} className='w-full max-h-[28rem]'/>
                        </div>
                    </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className='!left-4' />
            <CarouselNext className='!right-4' />
        </Carousel>
    )
}
