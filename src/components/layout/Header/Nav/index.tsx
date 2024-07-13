import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { FooterLinks, links } from "./data";
import { perspective } from "./anim";
import Link from "next/link";

export default function Nav() {
  return (
    <div className={styles.nav}>
      <div className={styles.body}>
        {links.map((link, i) => {
          const { title, href } = link;
          return (
            <div key={`b_${i}`} className={styles.linkContainer}>
              <motion.div
                custom={i}
                variants={perspective}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <Link href={href} className={styles.link}>
                  {title}
                </Link>
              </motion.div>
            </div>
          );
        })}
      </div>
      <div className={styles.footer}>
        {FooterLinks.map((link, i) => {
          const { title, href } = link;
          return (
            <motion.div
              key={`f_${i}`}
              custom={i}
              variants={perspective}
              initial="initial"
              animate="enter"
              exit="exit"
              className={styles.link}
            >
              <Link href={href}>{title}</Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
