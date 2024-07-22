"use client";
import { AboutCompanyText } from "@/lib/data";
import Paragraph from "./_components/TextScroll";
import Image from "next/image";
import SlidingButton from "@/components/common/SlidingButton";

export default function AboutCompany() {
  const words = AboutCompanyText;

  return (
    <div className="relative w-full min-h-full bg-[#131313] flex flex-col pt-10">
      <div className="relative flex flex-col max-w-[900px] mx-auto items-center py-9">
        <h1 className="pointer-events-none text-7xl text-center font-[600] tracking-tighter leading-[1.1em] text-gray-300">
          <span className="text-white">HashBitStudio</span> Unleash Creativity
          Through Dedication and Innovation
        </h1>
        <Paragraph paragraph={words} />
        <Image
          src={
            "https://res.cloudinary.com/dr9ec0vsv/image/upload/v1707053882/office_gynuyt.jpg"
          }
          alt="HashBitStudio Office"
          height={950}
          width={950}
          className="mt-10"
          style={{ objectFit: "cover", borderRadius: "20px" }}
        />
        <SlidingButton label="Discover Us" href="/contact" />
      </div>
    </div>
  );
}
