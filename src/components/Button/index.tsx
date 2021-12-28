import React from "react";

import classes from "./styles.module.css";

interface Props {
  title: string;
  onClick: () => void;
  disabled?: boolean;
  styles?: React.CSSProperties;
}
const Button = ({ title, onClick, disabled = false, styles }: Props) => {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={classes.button}
      style={styles}
    >
      {title}
    </button>
  );
};

export default Button;
