import * as React from "react";
import { RouteComponentProps } from "react-router-dom";

import styles from "./email-signup-form.module.scss";
import checkIcon from "./assets/svg/check.svg";
import warningIcon from "./assets/svg/alert-triangle.svg";

type Props = RouteComponentProps<{}>;
const EmailSignupForm: React.FC<Props> = (props: Props): React.ReactElement => {
  const [email, setEmail] = React.useState<string>("");
  const [error, setError] = React.useState<boolean>(false);
  const [success, setSuccess] = React.useState<boolean>(false);

  const isEmailValid: Function = (email: string): boolean => {
    return /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g.test(
      email
    );
  };

  const onEmailInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    error && setError(false);
    setEmail(e.target.value);
  };

  const onSubmit = (
    e: React.MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>
  ): void => {
    e.preventDefault();
    if (!isEmailValid(email)) {
      setError(true);
    } else {
      setSuccess(true);
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <h1>Sign up for the latest updates</h1>
        {success ? (
          <div className={styles.successAlert}>
            <img src={checkIcon} className={styles.checkIcon} />
            <div className={styles.successContentContainer}>
              <h4>Yay! Thank you</h4>
              <span>We've sent you a confirmation link to your inbox.</span>
            </div>
          </div>
        ) : (
          <form onSubmit={onSubmit}>
            <div className={styles.inputContainer}>
              <label htmlFor={"email"}>EMAIL ADDRESS</label>
              <span className={styles.inputRow}>
                <input
                  type={"email"}
                  autoComplete={"off"}
                  autoCorrect={"off"}
                  onChange={onEmailInput}
                  name={"email"}
                />
                <button onClick={onSubmit} />
              </span>
            </div>
          </form>
        )}
        {error && (
          <div className={styles.errorAlert}>
            <img src={warningIcon} className={styles.warningIcon} />
            <div className={styles.errorContentContainer}>
              <h4>Please use a valid email</h4>
              <span>Like: person@inbox.com</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmailSignupForm;
