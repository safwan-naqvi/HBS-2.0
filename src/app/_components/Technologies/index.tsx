import React, { useRef, useEffect } from "react";
import styles from "./style.module.scss";

import { ourFields } from "@/lib/data";
import Technologies from "./Tech";
import RoundedButton from "@/components/layout/RoundedButton";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import { AnimatedBeamMultiple } from "@/components/common/AnimatedBeam/animatedBeam";

interface HomeProps { }

const TechSection: React.FC<HomeProps> = () => {
  const path = useRef<SVGPathElement | null>(null);
  let progress = 0;
  let x = 0.5;
  let time = Math.PI / 2;
  let reqId: number | null = null;

  const setPath = (progress: number) => {
    const width = window.innerWidth * 0.7;
    if (path.current) {
      path.current.setAttributeNS(
        null,
        "d",
        `M0 250 Q${width * x} ${250 + progress}, ${width} 250`
      );
    }
  };

  useEffect(() => {
    setPath(progress);
  }, [progress]);

  const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a;

  const manageMouseEnter = () => {
    if (reqId) {
      cancelAnimationFrame(reqId);
      resetAnimation();
    }
  };

  const manageMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { movementY, clientX } = e;
    const pathBound = path.current?.getBoundingClientRect();
    if (pathBound) {
      x = (clientX - pathBound.left) / pathBound.width;
      progress += movementY;
      setPath(progress);
    }
  };

  const manageMouseLeave = () => {
    animateOut();
  };

  const animateOut = () => {
    const newProgress = progress * Math.sin(time);
    progress = lerp(progress, 0, 0.025);
    time += 0.2;
    setPath(newProgress);
    if (Math.abs(progress) > 0.75) {
      reqId = requestAnimationFrame(animateOut);
    } else {
      resetAnimation();
    }
  };

  const resetAnimation = () => {
    time = Math.PI / 2;
    progress = 0;
  };

  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <div className={styles.line}>
          <div
            onMouseEnter={() => {
              manageMouseEnter();
            }}
            onMouseMove={(e) => {
              manageMouseMove(e);
            }}
            onMouseLeave={() => {
              manageMouseLeave();
            }}
            className={styles.box}
          ></div>
          <svg>
            <path ref={path}></path>
          </svg>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-8">
          <div className="col-span-1">
            {/* <div className={styles.description}> */}
            <div className="w-full">
              <p className="text-md text-[#ad2550] font-semibold tracking-tighter">Smart Development</p>
              <p className="text-xl font-light tracking-tight pt-4">
                Combining unique design and rich technology, we build digital
                products exactly as they were designed, without shortcuts or
                simplifications.
              </p>
            </div>
            <div className="w-full mt-8">
              <p className="text-md text-[#ad2550] font-semibold tracking-tighter">Areas</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {ourFields.map((field, index) => {
                  return (
                    <RoundedButton key={index}>
                      <p>{field}</p>
                    </RoundedButton>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <AnimatedBeamMultiple />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechSection;
