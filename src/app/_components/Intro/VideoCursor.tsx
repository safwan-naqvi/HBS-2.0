import React, { useEffect } from 'react';
import { motion, useAnimation, useMotionValue } from 'framer-motion';
import styles from "./styles.module.scss"
interface VideoCursorProps {
    isVisible: boolean;
    isPlaying: boolean;
}

const VideoCursor: React.FC<VideoCursorProps> = ({ isVisible, isPlaying }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const controls = useAnimation();
    const rotationControls = useAnimation();
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [mouseX, mouseY]);

    useEffect(() => {
        if (isVisible) {
            controls.start({
                opacity: 1,
                scale: 1,
                transition: { duration: 0.5 },
            });
            rotationControls.start({
                rotate: [0, 360],
                transition: {
                    repeat: Infinity,
                    duration: 5,
                    ease: "linear"
                }
            });
        } else {
            controls.start({
                scale: 0,
                transition: { duration: 0 },
            });
            rotationControls.stop();
        }
    }, [isVisible, controls]);

    return (
        <motion.div
            className={styles.customCursor}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                pointerEvents: 'none',
                opacity: isVisible ? 1 : 0,
                translateX: mouseX,
                translateY: mouseY,

            }}
            transition={{ type: 'spring', stiffness: 100 }}
            animate={controls}
        >
            <svg
                width="100"
                height="100"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle cx="50" cy="50" r="40" fill="transparent" />
                {isPlaying ? (
                    <>
                        <rect x="40" y="35" width="10" height="30" fill="white" />
                        <rect x="55" y="35" width="10" height="30" fill="white" />
                    </>
                ) : (
                    <polygon points="45,35 65,50 45,65" fill="white" />
                )}
                <motion.g animate={rotationControls}>
                    <path
                        id="topTextPath"
                        d="M 50, 10
                        a 40,40 0 0,1 0,80"
                        fill="transparent"
                    />
                    <path
                        id="bottomTextPath"
                        d="M 50, 90
                        a 40,40 0 0,1 0,-80"
                        fill="transparent"
                    />
                    <text fontSize="14" fill="white">
                        <textPath href="#topTextPath" startOffset="50%" textAnchor="middle">
                            Play Now
                        </textPath>
                    </text>
                    <text fontSize="14" fill="white">
                        <textPath href="#bottomTextPath" startOffset="50%" textAnchor="middle">
                            Introduction
                        </textPath>
                    </text>
                </motion.g>
            </svg>
        </motion.div >
    );
};

export default VideoCursor;
