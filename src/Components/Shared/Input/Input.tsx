import { ChangeEventHandler, HTMLProps } from "react";
import styles from "./Input.module.css";

interface InputProps extends HTMLProps<HTMLInputElement> {
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onSelect?: ChangeEventHandler<HTMLInputElement>;
}

export const Input: React.FC<InputProps> = (props) => {
  return (
    <input {...props} className={`${props?.className || ""} ${styles.input}`} />
  );
};
