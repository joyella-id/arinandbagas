/* eslint-disable @next/next/no-img-element */
import styles from "./Polaroid.module.scss";

const Polaroid = ({
  imageSrc,
  alt,
  rotate = 0,
  height = "285px",
  maxWidth = "320px",
  width = "90%",
}: {
  rotate?: number;
  imageSrc: string;
  alt: string;
  height?: string;
  maxWidth?: string;
  width?: string;
}) => {
  return (
    <div
      style={{ rotate: `${rotate}deg`, height, width, maxWidth }}
      className={`${styles.polaroid}`}
    >
      <img src={imageSrc} alt={alt} />
    </div>
  );
};

export default Polaroid;
