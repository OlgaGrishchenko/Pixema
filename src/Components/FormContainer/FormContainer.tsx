import React, { FC, ReactElement } from "react";

import styles from "./FormContainer.module.css";
import classNames from "classnames";

type FormContainerProps  = {
   title: string;
   children: ReactElement;
};

const FormContainer: React.FC<FormContainerProps> = ({ title, children }) => {
   return (
      <div className={styles.container}>
         <h1 className={styles.title}>{title}</h1>
         <div className={styles.childrenContainer}>{children}</div>
      </div>
   );
};

export default FormContainer;