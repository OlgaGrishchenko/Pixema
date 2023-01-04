import React from "react";
import { NavLink, useLocation } from "react-router-dom";

import { FavoritesIcon } from "../../Assets/Menu/FavoritesIcon";
import { HomeIcon } from "../../Assets/Menu/HomeIcon";
import { SettingsIcon } from "../../Assets/Menu/SettingsIcon";
import { TrendsIcon } from "../../Assets/Menu/TrendsIcon";

import styles from "./Sidebar.module.css";
import classNames from 'classnames';


const Sidebar = () => {
   const { pathname } = useLocation();

   const CATEGORIES = [
      { name: "Home", icon: <HomeIcon />, link: "/" },
      { name: "Trends", icon: <TrendsIcon />, link: "" },
      { name: "Favorites", icon: <FavoritesIcon />, link: "" },
      { name: "Settings", icon: <SettingsIcon />, link: "/settings" },
   ];

   return (
      <>
      <div className={styles.container}>
         {CATEGORIES.map(({ link, name, icon }) => {
            return (
               <NavLink
                  key={link}
                  to={link}
                  className={classNames(styles.categories, {
                  [styles.activeСategories]: pathname === link,
                  })}
               >
               {icon}
               {name}
               </NavLink>
            );
         })}
      </div>
      </>
   );
};

export default Sidebar;