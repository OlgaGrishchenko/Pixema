import React, { FC, useEffect, useState, ReactElement} from "react";

import { useLocation, useNavigate } from 'react-router-dom';


import Button, { ButtonTypes } from '../../Components/Button';
import Input from '../../Components/Input';
import Switch from '../../Components/Switch';
import Sidebar from "../../Components/Sidebar";

import { Theme } from "../../Constants/@types";
import { useThemeContext } from "../../Context/Theme";

import styles from './SettingsPage.module.css';
import classNames from 'classnames';


const SettingsPage = () => {

   const navigate = useNavigate();
   const { theme } = useThemeContext();
   const { state } = useLocation(); 

   const [name, setName] = useState("Olga Grishchenko");
   const [email, setEmail] = useState("a.lapitsky@gmail.com");
   const [password, setPassword] = useState("");
   const [newPassword, setNewPassword] = useState("");
   const [confirmPassword, setConfirmPassword] = useState("");
   

   return (
      <>
      <div className={styles.container}>
         <Sidebar />

         <div className={styles.settings}>
            <div className={styles.settingsBlock}>
               <h2 className={classNames(styles.title, {[styles.lightTitle] : theme === Theme.Light})}>Profile</h2>
               <div className={classNames(styles.inner, {[styles.lightInner] : theme === Theme.Light})}>
                  <div className={styles.item}>
                     <Input
                        title={"Name"}
                        value={name}
                        onChange={(value:string) => setName(value)}
                        placeholder={"Your name"}
                        className={styles.input}
                     />
                  </div>

                  <div className={styles.item}>
                  {/*<Input
                        title={"Email"}
                        value={email}
                        onChange={(value:string) => setEmail(value)}
                        placeholder={"Your email"}
                        className={styles.input}
   />*/}
      <div className={styles.email}>
         <div>Email</div>
         <div className={styles.inputEmail}>{state?.email || ""}</div>
      </div>
                  </div>
               </div>
            </div>
            
            <div className={styles.settingsBlock}>
               <h2 className={styles.title}>Password</h2>
               <div className={classNames(styles.inner, {[styles.lightInner] : theme === Theme.Light})}>
                  <div className={styles.item}>
                  <Input
                  title={"Password"}
                  value={password}
                  onChange={(value:string) => setPassword(value)}
                  placeholder={"Your password"}
                  className={styles.input}
                  />
                  </div>

                  <div className={styles.item}>

                  <Input
                  title={"New password"}
                  value={newPassword}
                  onChange={(value:string) => setNewPassword(value)}
                  placeholder={"Your password"}
                  className={styles.input}
                  />

                  <Input
                  title={"Confirm password"}
                  value={confirmPassword}
                  onChange={(value:string) => setConfirmPassword(value)}
                  placeholder={"Confirm password"}
                  />

                  </div>
               </div>
            </div>
            
            <div className={styles.settingsBlock}>
               <h2 className={styles.title}>Color mode</h2>
               <div className={classNames(styles.inner, {[styles.lightInner] : theme === Theme.Light})}>
                  <div className={styles.item}>
                     <div className={classNames(styles.subtitle, {[styles.lightSubtitle] : theme === Theme.Light})}>Dark</div>
                     <span className={styles.spanThema}>Use dark thema</span>
                  </div>

                  <Switch />
               </div>
            </div>

            <div className={styles.buttonsBlock}>
                  <Button
                  title={'Cancel'}
                  type={ButtonTypes.Secondary}
                  onClick={() => {navigate('/');}}
                  />

                  <Button
                  className={styles.button}
                  title={"Save"}
                  type={ButtonTypes.Primary}
                  onClick={()=>{}}
                  />
                  
               </div>

         </div>
      </div>
      </>
   )
};

export default SettingsPage;