"use client";
import { cards, cardsIndustries } from "@/lib/data";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Card from "./Cards";
import MinimalCard from "./MinimalCard/minimal-card";

interface HorizontalScrollProps {
  classNames?: string;
  imageShow?: boolean;
}

export default function HorizontalScroll({ classNames, imageShow = false }: HorizontalScrollProps) {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-100%"]);

  return (
    <>
      <section ref={targetRef} className={cn("relative h-[300vh]", classNames)}>
        <div className="sticky top-20 flex items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            {imageShow ? cards.map((card) => {
              return <Card card={card} key={card.id} />;
            }) : cardsIndustries.map((card) => {
              return <MinimalCard card={card} key={card.id} />;
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
}
