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
    <section className="relative h-full w-full pt-14 pb-2 px-0 md:px-10 mt-10 text-gray-300 box-border">
      <div className="grid grid-cols-12 w-full">
        <div className="col-span-12 md:col-span-6 w-full items-center pb-10 flex flex-col gap-2 md:items-start">
          <Image
            src={"/assets/footer_logo.png"}
            alt="Hashbitstudio Logo"
            height={350}
            width={350}
            quality={100}
          />
          <p className="text-md md:text-start text-center tracking-tight max-w-[300px] md:max-w-[400px]">
            Elevating digital presence with creative mastery, where design meets
            strategy, we craft functional and captivating online experiences for
            the future.
          </p>
          <SlidingButton href="/contact" label="Contact Us" />
        </div>
        <div className="col-span-12 md:col-span-6 pt-10 md:pt-0 border-t md:border-none text-center grid grid-cols-2 gap-4 w-full">
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
      <div className="max-w-full w-full flex flex-col p-4 gap-3 md:flex-row items-center justify-between !box-border px-20 lg:px-40">
        <div>
          <span className={inter.className}>HBS Copyright@2024</span>
        </div>
        <HoverMask />
      </div>
    </section>
  );
}
