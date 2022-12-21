import React, { FC, ChangeEvent, forwardRef } from "react";
import classNames from "classnames";

import styles from "./Input.module.css";

type InputProps = {
   value: string;
   onChange: (value: string) => void;
   placeholder?: string;
   disabled?: boolean;
   error?: string;
   title?: string;
   className?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
   const {
      value,
      onChange,
      placeholder,
      disabled,
      error,
      title,
      className,
   } = props;

   const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.value);
   };

   return (
      <>
         {title && <div className={styles.title}>{title}</div>}
            <input
               value={value}
               onChange={onChangeInput}
               placeholder={placeholder}
               disabled={disabled}
               ref={ref}
               className={classNames(className, styles.input)}
            />
            {error && <div className={styles.textError}>{error}</div>}
      </>
   );
});

export default Input;