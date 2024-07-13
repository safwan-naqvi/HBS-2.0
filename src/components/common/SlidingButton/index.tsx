"use client";
import Link from "next/link";
import styles from "./style.module.scss";
import { GoArrowUpRight } from "react-icons/go";

interface SlidingButtonProps {
  href: string;
  label: string;
}

export default function SlidingButton({ href, label }: SlidingButtonProps) {
  return (
    <Link
      href={href}
      className="max-w-[230px] w-full cursor-pointer h-[60px] mt-3 relative flex items-center justify-between group"
    >
      <div className="relative flex items-center justify-center rounded-full bg-white text-gray-700 h-full w-[60px] p-2">
        <GoArrowUpRight className="h-10 w-10" />
      </div>
      <div className="absolute transition-transform group-hover:translate-x-[60px]  !text-gray-700 z-10 rounded-full h-full w-[170px] flex items-center justify-center bg-white">
        <span className="font-[500] tracking-tighter">{label}</span>
      </div>
      <div className="relative flex items-center justify-center rounded-full bg-white text-gray-700 h-full w-[60px] p-2">
        <GoArrowUpRight className="h-10 w-10" />
      </div>
    </Link>
  );
}
