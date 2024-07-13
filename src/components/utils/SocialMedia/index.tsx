"use client";

import Framer from "@/components/common/FramerMagnetic";
import Link from "next/link";
import { FaFacebookF, FaLinkedin, FaDribbble } from "react-icons/fa6";


const links = [
  {
    name: "facebook",
    Icon: FaFacebookF,
    href: "https://www.facebook.com",
    alt: "HBS Facebook",
  },
  {
    name: "linkedin",
    Icon: FaLinkedin,
    href: "https://www.linkedin.com",
    alt: "HBS Linkedin",
  },
  {
    name: "dribblee",
    Icon: FaDribbble,
    href: "https://www.dribblee.com",
    alt: "HBS Dribblee",
  },
];

export default function SocialMedia() {
  return (
    <div className="flex flex-col gap-6 md:gap-8 pb-20 fixed z-30 -bottom-4 md:bottom-0 left-[2rem] md:left-[3rem] max-w-[40px]">
      {links.map((link) => (
        <Framer key={link.name}>
          <div>
            <Link href={link.href}>
              <link.Icon className="h-[24px] w-[24px] text-[#d7d7d7] hover:text-[#A91079] transition-all ease-in-out" />
            </Link>
          </div>
        </Framer>
      ))}
    </div>
  );
}
