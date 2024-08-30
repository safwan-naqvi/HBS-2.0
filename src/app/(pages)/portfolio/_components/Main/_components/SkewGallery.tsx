"use client";
import { photos } from "@/lib/data";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import styles from "./styles.module.scss";
import { fetchPortfolios } from "@/axios/api";
import { useQuery } from "@tanstack/react-query";
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
  const { data: webProfilesData, error: webProfilesError, isLoading: webProfilesLoading } = useQuery<any>({
    queryKey: ['webPortfolios'],
    queryFn: () => fetchPortfolios('web-design-and-development'),
    staleTime: 1000 * 60 * 5,  // 5 minutes
  });
  console.log(webProfilesData)
  return (
    <>
      <section
        className="h-full max-w-screen-lg mx-auto pt-[10vh] pb-[30vh]"
        id="main-container"
        data-scroll-container
        ref={ref}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-12 place-items-center mx-auto">
          {

            webProfilesLoading ? <div className="text-white">Loading</div> : ""

          }
          {!webProfilesLoading && webProfilesData.data.length > 0 && webProfilesData.data.map((portfolio: any, index: number) => (
            <div className="flex flex-col">
              <motion.div
                key={portfolio.id}
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
                <motion.a href={`portfolio/${portfolio.attributes.slug}`} className={styles.caseStudy}>
                  <motion.img
                    className={styles.gridItemMedia}
                    src={portfolio.attributes.images.data[0].attributes.url}
                    style={{ objectFit: "cover" }}
                  />
                </motion.a>
              </motion.div>
              <div className="text-white -mt-6">
                <h3 className="text-2xl tracking-tighter font-semibold">{portfolio.attributes.title}</h3>
                <p className="text-white/70 font-light tracking-tight">{portfolio.attributes.type}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}