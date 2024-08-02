import {MdLocationPin} from "react-icons/md";
import {FaFax, FaPhone} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className='w-full bg-[#021651] mt-16'>
            <div className='w-11/12 mx-auto py-4'>
                <div className='flex flex-col items-start justify-start gap-3 text-white text-sm font-Cbold'>
                    <div className='border-b-2 w-full md:w-2/3 pb-2'>تماس با ما</div>
                    <div className='flex flex-col items-start justify-start gap-2 text-white text-justify'>
                        <div className='flex gap-2 items-center'>
                            <MdLocationPin/>
                            نشانی: بلوار اشرفی اصفهانی - نرسیده به پل اتوبان همت - خیابان شهید قموشی - خیابان بهار
                        </div>
                        <div className='flex gap-2 items-center'>
                            <FaPhone/>
                            تلفن: ۴۴۲۳۸۱۷۱
                        </div>
                        <div className='flex gap-2 items-center'>
                            <FaFax/>
                            دورنگار: ۴۴۲۱۴۷۵۰
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}