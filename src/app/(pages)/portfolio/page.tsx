import Loading from "@/components/common/Loading";
import Footer from "@/components/layout/Footer";
import { LeadForm } from '@/components/layout/LeadForm/LeadForm';
import SocialMedia from '@/components/utils/SocialMedia';
import { Metadata } from "next";
import { Suspense } from "react";
import { GoArrowUpRight } from 'react-icons/go';
import SkewGallery from "./_components/Main/_components/SkewGallery";
import HeroContainer from "@/components/layout/HeroContainer/HeroContainer";


export const metadata: Metadata = {
    title: "HashBitStudio | Portfolio",
    description: "Explore Our Work on HashBitStudio",
};

export default function Portfolio() {
    return (
        <>
            <Suspense fallback={<Loading />}>
                <div className={"flex flex-col bg-background fade-in"}>
                    <SocialMedia />
                    <HeroContainer textOne='Our Services' textTwo='Portfolio' description='Unleashing software engineering expertise for scalable business solutions, from startups to enterprises. Simultaneously, we elevate businesses through high-end experience design, fostering exponential growth.' />
                    {/* <ServiceGallery /> */}
                    <div className='py-10'>
                        <div className="container">
                            <h2 className="text-4xl text-white font-semibold my-4">Portfolio</h2>
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
                            <div className='flex text-white items-center w-full mx-auto justify-between gap-2 border-b border-neutral-300 mb-12 sm:mb-14 pb-4 px-10 md:px-20'>
                                <div className="flex items-center">
                                    <div className="flex h-8 w-8 relative items-center justify-center"><span className="animate-ping absolute h-8 w-8 rounded-full bg-[#8a33c8] opacity-75"></span><span className="relative rounded-full h-8 w-8 bg-[#850194]"></span></div>
                                    <span className="ml-2">BRANDS</span>
                                </div>
                                <button className="animate-none hover:animate-pulse group transition-all duration-1000 bg-[#8215a6] h-12 w-40 rounded-full text-sm tracking-tight font-light">
                                    <span className="flex items-center justify-center gap-2">Explore More <GoArrowUpRight className="group-hover:rotate-45 h-4 w-4 transition-all origin-center" /></span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* <ParallaxScroll images={images} /> */}
                    <div className="relative grid grid-cols-1 md:grid-cols-2 w-full px-10 lg:px-20 text-white pt-40 pb-40 bg-[#B5C0C9]">
                        <h2 className="text-[#111] text-3xl md:text-7xl font-semibold">Have a Project Idea?</h2>
                        <img src="/assets/contact_bg.webp" alt="Contact Image" className="object-cover absolute bottom-0 left-0" />
                        <div className="mt-10 md:mt-4 z-10">
                            <LeadForm />
                        </div>
                    </div>
                    <Footer />
                </div>
            </Suspense>
        </>
    )
}
