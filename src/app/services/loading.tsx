"use client"
import { Progress } from '@/components/ui/progress';
import React, { useEffect, useState } from 'react';


const Loading: React.FC = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleProgress = () => {
            const totalTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
            const interval = 10; // Check every 10ms

            const intervalId = setInterval(() => {
                const currentTime = Date.now() - window.performance.timing.navigationStart;
                const percentage = Math.min((currentTime / totalTime) * 100, 100);

                setProgress(percentage);

                if (percentage >= 100) {
                    clearInterval(intervalId);
                }
            }, interval);

            return () => clearInterval(intervalId);
        };

        // Wait for the load event to fully complete
        if (document.readyState === 'complete') {
            handleProgress();
        } else {
            window.addEventListener('load', handleProgress);
            return () => window.removeEventListener('load', handleProgress);
        }
    }, []);

    return (
        <div className="flex items-center justify-center h-screen bg-primary">
            <div className="w-3/4 max-w-md">
                <CustomProgressBar value={progress} />
            </div>
        </div>
    );
};

interface CustomProgressBarProps {
    value: number;
}

const CustomProgressBar: React.FC<CustomProgressBarProps> = ({ value }) => {
    return (
        <Progress
            value={value}
            className="h-1 bg-gray-200 rounded-full overflow-hidden"
        />
    );
};

export default Loading;
