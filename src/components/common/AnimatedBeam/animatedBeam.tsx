"use client";

import React, { forwardRef, useRef } from "react";
import { SiNextdotjs } from "react-icons/si";
import { FaWordpress } from "react-icons/fa";
import { RiOpenaiFill } from "react-icons/ri";
import { FaAws } from "react-icons/fa";
import { LiaFigma } from "react-icons/lia";
import { RiNotionFill } from "react-icons/ri";
import { TbMessageChatbotFilled } from "react-icons/tb";
import { PiGitPullRequestBold } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import Image from "next/image";

const Circle = forwardRef<
    HTMLDivElement,
    { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                "z-10 flex size-12 lg:size-20 items-center justify-center rounded-full border-2 border-[#101010] bg-[#2b2b2b] text-white p-3",
                className,
            )}
        >
            {children}
        </div>
    );
});

Circle.displayName = "Circle";

export function AnimatedBeamMultiple({
    className,
}: {
    className?: string;
}) {
    const containerRef = useRef<HTMLDivElement>(null);
    const div1Ref = useRef<HTMLDivElement>(null);
    const div2Ref = useRef<HTMLDivElement>(null);
    const div3Ref = useRef<HTMLDivElement>(null);
    const div4Ref = useRef<HTMLDivElement>(null);
    const div5Ref = useRef<HTMLDivElement>(null);
    const div6Ref = useRef<HTMLDivElement>(null);
    const div7Ref = useRef<HTMLDivElement>(null);

    return (
        <div
            className={cn(
                "relative flex h-[600px] w-full items-center justify-center overflow-hidden rounded-lg bg-background p-8",
                className,
            )}
            ref={containerRef}
        >
            <div className="flex size-full max-w-lg flex-row items-stretch justify-between gap-10">
                <div className="flex flex-col justify-center">
                    <Circle ref={div7Ref}>
                        <PiGitPullRequestBold className="h-10 w-10" />
                    </Circle>
                </div>
                <div className="flex flex-col justify-center">
                    <Circle ref={div6Ref} className="size-20">
                        <Image src={"/hbs.svg"} alt="HashBitStudio Logo" height={0} width={0} className="h-10 w-10" />
                    </Circle>
                </div>
                <div className="flex flex-col justify-center gap-6">
                    <Circle ref={div1Ref}>
                        <RiOpenaiFill className="h-10 w-10" />
                    </Circle>
                    <Circle ref={div2Ref}>
                        <FaAws className="h-10 w-10" />
                    </Circle>
                    <Circle ref={div3Ref}>
                        <LiaFigma className="h-10 w-10" />
                    </Circle>
                    <Circle ref={div4Ref}>
                        <FaGithub className="h-10 w-10" />
                    </Circle>
                    <Circle ref={div5Ref}>
                        <RiNotionFill className="h-10 w-10" />
                    </Circle>
                </div>
            </div>

            {/* AnimatedBeams */}
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div1Ref}
                toRef={div6Ref}
                duration={3}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div2Ref}
                toRef={div6Ref}
                duration={3}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div3Ref}
                toRef={div6Ref}
                duration={3}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div4Ref}
                toRef={div6Ref}
                duration={3}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div5Ref}
                toRef={div6Ref}
                duration={3}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div6Ref}
                toRef={div7Ref}
                duration={3}
            />
        </div>
    );
}
