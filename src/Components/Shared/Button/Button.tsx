import { HTMLProps } from "react";
import styles from "./Button.module.scss";
import LoadingSpinner, { LoadingProps } from "../LoadingSpinner/LoadingSpinner";

interface ButtonPropTypes extends HTMLProps<HTMLButtonElement> {
  type?: "button" | "submit" | "reset";
  variant?: "brown" | "outline";
  buttonSize?: "medium" | "large";
  className?: string;
  loading?: boolean;
  loadingProps?: LoadingProps;
  customStyle?: Record<string, any>;
}

export const Button: React.FC<ButtonPropTypes> = ({
  children,
  variant = "brown",
  buttonSize = "large",
  className = "",
  customStyle,
  loadingProps = {
    size: 20,
    color: "white",
  },
  loading,
  ...props
}) => {
  return (
    <button
      style={customStyle}
      className={`${styles[buttonSize]} ${styles[variant]} ${styles.button} ${className}`}
      {...props}
    >
      {loading ? <LoadingSpinner {...loadingProps} /> : children}
    </button>
  );
};
