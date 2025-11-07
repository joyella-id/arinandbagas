import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import { MantineProvider } from "@mantine/core";
// import { DynamicTextDataProvider } from "@/utils/dynamicText";
import "./globals.scss";
import { ModalProvider } from "@/Components/Shared/Modal/Modal";
import { ToastContainer } from "react-toastify";
import type { Viewport } from "next";
import { MusicProvider } from "@/Components/Shared/Music/Music";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#899584",
  initialScale: 1,
  maximumScale: 1,
  colorScheme: "only light",
};
const title = "The Wedding of Arin & Bagas";
const description =
  "We will be getting married on September 15th 2024. Join us in celebrating the happiest day of our life! Powered by Ourjoy.id";
const url = "https://arindanbagas.ourjoy.id/";
const imageUrl =
  "https://utfs.io/f/d9bd82e7-8ef0-4901-8c3a-84880157e4f7-3ss2nh.jpg";

export const metadata: Metadata = {
  title,
  description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ overflow: "hidden" }}>
      <head>
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={imageUrl} />
      </head>
      <body className={inter.className}>
        <div
          id="topMostContainer"
          style={{ overflow: "hidden", height: "100dvh" }}
        >
          {/* <MantineProvider> */}
          {/* <DynamicTextDataProvider> */}
          <MusicProvider>
            <ModalProvider>{children}</ModalProvider>
          </MusicProvider>
          {/* </DynamicTextDataProvider> */}
          {/* </MantineProvider> */}
          <ToastContainer />
        </div>
      </body>
    </html>
  );
}
