"use client";
import Image from "next/image";
import headerImg from "@/public/images/header.jpg";
import { IoHomeSharp, IoMenu } from "react-icons/io5";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <>
            <Image src={headerImg} alt="Header Image" />
        <header className="w-full h-fit flex flex-col items-center sticky top-0 z-50">
            <nav
                className={cn(
                    'w-full transition-all text-white bg-[hsl(180,100%,28.63%)] border-b-4 border-[hsl(180,100%,43.73%)]',
                    isDropdownOpen ? 'h-[22rem] md:h-12' : 'h-12'
                )}
            >
                <div className='flex w-11/12 h-12 mx-auto text-center text-xs border-b md:border-none'>
                    <DesktopMenu/>
                    <div className='h-full w-full flex items-center text-center'>
                        <IoMenu
                            className='w-6 h-6 md:hidden'
                            onClick={() => setIsDropdownOpen(prev => !prev)}
                        />
                    </div>
                    <div className='w-full flex items-center justify-end text-center gap-5 pl-2 [&>*]:cursor-pointer'>
                        <FaShoppingCart className='w-4 h-4 hidden md:block'/>
                        <div className='flex items-center justify-center gap-2 group'>
                            <input
                                type="text"
                                className='transition-all text-black w-0 lg:group-hover:w-44 lg:group-hover:px-3 h-5 rounded-sm focus:w-44 focus:px-3'
                            />
                            <FaSearch className='w-4 h-4'/>
                        </div>
                    </div>
                </div>
                <DropdownMenu isOpen={isDropdownOpen}/>
            </nav>
        </header>
        </>
    );
}

function ItemMenu() {
    return (
        <>
            <MenuItem icon={<IoHomeSharp className='w-3 h-3'/>} text="خانه"/>
            <MenuItem text="درباره ما"/>
            <div className='relative flex items-center gap-0.5 group cursor-pointer'>
                گروه‌های آموزشی
                <ul className="md:group-hover:flex rounded-sm drop-shadow-sm absolute hidden flex-col rounded-s-sm border p-3 top-full translate-x-1/2 right-1/2 w-fit items-start justify-start text-nowrap bg-white z-10 text-[hsl(180,100%,28.63%)] gap-2">
                    <li>هنر</li>
                    <li>معماری و دکوراسیون داخلی</li>
                    <li>آموزش‌های تخصصی</li>
                    <li>بورس و بازارهای مالی</li>
                    <li>کامپیوتر</li>
                    <li>زبان</li>
                    <li>تربیت مربی</li>
                    <li>آموزش‌های آفلاین</li>
                    <li>آموزش ضمن خدمت</li>
                </ul>
            </div>
            <MenuItem text="کلینیک روانشناسی"/>
            <MenuItem text="سوالات متداول"/>
            <MenuItem text="همکاری با ما"/>
            <MenuItem text="ورود/ ثبت نام"/></>
    )
}

function DesktopMenu() {
    return (
        <div className='md:flex hidden w-full text-nowrap items-center gap-4 [&>div]:py-4'>
            <ItemMenu/>
        </div>
    );
}

function DropdownMenu({isOpen}: { isOpen?: boolean }) {
    return (
        <div
            className={cn(
                'flex-col w-11/12 mx-auto text-nowrap items-start text-center [&>div]:py-3 text-xs',
                isOpen ? 'flex' : 'hidden'
            )}
        >
            <ItemMenu/>
        </div>
    );
}

function MenuItem({ icon, text }: {icon?: JSX.Element , text:string}) {
    return (
        <div className='flex items-center gap-0.5 cursor-pointer'>
            {icon}
            {text}
        </div>
    );
}
