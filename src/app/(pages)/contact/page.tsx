"use client";
import clsx from "clsx";
import { DM_Sans } from "next/font/google";
import { Toaster } from "react-hot-toast";
import FormData from "./_components/FormData";


import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import styles from "./styles.module.scss";

const dm_sans = DM_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function Contact() {


  return (
    <>
      <Header />
      <Toaster position="top-right" />
      <div className="min-h-screen py-[12rem] bg-[#0e0e0e] text-gray-50 fade-in">
        <div className="container mx-auto px-[6vw] lg:px-[10vw]">
          <div className="flex flex-col-reverse lg:flex-row gap-5 items-center flex-wrap relative will-change-transform">
            {/* col one  */}
            <div className="block w-[100%] lg:w-[70%] pr-[8vw]">
              <h1 className="flex flex-row gap-2 lg:gap-0 lg:flex-col font-normal text-2xl md:text-4xl lg:text-6xl leading-10">
                <span>Let&apos;s Start a</span>
                <span>Project Together</span>
              </h1>
            </div>
            {/* col two  */}
            <div className="flex flex-col items-center justify-center lg:items-start gap-10 w-[100%] lg:w-[25%] pr-[8vw]">
              <div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 9 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-5 flex-wrap relative will-change-transform">
            <FormData />
            <div
              className={clsx(
                "block w-full lg:w-[27%] pr-[3vw] text-white py-10",
                dm_sans.className
              )}
            >
              <h5 className="uppercase text-[12px] tracking-tight text-gray-300 pb-5">
                Contact Details
              </h5>
              <ul className="w-full flex flex-col gap-3 pb-4">
                <li className="h-4 cursor-pointer flex items-center text-[18px] font-[500] tracking-tight">
                  <a className={styles.el} href="mailto:safwan.naqvi@gmail.com">
                    <PerspectiveText label="safwan.naqvi@gmail.com" />
                  </a>
                </li>

                <li className="h-4 cursor-pointer flex items-center text-[18px] font-[500] tracking-tight">
                  <a className={styles.el} href="tel:+923345606564"><PerspectiveText label="+92 334 5606564" /></a>
                </li>
              </ul>
              <h5 className="uppercase text-[12px] tracking-tight text-gray-300 pt-10 pb-5">
                Business Details
              </h5>
              <ul className="w-full flex flex-col gap-3 pb-4">
                <li className="h-4 cursor-pointer flex items-center text-[18px] font-[500] tracking-tight">
                  <span className="hover:text-[#c40f4c] transition-all ease-in duration-200">City: Attock</span>
                </li>

                <li className="h-4 cursor-pointer flex items-center text-[18px] font-[500] tracking-tight">
                  <span className="hover:text-[#c40f4c] transition-all ease-in duration-200">Country: Pakistan</span>
                </li>
              </ul>
              <h5 className="uppercase text-[12px] tracking-tight text-gray-300 pt-10 pb-5">
                Social Connections
              </h5>
              <ul className="w-full flex flex-col gap-3 pb-4">
                <li className="h-4 cursor-pointer flex items-center text-[18px] font-[500] tracking-tight">
                  <a className={styles.el} href="https://www.instagram.com/hashbitstudio.agency"><PerspectiveText label="Instagram" /></a>
                </li>

                <li className="h-4 cursor-pointer flex items-center text-[18px] font-[500] tracking-tight">
                  <a className={styles.el} href="https://www.facebook.com/profile.php?id=61550345244380"><PerspectiveText label="Facebook" /></a>
                </li>

                <li className="h-4 cursor-pointer flex items-center text-[18px] font-[500] tracking-tight">
                  <a className={styles.el} href="https://www.linkedin.com/in/syed-safwan-abbas-naqvi-b77339220/"><PerspectiveText label="LinkedIn" /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

interface PerspectiveTextProps {
  label: string;
}

const PerspectiveText = ({ label }: PerspectiveTextProps) => {
  return (
    <div className={styles.perspectiveText}>
      <p>{label}</p>
      <p>{label}</p>
    </div>
  );
};
