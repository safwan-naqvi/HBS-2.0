"use client";
import styles from "./style.module.scss";
import { useState } from "react";
import Titles from "./Titles";
import Descriptions from "./Descriptions";
import clsx from "clsx";
const data = [
  {
    title: "Email",
    value: "connect@hashbitstudio.com",
    description: "Always at your service.",
    // speed: 0.5,
  },
  {
    title: "Phone",
    value: "+92 334 5606564",
    description: "Only Whatsapp.",
    // speed: 0.8,
  },
];

export default function HoverMask() {
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <div className={styles.container}>
      <Titles data={data} setSelectedProject={setSelectedProject} />
      <Descriptions data={data} selectedProject={selectedProject} />
    </div>
  );
}
