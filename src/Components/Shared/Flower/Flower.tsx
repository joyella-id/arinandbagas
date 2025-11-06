/* eslint-disable @next/next/no-img-element */

import { CSSProperties } from "react";
import styles from "./Flower.module.scss";

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
      <img
        alt=""
        src="https://s3-alpha-sig.figma.com/img/2ba5/51f2/201b9be3d6d32e2d2293e363f4bbc45b?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V0EJwEVeVdKn0VUqxabjH17aaTUQd1vSwKf7E1~c88UjwZQZW--qpj788nBhLOre7aCLEeHONj7RqKNnwrKAb60RmKn58lNaDRBIhl3Yr4XHfhT7IUYJvX4nfsN6xCxbEmYhI5JZqL0dBMb~SSR3g0W82vU~BkTGwvVHbN0dxFC~h-2ph~srCz2cmYGlQFeozGoGQLUq5Vr-da5Jdx-pyLZ8TFA7Q9rO7dinPXAYVOoEsw0Wao~ueeIxA2jrY-fnedBdWegIsZGmpXKhu7gDvfrRo~8~topcqdnbzxaU7~MT1rxuoh9Q0dNp-gRCOWuFP1MUzEUXG55CWeyODlE7OA__"
      />
    </div>
  );
};
export default Flower;
