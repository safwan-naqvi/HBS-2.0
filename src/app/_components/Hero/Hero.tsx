"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";
import React from "react";
import styles from "./style.module.scss";
import clsx from "clsx";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "react-responsive";

export function Hero() {
    const isBigScreen = useMediaQuery({ query: '(min-width: 1000px)' })
    return (
        <div className="h-[40rem] w-full bg-gradient-to-b from-[#040C0E] to-transparent relative flex flex-col items-center justify-center antialiased">


            <div className={styles.outerBlob}></div>
            <div className={styles.innerBlob}></div>
            <div className={styles.topBlob}></div>
            <div className={styles.topLeftBlob}></div>

            <div className={styles.hero}>
                {/* <div className={clsx("h-full w-full absolute left-0 top-0", styles.gradientBg)}>
                </div> */}
                <div className={styles.content}>
                    <h1 className="text-5xl -mt-16 md:mt-6 md:text-7xl font-[600] w-[650px] text-center leading-[3.5rem] md:leading-[4.5rem] tracking-tighter pointer-events-none">
                        <span className="block">Unlocking</span>
                        <span className="block">Digital</span>
                        <span className="block">Solutions</span>
                        <span className="block">With</span>
                        <span className="text-gradient block">HashBitStudio</span>
                    </h1>
                    <p className="hidden md:block text-lg font-[200] mt-0">
                        <span className="text-gradient-secondary">
                            Pixels with Purpose, Passion, and Precision.
                        </span>
                    </p>
                </div>
            </div>

            {/* <BackgroundBeams /> */}
        </div>
    );
}
