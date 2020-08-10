import * as React from "react";
import DualtoneCardComponent from "./dualtone-card.component";

import imageOne from "./assets/images/image-1.jpg";
import imageTwo from "./assets/images/image-2.jpg";
import imageThree from "./assets/images/image-3.jpg";
import styles from "./dualtone-card.module.scss";

export type User = {
  name: string;
  designation: string;
  image: any;
};

const users: User[] = [
  {
    name: "Maria Godoy",
    designation: "Founder",
    image: imageOne
  },
  {
    name: "Tiago Monterio",
    designation: "CCO",
    image: imageTwo
  },
  {
    name: "Tiago Monterio",
    designation: "CTO",
    image: imageThree
  }
];
const DualtoneCard: React.FC<{}> = (props: {}): React.ReactElement => {
  return (
    <div className={styles.root}>
      <h1>Meet the team</h1>
      <div className={styles.container}>
        {users.map((user: User) => (
          <DualtoneCardComponent key={user.designation} user={user} />
        ))}
      </div>
    </div>
  );
};

export default DualtoneCard;
