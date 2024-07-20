'use client'
import Image from "next/image";
import styles from "./styles.module.scss";
import { useRef, useLayoutEffect, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { slideUp } from "./animation";
import { motion } from "framer-motion";
import clsx from "clsx";
import Link from "next/link";

const LetsConnect = () => {
    const firstText = useRef(null);
    const secondText = useRef(null);
    const slider = useRef(null);
    let xPercent = 0;
    let direction = -1;

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(slider.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                scrub: 0.02,
                start: 'top top',
                end: '+=500',
                onUpdate: (e) => (direction = e.direction * -1),
            },
            x: "-500px",
        });
        requestAnimationFrame(animate);
    }, []);
    const animate = () => {
        if (xPercent < -100) {
            xPercent = 0;
        } else if (xPercent > 0) {
            xPercent = -100;
        }
        gsap.set(firstText.current, { xPercent: xPercent });
        gsap.set(secondText.current, { xPercent: xPercent });
        requestAnimationFrame(animate);
        xPercent += 0.03 * direction;
    };

    return (

        <motion.section
            variants={slideUp}
            initial="initial"
            animate="enter"
            className={clsx(styles.landing, 'flex items-center justify-center py-40 px-20 w-full bg-gradient-to-bl from-[#3085df] via-[#0450a2] to-[#0c6acf] text-white')}

        >
            <div className={styles.sliderContainer}>
                <Link href={"/contact"} ref={slider} className={styles.slider}>
                    <p ref={firstText}>Let's Work Together -</p>
                    <p ref={secondText}>Let's Work Together -</p>
                </Link>

            </div>

        </motion.section>
    )
}

export default LetsConnect
