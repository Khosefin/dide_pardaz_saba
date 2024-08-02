'use client'
import Kargoruh from "@/app/_components/kargoruh";
import {useRef} from "react";
import {useIntersection} from "@mantine/hooks";

export default function KarSection() {
    const kargoruhData = [
        { title: "بورس و بازارهای مالی", courses: [{name: "دوره تستی", image: "/images/course2.jpg"}, {name: "دوره تستی", image: "/images/course7.jpg"}, {name: "دوره تستی", image: "/images/course6.jpg"}, {name: "دوره تستی", image: "/images/course5.jpg"}, {name: "دوره تستی", image: "/images/course4.jpg"}, {name: "دوره تستی", image: "/images/course3.jpg"}, {name: "دوره تستی", image: "/images/course2.jpg"}] },
        { title: "مدیریت کسب و کار", courses: [{name: "دوره تستی", image: "/images/course2.jpg"}, {name: "دوره تستی", image: "/images/course5.jpg"}, {name: "دوره تستی", image: "/images/course3.jpg"}, {name: "دوره تستی", image: "/images/course7.jpg"}, {name: "دوره تستی", image: "/images/course2.jpg"}] },
        { title: "برنامه نویسی وب", courses: [{name: "دوره تستی", image: "/images/course2.jpg"}, {name: "دوره تستی", image: "/images/course3.jpg"}] },
        { title: "تحلیل داده‌ها", courses: [{name: "دوره تستی", image: "/images/course2.jpg"}, {name: "دوره تستی", image: "/images/course2.jpg"}, {name: "دوره تستی", image: "/images/course3.jpg"}, {name: "دوره تستی", image: "/images/course4.jpg"}, {name: "دوره تستی", image: "/images/course5.jpg"}, {name: "دوره تستی", image: "/images/course6.jpg"}, {name: "دوره تستی", image: "/images/course7.jpg"}, {name: "دوره تستی", image: "/images/course2.jpg"}] },
        { title: "بازاریابی دیجیتال", courses: [{name: "دوره تستی", image: "/images/course2.jpg"}, {name: "دوره تستی", image: "/images/course6.jpg"}, {name: "دوره تستی", image: "/images/course2.jpg"}] },
    ];
    const coursesSec = useRef<HTMLDivElement>(null);
    const { ref, entry } = useIntersection({
        root: coursesSec.current,
        threshold: 0,
    });
    return (
        <div ref={ref} className='mt-10 flex flex-col'>
            <div className='sectionTitle relative flex items-center text-center justify-center'>
                    <span className='bg-white px-3'>
                    کارگروه های آموزشی
                    </span>
            </div>
            <div className='flex flex-wrap gap-y-16 gap-x-10 mt-10'>
                {kargoruhData.map((data, index) => (
                    <Kargoruh
                        key={index}
                        title={data.title}
                        course={data.courses}
                        animation={entry?.isIntersecting ?? false}
                    />
                ))}
            </div>
        </div>
    )
}