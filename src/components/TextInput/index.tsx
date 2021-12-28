import React from "react";

import classes from "./styles.module.css";

interface Props {
  label: string;
  value: any;
  type: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const TextInput = ({ label, value, type, name, onChange }: Props) => {
  return (
    <div style={{ marginTop: "10px" }}>
      <label>{label}</label>
      <div className={classes.container}>
        <input
          data-testid="input"
          type={type}
          value={value}
          name={name}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default TextInput;
