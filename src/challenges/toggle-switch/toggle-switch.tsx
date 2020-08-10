import * as React from "react";

import styles from "./toggle-switch.module.scss";

const ToggleSwitch: React.FC<{}> = (props: {}): React.ReactElement => {
  const [checked, setChecked] = React.useState<boolean>(false);

  const onChecked = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setChecked(!checked);

  return (
    <div className={styles.container}>
      <span>Dark Mode</span>
      <input
        onChange={onChecked}
        type={"checkbox"}
        className={styles.checkBox}
      />
    </div>
  );
};

export default ToggleSwitch;
