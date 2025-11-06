import { Poppins, Trochut, Whisper } from "next/font/google";
import localFont from "next/font/local";

export type AllAvailableFonts =
  | "poppins"
  | "trochut"
  | "diamondBridge"
  | "whisper";

export const AllAvailableFonts: AllAvailableFonts[] = [
  "poppins",
  "trochut",
  "diamondBridge",
];

export const diamondBridge = localFont({
  src: "../assets/font/DiamondBridge.otf",
});

export const trochut = Trochut({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["italic", "normal"],
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["italic", "normal"],
});

export const whisper = Whisper({
  subsets: ["latin", "latin-ext", "vietnamese"],
  weight: ["400"],
  style: ["normal"],
});

export const fontsMap = {
  poppins,
  trochut,
  diamondBridge,
  whisper,
};
