// components/CustomCursor.tsx
"use client";

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const CustomCursor = ({ isHovered }: { isHovered: boolean }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const cursorX = useMotionValue(0);
    const cursorY = useMotionValue(0);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', moveCursor);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
        };
    }, []);

    // Smooth transition of cursor movement
    useEffect(() => {
        cursorX.set(mousePosition.x - 40); // Offset to center the cursor
        cursorY.set(mousePosition.y - 40); // Offset to center the cursor
    }, [mousePosition, cursorX, cursorY]);

    const cursorScale = useTransform(
        [cursorX, cursorY],
        () => (isHovered ? 1.5 : 1)
    );

    return (
        <motion.div
            className="fixed top-0 left-0 z-50 pointer-events-none"
            style={{
                x: cursorX,
                y: cursorY,
                scale: cursorScale,
                width: isHovered ? 80 : 20,
                height: isHovered ? 80 : 20,
                backgroundColor: isHovered ? 'rgba(0,0,0,0.8)' : 'transparent',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontSize: '12px',
                fontWeight: 'bold',
                transition: 'background-color 0.3s ease',
            }}
        >
            {isHovered && 'DRAG'}
        </motion.div>
    );
};

export default CustomCursor;
