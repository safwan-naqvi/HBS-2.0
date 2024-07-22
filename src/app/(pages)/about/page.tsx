"use client";

import HeroContainer from "./_components/HeroContainer";
import AboutCompany from "./_components/AboutCompany";
import HorizontalScroll from "@/components/common/HorizontalScroll";
import OurTeams from "./_components/OurTeam";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import SocialMedia from "@/components/utils/SocialMedia";
import Preloader from "../_components/Preloader";

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
    <div className={"flex flex-col min-h-screen bg-bgPrimary text-textPrimary"}>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader pagename="HashBitStudio" />}
      </AnimatePresence>
      <SocialMedia />
      <HeroContainer />
      <AboutCompany />
      <HorizontalScroll />
      <OurTeams />
    </div>
  );
}
