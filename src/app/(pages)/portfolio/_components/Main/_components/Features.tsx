"use client";
import { stylesWithCssVar } from "@/utils/motion";
import clsx from "clsx";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

export const Features = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const isMobile = useMediaQuery({ query: "(max-width: 450px)" });

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.9, 1], [0.8, 0.8, 1]);
  const x = useTransform(
    scrollYProgress,
    [0.3, 1],
    [isMobile ? "0%" : "50%", "0%"]
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 0.3],
    [0, 1, 1, 0]
  );

  const text1Opacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 0.3],
    [0, 1, 1, 0]
  );
  const text1Y = useTransform(
    scrollYProgress,
    [0.1, 0.2, 0.3],
    ["30px", "0px", "-30px"]
  );

  const text2Opacity = useTransform(
    scrollYProgress,
    [0.3, 0.4, 0.5, 0.6, 0.7],
    [0, 1, 1, 1, 0]
  );
  const text2Y = useTransform(
    scrollYProgress,
    [0.5, 0.6, 0.7],
    ["30px", "0px", "-30px"]
  );

  const text3Opacity = useTransform(
    scrollYProgress,
    [0.7, 0.8, 0.9, 1],
    [0, 1, 1, 1]
  );

  const text3Opac = useTransform(
    scrollYProgress,
    [0.7, 0.8, 0.9, 1],
    [0, 1, 1, 0]
  );

  const text3Y = useTransform(
    scrollYProgress,
    [0.7, 0.8, 0.9],
    ["30px", "0px", "-30px"]
  );

  return (
    <section
      ref={targetRef}
      className="flex h-[500vh] flex-col items-center justify-start"
    >
      <div className="sticky top-[16.7vh] h-[66.8vh] px-2 md:px-16 text-2xl leading-[1] text-white [&_p]:w-[45rem] [&_p]:max-w-[90%]">
        <motion.div style={{ x, scale }} className="relative h-full">
          <motion.figure style={{ opacity }} className="h-full w-full">
            <img
              src="https://res.cloudinary.com/dr9ec0vsv/image/upload/v1706879942/logo_design_tlpspg.jpg"
              className="h-full w-auto object-cover"
              alt="Logo Designing"
            />
          </motion.figure>
          <motion.figure style={{ opacity: text2Opacity }}>
            <img
              src="https://res.cloudinary.com/dr9ec0vsv/image/upload/v1706879995/ui_wnnrsb.jpg"
              className="absolute inset-0 h-full w-auto object-cover"
              alt="UI UX Design"
            />
          </motion.figure>
          <motion.figure style={{ opacity: text3Opacity }}>
            <img
              src="https://res.cloudinary.com/dr9ec0vsv/image/upload/v1706879940/game_desiging_bqojdl.jpg"
              className="absolute inset-0 h-full w-auto object-cover"
              alt="Game Design"
            />
          </motion.figure>
        </motion.div>
        <motion.p
          style={stylesWithCssVar({
            opacity: text1Opacity,
            "--y": text1Y,
          })}
          className={clsx(
            "!max-w-[400px] !w-[80%] md:!w-full md:text-left text-center translate-y-0 md:translate-y-centered-offset absolute top-0 md:top-1/2 left-[40px] md:left-[80px] lg:left-0 text-secondaryP text-xl md:text-2xl font-[600] tracking-tight",
            isMobile && "bg-black/70 rounded-md p-2"
          )}
        >
          Logo Designing and Branding
          <br />
          <span className="text-white font-[200] !text-base md:!text-lg leading-[1rem]">
            We turn concepts into iconic symbols, crafting logos that speak
            volumes. Elevate your brand essence with our Branding Service
          </span>
        </motion.p>
        <motion.p
          style={stylesWithCssVar({
            opacity: text2Opacity,
            "--y": text2Y,
          })}
          className={clsx(
            "!max-w-[400px] !w-[80%] lg:!w-full lg:text-left text-center translate-y-0 lg:translate-y-centered-offset absolute top-0 lg:top-1/2 left-[40px] lg:left-0 text-[#e0b43a] text-xl md:text-2xl font-[600] tracking-tight",
            isMobile && "bg-black/70 rounded-md p-2"
          )}
        >
          UI/UX Design for Web and Mobile
          <br />
          <span className="text-white font-[200] !text-base md:!text-lg">
            Seamless interactions and stunning aesthetics with
            HashBitStudio&apos;s UI/UX Design by creating interfaces that blend
            functionality and beauty for an unparalleled user experience.
          </span>
        </motion.p>
        <motion.p
          style={stylesWithCssVar({
            opacity: text3Opac,
            "--y": text3Y,
          })}
          className={clsx(
            "!max-w-[400px] !w-[80%] md:!w-full md:text-left text-center translate-y-0 md:translate-y-centered-offset absolute top-0 md:top-1/2 left-[40px] md:left-[80px] lg:left-0 text-[#27a03b] text-xl md:text-2xl font-[600] tracking-tight",
            isMobile && "bg-black/70 rounded-md p-2"
          )}
        >
          3D Elements and Character Designing
          <br />
          <span className="text-white font-[200] !text-base md:!text-lg">
            Realm of creativity with HashBitStudio&apos;s 3D Elements and Character
            Designing. Where imagination meets form, we sculpt digital
            dimensions and breathe life into characters, turning ideas into
            visual masterpieces.
          </span>
        </motion.p>
      </div>
    </section>
  );
};
