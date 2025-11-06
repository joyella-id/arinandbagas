"use client";

/* eslint-disable @next/next/no-img-element */
import { Title } from "@/Components/Shared/Title/Title";
import styles from "./Variant1.module.scss";
import { useEffect, useState } from "react";
import { useModal } from "@/Components/Shared/Modal/Modal";
import { ChevronLeft, ChevronRight } from "@/assets/icons";
import { Text } from "@/Components/Shared/Text/Text";
import { MobilePage } from "@/Components/Shared/Layout/MobileOnlyLayout/MobileOnlyLayout";
import FadeGallery from "@/Components/Shared/FadeGallery/FadeGallery";
import gallery1 from "@/assets/images/gallery/gallery-1 small.jpg";
import gallery2 from "@/assets/images/gallery/gallery-2 small.jpg";
import gallery3 from "@/assets/images/gallery/gallery-3 small.jpg";
import gallery4 from "@/assets/images/gallery/gallery-4 small.jpg";
import gallery5 from "@/assets/images/gallery/gallery-5 small.jpg";
import gallery6 from "@/assets/images/gallery/gallery-6 small.jpg";
import gallery7 from "@/assets/images/gallery/gallery-7 small.jpg";
import gallery8 from "@/assets/images/gallery/gallery-8 small.jpg";
import gallery9 from "@/assets/images/gallery/gallery-9 small.jpg";
import gallery10 from "@/assets/images/gallery/gallery-10 small.jpg";
import gallery11 from "@/assets/images/gallery/gallery-11 small.jpg";
import gallery12 from "@/assets/images/gallery/gallery-12 small.jpg";
import gallery13 from "@/assets/images/gallery/gallery-13 small.jpg";
import gallery14 from "@/assets/images/gallery/gallery-14 small.jpg";
import gallery15 from "@/assets/images/gallery/gallery-15 small.jpg";
import gallery16 from "@/assets/images/gallery/gallery-16 small.jpg";
import gallery17 from "@/assets/images/gallery/gallery-17 small.jpg";
import gallery18 from "@/assets/images/gallery/gallery-18 small.jpg";
import gallery19 from "@/assets/images/gallery/gallery-19 small.jpg";
import gallery20 from "@/assets/images/gallery/gallery-20 small.jpg";
import gallery21 from "@/assets/images/gallery/gallery-21 small.jpg";
import gallery22 from "@/assets/images/gallery/gallery-22 small.jpg";

const photos = [
  gallery1.src,
  gallery2.src,
  gallery3.src,
  gallery4.src,
  gallery5.src,
  gallery6.src,
  gallery7.src,
  gallery8.src,
  gallery9.src,
  gallery10.src,
  gallery11.src,
  gallery12.src,
  gallery13.src,
  gallery14.src,
  gallery15.src,
  gallery16.src,
  gallery17.src,
  gallery18.src,
  gallery19.src,
  gallery20.src,
  gallery21.src,
  gallery22.src,
];

const ImageModal = ({
  image,
  currentIndex,
}: {
  image: string;
  currentIndex: number;
}) => {
  const [imageDimension, setImageDimension] = useState({ height: 0, width: 0 });

  useEffect(() => {
    let imageHeight;
    let imageWidth;

    var img = new Image();
    img.src = image;

    img.onload = () => {
      imageHeight = img.height;
      imageWidth = img.width;
      setImageDimension({ height: imageHeight, width: imageWidth });
    };
  }, []);

  return (
    <div className={styles.imageModalContainer}>
      <img src={image} alt="gallery" />
    </div>
  );
};

const NavigationButton = ({
  direction,
  onClick,
}: {
  direction: "left" | "right";
  onClick: () => void;
}) => {
  return (
    <div role="button" onClick={onClick} className={styles.navigationButton}>
      {direction === "left" ? (
        <ChevronLeft color="white" size={20} />
      ) : (
        <ChevronRight color="white" size={20} />
      )}
    </div>
  );
};

const Carousel = ({
  onClickPhoto,
  onClickNext,
  onClickPrev,
  current,
}: {
  onClickPhoto: (i: number) => void;
  onClickNext: () => void;
  onClickPrev: () => void;
  current: number;
}) => {
  const onClickNavigation = ({ increase }: { increase: boolean }) => {
    const scrollContainerElement = document.getElementById(
      "carousel-scroll-container"
    );

    if (scrollContainerElement) {
      const currentScrollPosition = scrollContainerElement.scrollLeft;
      scrollContainerElement.scrollTo({
        left: currentScrollPosition + (increase ? 400 : -400),
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div id="carousel-scroll-container" className={styles.carouselContainer}>
        <div className={styles.carousel}>
          {photos.map((src, i) => {
            return (
              <div
                onClick={() => onClickPhoto(i)}
                className={`${i === current ? styles.active : ""} ${
                  styles.singleCarouselItem
                }`}
                key={src}
              >
                <img src={src} alt={`${i}`} />
              </div>
            );
          })}
        </div>
      </div>
      <div
        className={`padding--page-default-l padding--page-default-r ${styles.navigation}`}
      >
        <Text
          className="line-height-normal"
          customStyle={{ minWidth: "max-content" }}
          fontSize={15}
          color="primary"
          font="diamondBridge"
        >
          More galleries
        </Text>
        <div className={styles.line}></div>
        <NavigationButton onClick={onClickPrev} direction="left" />
        <NavigationButton onClick={onClickNext} direction="right" />
      </div>
    </>
  );
};

const PhotoGallery = () => {
  const [current, setCurrent] = useState(0);
  // const { renderModal } = useModal();

  useEffect(() => {
    const scrollContainerElement = document.getElementById(
      "carousel-scroll-container"
    );

    if (scrollContainerElement) {
      scrollContainerElement.scrollTo({
        left: current * 130,
        behavior: "smooth",
      });
    }
  }, [current]);

  return (
    <div>
      <FadeGallery
        height="350px"
        transitionDuration="0.5s"
        images={photos}
        currentImage={current}
        className={styles.previewContainer}
        // onClick={() => {
        //   renderModal(
        //     <ImageModal currentIndex={current} image={photos[current]} />,
        //     `gallery-${current}`,
        //     {
        //       maxWidth: "80vw",
        //       maxHeight: "80vh",
        //       padding: "0px",
        //       overflow: "hidden",
        //     }
        //   );
        // }}
      />

      <Carousel
        current={current}
        onClickNext={() => {
          setCurrent((prev) => (prev + 1 > photos.length - 1 ? 0 : prev + 1));
        }}
        onClickPrev={() => {
          setCurrent((prev) => (prev - 1 < 0 ? photos.length - 1 : prev - 1));
        }}
        onClickPhoto={(index) => {
          setCurrent(index);
        }}
      />
    </div>
  );
};

export const Variant1 = () => {
  return (
    <MobilePage
      id="Gallery"
      fullHeight={false}
      customClassName={`${styles.page} padding--page-default-b`}
    >
      <Title
        id="gallery-title"
        className="padding--large-t padding--large-b"
        text={["Our", "Love", "Gallery"]}
      />
      <div className="text-align-center margin--xlarge-t padding--page-default-l padding--page-default-r">
        <Text color="gray" block={false} font="diamondBridge" fontSize={34}>
          Moment Berharga
        </Text>
        <div className={styles.verticalLine}></div>
        <Text color="gray" block={false} fontSize={12} fontStyle="italic">
          &quot;Menciptakan kenangan adalah hadiah yang tak ternilai harganya.
          Kenangan akan bertahan seumur hidup; benda-benda hanya dalam waktu
          singkat.&quot;
        </Text>
      </div>
      <PhotoGallery />
    </MobilePage>
  );
};
