import React, {FC, useState} from "react";
import { ArrowDownIcon } from "../../Assets/UserName/ArrowDownIcon";
import { ArrowRightIcon } from "../../Assets/UserName/ArrowRightIcon";
import Button, { ButtonTypes } from "../Button";

import styles from "./UserName.module.css"

type UserNameProps = {
   username: string;
};

const UserName: FC<UserNameProps> = ({ username }) => {

   const [isOpened, setOpened] = useState(false);

   const onArrowClick = () => {
      setOpened(!isOpened);
   };

   return <div className={styles.container}>
      <div className={styles.letter}>{ username[0] }</div>
      { username }
      
      <Button
         title={isOpened ? <ArrowRightIcon /> : <ArrowDownIcon />}
         onClick={onArrowClick}
         type={ButtonTypes.Primary}
         className={styles.arrowButton}
      />
      </div>
};

export default UserName;