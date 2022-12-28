import React, { useState, useRef, useEffect } from "react";

import FormContainer from "../../Components/FormContainer";
import Input from "../../Components/Input";
import Button, {ButtonTypes} from "../../Components/Button";

import styles from "./SignIn.module.css";
import Logo from "../../Assets/Image/logo";
import Footer from "../../Components/Footer";

const SignIn = () => {

   const [login, setLogin] = useState('')
   const [password, setPassword] = useState('')

   const inputRef = useRef<HTMLInputElement>(null);

   useEffect(() => {
      if (inputRef.current) {
         inputRef.current.focus();
      }
   }, []);
   
   return (
         <FormContainer title={"Sign In"}>
            <>
            <div className={styles.inputsContainer}>
               <Input
                  title={"Email"}
                  value={login}
                  onChange={(value) => setLogin(value)}
                  placeholder={"Your email"}
                  ref={inputRef}
               />

               <Input
                  title={"Password"}
                  value={password}
                  onChange={(value:string) => setPassword(value)}
                  placeholder={"Your password"}
               />
            </div>
               
               <div className={styles.forgotPassword}>{"Forgot password?"}</div>

               <Button
                  className={styles.button}
                  title={"Sign In"}
                  type={ButtonTypes.Primary}
                  onClick={()=>{}}
               />
            
            <div className={styles.signContainer}>
               {"Don’t have an account?"}{" "} <span className={styles.link}>{"Sign Up"}</span>
            </div>
            </>
         </FormContainer>
    );
};

export default SignIn;