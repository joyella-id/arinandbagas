/* eslint-disable @next/next/no-img-element */
import styles from "./FadeGallery.module.scss";
import { useState, useEffect } from "react";

const FadeGallery = ({
  images,
  currentImage,
  width,
  height,
  maxHeight,
  maxWidth,
  transitionDuration = "1s",
  className = "",
  onClick,
}: {
  images: string[];
  currentImage: number;
  width?: string;
  height: string;
  maxWidth?: string;
  maxHeight?: string;
  transitionDuration?: string;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <div
      style={{ width, height, maxWidth, maxHeight }}
      onClick={onClick}
      className={`${className} ${styles.container}`}
    >
      {images.map((image, index) => (
        <img
          style={{ transitionDuration }}
          key={image}
          className={index === currentImage ? "" : styles.hidden}
          src={image}
          alt="image"
        />
      ))}
    </div>
  );
};

export default FadeGallery;
