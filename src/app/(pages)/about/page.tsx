"use client";

import HeroContainer from "./_components/HeroContainer";
import AboutCompany from "./_components/AboutCompany";
import HorizontalScroll from "@/components/common/HorizontalScroll";
import OurTeams from "./_components/OurTeam";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import SocialMedia from "@/components/utils/SocialMedia";
import Preloader from "../_components/Preloader";
import Footer from "@/components/layout/Footer";
import { LeadForm } from "@/components/layout/LeadForm/LeadForm";
import OurSuccess from "./_components/OurSuccess";
import WhatDifference from "./_components/WhatDifference";

export default function About() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      document.body.style.overflow = "auto";
      setIsLoading(false);
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, 2000);
  }, []);
  return (
    <>
      <div className={"flex flex-col min-h-screen bg-bgPrimary text-textPrimary"}>
        <AnimatePresence mode="wait">
          {isLoading && <Preloader pagename="HashBitStudio" />}
        </AnimatePresence>
        <SocialMedia />
        <HeroContainer />
        <AboutCompany />
        <HorizontalScroll />
        <OurTeams />
        <OurSuccess />
        <WhatDifference />
        {/* <Client/>  */}
        {/* Careers  */}
      </div>
      <div className="relative grid grid-cols-1 md:grid-cols-2 w-full px-20 text-white pt-40 pb-40 bg-[#B5C0C9]">
        <h2 className="text-[#111] text-3xl md:text-7xl font-semibold">Have a Project Idea?</h2>
        <img src="/assets/contact_bg.webp" alt="Contact Image" className="object-cover absolute bottom-0 left-0" />
        <div className="mt-10 md:mt-4 z-10">
          <LeadForm />
        </div>
      </div>
      <Footer />
    </>
  );
}
