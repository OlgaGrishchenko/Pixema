import React, {FC, useState} from "react";
import { ArrowDownIcon } from "../../Assets/UserName/ArrowDownIcon";
import { ArrowRightIcon } from "../../Assets/UserName/ArrowRightIcon";
import Button, { ButtonTypes } from "../Button";
import Menu from "./Menu";
import { useThemeContext } from "../../Context/Theme";
import { Theme } from "../../Constants/@types";

import styles from "./UserName.module.css";
import classNames from "classnames";

type UserNameProps = {
   username: string;
};

const UserName: FC<UserNameProps> = ({ username }) => {

   const {theme} = useThemeContext();
   const [isOpened, setOpened] = useState(false);

   const isLoggedIn = true;

   const onArrowClick = () => {
      setOpened(!isOpened);
   };

   return <div className={classNames(styles.container, {[styles.lightContainer] : theme === Theme.Light})}>
      <div className={classNames(styles.letter, {[styles.lightLetter] : theme === Theme.Light})} >{ username[0] }</div>
      { username }
      
      <Button
         title={isOpened ? <ArrowRightIcon /> : <ArrowDownIcon />}
         onClick={onArrowClick}
         type={ButtonTypes.Primary}
         className={styles.arrowButton}
      />

      {isOpened && <Menu />}
      </div>
      
};

export default UserName;