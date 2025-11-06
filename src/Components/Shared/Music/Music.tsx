"use client";
/* eslint-disable @next/next/no-img-element */
import { ReactNode, useContext, useEffect, useState } from "react";
import { createContext } from "react";
import styles from "./Music.module.scss";

export const MusicContext = createContext<{
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  setShowIcon: React.Dispatch<React.SetStateAction<boolean>>;
  showIcon: boolean;
}>({
  isPlaying: false,
  setIsPlaying: () => null,
  setShowIcon: () => null,
  showIcon: false,
});

export const MusicProvider = ({ children }: { children: ReactNode }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showIcon, setShowIcon] = useState(false);

  useEffect(() => {
    const audioElement = document.getElementById("music") as HTMLAudioElement;
    if (audioElement) {
      if (isPlaying) {
        audioElement.play();
      } else {
        audioElement.pause();
      }
    }
  }, [isPlaying]);

  return (
    <MusicContext.Provider
      value={{ isPlaying, setIsPlaying, setShowIcon, showIcon }}
    >
      {children}
    </MusicContext.Provider>
  );
};

const Music = () => {
  const { isPlaying, setIsPlaying, showIcon, setShowIcon } =
    useContext(MusicContext);
  return (
    <div className={`${styles.music} ${showIcon ? "" : styles.hidden}`}>
      <audio id="music">
        <source src="https://utfs.io/f/bc530319-b159-45a5-895f-7d029a3b0a2c-sqq2jf.mp3" />
      </audio>
      <img
        style={{ left: isPlaying ? "-50%" : "0%" }}
        className={styles.vynil}
        alt="music-vynil"
        src={
          "https://utfs.io/f/a481f51b-647a-4d74-a4c8-886e2fed994f-gfo68o.svg"
        }
      />
      <img
        onClick={() => {
          setIsPlaying((prev) => !prev);
        }}
        className={styles.box}
        alt="music-box"
        src={
          "https://utfs.io/f/a46d5c9b-d72b-4dfe-9306-30dc6a403878-9u1bd1.svg"
        }
      />
    </div>
  );
};

export default Music;
