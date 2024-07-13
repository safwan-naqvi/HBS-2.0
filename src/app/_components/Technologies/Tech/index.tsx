"use client";

import { technologies } from "@/lib/data";
import { useSectionInView } from "@/lib/hook";
import clsx from "clsx";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./styles.module.scss"
import HoverTitle from "@/components/common/HoverTitle/HoverTitle";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.125 * index,
    },
  }),
};

export default function TechStack() {
  const targetRefSection = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRefSection,
    offset: ["end end", "end start"],
  });

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      if (!targetRefSection.current) return;
      const { clientX, clientY } = ev;
      targetRefSection.current.style.setProperty("--x", `${clientX}px`);
      targetRefSection.current.style.setProperty("--y", `${clientY}px`);
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const { ref } = useSectionInView("Skills");
  //max-w-[50rem] lg:max-w-[68rem] mx-auto scroll-mt-28 text-center sm:mb-40
  return (
    <motion.section
      ref={targetRefSection}
      style={{ opacity }}
      className={clsx(
        "relative mb-[8rem] min-h-screen px-20 py-16 text-white before:pointer-events-none before:absolute before:inset-0 before:z-0 before:opacity-80",
        styles.targetRefSection
      )}
    >
      <h2 className="relative text-3xl md:text-5xl text-white text-center mb-10 font-bold tracking-tighter pointer-events-none opacity-100">
        Our <span className="text-[#A91079] mx-1 md:mx-2">Tech</span> Stack
      </h2>
      <div
        data-scroll-section
        ref={ref}
        id="skills"
        className="mb-28 w-full mx-auto scroll-mt-28 text-center sm:mb-40"
      >
        <ul className="flex flex-wrap justify-center text-lg text-gray-800">
          {technologies.map((tech, index) => (
            <motion.li
              className="py-3 px-5 cursor-pointer"
              key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView={"animate"}
              viewport={{
                once: true,
              }}
              custom={index}
            >
              <div className="relative hover:scale-125 transition-all duration-200">
                <HoverTitle title={tech.name}>
                  <Image
                    src={tech.src}
                    alt={tech.name}
                    height={60}
                    width={60}
                    style={{ objectFit: "contain", aspectRatio: "1/1" }}
                    quality={95}
                  />
                </HoverTitle>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
}
