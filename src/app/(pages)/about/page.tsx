"use client";

import HorizontalScroll from "@/components/common/HorizontalScroll";
import Footer from "@/components/layout/Footer";
import { LeadForm } from "@/components/layout/LeadForm/LeadForm";
import SocialMedia from "@/components/utils/SocialMedia";
import AboutCompany from "./_components/AboutCompany";
import HeroContainer from "./_components/HeroContainer";
import OurSuccess from "./_components/OurSuccess";
import OurTeams from "./_components/OurTeam";
import WhatDifference from "./_components/WhatDifference";

export default function About() {

  return (
    <>
      <div className={"flex flex-col min-h-screen bg-bgPrimary text-textPrimary fade-in"}>
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
      <div className="relative grid grid-cols-1 md:grid-cols-2 w-full px-10 lg:px-20 text-white pt-40 pb-40 bg-[#B5C0C9]">
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
