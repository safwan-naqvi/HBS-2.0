"use client"
import gsap from 'gsap';
import React, { useLayoutEffect, useRef, useState } from 'react'
import { motion } from "framer-motion";
import { ScrollTrigger } from "gsap/all";
import styles from "./styles.module.scss"
export const slideUp = {
    initial: {
        y: 300,
    },
    enter: {
        y: 0,
        transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: 2.5 },
    },
};


const DirectionText = () => {
    const firstText = useRef(null);
    const secondText = useRef(null);
    const slider = useRef(null);
    const [direction, setDirection] = useState(-1);
    let xPercent = 0;
    // let direction = -1;
    const animate = () => {
        if (xPercent < -100) {
            xPercent = 0;
        } else if (xPercent > 0) {
            xPercent = -100;
        }
        gsap.set(firstText.current, { xPercent: xPercent });
        gsap.set(secondText.current, { xPercent: xPercent });
        requestAnimationFrame(animate);
        xPercent += 0.01 * direction;
    };
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(slider.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                scrub: 0.25,
                start: 0,
                end: window.innerHeight,
                onUpdate: (e) => setDirection(e.direction * -1),
            },
            x: "-500px",
        });
        requestAnimationFrame(animate);
    });
    return (
        <motion.main
            id="home"
            variants={slideUp}
            initial="initial"
            animate="enter"
            className={styles.landing}
        >
            {/* <Image src="/images/background.png" alt="background" quality={95} fill /> */}
            <div className={styles.sliderContainer}>
                <div ref={slider} className={styles.slider}>
                    <p ref={firstText}>Freelance Developer -</p>
                    <p ref={secondText}>Freelance Developer -</p>
                </div>
            </div>
        </motion.main>
    )
}

export default DirectionText
