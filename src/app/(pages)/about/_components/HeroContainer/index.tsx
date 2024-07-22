"use client";
import { AiOutlineMinus } from "react-icons/ai";
import Character from "@/components/TextScrollEffect/Character";
import styles from "./style.module.scss";
import { useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import clsx from "clsx";
export default function HeroContainer() {
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

  const paragraph =
    "Unleashing software engineering expertise for scalable business solutions, from startups to enterprises. Simultaneously, we elevate businesses through high-end experience design, fostering exponential growth.";
  return (
    <motion.div
      ref={targetRef}
      style={{ opacity }}
      // className="h-screen bg-black text-white w-full"
      className={clsx(
        "relative mb-[8rem] h-screen py-16 text-white before:pointer-events-none before:fixed before:inset-0 before:z-0 before:opacity-40",
        styles.targetRef
      )}
    >
      <div className="h-full flex items-center justify-center w-full max-w-screen-xl mx-auto">
        <motion.div
          style={{ scale }}
          className="w-[80%] cursor-default -mt-[5rem] flex items-center"
        >
          <div className="w-full">
            <h1 className="text-6xl font-[600] w-full tracking-tighter">
              About{" "}
              <span className="block text-white/80">
                <AiOutlineMinus className="inline-block" />
                HashBitStudio
              </span>
            </h1>
          </div>
          <div className="w-[50%]">
            <p>{paragraph}</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
