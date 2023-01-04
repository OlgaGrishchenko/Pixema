import React from "react";
import Button, { ButtonTypes } from "../../Button";

import { useNavigate } from 'react-router-dom';


import styles from "./Menu.module.css"

const Menu = () => {

   const isLoggedIn = true;
   const navigate = useNavigate();

   return <div className={styles.container}>

   {isLoggedIn && 
      <div className={styles.buttonsContainer}> 
         <Button
            title={"Edit profile"}
            onClick={() => {navigate('/settings');}}
            type={ButtonTypes.Secondary}
            className={styles.editProfileButton}
         />

         <Button
            title={"Log Out"}
            onClick={()=>{}}
            type={ButtonTypes.Secondary}
            className={styles.logOutButton}
         />

</div> }

   </div>
};

export default Menu;