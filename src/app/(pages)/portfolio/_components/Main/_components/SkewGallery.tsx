"use client";
import { photos } from "@/lib/data";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import styles from "./styles.module.scss";
const clamp = (value: number, min: number, max: number) =>
  value <= min ? min : value >= max ? max : value;

const fadeInAnimation = {
  initial: (index: number) => ({
    opacity: 0,
    x: index % 2 === 0 ? -200 : 200,
  }),
  animate: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.1 * index,
      ease: [0.45, 0, 0.55, 1],
    },
  }),
};

export default function SkewGallery() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <>
      <section
        className="h-full max-w-screen-lg mx-auto pt-[10vh] pb-[30vh]"
        id="main-container"
        data-scroll-container
        ref={ref}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 md:gap-4  place-items-center mx-auto">
          {photos.map((photo, index) => (
            <>
              <motion.div
                key={photo.id}
                className={styles.gridItem}
                variants={fadeInAnimation}
                initial="initial"
                whileInView={"animate"}
                viewport={{
                  once: true,
                }}
                style={{ overflow: "hidden" }}
                custom={index}
              >
                <motion.a href="/" className={styles.caseStudy}>
                  <motion.img
                    className={styles.gridItemMedia}
                    src={photo.url}
                    style={{ objectFit: "cover" }}
                  />
                </motion.a>
              </motion.div>
            </>
          ))}
        </div>
      </section>
    </>
  );
}

// <motion.div
//                 key={index}
//                 className={styles.gridItem}
//                 variants={fadeInAnimation}
//                 initial="initial"
//                 whileInView={"animate"}
//                 viewport={{
//                   once: true,
//                 }}
//                 style={{ overflow: "hidden" }}
//                 custom={index}
//               >
//                 <motion.a href="/" className={styles.caseStudy}>
//                   <motion.img
//                     whileHover={{ scale: 1.2 }}
//                     className={styles.gridItemMedia}
//                     src={photo.url}
//                     style={{ objectFit: "cover" }}
//                   />
//                 </motion.a>
//                 {/* <p>{description}</p> */}
//               </motion.div>
