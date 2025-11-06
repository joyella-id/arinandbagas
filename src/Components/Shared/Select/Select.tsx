import { HTMLProps } from "react";
import styles from "./Select.module.scss";

interface SelectProps extends HTMLProps<HTMLSelectElement> {
  options: { label: string; value: string }[];
}

export const Select: React.FC<SelectProps> = ({
  options,
  value,
  onChange,
  placeholder,
  ...props
}) => {
  return (
    <div className={styles["select-wrapper"]}>
      <select
        {...props}
        defaultValue={placeholder}
        value={value}
        onChange={onChange}
        className={`${props?.className || ""} ${styles.select}`}
      >
        {placeholder && (
          <option value={placeholder} disabled>
            {placeholder}
          </option>
        )}
        {options.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};
