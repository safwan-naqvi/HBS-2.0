"use client";

import React, { useLayoutEffect } from "react";
import { useEffect, useRef } from "react";
import styles from "./style.module.scss";
import gsap from "gsap";

export default function RoundedButton({
  children,
  backgroundColor = "#455CE9",
  ...attributes
}: {
  children: React.ReactNode;
  backgroundColor?: string;
  className?: any;
  onClick?: React.MouseEventHandler<HTMLElement>;
}) {
  const circle = useRef(null);
  const magnetic = useRef<HTMLButtonElement>(null);
  let timeline = useRef<any>(null);
  let timeoutId: any = null;
  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      .to(
        circle.current,
        { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" },
        "enter"
      )
      .to(
        circle.current,
        { top: "-150%", width: "125%", duration: 0.25 },
        "exit"
      );
  }, []);

  useLayoutEffect(() => {
    const xTo = gsap.quickTo(magnetic.current, "x", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
    const yTo = gsap.quickTo(magnetic.current, "y", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });

    magnetic.current!.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } =
        magnetic.current!.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      xTo(x * 0.25);
      yTo(y * 0.25);
    });
    magnetic.current!.addEventListener("mouseleave", (e) => {
      xTo(0);
      yTo(0);
    });
  }, []);

  const manageMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    timeline.current.tweenFromTo("enter", "exit");
  };

  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      timeline.current.play();
    }, 300);
  };
  return (
    <button
      ref={magnetic}
      className={styles.roundedButton}
      style={{ overflow: "hidden" }}
      onMouseEnter={() => {
        manageMouseEnter();
      }}
      onMouseLeave={() => {
        manageMouseLeave();
      }}
      {...attributes}
      type="submit"
    >
      {children}
      <div
        ref={circle}
        style={{ backgroundColor }}
        className={styles.circle}
      ></div>
    </button>
  );
}
