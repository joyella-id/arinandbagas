import { DetailWaktuAcara } from "../DetailWaktuAcara/DetailWaktuAcara";
import { Title } from "../../Shared/Title/Title";
import { DetailTempatAcara } from "../DetailTempatAcara/DetailTempatAcara";
import { MobilePage } from "../../Shared/MobileOnlyLayout/MobileOnlyLayout";
import styles from "./DetailAcara.module.css";
import Video from "../../Shared/Video/Video";
import { useEffect } from "react";

export const DetailAcara = () => {
  useEffect(() => {
    const titleElement = document.getElementById("weddingevent-title");
    const videoElement = document.getElementById("video-1");
    if (titleElement && videoElement) {
      const titleHeight = titleElement.getBoundingClientRect().height;
      const videoHeight = videoElement.getBoundingClientRect().height;
      titleElement.style.top = `${videoHeight / 2 - titleHeight / 2}px`;
    }
  }, []);
  return (
    <MobilePage
      id="DetailAcara"
      fullHeight={false}
      customClassName={`${styles.mobileContainer} padding--page-default-b`}
    >
      <Video maxHeight="250px" height="20vh" id="video-1" />
      <Title
        background="transparent"
        id="weddingevent-title"
        className="margin--xxlarge-t padding--large-t padding--large-b"
        text={["Wedding", "Event"]}
      />
      <div className={styles.detailContainer}>
        <DetailWaktuAcara />
        <DetailTempatAcara />
      </div>
    </MobilePage>
  );
};
