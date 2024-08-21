import { ChangeEventHandler, HTMLProps } from "react";
import styles from "./TextArea.module.css";

interface TextAreaProps extends HTMLProps<HTMLTextAreaElement> {
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
}

export const TextArea: React.FC<TextAreaProps> = ({ ...props }) => {
  return (
    <textarea
      {...props}
      className={`${props?.className || ""} ${styles.textarea}`}
    />
  );
};
