"use client";
import Card from "@/components/common/Card";
import styles from "./style.module.scss";
import { projects } from "@/lib/data";

import { useScroll } from "framer-motion";
import { useRef } from "react";
import { Separator } from "@/components/ui/separator";

export default function Showcase() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div className="w-full mx-auto mt-48 lg:mt-32">
      <div className="flex items-center">
        <h2 className="text-white text-center px-10 md:px-40 text-3xl md:text-5xl font-semibold tracking-tight w-full">Our Services</h2>
      </div>

      <div ref={container} className={styles.main}>
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <Card
              key={`p_${i}`}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </div>
  );
}
