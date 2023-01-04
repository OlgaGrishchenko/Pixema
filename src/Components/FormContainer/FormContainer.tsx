import React, { FC, ReactElement } from "react";
import { NavLink } from "react-router-dom";

import styles from "./FormContainer.module.css";
import classNames from "classnames";
import Logo from "../../Assets/Image/logo";
import Footer from "../Footer";
import { PathNames } from "../../Pages/Router/Router";

type FormContainerProps  = {
   title: string;
   children: ReactElement;
};

const FormContainer: React.FC<FormContainerProps> = ({ title, children }) => {
   return (
      <div className={styles.container}>

         <div className={styles.formContainer}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.childrenContainer}>{children}</div>
         </div>

         <Footer />
      </div>
   );
};

export default FormContainer;