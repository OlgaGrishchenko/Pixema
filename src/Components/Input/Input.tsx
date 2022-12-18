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
   onDefaultClick?: () => void;
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
      onDefaultClick,
      className,
   } = props;

   const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.value);
   };

   return (
      <div>
         {title && <div className={styles.title}>{title}</div>}
            <input
               value={value}
               onChange={onChangeInput}
               placeholder={placeholder}
               disabled={disabled}
               onClick={onDefaultClick}
               ref={ref}
               className={classNames(className, styles.input)}
            />
            {error && <div className={styles.textError}>{error}</div>}
      </div>
   );
});

export default Input;