"use client";

import { Testimonials } from "@/components/common/Testimonials/testimonials";
import { Faqs } from "@/components/layout/Faqs/Faqs";
import Footer from "@/components/layout/Footer";
import { LeadForm } from "@/components/layout/LeadForm/LeadForm";
import HomeLoader from "@/components/layout/Preloader";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import SocialMedia from "@/components/utils/SocialMedia";
import { HomepageFaqs } from "@/lib/constantData";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import About from "./_components/About";
import { Hero } from "./_components/Hero/Hero";
import Introduction from "./_components/Intro/Introduction";
import Showcase from "./_components/Showcase";
import TechSection from "./_components/Technologies";


export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // (async () => {
    //   const LocomotiveScroll = (await import("locomotive-scroll")).default;

    //   const locomotiveScroll = new LocomotiveScroll();
    // })();
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      document.body.style.overflow = "auto";
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
      setIsLoading(false);
    }, 2000);
  }, []);


  const images = [
    {
      alt: "99 Marlaz",
      src: "/assets/clients/99-marlaz.svg",
    },
    {
      alt: "Apex Travel Agency",
      src: "/assets/clients/apex-ticket.svg",
    },
    {
      alt: "Cosmic Gift Shop",
      src: "/assets/clients/cosmic.svg",
    },
    {
      alt: "De Attire",
      src: "/assets/clients/deattire.svg",
    },
    {
      alt: "Seeme Saloon",
      src: "/assets/clients/seeme-salon.svg",
    }
  ]
  const imagesTwo = [
    {
      alt: "AL Haram",
      src: "/assets/clients/al-haram.svg",
    },
    {
      alt: "Dominion Constructions",
      src: "/assets/clients/dominion.svg",
    },
    {
      alt: "Imperial Palace",
      src: "/assets/clients/imperial.svg",
    },
    {
      alt: "Interactive",
      src: "/assets/clients/interactive.svg",
    }
  ]
  const isMediumScreen = useMediaQuery({ query: '(min-width: 768px)' })
  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <HomeLoader />}
      </AnimatePresence>
      <div>
        <div className="flex h-full flex-col items-center justify-between">
          <SocialMedia />
          <Hero />
          <Introduction />
          {/* <div className="my-20 w-full">
          <Clients items={images} speed="slow" />
          {isMediumScreen && <Clients items={imagesTwo} speed="slow" direction="right" />}
        </div> */}
          <About />
          <TechSection />
          <Showcase />
          {/* <LetsConnect /> */}
          <div className="flex items-center justify-center py-20 w-full overflow-hidden bg-gradient-to-bl from-[#3085df] via-[#0450a2] to-[#0c6acf] mt-10">
            <Link href={"/contact"}>
              <VelocityScroll
                text="Connect With Us"
                default_velocity={3}
                className="font-display text-center space-y-8 text-7xl font-semibold tracking-tight text-white drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
              />
            </Link>
          </div>
          {/* <ServiceSection /> */}
          <div className="bg-[#111] relative w-full mt-32">
            <Testimonials />
          </div>
          <div className="text-white w-full md:max-w-7xl py-40 px-10 md:px-20 flex items-center">
            <Faqs Faq={HomepageFaqs} />
          </div>
          <div className="relative grid grid-cols-1 md:grid-cols-2 w-full px-10 lg:px-20 text-white pt-40 pb-40 bg-[#B5C0C9]">
            <h2 className="text-[#111] text-3xl md:text-7xl font-semibold">Have a Project Idea?</h2>
            <img src="/assets/contact_bg.webp" alt="Contact Image" className="object-cover absolute bottom-0 left-0" />
            <div className="mt-10 md:mt-4 z-10">
              <LeadForm />
            </div>
          </div>
        </div>
        <Footer />
      </div>



    </>

  );
}
