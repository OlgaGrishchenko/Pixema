import React, { useState } from "react";
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../Assets/Image/logo';
import { PathNames } from '../../Pages/Router/Router';
import Search from '../Search';
import UserName from '../UserName';

import styles from './Header.module.css';

const Header = () => {
   const [searchValue, setSearchValue] = useState("");

   return (
      <div className={styles.inner}>

         <div className={styles.logo}>
            <NavLink to={PathNames.Home} className={styles.link}><Logo /></NavLink>
         </div>

         <div className={styles.innerBlock}>
         <Search />
         <UserName username={"Olga_Grishchenko"}/>
         </div>
      </div>
   );
};

export default Header;