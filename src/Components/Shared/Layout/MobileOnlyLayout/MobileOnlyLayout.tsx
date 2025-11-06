"use client";

import { ReactNode } from "react";
import styles from "./MobileOnlyLayout.module.scss";

type ChildrenProps = {
  children: ReactNode;
};

export const MobileOnlyLayout: React.FC<ChildrenProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

interface PageProps extends ChildrenProps {
  useLvh?: boolean;
  customClassName?: string;
  fullHeight?: boolean;
  id: string;
  useSvh?: boolean;
}

export const MobilePage: React.FC<PageProps> = ({
  children,
  useLvh = false,
  useSvh = false,
  customClassName,
  fullHeight = true,
  id,
}) => {
  return (
    <div
      id={id}
      className={`${styles.page} ${fullHeight ? styles.fullHeight : ""} ${
        useLvh ? styles.lvh : ""
      } ${useSvh ? styles.svh : ""} ${customClassName ? customClassName : ""}`}
    >
      {children}
    </div>
  );
};
