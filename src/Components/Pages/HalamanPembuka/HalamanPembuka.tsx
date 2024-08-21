import { useEffect, useState, useContext } from "react";
import styles from "./HalamanPembuka.module.css";
import { MobilePage } from "../../Shared/MobileOnlyLayout/MobileOnlyLayout";
// import { useSearchParams } from "next/navigation";
import { Text } from "../../Shared/Text/Text";
import { Button } from "../../Shared/Button/Button";
import { LoveIcon } from "../../Shared/Icons/Icons";
import coverImage1 from "../../../assets/images/cover-image/cover-image-1.png";
import { MusicContext } from "../../Shared/Music/Music";
import { useInitialLoader } from "../../Shared/InitialLoader/InitialLoader";
import coverImage2 from "../../../assets/images/cover-image/cover-image-2.png";
import coverImage3 from "../../../assets/images/cover-image/cover-image-3.png";
import FadeGallery from "../../Shared/FadeGallery/FadeGallery";
// import { useDynamicTextData } from "@/utils/dynamicText";

export const HalamanPembuka = () => {
  // const { convertFunction } = useDynamicTextData({
  //   pageKey: "HalamanPembuka",
  // });

  console.log("React 3");

  const currentUrl = new URL(window.location.href);
  const searchParams = currentUrl.searchParams;

  const recipient = searchParams?.get("kepada");

  const { setIsPlaying, setShowIcon } = useContext(MusicContext);

  const { triggerLoadingEnds, renderLoadingComponent } = useInitialLoader({
    id: "overlayWhite",
  });

  useEffect(() => {
    const name1 = document.getElementById("name1");
    const name2 = document.getElementById("name2");
    if (name1 && name2) {
      const name1Width = name1.getBoundingClientRect().width;
      const name2Width = name2.getBoundingClientRect().width;
      let difference = name1Width - name2Width;
      if (difference < 0) {
        difference = difference * -1;
      }
      if (name1Width > name2Width) {
        name2.style.marginLeft = `${difference}px`;
      }
      if (name1Width < name2Width) {
        name1.style.marginLeft = `${difference}px`;
      }
      triggerLoadingEnds();
    }

    const topMostContainerElement = document.getElementById("topMostContainer");
    if (topMostContainerElement) {
      topMostContainerElement.scrollTo({ top: 0, behavior: "smooth" });
      topMostContainerElement.style.overflowY = "hidden";
    }
  }, []);

  const coverImages = [coverImage1, coverImage2, coverImage3];

  const CoverImage = () => {
    const [renderedImage, setRenderedImage] = useState(0);
    useEffect(() => {
      const interval = setInterval(() => {
        setRenderedImage((prev) => (prev + 1) % 3);
      }, 5000);
      return () => clearInterval(interval);
    }, []);

    return (
      <FadeGallery
        className={styles.coverImageContainer}
        width="100%"
        height="100svh"
        images={coverImages}
        currentImage={renderedImage}
      />
    );
  };

  return (
    <>
      <MobilePage
        useSvh
        id="HalamanPembuka"
        customClassName={styles.pageContainer}
      >
        <CoverImage />
        <div className={styles.overlay}></div>
        <div className={styles.content}>
          <div className={styles.header}>
            <div>
              {/* {convertFunction("theWeddingOf")} */}
              <Text block={false} color="white">
                THE
              </Text>
              <Text
                block={false}
                color="white"
                fontStyle="italic"
                fontWeight="500"
              >
                {" Wedding of"}
              </Text>
            </div>
            <div>
              {/* {convertFunction("arinDanBagas", {
                name1: {
                  className: styles.name,
                },
                name2: {
                  className: styles.name,
                },
              })} */}
              <Text
                block={false}
                color="white"
                font="diamondBridge"
                id="name1"
                fontSize={32}
              >
                ARIN
              </Text>
              <Text
                block={false}
                color="white"
                font="diamondBridge"
                fontSize={64}
              >
                {" "}
                &{" "}
              </Text>
              <Text
                block={false}
                color="white"
                font="diamondBridge"
                id="name2"
                fontSize={32}
              >
                BAGAS
              </Text>
            </div>
            <div className={styles.weddingDate}>
              {/* {convertFunction("weddingDate")} */}

              <Text color="white" fontSize={11} letterSpacing={4}>
                15 . 09 . 2024
              </Text>
            </div>
          </div>
          <div className={styles.footer}>
            <div>
              {/* {convertFunction("recipient")} */}

              <Text block={false} color="white">
                Kepada {recipient ? "Yth." : ""}
              </Text>
            </div>

            <div className={styles.recipientContainer}>
              {/* {convertFunction("recipientName")} */}

              <Text block={false} font="trochut" color="white" fontSize={32}>
                {recipient?.toUpperCase() || "YANG TERHORMAT"}
              </Text>
            </div>
            <div>
              {/* {convertFunction("openButton", {
                openButton: {
                  onClick: () => {
                    // alert("click button oi");
                  },
                },
              })} */}
              <Button
                className="margin--large-t"
                onClick={() => {
                  setShowIcon(true);
                  setIsPlaying(true);

                  const topMostContainerElement =
                    document.getElementById("topMostContainer");
                  if (topMostContainerElement) {
                    topMostContainerElement.style.overflowY = "auto";
                  }

                  const AyatAlQuranElement =
                    document.getElementById("AyatAlQuran");
                  if (AyatAlQuranElement) {
                    AyatAlQuranElement.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                <LoveIcon size={16} color="white" />
                <Text
                  block={false}
                  color="white"
                  fontSize={12}
                  letterSpacing={2}
                >
                  Buka Undangan
                </Text>
              </Button>
            </div>
          </div>
        </div>
        {renderLoadingComponent()}
      </MobilePage>
    </>
  );
};
