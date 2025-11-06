import { ChangeEventHandler } from "react";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import styles from "./FontSizeInput.module.scss";

export const FontSizeInput = ({
  value,
  disabled,
  inputId = "font-size-input",
  plusId = "font-size-increase",
  minusId = "font-size-decrease",
  placeholder,
  onIncreaseFontSize,
  onDecreaseFontSize,
}: {
  value: string;
  disabled?: boolean;
  inputId?: string;
  placeholder: string;
  plusId?: string;
  minusId?: string;
  onIncreaseFontSize: () => void;
  onDecreaseFontSize: () => void;
}) => {
  return (
    <div className={styles.container}>
      <button
        onClick={onDecreaseFontSize}
        id={minusId}
        disabled={disabled}
        className={styles.changeButton}
      >
        -
      </button>
      <button onClick={() => null} className={styles.valueHolder}>
        {value || placeholder}
      </button>
      <button
        onClick={onIncreaseFontSize}
        id={plusId}
        disabled={disabled}
        className={styles.changeButton}
      >
        +
      </button>
    </div>
  );
};
