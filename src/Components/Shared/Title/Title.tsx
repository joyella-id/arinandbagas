"use client";

import { Text } from "../Text/Text";
import React from "react";
import styles from "./Title.module.scss";
import { useMobile } from "@/utils/common";

export const Title = ({
  text,
  className,
  withPadding = true,
  id,
  background = "white",
  sticky = true,
  top = "0",
}: {
  text: string[];
  withPadding?: boolean;
  className?: string;
  id: string;
  background?: "white" | "transparent";
  sticky?: boolean;
  top?: string;
}) => {
  const isMobile = useMobile();
  return (
    <>
      <div
        id={id}
        style={{ top }}
        className={`${className || ""} ${
          withPadding ? "padding--page-default-l padding--page-default-r" : ""
        } ${styles.titleContainer} ${styles[`background-${background}`]} ${
          sticky ? styles.sticky : ""
        }`}
      >
        <Text textAlign="center" className="line-height-normal">
          {text.map((text, index) => (
            <React.Fragment key={index}>
              <Text
                key={index}
                block={false}
                font="diamondBridge"
                fontSize={34}
                mobileSize={26}
                color="primary"
              >
                {text}
              </Text>
              <br />
            </React.Fragment>
          ))}
        </Text>
        <div className={styles.line}></div>
        {isMobile && <div className={styles.lineReduce}></div>}
      </div>
    </>
  );
};
