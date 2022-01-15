import React, { useState } from "react";
import { ServerStyleSheet } from "styled-components";
import * as styles from "./Accordion.module.css";

const Accordion = ({ title, children }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className={styles.accordionWrapper}>
      <div
        className={[styles.accordionTitle, isOpen ? styles.open : " "].join(
          " "
        )}
        onClick={() => setOpen(!isOpen)}
      >
        {title}
      </div>
      <div
        className={[
          styles.accordionItem,
          !isOpen ? styles.collapsed : " ",
        ].join(" ")}
      >
        <div className={styles.accordionContent}>{children}</div>
      </div>
    </div>
  );
};

export default Accordion;