import { ChangeEventHandler, HTMLProps, ReactEventHandler } from "react";
import styles from "./Input.module.scss";

interface InputProps extends HTMLProps<HTMLInputElement> {
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onSelect?: ChangeEventHandler<HTMLInputElement>;
}

export const Input: React.FC<InputProps> = (props) => {
  return (
    <input {...props} className={`${props?.className || ""} ${styles.input}`} />
  );
};
