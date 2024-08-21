import { HTMLProps } from "react";
import { useMobile } from "../../../utils/common";
import styles from "./Text.module.css";
// import { fontsMap } from "@/app/fonts";
// import { AllAvailableFonts } from "@/app/fonts";

export type TextColors =
  | "white"
  | "black"
  | "primary"
  | "gray"
  | "gray2"
  | "lightgray";

export type FontWeight =
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900";

export type AllAvailableFonts =
  | "poppins"
  | "trochut"
  | "diamondBridge"
  | "whisper";

export const AllAvailableFonts: AllAvailableFonts[] = [
  "poppins",
  "trochut",
  "diamondBridge",
  "whisper",
];

export type FontStyle = "normal" | "italic";
export type TextDecoration = "underline" | "none";

interface TextPropTypes extends HTMLProps<HTMLSpanElement> {
  block?: boolean;
  color?: TextColors;
  fontWeight?: FontWeight;
  font?: AllAvailableFonts;
  fontStyle?: FontStyle;
  fontSize?: number;
  letterSpacing?: number;
  dynamic?: boolean;
  textAlign?: "left" | "right" | "center" | "justify";
  customStyle?: Record<string, any>;
  textDecoration?: TextDecoration;
  mobileSize?: number;
}

export const Text: React.FC<TextPropTypes> = ({
  children,
  block = true,
  color,
  font = "poppins",
  fontWeight = "400",
  fontSize = 16,
  fontStyle = "normal",
  letterSpacing,
  className,
  dynamic = false,
  customStyle,
  textAlign = "left",
  textDecoration = "none",
  mobileSize,
  ...props
}) => {
  const isMobile = useMobile();
  return (
    <span
      data-dynamic={dynamic ? "true" : "false"}
      style={{
        fontWeight,
        fontStyle,
        letterSpacing,
        fontSize: isMobile && !!mobileSize ? mobileSize : fontSize,
        textAlign,
        textDecoration,
        ...(customStyle || {}),
      }}
      className={`${styles[font]} ${className ? className : ""} ${
        color ? styles[color] : ""
      } ${block ? styles.block : ""} ${styles.text}`}
      {...props}
    >
      {children}
    </span>
  );
};
