import Header from "@/app/_components/header";
import Hero from "@/app/_components/Hero";
import Course from "@/app/_components/Courses";
import Footer from "@/app/_components/Footer";
import KarSection from "@/app/_components/KarSection";
import VideosSection from "@/app/_components/Videos";

export default function Home() {
  return (
      <main className="min-h-screen relative">
          <Header/>
          <div className='w-11/12 mx-auto'>
              <Hero/>
              <Course/>
              <KarSection/>
              <VideosSection/>
          </div>
          <Footer/>
      </main>
  );
}
