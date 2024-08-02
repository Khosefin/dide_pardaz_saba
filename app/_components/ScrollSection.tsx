import {MdAccessTime} from "react-icons/md";
import {IoArrowBack} from "react-icons/io5";
import {GrScheduleNew} from "react-icons/gr";

export default function ScrollSection({title , image , des , sub}: {title: string, image: string, des: string , sub: string}) {
    return (
        <div className='w-1/3 flex flex-col gap-4 border border-r-0 max-h-[28rem] relative p-4 pr-0'>
                  <span className='flex items-center gap-1 bg-white px-3 text-center absolute -top-4 right-0'>
                      <MdAccessTime color='#059498'/>
                      اخرین مطالب
                  </span><span className='absolute -bottom-7 left-0'>
                      بیشتر ...
                  </span>
            <div dir='ltr'
                 className='overflow-y-scroll aspect-square overflow-x-hidden h-full -mr-2 [&>div:not(:first-of-type)]:border-t [&>div:not(:first-of-type)]:pt-2 [&>div]:pb-3 [&>div]:pr-2 customScrollBar'>
                {Array.from({length: 7}).map((_, index) => (
                    <div key={index} className='flex justify-center w-full items-center text-center'>
                        <IoArrowBack color='#059498' size={22}/>
                        <div className='w-full flex flex-col items-end gap-1 mr-2'>
                            <div className='text-xs text-gray-500'>1403/04/20 | صبح 9:13</div>
                            <div className='font-Cbold flex items-center justify-center gap-1'>
                                <GrScheduleNew color='#059498'/>
                                کارگاه زبان خارجه
                            </div>
                            <div className='text-xs text-gray-500 font-Cbold mt-2'> برگزاری کارگاه زبان خارجه</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}