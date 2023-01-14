import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import Logo from '../../Assets/Image/logo';
import LogoLightTheme from "../../Assets/Image/logoLightTheme";
import { PathNames } from '../../Pages/Router/Router';
import Search from '../Search';
import UserName from '../UserName';
import { useThemeContext } from "../../Context/Theme";
import { Theme } from "../../Constants/@types";

import styles from './Header.module.css';

const Header = () => {
   const [searchValue, setSearchValue] = useState("");
   const {theme} = useThemeContext()

   return (
      <div className={styles.inner}>

         <div className={styles.logo}>
            <NavLink to={PathNames.Home} className={styles.link}>{theme === Theme.Light ? <LogoLightTheme /> : <Logo />}</NavLink>
         </div>

         <div className={styles.innerBlock}>
         <Search />
         <UserName username={"Username"}/>
         </div>
      </div>
   );
};

export default Header;