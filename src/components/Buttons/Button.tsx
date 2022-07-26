import React from "react";
import styles from "./Button.module.scss";

type ButtonProps = {
  text: string;
  type?: string;
};
const Button = (props: ButtonProps) => {
  return (
    <button className={props.type ? styles.btnPrimary : styles.error}>
      {props.text}
    </button>
  );
};

export { Button };
