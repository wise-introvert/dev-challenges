import * as React from "react";

import styles from "./dualtone-card-component.module.scss";
import caret from "./assets/svg/caret.svg";
import { User } from "./dualtone-card";

type Props = {
  user: User;
};
const DualtoneCardComponent: React.FC<Props> = (
  props: Props
): React.ReactElement => {
  return (
    <div className={styles.container}>
      <img src={props.user.image} />
      <div className={styles.footer}>
        <div className={styles.footerContent}>
          <span className={styles.name}>{props.user.name}</span>
          <span className={styles.designation}>{props.user.designation}</span>
        </div>
        <div className={styles.footerIcon} />
        {false && (
          <>
            <div className={styles.footerContent}>
              <span className={styles.name}>{props.user.name}</span>
              <span className={styles.designation}>
                {props.user.designation}
              </span>
            </div>
            <img src={caret} className={styles.caret} />
          </>
        )}
      </div>
    </div>
  );
};

export default DualtoneCardComponent;
