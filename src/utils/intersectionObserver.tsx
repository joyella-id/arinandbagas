import { useEffect, useState } from "react";
import titleStyles from "@/Components/Shared/Title/Title.module.scss";
import videoStyles from "@/Components/Shared/Video/Video.module.scss";

export const callbackById: {
  [key: string]: {
    appear: (element: HTMLElement) => void;
    disappear: (element: HTMLElement) => void;
    alwaysRun?: (element: HTMLElement) => void;
  };
} = {
  "weddinggift-title": {
    appear: (element) => {
      element?.classList?.add(titleStyles.titleShadow);
    },
    disappear: (element) => {
      element?.classList?.remove(titleStyles.titleShadow);
    },
  },
  "wishes-title": {
    appear: (element) => {
      element?.classList?.add(titleStyles.titleShadow);
    },
    disappear: (element) => {
      element?.classList?.remove(titleStyles.titleShadow);
    },
  },
  "lovestory-title": {
    appear: (element) => {
      // element?.classList?.add(titleStyles.titleShadow);
    },
    disappear: (element) => {
      // element?.classList?.remove(titleStyles.titleShadow);
    },
  },
  "gallery-title": {
    appear: (element) => {
      element?.classList?.add(titleStyles.titleShadow);
    },
    disappear: (element) => {
      element?.classList?.remove(titleStyles.titleShadow);
    },
  },
  "weddingevent-title": {
    appear: (element) => {
      element?.classList?.add(titleStyles.white);
    },
    disappear: (element) => {
      element?.classList?.remove(titleStyles.white);
    },
    alwaysRun: (element) => {
      const videoElement = document.getElementById("video-1");
      const titleRect = element?.getBoundingClientRect();
      const titleTop = titleRect?.top || 0;
      const videoRect = videoElement?.getBoundingClientRect();
      const treshhold = (videoRect?.height || 0) - (titleRect?.height || 0) / 2;

      if (titleTop <= treshhold) {
        element?.classList?.add(titleStyles.white);
        videoElement?.classList?.add(videoStyles.videoGrayscale);
      } else {
        element?.classList?.remove(titleStyles.white);
        videoElement?.classList?.remove(videoStyles.videoGrayscale);
      }
    },
  },
  "video-1": {
    appear: (element) => {
      element?.classList?.add(videoStyles.videoGrayscale);
    },
    disappear: (element) => {
      element?.classList?.remove(videoStyles.videoGrayscale);
    },
  },
};

export const useIntersectionObserver = () => {
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    setRendered(true);
  }, []);

  useEffect(() => {
    if (true) {
      const weddingGiftTitle = document.getElementById("weddinggift-title");
      const wishesTitle = document.getElementById("wishes-title");
      const loveStoryTitle = document.getElementById("lovestory-title");
      const galleryTitle = document.getElementById("gallery-title");
      const weddingEventTitle = document.getElementById("weddingevent-title");

      const elementsArray: HTMLElement[] = [];

      if (weddingGiftTitle) {
        elementsArray.push(weddingGiftTitle);
      }

      if (wishesTitle) {
        elementsArray.push(wishesTitle);
      }

      if (loveStoryTitle) {
        elementsArray.push(loveStoryTitle);
      }

      if (galleryTitle) {
        elementsArray.push(galleryTitle);
      }

      if (weddingEventTitle) {
        elementsArray.push(weddingEventTitle);
      }

      const topMostContainerElement =
        document.getElementById("topMostContainer");
      if (topMostContainerElement) {
        topMostContainerElement.onscroll = () => {
          elementsArray.forEach((element) => {
            const elementId = element?.id;
            const rect = element.getBoundingClientRect();
            const topPosition = Number(element?.style?.top?.split("px")?.[0]);
            if (rect?.top <= topPosition) {
              callbackById[elementId]?.appear?.(element);
            } else {
              callbackById[elementId]?.disappear?.(element);
            }
            callbackById[elementId]?.alwaysRun?.(element);
          });
        };
      }
    }
  }, [rendered]);
};
