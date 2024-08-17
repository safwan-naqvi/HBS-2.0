"use client";

import { AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import Preloader from '../_components/Preloader';
import SocialMedia from '@/components/utils/SocialMedia';
import HeroContainer from './_components/HeroContainer';
import ServiceGallery from './_components/Main/ServiceGallery';
import { ParallaxScroll } from "@/components/common/ParallaxGrid/Parallax";
import { GoArrowUpRight } from 'react-icons/go';
import Footer from '@/components/layout/Footer';
import { LeadForm } from '@/components/layout/LeadForm/LeadForm';
export default function Portfolio() {
    // const [isLoading, setIsLoading] = useState(true);
    // useEffect(() => {
    //     document.body.style.overflow = "hidden";
    //     setTimeout(() => {
    //         document.body.style.overflow = "auto";
    //         setIsLoading(false);
    //         document.body.style.cursor = "default";
    //         window.scrollTo(0, 0);
    //     }, 2000);
    // }, []);
    return (
        <>
            <div className={"flex flex-col min-h-screen bg-background fade-in"}>
                {/* <AnimatePresence mode="wait">
                    {isLoading && <Preloader pagename="Portfolio" />}
                </AnimatePresence> */}
                <SocialMedia />
                <HeroContainer />
                <ServiceGallery />
                <div className='flex text-white items-center justify-between gap-2 border-b border-neutral-300 mb-12 sm:mb-14 pb-4 px-10 md:px-20'>
                    <div className="flex items-center">
                        <div className="flex h-8 w-8 relative items-center justify-center"><span className="animate-ping absolute h-8 w-8 rounded-full bg-[#8a33c8] opacity-75"></span><span className="relative rounded-full h-8 w-8 bg-[#850194]"></span></div>
                        <span className="ml-2">BRANDS</span>
                    </div>
                    <button className="animate-none hover:animate-pulse group transition-all duration-1000 bg-[#8215a6] h-12 w-40 rounded-full text-sm tracking-tight font-light">
                        <span className="flex items-center justify-center gap-2">Explore More <GoArrowUpRight className="group-hover:rotate-45 h-4 w-4 transition-all origin-center" /></span>
                    </button>
                </div>
                <ParallaxScroll images={images} />
                <div className="relative grid grid-cols-1 md:grid-cols-2 w-full px-10 lg:px-20 text-white pt-40 pb-40 bg-[#B5C0C9]">
                    <h2 className="text-[#111] text-3xl md:text-7xl font-semibold">Have a Project Idea?</h2>
                    <img src="/assets/contact_bg.webp" alt="Contact Image" className="object-cover absolute bottom-0 left-0" />
                    <div className="mt-10 md:mt-4 z-10">
                        <LeadForm />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}
const images = [
    "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
    "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
    "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    "https://images.unsplash.com/photo-1682686581854-5e71f58e7e3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    "https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    "https://images.unsplash.com/photo-1439853949127-fa647821eba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2640&q=80",
    "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
];