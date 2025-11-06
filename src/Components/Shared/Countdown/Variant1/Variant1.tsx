"use client";
import { toTwoDigits } from "@/utils/common";
import styles from "./Variant1.module.scss";
import { Text } from "../../Text/Text";
import useCountdown from "@/utils/countdown";

export const Variant1 = () => {
  const weddingDate = new Date("2024-09-15T10:00:00");
  const { days, hours, minutes, seconds } = useCountdown(weddingDate);

  const url = new URL("https://calendar.google.com/calendar/u/0/r/eventedit");
  const searchParam = url.searchParams;

  searchParam.append("text", "Pernikahan Arin dan Bagas");
  searchParam.append(
    "details",
    "Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu. Atas perhatiannya kami ucapkan terima kasih.\n\n- Arin & Bagas"
  );
  searchParam.append("dates", "20240915T100000/20240915T130000");
  searchParam.append("ctz", "Asia/Jakarta");

  return (
    <a href={url.toString()} target="_blank" className={styles.container}>
      <div className={styles.countdownContainer}>
        <div className={styles.countdownElement}>
          <Text color="primary" textAlign="center" fontSize={18}>
            {toTwoDigits(days)}
          </Text>
          <Text color="primary" textAlign="center" fontSize={10}>
            Hari
          </Text>
        </div>
        <div className={styles.countdownElement}>
          <Text color="primary" textAlign="center" fontSize={18}>
            {toTwoDigits(hours)}
          </Text>
          <Text color="primary" textAlign="center" fontSize={10}>
            Jam
          </Text>
        </div>
        <div className={styles.countdownElement}>
          <Text color="primary" textAlign="center" fontSize={18}>
            {toTwoDigits(minutes)}
          </Text>
          <Text color="primary" textAlign="center" fontSize={10}>
            Menit
          </Text>
        </div>
        <div className={styles.countdownElement}>
          <Text color="primary" textAlign="center" fontSize={18}>
            {toTwoDigits(seconds)}
          </Text>
          <Text color="primary" textAlign="center" fontSize={10}>
            Detik
          </Text>
        </div>
      </div>
      <Text textAlign="center" customStyle={{ width: "100%" }}>
        <Text
          textAlign="center"
          letterSpacing={2.5}
          color="primary"
          fontSize={11}
          block={false}
          fontWeight="700"
        >
          SAVE THE DATE
        </Text>
        <Text
          textAlign="center"
          letterSpacing={2.5}
          color="primary"
          fontSize={11}
          block={false}
        >
          {" "}
          |{" "}
        </Text>
        <Text
          textAlign="center"
          letterSpacing={2.5}
          color="primary"
          fontSize={11}
          block={false}
        >
          {`${toTwoDigits(weddingDate.getDate())} . ${toTwoDigits(
            weddingDate.getMonth() + 1
          )} . ${weddingDate.getFullYear()}`}
        </Text>
      </Text>
    </a>
  );
};
