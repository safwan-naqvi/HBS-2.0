"use client";
import React, { useRef, useState } from 'react';
import VideoCursor from './VideoCursor';
import styles from "./styles.module.scss";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

const Introduction: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isPlaying, setIsPlaying] = useState(true);
    const containerRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const width = useTransform(scrollYProgress, [0, 0.4], ['40vw', '80vw']);
    const height = useTransform(scrollYProgress, [0, 0.4], ['auto', 'auto']);

    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    const handleVideoClick = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play();
                setIsPlaying(true);
            } else {
                videoRef.current.pause();
                setIsPlaying(false);
            }
        }
    };

    return (
        <div className={`${styles.container} ${!isMobile ? 'h-[250vh]' : 'h-full'}`} ref={containerRef}>
            {!isMobile && <VideoCursor isVisible={isHovered} isPlaying={isPlaying} />}
            <motion.video
                ref={videoRef}
                style={{ width: isMobile ? '90vw' : width, height }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={`${styles.stickyVideo} ${isHovered && !isMobile ? styles.hideCursor : ''} sticky top-5`}
                controls={isMobile}
                autoPlay={!isMobile}
                muted={!isMobile}
                loop={!isMobile}
                playsInline
                poster="./assets/intro_poster.png"
                onClick={handleVideoClick}
            >
                <source src="/videos/intro.webm" type="video/webm" />
                Your browser does not support the video tag.
            </motion.video>

        </div>
    );
};

export default Introduction;
