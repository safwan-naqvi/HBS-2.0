import React from "react";
import HoverMask from "@/components/common/HoverMask";
import Image from "next/image";
import SlidingButton from "@/components/common/SlidingButton";
import { FooterQuickLinks, FooterServicesLink } from "@/lib/data";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export default function Footer() {
  return (
    <section className="min-h-[60vh] w-full pt-14 pb-2 text-gray-300 box-border">
      <div className="flex flex-col items-center md:flex-row gap-10 w-full md:w-[80vw] mx-auto">
        <div className="w-[60%] flex flex-col gap-2 items-start">
          <Image
            src={"/assets/footer_logo.png"}
            alt="Hashbitstudio Logo"
            height={350}
            width={350}
            quality={100}
          />
          <p className="text-md text-start tracking-tight max-w-[400px]">
            Elevating digital presence with creative mastery, where design meets
            strategy, we craft functional and captivating online experiences for
            the future.
          </p>
          <SlidingButton href="/contact" label="Contact Us" />
        </div>
        <div className="flex gap-4">
          <div className="w-[50%] md:w-[15%] mx-auto">
            <span className="text-white font-normal tracking-tight">
              Quick Links
            </span>
            <ul className="mt-4 flex flex-col gap-3">
              {FooterQuickLinks.map((quick, i) => (
                <Link href={quick.href} key={i}>
                  <li className="text-md font-[300] hover:text-white hover:underline transition-all ease-in-out duration-300 tracking-tight">
                    {quick.label}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
          <div className="w-[50%] md:w-[15%] mx-auto">
            <span className="text-white font-normal tracking-tight">
              Services
            </span>
            <ul className="mt-4 flex flex-col gap-3">
              {FooterServicesLink.map((quick, i) => (
                <Link href={quick.href} key={i}>
                  <li className="text-md font-[300] hover:text-white hover:underline transition-all ease-in-out duration-300 tracking-tight">
                    {quick.label}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Separator className="mt-8 bg-[#A91079]" />
      <div className="max-w-full w-full flex flex-col p-4 gap-3 md:flex-row items-center justify-between !box-border">
        <div>
          <span className={inter.className}>HBS Copyright@2024</span>
        </div>
        <HoverMask />
      </div>
    </section>
  );
}
