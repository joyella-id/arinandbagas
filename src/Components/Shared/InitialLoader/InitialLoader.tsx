import styles from "./InitialLoader.module.scss";
import { useState, useEffect } from "react";

const LoadingComponent = ({ id }: { id: string }) => {
  return <div id={id} className={styles.loader}></div>;
};

export const useInitialLoader = ({ id }: { id: string }) => {
  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    if (showPage) {
      const overlayWhite = document.getElementById(id);
      if (overlayWhite) {
        overlayWhite.style.opacity = "0";
        setTimeout(() => {
          overlayWhite.style.display = "none";
        }, 200);
      }
    }
  }, [showPage]);

  const triggerLoadingEnds = () => {
    setShowPage(true);
  };

  const renderLoadingComponent = () => <LoadingComponent id={id} />;

  return { triggerLoadingEnds, renderLoadingComponent };
};
