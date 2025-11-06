"use client";

/* eslint-disable @next/next/no-img-element */
import { Whatsapp } from "@/assets/icons";
import styles from "./Variant1.module.scss";

export const Variant1 = () => {
  const whatsappNumber = "+6287815917683";
  const message =
    "Halo OurJoy by Joyella, apa bisa tanya tanya & pesan undangan online ?";
  const whatsappUrl = new URL(`https://wa.me/${whatsappNumber}`);
  whatsappUrl.searchParams.append("text", message);

  return (
    <div className={styles.footer}>
      <div className={styles.logoContainer}>
        <div>
          <img
            src="https://utfs.io/f/cda88ce7-1f16-41a8-a158-98f3c012e72c-5t0hc.svg"
            alt="ourjoy"
          />
        </div>
        <img
          src="https://utfs.io/f/4cc98e52-3e08-42df-ae9f-c689b7f9ae8c-zb0pnc.svg"
          alt="joyella"
        />
      </div>
      <div className={styles.divider}></div>
      <div>
        <a
          href={whatsappUrl.toString()}
          target="_blank"
          className={styles.circleIcon}
        >
          <Whatsapp size={20} />
        </a>
      </div>
    </div>
  );
};
