import React, {FC, useState, Component } from "react";

import styles from "./Switch.module.css"
import classNames from 'classnames';

type SwitchProps = {
  onClick: () => void;
  disabled?: boolean;
};

const Switch: FC<SwitchProps> = () => {

  return (
    <div
      onClick={() =>{}}
      className={classNames(styles.switch)}
    >
      <div
        className={classNames(styles.circle)}
      ></div>
    </div>
  );
};

export default Switch;