"use client";
import { AiOutlineMinus } from "react-icons/ai";
import { useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import clsx from "clsx";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import styles from "./styles.module.scss"

interface HeroContainerProps {
    textOne: string;
    textTwo: string;
    colorOne?: string;
    colorTwo?: string;
    description: string;
}

export default function HeroContainer({ textOne, textTwo, colorOne, colorTwo, description }: HeroContainerProps) {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["end end", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

    useEffect(() => {
        const updateMousePosition = (ev: MouseEvent) => {
            if (!targetRef.current) return;
            const { clientX, clientY } = ev;
            targetRef.current.style.setProperty("--x", `${clientX}px`);
            targetRef.current.style.setProperty("--y", `${clientY}px`);
        };

        window.addEventListener("mousemove", updateMousePosition);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
        };
    }, []);

    // const paragraph =    "Unleashing software engineering expertise for scalable business solutions, from startups to enterprises. Simultaneously, we elevate businesses through high-end experience design, fostering exponential growth.";
    return (
        <motion.div
            ref={targetRef}
            style={{
                opacity,
                '--color-1': colorOne || '#6525e5',
                '--color-2': colorTwo || '#430ab7',
            } as any}
            className={clsx(
                "relative mb-[8rem] h-screen py-16 text-white before:pointer-events-none overflow-hidden before:fixed before:inset-0 before:z-0 before:opacity-40",
                "bg-dynamic-gradient"
            )}
        >
            <div className="h-full flex items-center flex-col lg:flex-row gap-10 justify-center w-full max-w-screen-xl mx-auto">
                <motion.div
                    style={{ scale }}
                    className="w-[80%] lg:w-[80%] cursor-default -mt-[5rem] flex flex-col gap-4 items-center justify-center"
                >
                    <h1 className="text-5xl lg:text-7xl font-[600] w-full tracking-tighter">
                        {textOne}{" "}
                        <span className="flex text-white/80">
                            <AiOutlineMinus className="inline-block" />
                            {textTwo}
                        </span>
                    </h1>
                    <p>{description}</p>
                </motion.div>
                <Link href={"/contact"} className="relative group rounded-full h-40 w-40 p-3 bg-[#7a26ce] hover:bg-[#6222b5] box-border transition-all text-md font-light tracking-tight">
                    <img src="/assets/circle_text.svg" alt="Lets Build" className="animate-spin-slow group-hover:animate-spin-slow-reverse" />
                    <FaArrowRightLong className="absolute rotate-45 group-hover:rotate-0 transition-all top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10" />
                </Link>
            </div>

        </motion.div>
    );
}
