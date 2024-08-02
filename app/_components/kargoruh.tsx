"use client"
import {MdAccessTime} from "react-icons/md";
import {IoArrowBack} from "react-icons/io5";
import Image from "next/image";
import {cn} from "@/lib/utils";

interface CourseItem {
    name: string;
    image: string;
}
interface IntersectionObserverEntry {
    readonly boundingClientRect: DOMRectReadOnly;
    readonly intersectionRatio: number;
    readonly intersectionRect: DOMRectReadOnly;
    readonly isIntersecting: boolean;
    readonly rootBounds: DOMRectReadOnly | null;
    readonly target: Element;
    readonly time: DOMHighResTimeStamp }

export default function Kargoruh({title, course , animation}:{title: string; course: CourseItem[]; animation: boolean}) {
    return (
        <div
            className={cn('lg:w-[30%] md:w-[47%] w-full flex flex-col gap-4 border md:border-r-0 max-h-[28rem] relative p-4 pr-0',animation ? "flipCart" : "")}>
                  <span className='flex items-center gap-1 bg-white px-3 text-center absolute -top-4 right-0'>
                      <MdAccessTime color='#059498'/>
                      {title}
                  </span><span className='absolute font-Cblack -bottom-7 left-0'>
                      بیشتر ...
                  </span>
            <div dir='ltr'
                 className='overflow-y-scroll aspect-square h-full md:-mr-2 [&>div:not(:first-of-type)]:border-t [&>div:not(:first-of-type)]:pt-2 [&>div]:pb-3 [&>div]:pr-2 customScrollBar'>
                {course.map((item: CourseItem, index: number) => (
                    <div key={index} className='flex justify-center w-full items-center text-center group'>
                        <IoArrowBack color='#059498' size={22} className='group-hover:scale-105'/>
                        <div className='w-full flex flex-col items-end gap-1 mr-2'>
                            <div className='font-Cbold text-sm flex items-center text-end justify-center gap-2'>
                                {item.name}
                                <Image src={item.image} alt={item.name} width={100} height={66} className='w-[100px] h-[66px]'/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}