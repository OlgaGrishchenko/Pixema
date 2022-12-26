import React, { useState, useRef, useEffect } from "react";
import FormContainer from "../../Components/FormContainer";
import Input from "../../Components/Input";
import Button, {ButtonTypes} from "../../Components/Button";
import classNames from "classnames";

import styles from "./ResetPassword.module.css";
import Logo from "../../Assets/Image/logo";

const ResetPassword = () => {

   const [login, setLogin] = useState('')

   const inputRef = useRef<HTMLInputElement>(null);

   useEffect(() => {
      if (inputRef.current) {
         inputRef.current.focus();
      }
      }, []);
   
   return (
<div>
      <div className={styles.logo}>
            <Logo />
         </div>


      <FormContainer title={"Reset password"}>
            <>

            <div className={styles.inputsContainer}>
               <Input
                  title={"Email"}
                  value={login}
                  onChange={(value) => setLogin(value)}
                  placeholder={"Your email"}
                  ref={inputRef}
               />
            </div>

               <Button
                  className={styles.button}
                  title={"Reset"}
                  type={ButtonTypes.Primary}
                  onClick={() => {}}
               />
            </>
      </FormContainer>
      </div>
   );
};

export default ResetPassword;