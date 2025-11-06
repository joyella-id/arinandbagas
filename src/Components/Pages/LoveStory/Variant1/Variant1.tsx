/* eslint-disable @next/next/no-img-element */
"use client";

import { Text } from "@/Components/Shared/Text/Text";
import { MobilePage } from "@/Components/Shared/Layout/MobileOnlyLayout/MobileOnlyLayout";
import styles from "./Variant1.module.scss";
import { ChevronRight, ChevronLeft } from "@/assets/icons";
import { Title } from "@/Components/Shared/Title/Title";
import { useEffect, useState } from "react";
import loveStory1 from "@/assets/images/love-story/love-story-1.png";
import loveStory2 from "@/assets/images/love-story/love-story-2.png";
import loveStory3 from "@/assets/images/love-story/love-story-3.png";
import Flower from "@/Components/Shared/Flower/Flower";

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

type SingleStoryProps = {
  year: string;
  imageSrc: string;
  caption: string;
  objectPosition: string;
};

const SingleStory = ({
  year,
  imageSrc,
  caption,
  objectPosition,
}: SingleStoryProps) => {
  return (
    <div id={`story-${year}`} className={styles.singleStory}>
      <div id="photoContainer" className={styles.photo}>
        <div className={styles.archBorder}>
          <Text color="primary" fontSize={34} fontWeight="700">
            {year}
          </Text>
        </div>
        <div className={styles.imageContainer}>
          <img style={{ objectPosition }} src={imageSrc} alt={year} />
          <div className={styles.whiteOverflow}></div>
        </div>
      </div>
      <Text
        textAlign="justify"
        className="line-height-normal"
        block={false}
        color="primary"
        fontStyle="italic"
        fontSize={13}
        mobileSize={10}
      >
        {caption}
      </Text>
    </div>
  );
};

const stories: SingleStoryProps[] = [
  {
    year: "2018",
    imageSrc: loveStory1.src,
    caption:
      "Kuliah Kerja Nyata (KKN) adalah saksi besar bagaimana Bagas dan Arin bertemu dalam satu tim dan memulai untuk menjalin pertemanan yang spesial.",
    objectPosition: "inherit",
  },
  {
    year: "2019 - 2024",
    imageSrc: loveStory2.src,
    caption:
      "Selama menjalin pertemanan yang spesial, Bagas dan Arin sempat beberapa kali terpisahkan oleh jarak, mulai dari Surabaya-Yogya, Yogya-Jakarta, hingga Surabaya-Jakarta. Karena itu, Bagas dan Arin lebih sering bertukar kabar dan cerita lewat media sosial.",
    objectPosition: "inherit",
  },
  {
    year: "2023 - 2024",
    imageSrc: loveStory3.src,
    caption:
      "Bagas dan Arin memutuskan untuk melanjutkan pertemanan spesial ini ke tahap yang lebih serius. Tanggal 9 Mei 2024, Bagas bersama keluarganya datang ke rumah dan melamar Arin.",
    objectPosition: "inherit",
  },
];

export const Variant1 = () => {
  const [rendered, setRendered] = useState(false);
  const [storyWidth, setStoryWidth] = useState(0);
  const [shownStory, setShownStory] = useState(0);
  const [flowerMaxDimension, setFlowerMaxDimension] = useState({
    maxHeight: 0,
    maxWidth: 0,
  });

  const onClickNextStory = () => {
    setShownStory((prev) => (prev + 1 > stories.length - 1 ? 0 : prev + 1));
  };

  const onClickPrevStory = () => {
    setShownStory((prev) => (prev - 1 < 0 ? stories.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (rendered) {
      setStoryWidth(
        document
          .getElementById(`story-${stories[0].year}`)
          ?.getBoundingClientRect()?.width || 0
      );

      const photoElement = document.getElementById("photoContainer");

      if (photoElement) {
        setFlowerMaxDimension({
          maxHeight: photoElement?.getBoundingClientRect()?.height || 0,
          maxWidth: photoElement?.getBoundingClientRect()?.width || 0,
        });
      }
    }
  }, [rendered]);

  useEffect(() => {
    setRendered(true);
  }, []);

  return (
    <MobilePage
      id="LoveStory"
      customClassName={`${styles.container} padding--page-default-b`}
    >
      <Title
        sticky={false}
        background="transparent"
        id="lovestory-title"
        className={`padding--large-t padding--large-b ${styles.shadow}`}
        text={["Our", "Love", "Story"]}
      />
      <div className={`position-relative ${styles.storyContainer}`}>
        <Flower
          maxHeight="400px"
          height="100%"
          width="100%"
          maxWidth="600px"
          top="-50px"
        />
        <div
          className={`padding--page-default-l padding--page-default-r ${styles.storyCarouselContainer}`}
        >
          <div
            style={{
              transform: `translateX(-${shownStory * (storyWidth + 100)}px)`,
            }}
            className={styles.movingContainer}
          >
            {stories.map((story) => {
              return <SingleStory {...story} key={story.imageSrc} />;
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
            Beberapa Tahun Bersama
          </Text>
          <div className={styles.line}></div>
          <NavigationButton onClick={onClickPrevStory} direction="left" />
          <NavigationButton onClick={onClickNextStory} direction="right" />
        </div>
      </div>
    </MobilePage>
  );
};
