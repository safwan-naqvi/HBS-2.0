"use client";
import Image from "next/image";
import styles from "./style.module.scss";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { Inter } from "next/font/google";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import SlidingButton from "../SlidingButton";

const inter = Inter({
  subsets: ["latin"],
  weight: "300",
});

interface CardProps {
  i: number;
  title: string;
  description: string;
  heading: string;
  services: string[];
  src: string;
  link: string;
  color: string;
  progress: any;
  range: number[];
  targetScale: number;
}

const Card = ({
  i,
  title,
  description,
  heading,
  services,
  src,
  link,
  color,
  progress,
  range,
  targetScale,
}: CardProps) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className={styles.cardContainer}>
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={styles.card}
      >
        <div className={styles.body}>
          <div className={styles.description}>
            <h2 className={styles.heading}>{title}</h2>
            <p className={`${inter.className} my-2`}>{description}</p>
            <ul className="grid grid-cols-2">
              {services.map((service, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 mt-2 cursor-pointer hover:translate-x-2 group transition-all ease-in-out duration-300"
                >
                  <div>
                    <BsFillArrowRightCircleFill className="-rotate-45 group-hover:rotate-0 transition-all h-6 w-6 group-hover:text-white" />
                  </div>
                  <span className="font-light text-sm md:text-md tracking-tighter">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
            <div className="w-full flex items-center justify-center md:justify-start">
              <SlidingButton href="/work" label="see work" />
            </div>
          </div>

          <div className={styles.imageContainer}>
            <motion.div className={styles.inner} style={{ scale: imageScale }}>
              <Image fill src={`${src}`} alt="image" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
