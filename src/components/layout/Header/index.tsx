"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./style.module.scss";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Image from "next/image";
import NavButton from "./Button";
import { AnimatePresence, motion } from "framer-motion";
import Nav from "./Nav";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";
import useDetectScroll from '@smakss/react-scroll-direction'
export default function Header() {
  const header = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  /*---- Media Queries ----*/
  const isSmallDevice = useMediaQuery({
    query: "(max-width : 768px)",
  });
  const { scrollDir } = useDetectScroll();
  const variants = {
    open: {
      top: isSmallDevice ? "-35px" : "-25px",
      right: "-25px",
      width: isSmallDevice ? "100vw" : 480,
      height: isSmallDevice ? "100vh" : 650,
      transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
    },
    closed: {
      top: "0px",
      right: "0px",
      width: 100,
      height: 40,
      transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
    },
  };

  /*---- --------- ----*/

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  return (
    <>
      <div ref={header} className={clsx(styles.header, scrollDir === "down" ? "-translate-y-full" : "translate-y-0")} >
        <Link href={"/"} className="cursor-pointer">
          <Image src={"/assets/Logo.svg"} alt="Logo" height={0} width={0} style={{ width: "60px", height: "60px" }} />
        </Link>
        <div className={styles.headerNav}>
          <motion.div
            className={styles.menu}
            variants={variants}
            animate={isActive ? "open" : "closed"}
            initial="closed"
          >
            <AnimatePresence>{isActive && <Nav />}</AnimatePresence>
          </motion.div>
          <NavButton isActive={isActive} setIsActive={setIsActive} />
        </div>
      </div>
    </>
  );
}
