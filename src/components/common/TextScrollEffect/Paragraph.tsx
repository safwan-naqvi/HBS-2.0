"use client";
import styles from "./styles.module.scss";
import { useEffect, useRef } from "react";
import { useScroll, motion } from "framer-motion";
export default function Paragraph({ value }: { value: string }) {
  const element = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start end", "start start"],
  });

  return (
    <motion.p
      className={styles.paragraph}
      ref={element}
      style={{ opacity: scrollYProgress }}
    >
      {value}
    </motion.p>
  );
}
