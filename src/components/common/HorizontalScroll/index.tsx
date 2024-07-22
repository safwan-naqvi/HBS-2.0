"use client";
import { cards } from "@/lib/data";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Card from "./Cards";
export default function HorizontalScroll() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-100%"]);

  return (
    <>
      <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-4">
            {cards.map((card) => {
              return <Card card={card} key={card.id} />;
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
}
