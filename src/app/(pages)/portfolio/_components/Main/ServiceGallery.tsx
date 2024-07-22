import React from "react";
import { Features } from "./_components/Features";
import { LinedText } from "./_components/LinedText";
import SkewGallery from "./_components/SkewGallery";
import { GoArrowUpRight } from "react-icons/go";
import { useMediaQuery } from "react-responsive";

export default function ServiceGallery() {
  const isMobile = useMediaQuery({ query: "(min-width:640px)" });
  const isNotTab = useMediaQuery({ query: "(max-width:1024px)" });
  console.log(isMobile)
  return (
    <>
      <div className="w-full h-full overflow-x-clip bg-black text-white">
        {isMobile && isNotTab ? "" : <LinedText />}
        <Features />
        <section className='py-48 bg-[#0b0b0b]'>
          <div className="container">
            <h2 className="text-4xl font-semibold">Portfolio</h2>
            <div className='flex text-white items-center justify-between gap-2 border-b border-neutral-300 mb-12 sm:mb-14 pb-4'>
              <div className="flex items-center">
                <div className="flex h-8 w-8 relative items-center justify-center"><span className="animate-ping absolute h-8 w-8 rounded-full bg-[#be3278] opacity-75"></span><span className="relative rounded-full h-8 w-8 bg-[#94014b]"></span></div>
                <span className="ml-2">Websites Design & Development</span>
              </div>
              <button className="animate-none hover:animate-pulse group transition-all duration-1000 bg-[#91156b] h-12 w-40 rounded-full text-sm tracking-tight font-light">
                <span className="flex items-center justify-center gap-2">Explore More <GoArrowUpRight className="group-hover:rotate-45 h-4 w-4 transition-all origin-center" /></span>
              </button>
            </div>
            <SkewGallery />

          </div>
        </section>
      </div>
      ;
    </>
  );
}


