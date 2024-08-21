import styles from "./Flower.module.css";

export type FlowerProps = {
  top?: string;
  left?: string;
  rotate?: string;
  width?: string;
  maxWidth?: string;
  zIndex?: number;
  maxHeight?: string;
  height?: string;
};

const Flower = ({
  top,
  left,
  rotate,
  width,
  maxWidth,
  maxHeight,
  height,
  zIndex,
}: FlowerProps) => {
  return (
    <div
      style={{ top, left, rotate, width, maxWidth, zIndex, height, maxHeight }}
      className={styles.flower}
    >
      <img alt="" src="https://utfs.io/f/da7a77a0-46a0-4d61-9e6c-3563586d0a46-l13fdx.png" />
    </div>
  );
};
export default Flower;
