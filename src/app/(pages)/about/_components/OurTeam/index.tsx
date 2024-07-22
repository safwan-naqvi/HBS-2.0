"use client";
import React, { useRef } from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import { TeamType } from "@/utils/types";
import { motion, useAnimation } from "framer-motion";
import clsx from "clsx";
import { BsGithub } from "react-icons/bs";
const Team = [
  {
    id: 1,
    link: "/",
    url: "/assets/team/safwan.webp",
    title: "Syed Safwan Abbas",
    alt: "Full Stack Web Developer",
  },
  {
    id: 2,
    link: "/",
    url: "/assets/team/haris.webp",
    title: "Haris Khan",
    alt: "Graphics Designer",
  },
  {
    id: 3,
    link: "/",
    url: "/assets/team/raza.webp",
    title: "Syed Meesum Raza",
    alt: "Developer",
  },
];

export default function OurTeam() {
  return (
    <section className="overflow-hidden h-full w-full bg-black flex flex-col items-center justify-center py-20">
      <motion.h2
        className="text-white text-5xl font-[500] tracking-tighter"
        initial={{
          y: -150,
          opacity: 0.6,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
      >
        Our Dedicated Team
      </motion.h2>
      <p className="text-gray-300 tracking-wide font-[300] capitalize mt-1">
        Meet our minds behind HashBitStudio
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-around gap-2 max-w-7xl mt-8">
        {Team.map((team) => (
          <Card
            key={team.id}
            link={team.link}
            url={team.url}
            alt={team.alt}
            title={team.title}
          />
        ))}
      </div>
    </section>
  );
}

const Card = ({ link, url, title, alt }: TeamType) => {
  const namePlateRef = useRef<HTMLDivElement>(null);
  const namePlateAnimation = useAnimation();
  return (
    <>
      <motion.div
        id="card"
        className={styles.card}
        onTapStart={() => namePlateAnimation.start("visible")}
        onTapCancel={() => namePlateAnimation.start("hidden")}
        onHoverStart={() => namePlateAnimation.start("visible")}
        onHoverEnd={() => namePlateAnimation.start("hidden")}
      >
        <Image
          src={url}
          alt={alt}
          height={400}
          width={280}
          quality={95}
          style={{ objectFit: "cover" }}
        />
        <motion.div
          className={clsx(
            "relative p-2 min-h-[100px] w-full flex flex-col items-center justify-center bg-[#212121] bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40",
            styles.namePlate
          )}
          ref={namePlateRef}
          animate={namePlateAnimation}
          initial={{ y: 100 }}
          variants={{
            visible: { y: -100 },
            hidden: { y: 100 },
          }}
          transition={{ ease: [0.76, 0, 0.24, 1] }}
        >
          <p className="w-full text-white text-left tracking-tight text-xl font-bold">
            {title}
          </p>
          <span className="w-full text-left text-white font-[200] text-sm capitalize tracking-tight">
            {alt}
          </span>
          <div className="absolute right-0 top-0 z-20 flex h-full items-center p-2">
            <motion.div
              animate={namePlateAnimation}
              initial={{ x: 60 }}
              variants={{
                visible: { x: 0 },
                hidden: { x: 60 },
              }}
              transition={{ delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <BsGithub className="h-6 w-6 text-white" />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};
