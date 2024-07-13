"use client";

import HomeLoader from "@/components/layout/Preloader";
import SocialMedia from "@/components/utils/SocialMedia";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Hero } from "./_components/Hero/Hero";
import Introduction from "./_components/Intro/Introduction";
import { Clients } from "@/components/common/ClientsLogo/Clients";
import About from "./_components/About";
import TechStack from "./_components/Technologies/Tech";
import TechSection from "./_components/Technologies";
import Showcase from "./_components/Showcase";


export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      const locomotiveScroll = new LocomotiveScroll();
    })();
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
      alt: "Serbie",
      src: "/assets/clients/serbie.svg",
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

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <HomeLoader />}
      </AnimatePresence>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <SocialMedia />
        <Hero />
        <Introduction />
        <div className="my-20 w-full">
          <Clients items={images} speed="normal" />
          <Clients items={imagesTwo} speed="normal" direction="right" />
        </div>
        <About />
        <TechSection />
        <Showcase />
      </main>
    </>

  );
}
