import styles from "./LoadingSpinner.module.scss";

export type LoadingProps = {
  size?: number;
  color?: "primary" | "lightgray" | "gray" | "secondary" | "white" | "black";
};

const LoadingSpinner = ({ size = 30, color = "primary" }: LoadingProps) => {
  return (
    <div
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`${styles[color]} ${styles.loader}`}
    ></div>
  );
};

export default LoadingSpinner;
