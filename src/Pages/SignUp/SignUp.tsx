import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

import FormContainer from "../../Components/FormContainer";
import Input from "../../Components/Input";
import Button, {ButtonTypes} from "../../Components/Button";
import { ClosedEyeIcon } from "../../Assets/Password/ClosedEyeIcon";
import { OpenEyeIcon } from "../../Assets/Password/OpenEyeIcon";
import { PasswordTypes } from "../../Constants/@types";

import styles from "./SignUp.module.css";
import { PathNames } from "../Router/Router";

const SignUp = () => {

   const [name, setName] = useState("");
   const [login, setLogin] = useState("");
   const [password, setPassword] = useState("");
   const [confirmPassword, setConfirmPassword] = useState("");

   const [type, setType] = useState(PasswordTypes.Password);
   const onEyeClick = () => {
      type === PasswordTypes.Password
      ? setType(PasswordTypes.Text)
      : setType(PasswordTypes.Password);
   };

   const [typeConfirm, setTypeConfirm] = useState(PasswordTypes.Password);
   const onEyeClickConfirm = () => {
      typeConfirm === PasswordTypes.Password
      ? setTypeConfirm(PasswordTypes.Text)
      : setTypeConfirm(PasswordTypes.Password);
   };

   const inputRef = useRef<HTMLInputElement>(null);

   useEffect(() => {
      if (inputRef.current) {
         inputRef.current.focus();
      }
   }, []);
   
   return (
         
         <FormContainer title={"Sign Up"}>
         <>
            <div className={styles.inputsContainer}>
               
               <Input
                  title={"Name"}
                  value={name}
                  onChange={(value) => setName(value)}
                  placeholder={"Your name"}
                  ref={inputRef}
               />
               
               <Input
                  title={"Email"}
                  value={login}
                  onChange={(value) => setLogin(value)}
                  placeholder={"Your email"}
               />

               <div className={styles.passwordContainer}>
                  <Input
                     title={"Password"}
                     type={type}
                     value={password}
                     onChange={(value: string) => setPassword(value)}
                     placeholder={"Your password"}
                  />
                  <div className={styles.eyeIcon} onClick={onEyeClick}>
                     {password && type !== "password" ? (
                     <ClosedEyeIcon />
                     ) : (
                     <OpenEyeIcon />)}
                  </div>
               </div>

               <div className={styles.passwordContainer}>
                  <Input
                     title={"Confirm password"}
                     type={typeConfirm}
                     value={confirmPassword}
                     onChange={(value: string) => setConfirmPassword(value)}
                     placeholder={"Confirm password"}
                  />
                  <div className={styles.eyeIcon} onClick={onEyeClickConfirm}>
                     {confirmPassword && typeConfirm !== "password" ? (
                     <ClosedEyeIcon />
                     ) : (
                     <OpenEyeIcon />)}
                  </div>
               </div>
            </div>
               
               <Button
                  className={styles.button}
                  title={"Sign Up"}
                  type={ButtonTypes.Primary}
                  onClick={()=>{}}
               />
               
               <div className={styles.signContainer}>
               {"Already have an account?"}{" "} <NavLink to={PathNames.SignIn} className={styles.link}>{"Sign In"}</NavLink>
               </div>
            </>
            </FormContainer>
   );
};

export default SignUp;