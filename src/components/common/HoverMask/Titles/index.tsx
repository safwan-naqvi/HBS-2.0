import React, { useRef } from "react";
import styles from "./style.module.scss";

type dataProp = {
  title: string;
  description: string;
  // speed: number;
  value: string;
};

interface TitlesProps {
  data: Array<dataProp>;
  setSelectedProject: any;
}

type dataItemProp = {
  title: string;
  // speed: number;
  value: string;
  i: number;
};

interface TitleProps {
  data: dataItemProp;
  setSelectedProject: any;
}

export default function index({ data, setSelectedProject }: TitlesProps) {
  return (
    <div className={styles.titles}>
      {data.map((project, i) => {
        return (
          <Title
            key={i}
            data={{ ...project, i }}
            setSelectedProject={setSelectedProject}
          />
        );
      })}
    </div>
  );
}

function Title({ data, setSelectedProject }: TitleProps) {
  const { title, value, i } = data;
  const container = useRef(null);

  return (
    <div ref={container} className={styles.title}>
      <div
        className={styles.wrapper}
        onMouseOver={() => {
          setSelectedProject(i);
        }}
        onMouseLeave={() => {
          setSelectedProject(null);
        }}
      >
        <p>{title}</p>
        <p>{value}</p>
      </div>
    </div>
  );
}
