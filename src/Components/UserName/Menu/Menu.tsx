import React from "react";
import Button, { ButtonTypes } from "../../Button";


import styles from "./Menu.module.css"

const Menu = () => {
   return <div className={styles.container}>

      <Button
      title={"Edit profile"}
      onClick={()=>{}}
      type={ButtonTypes.Secondary}
      className={styles.editProfileButton}
         />

      <Button
      title={"Log Out"}
      onClick={()=>{}}
      type={ButtonTypes.Secondary}
      className={styles.logOutButton}
      />

   </div>
};

export default Menu;