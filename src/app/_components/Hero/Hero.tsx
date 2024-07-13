"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";
import React from "react";
import styles from "./style.module.scss";
import clsx from "clsx";

export function Hero() {
    return (
        <div className="h-[40rem] w-full rounded-md bg-background relative flex flex-col items-center justify-center antialiased">
            <div className={styles.hero}>
                {/* <div className={clsx("h-full w-full absolute left-0 top-0", styles.gradientBg)}>
                </div> */}
                <div className={styles.content}>
                    <h1 className="text-4xl -mt-24 md:mt-6 md:text-7xl font-[600] w-[650px] text-center md:leading-[4.5rem] tracking-tighter pointer-events-none">
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
            <BackgroundBeams />
        </div>
    );
}
